import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const LeafletMap = () => {
  const position = [23.7451003, 90.405864];
  const position1 = [23.746969201126724, 90.40497027225203];
  const position2 = [23.747394661128048, 90.4001925942668];
  const position3 = [23.747407393393612, 90.40221347518201];
  const position4 = [23.747656486792664, 90.40359871846833];
  return (
    <div>
      <MapContainer
        className="z-10 w-full"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="UZH"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position1}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position2}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position3}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position4}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="flex justify-center items-center">
        <div className="absolute z-[500] top-[14.5em] ">
          <button className="bg-white text-black font-bold rounded-md px-5 py-2 me-2">
            Solved
          </button>
          <button className="bg-white text-black font-bold rounded-md px-5 py-2">
            Unsolved
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeafletMap;
