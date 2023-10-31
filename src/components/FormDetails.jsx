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
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Get the user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);
  const handleButtonClick = () => {
    // Handle the button click action here
    // You can add code to show the user's location on Google Maps
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
          <form className="mt-5">
            {/*  Tell us who you are */}
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12">
                {fromTitle("1. ", " Tell us who you are")}
              </div>

              {/* First Name */}
              {
                <TextInput
                  id="firstName"
                  type="text"
                  label="first name"
                  placeholder="Ex: lon"
                  require={true}
                  style="col-span-6 mt-1"
                />
              }

              {/* Name */}
              {
                <TextInput
                  id="Name"
                  type="text"
                  label="name"
                  placeholder="Ex: Popescu"
                  require={true}
                  style="col-span-6 mt-1"
                />
              }

              {/* {
                <TextInput
                  id="address"
                  type="text"
                  label="address"
                  placeholder="Ex: Main Street, 21"
                  require={true}
                  style="col-span-8"
                />
              }

              {
                <TextInput
                  id="city"
                  type="text"
                  label="City"
                  placeholder="Ex: lasi"
                  require={true}
                  style="col-span-4"
                />
              } */}

              <TextInput
                style="col-span-6 mt-4"
                id="telephone"
                type="text"
                label="telephone"
                placeholder="Ex: 06468739172"
                require={true}
              />

              <TextInput
                style="col-span-6 mt-4"
                id="email"
                type="email"
                label="Email"
                placeholder="Ex: adresa.ta@mgmail.com"
                require={true}
              />

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
              <div className="col-span-6">
                <label className="uppercase font-bold text-[#333] cursor-pointer mb-2 block">
                  Type Address
                </label>
                <input
                  type="text"
                  className="border-2 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
                />
              </div>

              {/* When You Noticed */}
              <div className="col-span-4">{<DayMonthYears />}</div>

              <div className="col-span-12 mt-8">
                {/* {latitude && longitude && (
                  <p>
                    Latitude: {latitude}
                    <br />
                    Longitude: {longitude}
                  </p>
                )} */}
                <button className="border flex gap-1 px-8 py-2">
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
              <div className="col-span-12">{<CheckboxItems />}</div>

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
              <FilePreviewer />
            </div>

            {/* Accept */}
            <div className="col-span-12 my-3">
              <input type="checkbox" name="acceptAllCn" id="acceptAllCn" />
              <label className="font-bold ml-2" htmlFor="acceptAllCn">
                I have the possibility and availability to travel to the area
                together with the investigative team
              </label>
            </div>

            <div className="col-span-12 my-2">
              <p>
                I want you to check the situation in the area and send me the
                inspection report to the email address provided, as well as to
                info.romania@greenpeace.org
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
