const TrailingReturnsTable = () => {
    const rows = [
      {
        name: "Focused",
        YTD: "-1.7%",
        D1: "0.1%",
        W1: "2.9%",
        M1: "7.6%",
        M3: "2.2%",
        M6: "10.1%",
        Y1: "43.5%",
        Y3: "23.9%",
        SI: "22.5%",
        DD: "-2.8%",
        MAXDD: "-40.3%",
      },
      {
        name: "NIFTY50",
        YTD: "3.1%",
        D1: "0.1%",
        W1: "1.1%",
        M1: "1.4%",
        M3: "4.4%",
        M6: "16.2%",
        Y1: "26.2%",
        Y3: "16.0%",
        SI: "14.5%",
        DD: "-1.5%",
        MAXDD: "-38.4%",
      },
    ];
  
    return (
      <div className="overflow-x-auto">
        <h1 className="font-semibold">Tailing Returns</h1>
        <table className="w-full text-xs border-collapse mt-2">
          <thead>
            <tr className="bg-gray-50 t=">
              <th className="p-1 text-start text-gray-500">NAME</th>
              <th className="p-1 text-start text-gray-500">YTD</th>
              <th className="p-1 text-start text-gray-500">1D</th>
              <th className="p-1 text-start text-gray-500">1W</th>
              <th className="p-1 text-start text-gray-500">1M</th>
              <th className="p-1 text-start text-gray-500">3M</th>
              <th className="p-1 text-start text-gray-500">6M</th>
              <th className="p-1 text-start text-gray-500">1Y</th>
              <th className="p-1 text-start text-gray-500">3Y</th>
              <th className="p-1 text-start text-gray-500 border-r border-gray-500">SI</th>
              <th className="p-1 text-start text-gray-500">DD</th>
              <th className="p-1 text-start text-gray-500">MAXDD</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.name}
                className="hover:bg-gray-100 border-b border-gray-200 text-gray-500 font-medium"
              >
                <td className="p-1 font-medium">{row.name}</td>
                <td className="p-1">{row.YTD}</td>
                <td className="p-1">{row.D1}</td>
                <td className="p-1">{row.W1}</td>
                <td className="p-1">{row.M1}</td>
                <td className="p-1">{row.M3}</td>
                <td className="p-1">{row.M6}</td>
                <td className="p-1">{row.Y1}</td>
                <td className="p-1">{row.Y3}</td>
                <td className="p-1  border-r border-gray-500">{row.SI}</td>
                <td className="p-1">{row.DD}</td>
                <td className="p-1">{row.MAXDD}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <p className="text-[10px] text-gray-500 mt-1">
          Note: Returns above 1 year are annualised.
        </p>
      </div>
    );
  };
  
export default TrailingReturnsTable;