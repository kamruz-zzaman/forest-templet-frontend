import React from "react";

const AddAMark = () => {
  const data = (
    <select
      name="data[marks_tmp]"
      className="form-control select"
      autoComplete="off"
      data-live-search="1"
      id="marks_tmp"
    >
      <option value="">SELECT</option>
      <option value="La intrarea în localitatea [...]">
        Upon entering the locality [...]
      </option>
      <option value="Dinspre localitatea [...]">From the locality [...]</option>
      <option value="Pe valea râului [...]">On the river valley [...]</option>
      <option value="La intersecția drumului asfaltat [...] cu drumul forestier [...]">
        At the intersection of the paved road [...] with the forest road [...]
      </option>
      <option value="La intersecția drumurilor forestiere [...]">
        At the intersection of forest roads [...]
      </option>
      <option value="În zona bornei silvice numarul [...]">
        In the area of ​​the forestry checkpoint number [...]
      </option>
      <option value="La coordonatele GPS [...]">
        At the GPS coordinates [...]
      </option>
      <option value="Alte indicații [...]">Other indications [...]</option>
    </select>
  );

  return data;
};

export default AddAMark;
