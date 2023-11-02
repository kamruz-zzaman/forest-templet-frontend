import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "../features/forest/forestSlice";
import L from "leaflet";
import img from "../assets/l.png";

const LeafletMap = () => {
  const position = [47.37694720449335, 8.545659220192682];
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.forest);
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
  }, []);

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
            console.log(dt);
            const pos = [dt?.address?.latitude, dt?.address?.longitude];
            return (
              <Marker position={pos} key={i} icon={customIcon}>
                <Popup className="!z-[9999]">
                  <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow "></div>
                  {dt?.img && (
                    <img
                      class="rounded-t-lg w-full"
                      src={`${import.meta.env.VITE_SERVER_LINK}/${dt.img}`}
                      alt=""
                    />
                  )}
                  {dt?.video && (
                    <video width="640" height="360" controls>
                      <source
                        src={`${import.meta.env.VITE_SERVER_LINK}/${dt?.video}`}
                        type="video/mp4"
                      />
                    </video>
                  )}

                  <div class="px-5">
                    <div class="mb-2 text-2xl font-semibold tracking-tight text-gray-800 ">
                      {/* <br /> */}
                      {dt?.reportType?.map((m, i) => {
                        return (
                          <span key={i} className="block my-0.5">
                            {i === dt?.reportType?.length - 1 ? m : `${m},`}
                          </span>
                        );
                      })}
                    </div>

                    <p class="mb-2 font-normal text-gray-700">
                      Date : {dt?.date}
                    </p>

                    <p class="mb-8 font-normal text-gray-700">
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
