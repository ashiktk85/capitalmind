const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-md">
          <p className="font-medium">{`Date: ${label}`}</p>
          <p className="text-green-600">{`NAV: ₹${payload[0].value.toFixed(
            2
          )}`}</p>
        </div>
      );
    }
    return null;
  };

  export default CustomTooltip;