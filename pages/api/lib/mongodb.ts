import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.MONGO_DB_ATLAS_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}
if (!process.env.MONGO_DB_ATLAS_USERNAME) {
  throw new Error("Please add your Mongo DB Atlas username to .env.local");
}
if (!process.env.MONGO_DB_ATLAS_PASSWORD) {
  throw new Error("Please add your Mongo DB Atlas password to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const uri = `mongodb+srv://${process.env.MONGO_DB_ATLAS_USERNAME}:${process.env.MONGO_DB_ATLAS_PASSWORD}@${process.env.MONGO_DB_ATLAS_URI}/?retryWrites=true&w=majority`;
const options: MongoClientOptions = {};
client = new MongoClient(uri, options);
clientPromise = client.connect();
export default clientPromise;
