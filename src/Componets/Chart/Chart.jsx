import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ aspect,isDouble=true}) => {
  const data = [
    {
      month: "Sep",
      total: "560000",
      revenue: "250000",
    },
    {
      month: "Oct",
      total: "100000",
      revenue: "50000",
    },
    {
      month: "Nov",
      total: "600000",
      revenue: "250000",
    },
    {
      month: "Dec",
      total: "36000",
      revenue: "10000",
    },
    {
      month: "Jan",
      total: "150000",
      revenue: "75000",
    },
    {
      month: "Feb",
      total: "15000",
      revenue: "5000",
    },
  ];
  return (
    <ResponsiveContainer  width="100%" aspect={aspect}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="totalData" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          {isDouble? <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>:null }
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip animationDuration={5} cursor="true" />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#totalData)"
        />
      {isDouble?  <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#revenue)"
        />:null}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
