import { useEffect, useState } from "react";
import AddAMark from "./AddAMark/AddAMark";
import CheckboxItems from "./InputField/CheckboxItems";
import TextInput from "./InputField/TextInput";
import AdjacentTrees from "./SelectOption/AdjacentTrees";
import CommuneVillage from "./SelectOption/CommuneVillage";
import Country from "./SelectOption/Country";
import DayMonthYears from "./SelectOption/DayMonthYears";
import InAForestOf from "./SelectOption/InAForestOf";
import FilePreviewer from "./Upload/ClaimPV";
import img from "../assets/l.png";
import { usePlacesWidget } from "react-google-autocomplete";
import axios from "axios";

const FormDetails = () => {
  // from title
  const fromTitle = (idx, text, spanText) => (
    <>
      <h2 className="text-[#333] font-bold text-sm">
        <span> {idx} </span> {text}
        {spanText && <span className="font-normal">({spanText})</span>}
      </h2>

      <hr className="my-5 border border-[#eee]" />
    </>
  );
  const [inputData, setInputData] = useState({
    name: "",
    first_name: "",
    phone: "",
    email: "",
    date: "",
    reportType: [],

    address: {
      latitude: null,
      longitude: null,
      add: "",
    },
    img: "",
    video: "",
    availability: false,
  });
  const handleButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
                position.coords.latitude
              },${position.coords.longitude}&key=${
                import.meta.env.VITE_GOOGLE_API_KEY
              }`
            );

            const locationData = response.data;
            if (locationData.results.length > 0) {
              const address = locationData.results[0].formatted_address;
              setInputData({
                ...inputData,
                address: address,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            } else {
              console.log("No address found for this location.");
            }
          } catch (error) {
            console.error("Error getting user address: ", error);
          }
        },
        (error) => {
          alert("Please accept to access your current location!");
          console.error(error);
        }
      );
    } else {
      alert("Please accept to access your current location!");
      console.error("Geolocation is not supported by your browser");
    }
  };

  const { ref } = usePlacesWidget({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      setInputData((inputs) => ({
        ...inputs,
        address: {
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
          add: place?.formatted_address,
        },
      }));
    },
  });
  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const onHandleSendData = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_SERVER_LINK}/addToMap`, inputData)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <section className="px-32 py-16">
      <div className="container mx-auto">
        <div>
          {/* top description */}
          <div className="text-sm text-[#333] mb-2">
            <p className="mb-4">
              In order to provide relevant information and clues to the Forest
              Guard or the local Forest Ranger, it is important to document the
              situation we encounter as well as possible.
            </p>

            <p>
              {`Download the "Greenpeace Guide" for details on what information to write down or photograph. The notification will be forwarded to the responsible authorities in the area where the problem was observed.`}{" "}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onHandleSendData} className="mt-5">
            {/*  Tell us who you are */}
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12">
                {fromTitle("1. ", " Tell us who you are")}
              </div>

              <div className="col-span-6 my-1">
                <label className="uppercase font-bold text-[#333] cursor-pointer mb-2 block">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  label="firstName"
                  required
                  placeholder="Ex: Popescu"
                  name="first_name"
                  onChange={handleInputChange}
                  value={inputData.first_name}
                  className="border-2 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
                />
              </div>
              <div className="col-span-6 my-1">
                <label className="uppercase font-bold text-[#333] cursor-pointer mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  label="name"
                  required
                  placeholder="Ex: Popescu"
                  name="name"
                  value={inputData.name}
                  onChange={handleInputChange}
                  className="border-2 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
                />
              </div>

              <div className="col-span-6 my-1">
                <label className="uppercase font-bold text-[#333] cursor-pointer mb-2 block">
                  Telephone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  label="telephone"
                  required
                  placeholder="Ex: 06468739172"
                  name="phone"
                  onChange={handleInputChange}
                  value={inputData.phone}
                  className="border-2 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
                />
              </div>

              <div className="col-span-6 my-1">
                <label className="uppercase font-bold text-[#333] cursor-pointer mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  label="email"
                  required
                  placeholder="Ex: adresa.ta@mgmail.com"
                  name="email"
                  value={inputData.email}
                  onChange={handleInputChange}
                  className="border-2 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
                />
              </div>

              <div className="col-span-12 mb-8 mt-4">
                <p>
                  {`The personal data will not be published on the site, but we need them to be able to register the notification, according to the regulations in force (Ordinance no. 27/30.01.2002)`}
                </p>
              </div>

              {/* Tell us where it happened */}
              <div className="col-span-12">
                {fromTitle("2. ", " Tell us where it happened")}
              </div>

              {/* Commune village select */}
              <div className="col-span-6 my-1">
                <label className="uppercase font-bold text-[#333] cursor-pointer mb-2 block">
                  Type Address
                </label>
                <input
                  type="text"
                  ref={ref}
                  value={inputData.address.add}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      address: e.target.value,
                    })
                  }
                  className="border-2 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
                />
              </div>

              <div className="col-span-6 my-1">
                <label className="uppercase font-bold text-[#333] cursor-pointer mb-2 block">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  label="date"
                  required
                  name="date"
                  value={inputData.date}
                  onChange={handleInputChange}
                  className="border-2 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
                />
              </div>

              {/* When You Noticed */}
              {/* <div className="col-span-4">{<DayMonthYears />}</div> */}

              <div className="col-span-12 mt-8">
                {/* {latitude && longitude && (
                  <p>
                    Latitude: {latitude}
                    <br />
                    Longitude: {longitude}
                  </p>
                )} */}
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="border flex gap-1 px-8 py-2"
                >
                  Locate Me <img src={img} alt="" />
                </button>
              </div>

              {/* Illegal activity you noticed */}

              <div className="col-span-12 my-4 mt-8">
                {fromTitle(
                  "3. ",
                  ` Tell us who you are`,
                  "select at least one"
                )}
              </div>

              {/* selected checkbox */}
              <div className="col-span-12">
                {
                  <CheckboxItems
                    setInputData={setInputData}
                    inputData={inputData}
                  />
                }
              </div>

              <div className="col-span-12 mt-16">
                {fromTitle(
                  "4. ",
                  ` Upload photos or video to support your claim: `
                )}
              </div>
            </div>
            {/* Upload photos or video to support your claim: */}

            {/* upload functionality */}
            <div>
              <FilePreviewer
                setInputData={setInputData}
                inputData={inputData}
              />
            </div>

            {/* Accept */}
            <div className="col-span-12 my-3">
              <input
                onChange={(e) =>
                  setInputData({ ...inputData, availability: e.target.checked })
                }
                value={inputData.availability}
                type="checkbox"
                id="acceptAllCn"
              />
              <label className="font-bold ml-2" htmlFor="acceptAllCn">
                I have the possibility and availability to travel to the area
                together with the investigative team
              </label>
            </div>

            <div className="col-span-12 my-2">
              <p>
                I want you to check the situation in the area and send me the
                inspection report to the email address provided, as well as to
                info.admin@forest.org
              </p>
            </div>

            <div className="col-span-12">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-9 rounded-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormDetails;
