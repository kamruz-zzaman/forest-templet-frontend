import "./App.css";
import FormDetails from "./components/FormDetails";
import Header from "./components/Header";
import LeafletMap from "./components/LeafletMap";

function App() {
  return (
    <div className=" relative">
      <Header />
      <LeafletMap />
      <FormDetails />
    </div>
  );
}

export default App;
