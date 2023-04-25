import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Text,
} from "recharts";

const data = [
  { name: "Won", value: 62 },
  { name: "Lost", value: 21 },
];

const COLORS = ["#22c55e", "red"];
function PieChartWin() {
  return (
    <div className="  rounded-xl w-[50vw] flex flex-col justify-center items-center h-[55vh]">
      {/* <h1 className='text-4xl font-bold text-red-600'>Win/Loss</h1> */}
      <PieChart width={250} height={300}>
        <text
          x="50%"
          y="10%"
          dy={+12}
          style={{ fontSize: 38, fontWeight: "semibold", textColor: "orange" }}
          scaleToFit={true}
          textAnchor="middle"
          verticalAnchor="middle"
        >
          Win/Loss
        </text>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Text />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default PieChartWin;
