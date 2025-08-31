import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function MonthlyRev({ data }) {
  if (!data || data.length === 0) {
    return <div className="">No data available</div>;
  }
  return (
    <ResponsiveContainer height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#8884d8" stroke="var(--primary)" />
        <YAxis
          stroke="var(--primary)"
          label={{ value: "USD", position: "insideLeft", angle: -90 }}
        />
        <Tooltip />
        <Legend
          width={120}
          wrapperStyle={{
            bottom: 5,
            left: 0,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "20px",
          }}
        />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          dataKey="product-A"
          fill="var(--info)"
          activeBar={{
            fill: "var(--warning)",
            "aria-description": "Active Bar",
          }}
          barSize={15}
        />
        <Bar
          dataKey="product-B"
          fill="var(--primary)"
          activeBar={{
            fill: "var(--warning)",
            "aria-description": "Active Bar",
          }}
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default MonthlyRev;
