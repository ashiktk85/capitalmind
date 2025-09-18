import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { RiResetLeftLine } from "react-icons/ri";
import chartData from "@/data/ChartData";
import CustomTooltip from "./Tooltip";
import { convertFromInputFormat, convertToInputFormat } from "@/utils/ChartUtils";

type DataPoint = {
  date: string;
  nav: number;
};

const ChartComponent = () => {
  const [dateFilter, setDateFilter] = useState({
    from: chartData[chartData.length - 1].date, 
    to: chartData[0].date, 
  });
  const [filteredData, setFilteredData] = useState<DataPoint[]>(chartData);

  const parseCustomDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  useEffect(() => {
    const fromDate = parseCustomDate(dateFilter.from);
    const toDate = parseCustomDate(dateFilter.to);

    const filtered = chartData.filter((d) => {
      const dDate = parseCustomDate(d.date);
      return dDate >= fromDate && dDate <= toDate;
    });

    setFilteredData(filtered);
  }, [dateFilter]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div>
        <div className="flex justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold mb-2">Equity curve</h2>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <p>Live since {chartData[chartData.length - 1].date}</p>
              <button
                className="flex items-center gap-1 text-green-600 text-sm pl-2 cursor-pointer"
                onClick={() => window.location.reload() }
                >
                <RiResetLeftLine />
                <span>Reset</span>
              </button>
            </div>
          </div>
          <div className="flex gap-4 mb-3 items-center justify-end">
            <label className="text-sm flex flex-col gap-1">
              From date
              <input
                type="date"
                value={convertToInputFormat(dateFilter.from)}
                onChange={(e) =>
                  setDateFilter({
                    ...dateFilter,
                    from: convertFromInputFormat(e.target.value),
                  })
                }
                className="border border-gray-300 p-2 text-sm rounded"
              />
            </label>
            <label className="text-sm flex flex-col gap-1">
              To date
              <input
                type="date"
                value={convertToInputFormat(dateFilter.to)}
                onChange={(e) =>
                  setDateFilter({
                    ...dateFilter,
                    to: convertFromInputFormat(e.target.value),
                  })
                }
                className="border border-gray-300 p-2 text-sm rounded"
              />
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid vertical={false} stroke="#e5e7eb" />

              <XAxis hide dataKey="date" />

              <YAxis
                domain={[0, (dataMax: number) => dataMax * 1.1]} 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => value.toFixed(0)} 
                ticks={Array.from({ length: 10 }, (_, i) => {
                  const max = Math.max(...filteredData.map((d) => d.nav));
                  return (max / 7) * i; 
                })}
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="nav"
                stroke="#22c55e"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#22c55e" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <div>
            Valid as of{" "}
            {new Date().toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
