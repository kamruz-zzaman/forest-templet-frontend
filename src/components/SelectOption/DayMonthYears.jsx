import React from "react";

const DayMonthYears = () => {
  // 1900 to 2025
  const yearsRange = Array.from({ length: 126 }, (_, i) => 1900 + i);
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
    <div className="px-[10px] flex items-center gap-2 sm:gap-[30px]">
      {/* year */}
      <div className="sm:px-[3px] py-[7px]">
        <select className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]">
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
  );
};

export default DayMonthYears;
