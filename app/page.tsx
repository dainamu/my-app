"use client";
import { useState, useEffect } from "react";
import "./clockDisp.css";

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
      <div className="main ">
        <div className="gradient"></div>
      </div>
      <section className="w-full h-screen flex flex-col justify-center z-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-9xl font-semibold ">
            {clockDisp}
          </div>
          <div>{timeZone}</div>
        </div>
      </section>
    </>
  );
}
