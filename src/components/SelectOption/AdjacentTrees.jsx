import React from "react";

const AdjacentTrees = () => {
  const data = (
    <div className="mt-2">
      <label for="ReportCityId" className="uppercase font-bold text-[#333]">
        ADJACENT TREES HAVE A MARK OF THE FORM APPLIED:
      </label>
      <select
        name="data[Report][tree_mark_id]"
        className="border-2 border-primary py-1.5 px-3 outline-none focus:shadow-md rounded w-full"
        autoComplete="off"
        data-live-search="1"
        id="ReportTreeMarkId"
      >
        <option value=""></option>
        <option value="1">circular</option>
        <option value="2">Square</option>
        <option value="3">pentagon</option>
        <option value="4">TRIANGULAR</option>
      </select>
    </div>
  );

  return data;
};

export default AdjacentTrees;
