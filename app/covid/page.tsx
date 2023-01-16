import styles from "./covid.module.css";

async function getCovidData() {
  const uri =
    process.env.NODE_ENV === "development"
      ? process.env.API_DEV_URI
      : process.env.API_PROD_URI;
  const response = await fetch(`${uri}/api/covid`, { cache: "no-store" });
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Failed to fetch covid data");
  }
  const json: any = await response.json();
  return json;
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
