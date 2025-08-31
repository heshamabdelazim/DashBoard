import React from "react";
import Card from "../../Card";
import Earning from "./Earning";
import MonthlyRev from "./MonthlyRev.jsx";

function Statistics() {
  const cardClassName = "basis-[100%] md:basis-[49%] flex-1 ";

  const earningsData = [
    {
      name: "Saturday",
      ProjectA: 4000,
      ProjectB: 2400,
      ProjectC: 2400,
    },
    {
      name: "Sunday",
      ProjectA: 3000,
      ProjectB: 1398,
      ProjectC: 2210,
    },
    {
      name: "Monday",
      ProjectA: 2000,
      ProjectB: 9800,
      ProjectC: 2290,
    },
    {
      name: "Tuesday",
      ProjectA: 2780,
      ProjectB: 3908,
      ProjectC: 2000,
    },
    {
      name: "Wednesday",
      ProjectA: 1890,
      ProjectB: 4800,
      ProjectC: 2181,
    },
    {
      name: "Thursday",
      ProjectA: 2390,
      ProjectB: 3800,
      ProjectC: 2500,
    },
    {
      name: "Friday",
      ProjectA: 3490,
      ProjectB: 4300,
      ProjectC: 2100,
    },
  ];
  const pieData = [
    { name: "January", "product-A": 590, "product-B": 100 },
    { name: "March", "product-A": 868, "product-B": 100 },
    { name: "May", "product-A": 60, "product-B": 10 },
    { name: "July", "product-A": 731, "product-B": 1200 },
    { name: "September", "product-A": 254, "product-B": 190 },
    { name: "November", "product-A": 106, "product-B": 540 },
    { name: "December", "product-A": 299, "product-B": 900 },
  ];
  return (
    <div className="p-section !pt-6 flex flex-wrap gap-4">
      <Card title="Earnings Breakdown" className={cardClassName}>
        <Earning data={earningsData} />
      </Card>
      <Card title="Monthly Revenue" className={cardClassName}>
        <MonthlyRev data={pieData} />
      </Card>
    </div>
  );
}

export default Statistics;
