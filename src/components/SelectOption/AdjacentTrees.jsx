import React from "react";

const InAForestOf = () => {
  const data = (
    <select
      name="data[Report][tree_mark_id]"
      className="form-control select"
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
  );

  return data;
};

export default InAForestOf;
