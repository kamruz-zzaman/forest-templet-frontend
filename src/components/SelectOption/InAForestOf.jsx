import React from "react";

const InAForestOf = () => {
  const data = (
    <select
      name="data[Report][forest_type_id]"
      class="form-control select"
      autocomplete="off"
      data-live-search="1"
      id="ReportForestTypeId"
    >
      <option value="">SELECT</option>
      <option value="1">Softwood</option>
      <option value="2">HARDWOOD</option>
      <option value="3">Mixture</option>
    </select>
  );

  return data;
};

export default InAForestOf;
