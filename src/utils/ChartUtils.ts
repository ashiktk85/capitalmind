const convertToInputFormat = (dateString: string): string => {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const convertFromInputFormat = (dateString: string): string => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  export  {
    convertFromInputFormat,
    convertToInputFormat
  }
