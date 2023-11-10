import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CheckboxItems from "./InputField/CheckboxItems";
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

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    first_name: "",
    phone: "",
    email: "",
    date: "",
    reportType: [],

    latitude: null,
    longitude: null,
    address: "",

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
        address: place?.formatted_address,
        latitude: place?.geometry?.location?.lat(),
        longitude: place?.geometry?.location?.lng(),
      }));
    },
  });
  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const [imagePreview, setImagePreview] = useState(null);
  const [onSelectFile, setOnSelectFile] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const onHandleSendData = (e) => {
    e.preventDefault();
    const data = {
      name: inputData.name,
      first_name: inputData.first_name,
      phone: inputData.phone,
      email: inputData.email,
      date: inputData.date,
      reportType: inputData.reportType,
      latitude: inputData.latitude,
      longitude: inputData.longitude,
      address: inputData.address,
      availability: inputData.availability,
      img: imgUrl,
    };
    // let formData = new FormData();
    // formData.append("name", inputData.name);
    // formData.append("first_name", inputData.first_name);
    // formData.append("phone", inputData.phone);
    // formData.append("email", inputData.email);
    // formData.append("date", inputData.date);
    // formData.append("reportType", inputData.reportType);
    // formData.append("latitude", inputData.latitude);
    // formData.append("longitude", inputData.longitude);
    // formData.append("address", inputData.address);
    // formData.append("availability", inputData.availability);
    // formData.append(
    //   "file",
    //   inputData.img !== ""
    //     ? inputData.img
    //     : inputData.video !== "" && inputData.video
    // );

    if (inputData.latitude && inputData.longitude) {
      axios
        .post(
          `${import.meta.env.VITE_SERVER_LINK}/api/addToMap`,
          data
          // {
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // }
        )
        .then((res) => {
          if (res.status === 200) {
            setInputData({
              name: "",
              first_name: "",
              phone: "",
              email: "",
              date: "",
              reportType: [],

              latitude: null,
              longitude: null,
              address: "",

              img: "",
              video: "",
              availability: false,
            });
            openModal();
          }
        });
      setImagePreview(null);
      setOnSelectFile("");
    } else {
      alert(
        "Check the address again. Try removing, search add from suggetions!"
      );
    }
  };
  const location = useLocation();

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(location.search);
    const scrollToElement = params.get("scrollTo");

    // Scroll to the specified element
    if (scrollToElement) {
      const element = document.getElementById(scrollToElement);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  return (
    <section className="px-32 py-16">
      <div className="container mx-auto">
        <div>
          {/* top description */}
          <div className="text-sm text-[#333] mb-2">
            <p className="mb-4">
              To ensure the Forest Guard or local Forest Ranger receives
              pertinent details, it is crucial to meticulously document any
              encountered situations. Refer to the "Greenpeace Guide" for
              specific instructions on the information to record or photograph.
              The gathered information will be promptly relayed to the relevant
              authorities in the observed problem area.
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

              {/* <div className="col-span-12 mb-8 mt-4">
                <p>
                  {`The personal data will not be published on the site, but we need them to be able to register the notification, according to the regulations in force (Ordinance no. 27/30.01.2002)`}
                </p>
              </div> */}

              {/* Tell us where it happened */}
              <div className="col-span-12 mt-8">
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
                  value={inputData?.address}
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

              <div className="col-span-12 my-4 mt-8" id="timber">
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
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                // videoPreview={videoPreview}
                // setVideoPreview={setVideoPreview}
                onSelectFile={onSelectFile}
                setOnSelectFile={setOnSelectFile}
                setImgUrl={setImgUrl}
                setLoading={setLoading}
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
                checked={inputData.availability}
                id="acceptAllCn"
              />
              <label className="font-bold ml-2" htmlFor="acceptAllCn">
                I have the possibility and availability to travel to the area
                together with the investigative team
              </label>
            </div>

            <div className="col-span-12 mt-6">
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white font-bold py-2 px-9 rounded-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isOpen && (
        // Modal structure here
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <i className="fas fa-check text-green-600"></i>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Sucessfully Submitted a request.
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        We will be verifying it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FormDetails;
