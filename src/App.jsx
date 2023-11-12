import { Link } from "react-router-dom";
import "./App.css";
import FormDetails from "./components/FormDetails";
import Header from "./components/Header";
import LeafletMap from "./components/LeafletMap";

function App() {
  return (
    <div className=" relative">
      <Header />
      <div className="text-center max-w-7xl  mx-auto">
        We aim to halt illegal deforesting globally, starting by raising
        awareness. We believe that drawing attention to illegal deforesting can
        contribute to reducing such activities, especially when anyone with a
        mobile phone can report it. On our website, visitors can report
        instances of suspected illegal deforesting through an interactive map.
      </div>
      <div
        className="max-w-7xl mx-auto mt-12
     "
      >
        <LeafletMap />
      </div>

      <FormDetails />
      <footer className="border border-gray-100 text-gray-800 py-6">
        <div className="container mx-auto text-center">
          <div className="flex gap-12 justify-center items-center">
            <p className="text-lg">
              &copy; 2023 Forest Watch. All rights reserved.
            </p>
            <Link
              to={"/impressum"}
              className="bg-primary px-6 w-36 py-2 rounded-md text-white"
            >
              Impressum
            </Link>
          </div>
          <div className="flex gap-12 justify-center items-center mt-3">
            <p className="">
              Contact us at{" "}
              <a
                href="mailto:forestwatch000@gmail.com"
                className="text-blue-300 hover:text-blue-400"
              >
                forestwatch000@gmail.com
              </a>
            </p>
            <Link
              to={"/data-privacy"}
              className="bg-primary px-6 ms-8 w-36 py-2 rounded-md text-white"
            >
              Data Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
