import Spinner from "../components/Spinner";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Spinner size="medium" />
      <span style={{ fontWeight: 700, marginTop: 8 }}>Loading...</span>
    </div>
  );
}
