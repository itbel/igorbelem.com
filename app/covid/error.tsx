"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", marginTop: 120 }}>
      <p>Something went wrong!</p>
      <p>Please try again later...</p>
      <p>Click <Link href="/">here</Link> to go back</p>
    </div>
  );
}
