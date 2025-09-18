import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { RiResetLeftLine } from "react-icons/ri";

const ChartComponent = () => {
  const [dateFilter, setDateFilter] = useState({
    from: "2019-01-01",
    to: "2024-04-24",
  });

  const data = [
    { date: "2019-01-01", nav: 100, drawdown: 0 },
    { date: "2019-06-01", nav: 110, drawdown: -5 },
    { date: "2020-01-01", nav: 130, drawdown: -10 },
    { date: "2020-06-01", nav: 120, drawdown: -15 },
    { date: "2021-01-01", nav: 150, drawdown: -2 },
    { date: "2022-01-01", nav: 180, drawdown: 0 },
    { date: "2023-01-01", nav: 200, drawdown: -1 },
    { date: "2024-04-24", nav: 210, drawdown: 0 },
  ];

  const filteredData = data.filter(
    (d) => d.date >= dateFilter.from && d.date <= dateFilter.to
  );

  return (
    <div>
      <div className="flex justify-between mb-5">
        <div>
          <h3 className="font-semibold mb-2 mt-5">Equity curve</h3>

          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <p>Live since 2019-01-01</p>
            <button className="flex items-center gap-1 text-green-500 text-xs pl-2">
              <RiResetLeftLine />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-3 items-center justify-end">
          <label className="text-xs flex flex-col gap-1">
            From date
            <input
              type="date"
              value={dateFilter.from}
              onChange={(e) =>
                setDateFilter({ ...dateFilter, from: e.target.value })
              }
              className="border border-gray-300 ml-1 p-1 text-xs rounded"
            />
          </label>
          <label className="text-xs flex flex-col gap-1">
            To date
            <input
              type="date"
              value={dateFilter.to}
              onChange={(e) =>
                setDateFilter({ ...dateFilter, to: e.target.value })
              }
              className="border border-gray-300 ml-1 p-1 text-xs rounded"
            />
          </label>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={270}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="nav"
            stroke="#22c55e"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={filteredData}>
          <XAxis dataKey="date" hide />
          <YAxis domain={["auto", 0]} hide />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="drawdown"
            stroke="#be123c"
            fill="#fecaca"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
