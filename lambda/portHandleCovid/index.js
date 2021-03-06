const fetch = require("node-fetch");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const bucketName = process.env.bucketName
const fileKey = process.env.fileKey
const hoursInMilliseconds = process.env.updateFrequency

const transformData = (data) => {
  let records = data.records.map((entry) => {
    let a = entry[8];
    let b = entry[6];
    return [
      ...entry
        .splice(1, 2)
        .map((ent, index) => (index === 0 ? ent.slice(0, 10) : ent)),
      b,
      a
    ];
  });
  return {
    records: records.splice(records.length - 7).reverse(),
    fields: ["Date", "Doses Administered", "Total First Doses", "Total Fully Vaccinated"],
  };
};

const fetchFromS3 = async () => {
  try {
    console.log("Fetching from S3 bucket");
    const data = await s3
      .getObject({
        Bucket: bucketName,
        Key: fileKey,
      })
      .promise();
    const json_data = JSON.parse(data.Body.toString());
    console.log("Fetch from S3 successful");
    return {data: transformData(json_data), last_fetched: data.LastModified};
  } catch (err) {
    console.log(err);
    console.error("An error occurred while fetching from S3 Bucket");
  }
};

const fetchFromExtAPI = async () => {
  try {
    console.log("Fetching from Ontario Data Catalogue");
    const response = await fetch(
      `https://data.ontario.ca/datastore/dump/8a89caa9-511c-4568-af89-7f2174b4378c?format=json`
    );
    const json_data = await response.json();
    console.log(json_data)
    await saveToS3(json_data);
    return transformData(json_data);
  } catch (err) {
    console.error(
      "An error occurred while fetching from Ontario Data Catalogue"
    );
  }
};

const saveToS3 = async (data) => {
  try {
    console.log("Saving new data to S3");
    const storeCovidData = await s3
      .putObject({
        Bucket: bucketName,
        Key: fileKey,
        Body: JSON.stringify(data),
      })
      .promise();
    console.log(storeCovidData);
    console.log("Stored successfully to S3");
  } catch (err) {
    console.log(err);
    console.error("An error occurred while trying to store to S3");
  }
};

exports.handler = async (event) => {
  const s3Object = await fetchFromS3();
  
  const currentDate = new Date();
  const fetchedDate = new Date(s3Object.last_fetched);
  const shouldUpdate = currentDate.getTime() - fetchedDate.getTime() >= hoursInMilliseconds
  console.log(`S3 Object date is ${shouldUpdate ? "older" : "same or newer"}`);
  return {
    statusCode: 200,
    body: shouldUpdate ? await fetchFromExtAPI() : s3Object.data,
  };
};
