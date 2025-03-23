"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [clockDisp, setClockDisp] = useState("00:00:00");
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      setClockDisp(
        `${String(now.getHours()).padStart(2, "0")}:${String(
          now.getMinutes()
        ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h1>{clockDisp}</h1>
      <h1>{timeZone}</h1>
    </>
  );
}
