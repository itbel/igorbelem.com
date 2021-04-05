import React, { useEffect, useState } from "react";
import "./CovidPage.css";
import Spinner from "./Spinner";

const CovidPage = () => {
  const [headerData, setHeaderData] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "https://33qka4mlhl.execute-api.us-east-1.amazonaws.com/prod/covid",
          {
            method: "get",
            mode: "cors",
            headers: {
              "x-api-key": "zrZ6NnYASR9ta03GcHUs1apcTYbk7fbZ763e6DIp",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setFieldData(data.body.records);
        setHeaderData(data.body.fields);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  const Row = ({ field, index }) => {
    return (
      <tr
        style={{
          animationDuration: `${0.2 + index * 0.1}s`,
          backgroundColor: index % 2 ? "#F5F5F5" : {},
        }}
        className="tableRow"
        key={field[index]}
      >
        <Cells field={field} />
      </tr>
    );
  };
  const Cells = ({ field }) => {
    return field.map((cell, index) => {
      return (
        <td className="tableCell" key={index}>
          {cell}
        </td>
      );
    });
  };

  return (
    <div>
      <div style={{ overflowY: "auto", overflowX: "auto" }}>
        <h1 className="pageHeader" colSpan={4}>
          Ontario - Last 7 Days
        </h1>
        <table cellSpacing={0} className="tableTheme">
          <thead>
            <tr>
              {headerData &&
                headerData.map((header) => {
                  return (
                    <th key={header} className="tableHeader">
                      {header}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {fieldData.length ?
              fieldData.map((field, index) => {
                return <Row key={index} field={field} index={index} />;
              }) : null}
          </tbody>
        </table>
        {fieldData.length ? null:  <Spinner/>}
      </div>
    </div>
  );
};

export default CovidPage;
