"use client";
import { useState, useEffect } from "react";
import "./clockDisp.css";

export default function Home() {
  const [clockDisp, setClockDisp] = useState("00:00:00");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const week: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      setClockDisp(
        `${String(now.getHours()).padStart(2, "0")}:${String(
          now.getMinutes()
        ).padStart(2, "0")}`
      );
      setYear(String(now.getFullYear()));
      setMonth(String(now.getMonth() + 1));
      setDate(String(now.getDate()));

      setDay(String(week[now.getDay()])); // 0:日曜日, 1:月曜日, 2:火曜日, 3:水曜日, 4:木曜日, 5:金曜日, 6:土曜日
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
        <div className="clockdisp flex flex-col justify-center items-center">
          <div className="hhmm text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 font-semibold ">
            {clockDisp}
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-5xl">
            {year}/{month}/{date} ({day})
          </div>
          <div>{timeZone}</div>
        </div>
      </section>
    </>
  );
}
