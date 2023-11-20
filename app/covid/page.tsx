import styles from "./covid.module.css";

async function getCovidData(): Promise<{ data: any; headers: any }> {
  const xApiKey = process.env.API_GATEWAY_KEY ?? "";
  const covidURI = process.env.API_GATEWAY_COVID_URI ?? "";
  if (xApiKey === "" || covidURI === "") {
    return {data: [], headers: {}};
  }
  const response = await fetch(covidURI, {
    method: "get",
    mode: "cors",
    headers: {
      "x-api-key": xApiKey,
      "Content-Type": "application/json",
    },
  });
  const json: any = await response.json();
  return { data: json?.body ?? [], headers: json?.body?.[0] ?? {} };
}

export default async function Covid() {
  const { data, headers } = await getCovidData();
  return (
    <div>
      <h1 className={styles.pageHeader}>Ontario - Vaccinations</h1>
      <table style={{ borderSpacing: 0 }} className={styles.tableTheme}>
        <thead>
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
              key={row.date + index}
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
