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
      <footer className="border border-gray-100 text-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; 2023 Forest Watch. All rights reserved.
          </p>
          <p className="mt-2">
            Contact us at{" "}
            <a
              href="mailto:forestwatch000@gmail.com"
              className="text-blue-300 hover:text-blue-400"
            >
              forestwatch000@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
