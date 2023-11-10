import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "../features/forest/forestSlice";
import L from "leaflet";
import img from "../assets/l.png";
import { useLocation } from "react-router-dom";

const LeafletMap = () => {
  const position = [47.37694720449335, 8.545659220192682];
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.forest);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_LINK}/api/forest`
      );
      const locationData = await response.data;
      setInfo(locationData?.data.filter((inf, i) => inf.approve));
      dispatch(setdata(locationData?.data.filter((inf, i) => inf.approve)));
    };
    getData();
  }, [location.search]);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(location.search);
    const scrollToElement = params.get("scrollTo");
    // Scroll to the specified element
    if (scrollToElement) {
      setInfo(data.filter((inf, i) => inf.status === scrollToElement));
    }
  }, [location.search, data]);

  const customIcon = new L.Icon({
    iconUrl: "./tree.png",
    iconSize: [64, 64],
  });
  return (
    <div className="relative">
      <MapContainer
        className="z-10 w-full"
        center={
          data?.length === 0
            ? position
            : [data[0]?.address?.latitude, data[0]?.address?.longitude]
        }
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="UZH"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {info?.length &&
          info?.map((dt, i) => {
            const pos = [dt?.address?.latitude, dt?.address?.longitude];
            return (
              <Marker position={pos} key={i} icon={customIcon}>
                <Popup className="!z-[9999]">
                  {dt?.img && (
                    <img
                      className="rounded-t-lg w-full"
                      src={`${dt.img}`}
                      alt=""
                    />
                  )}
                  <div className="px-5">
                    <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-800 ">
                      {/* <br /> */}
                      {dt?.reportType?.map((m, i) => {
                        return (
                          <span key={i} className="block my-0.5">
                            {i === dt?.reportType?.length - 1 ? m : `${m},`}
                          </span>
                        );
                      })}
                    </div>

                    <p className="mb-2 font-normal text-gray-700">
                      Date : {dt?.date}
                    </p>

                    <p className="mb-8 font-normal text-gray-700">
                      Status : {dt?.status}
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
      <div className="flex justify-center items-center ">
        <div className="absolute z-[500] top-[1.5em] ">
          <button
            className="bg-white text-black font-bold rounded-md px-5 py-2 me-2 active:bg-green-500 focus:bg-green-500 active:text-white focus:text-white"
            onClick={() =>
              setInfo(data.filter((inf, i) => inf.status === "solved"))
            }
          >
            Solved
          </button>
          <button
            className="bg-white text-black font-bold rounded-md px-5 py-2 active:bg-green-500 focus:bg-green-500 active:text-white focus:text-white"
            onClick={() => {
              setInfo(data.filter((inf, i) => inf.status === "unsolved"));
            }}
          >
            Unsolved
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeafletMap;
