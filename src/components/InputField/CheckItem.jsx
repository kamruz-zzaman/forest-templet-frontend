import { useState } from "react";

const CheckItem = ({ data, onChangeData, selectedData }) => {
  const { _id, htmlId, img, label } = data;
  let markup;
  if (htmlId == "abandonedWood") {
    const [val, setVal] = useState("");
    markup = (
      <div className="flex items-start justify-start ">
        <div className="">
          <label htmlFor={_id}>
            <div className="flex items-start justify-start">
              <figure className="w-24">
                {/* <img className="w-full h-full " src={img} alt="" /> */}
                <img
                  className={`w-full ${val ? "grayscale-0" : "grayscale"}`}
                  src={img}
                  alt=""
                />
              </figure>
              <div className="flex flex-col justify-center items-center mt-2">
                <span className="">{label}</span>
                <select
                  name="data[Report][activity_abandoned_wood]"
                  className="form-control select block mx-4 mt-2 text-center"
                  autoComplete="off"
                  data-live-search="1"
                  id="ReportActivityAbandonedWood"
                  value={val}
                  onChange={(e) => {
                    onChangeData(e.target.value);
                    setVal(e.target.value);
                  }}
                >
                  <option value="">CHOOSE AN OPTION</option>
                  <option value="Parchet">Parquet</option>
                  <option value="în pădure">in the forest</option>
                  <option value="Pe marginea drumurilor și potecilor">
                    On the sides of roads and paths
                  </option>
                  <option value="În albia râului">In the riverbed</option>
                  <option value="La platforma primară">
                    At the primary platform
                  </option>
                </select>
              </div>
            </div>
          </label>
          <input className="hidden" id={_id} type="checkbox" />
        </div>
      </div>
    );
  } else {
    markup = (
      <div className="flex items-start justify-start">
        <label htmlFor={htmlId}>
          <div
            onClick={() => onChangeData(label)}
            className="flex items-center  cursor-pointer"
          >
            <figure className="w-24 ">
              <img
                className={`w-full ${
                  selectedData?.includes(label) ? "grayscale-0" : "grayscale"
                }`}
                src={img}
                alt=""
              />
            </figure>
            <p className="ms-2 ">{label}</p>
          </div>
        </label>
        <input className="hidden" id={htmlId} type="checkbox" />
      </div>
    );
  }

  return markup;
};

export default CheckItem;
