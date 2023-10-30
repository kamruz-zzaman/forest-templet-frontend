const DayMonthYears = () => {
  // 2013 to 2023
  const yearsRange = Array.from({ length: 10 }, (_, i) => 2013 + i);
  // 1 to 31
  const daysRange = Array.from({ length: 31 }, (_, i) => 1 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="px-[10px] flex flex-col items-start justify-between gap-1 w-full">
      <label
        className="uppercase font-bold text-[#333] cursor-pointer"
        htmlFor="years"
      >
        ON AN AREA OF ​MINIMUM: *
      </label>

      <div className="flex">
        {/* year */}
        <div className="sm:px-[3px] py-[7px]">
          <select
            id="years"
            className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
          >
            <option value="year">Year</option>
            {yearsRange &&
              yearsRange.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
          </select>
        </div>

        {/* month */}
        <div className="sm:px-[3px] py-[7px]">
          <select className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-2 py-[3px]">
            {months &&
              months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
          </select>
        </div>

        {/* day */}
        <div className="sm:px-[3px] py-[7px]">
          <select className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]">
            <option value="">Day</option>
            {daysRange &&
              daysRange.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DayMonthYears;
