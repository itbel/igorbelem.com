import styles from "./covid.module.css";

async function getCovidData() {
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
  const json: any = await response.json();
  return { data: json.body, headers: json.body[0] };
}

export default async function Covid() {
  const { data, headers } = await getCovidData();
  return (
    <div>
      <table className={styles.tableTheme}>
        <thead>
          <tr>
            <td colSpan={headers.length}>
              <h1 className={styles.pageHeader}>Ontario - Vaccinations</h1>
            </td>
          </tr>
          <tr className={styles.tableRow}>
            {Object.keys(headers).map((key) => (
              <th className={styles.tableHeader} key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: number) => (
            <tr
              style={{
                animationDuration: `${0.2 + index * 0.1}s`,
              }}
              className={styles.tableRow}
              key={row.date}
            >
              {Object.keys(row).map((key) => (
                <td className={styles.tableCell} key={key}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
