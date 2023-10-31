import { useState } from "react";
import CheckItem from "./CheckItem";

const CheckboxItems = ({ setInputData, inputData }) => {
  const data = [
    {
      _id: 1,
      htmlId: "unMarked",
      label: "Unmarked pegs",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/5769413e-a7a0-4a3c-8418-17f495db0ef9.png",
    },
    {
      _id: 2,
      htmlId: "CoveredStumps",
      label: "Unmarked and covered stumps",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/576941c8-e82c-414f-874b-17f495db0ef9.png",
    },
    {
      _id: 3,
      htmlId: "razorCut",
      label: "Razor cut > 1HA",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/576941e5-1834-4d05-ac35-17f495db0ef9.png",
    },
    {
      _id: 5,
      htmlId: "accessRoad",
      label: "Unmarked access road",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a3f6a-ec6c-4468-b8dd-4e5d5d724059.png",
    },
    {
      _id: 6,
      htmlId: "carriageway",
      label: "Access road with carriageway width >4m",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a3f8f-099c-42bc-8fce-4e6d5d724059.png",
    },
    {
      _id: 7,
      htmlId: "inclination",
      label: "Collection road made on a slope with an inclination >25°",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a3fa8-6eec-49ae-a6ef-4e6d5d724059.png",
    },
    {
      _id: 8,
      htmlId: "riverBed",
      label: "River bed used as collection route",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a3fba-6c98-4917-912d-4e9a5d724059.png",
    },
    {
      _id: 9,
      htmlId: "withoutProtection",
      label: "Riverbed Crossed without protection",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a3fd1-d79c-442f-8ca9-4e9a5d724059.png",
    },
    {
      _id: 10,
      htmlId: "informationBoard",
      label: "Parquet floor without information board",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a4011-ebf0-4fd2-8f6e-4ecf5d724059.png",
    },
    {
      _id: 11,
      htmlId: "mechanicallyAltered",
      label: "Mechanically altered trees",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a402e-8dc8-4e01-8bea-4ecf5d724059.png",
    },
    {
      _id: 12,
      htmlId: "exploitationWork",
      label: "Exploitation work at night",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a404b-d5f8-4934-bdb8-4efb5d724059.png",
    },
    {
      _id: 13,
      htmlId: "loadingWood",
      label: "Loading wood at night",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a408a-cc20-476b-95be-4f295d724059.png",
    },
    {
      _id: 14,
      htmlId: "abandonedWood",
      label: "Abandoned wood",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a409c-ce34-4714-aa08-4f295d724059.png",
    },
    {
      _id: 15,
      htmlId: "finished",
      label: "Exploitation road not covered after the works are finished",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a40a7-d0b8-4077-ae6e-4f295d724059.png",
    },
    {
      _id: 16,
      htmlId: "diameter",
      label: "Sticks with a height >1/3 of the diameter",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a40b7-a8f4-420a-bdf3-4f545d724059.png",
    },
    {
      _id: 17,
      htmlId: "others",
      label: "others",
      img: "https://cdn.salvezpadurea.ro/img/uploads/activities/577a40c3-51a8-41ef-bc78-4f545d724059.png",
    },
  ];
  const onChangeData = (data) => {
    if (inputData.reportType.includes(data)) {
      setInputData({
        ...inputData,
        reportType: inputData.reportType?.filter((fill) => fill !== data),
      });
    } else {
      setInputData({
        ...inputData,
        reportType: [...inputData.reportType, data],
      });
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Check box show */}
        {data &&
          data.map((d, idx) => (
            <div key={idx}>
              <CheckItem
                data={d}
                onChangeData={onChangeData}
                selectedData={inputData.reportType}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CheckboxItems;
