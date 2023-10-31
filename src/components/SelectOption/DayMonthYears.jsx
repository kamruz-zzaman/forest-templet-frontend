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
    <div className="px-[10px] flex flex-col items-start justify-between w-full gap-x-1">
      <label
        className="uppercase font-bold text-[#333] cursor-pointer"
        htmlFor="years"
      >
        Date *
      </label>

      <div className="flex mt-2">
        {/* year */}
        <div className="sm:px-[3px] ">
          <select
            id="years"
            className="border-2 border-primary py-1.5 px-3 outline-none focus:shadow-md rounded w-full"
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
        <div className="sm:px-[3px]">
          <select className="border-2 border-primary py-1.5 px-3 outline-none focus:shadow-md rounded w-full">
            {months &&
              months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
          </select>
        </div>

        {/* day */}
        <div className="sm:px-[3px]">
          <select className="border-2 border-primary py-1.5 px-3 outline-none focus:shadow-md rounded w-full">
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
