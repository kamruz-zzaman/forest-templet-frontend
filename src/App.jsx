import "./App.css";
import FormDetails from "./components/FormDetails";
import Header from "./components/Header";
import LeafletMap from "./components/LeafletMap";

function App() {
  return (
    <div className=" relative">
      <Header />
      <div
        className="max-w-7xl mx-auto mt-12
     "
      >
        <LeafletMap />
      </div>
      <FormDetails />
    </div>
  );
}

export default App;
