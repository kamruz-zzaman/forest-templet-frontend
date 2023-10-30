import React from "react";

const InAForestOf = () => {
  const data = (
    <div className="mt-1">
      <label for="ReportCityId" className="uppercase font-bold text-[#333]">
        IN A FOREST OF:
      </label>
      <span className="">*</span>
      <select
        name="data[Report][forest_type_id]"
        className="border-2 border-primary py-1.5 px-3 outline-none focus:shadow-md rounded w-full"
        autoComplete="off"
        data-live-search="1"
        id="ReportForestTypeId"
      >
        <option value="">SELECT</option>
        <option value="1">Softwood</option>
        <option value="2">HARDWOOD</option>
        <option value="3">Mixture</option>
      </select>
    </div>
  );

  return data;
};

export default InAForestOf;
