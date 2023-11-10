import React from "react";
import Header from "../components/Header";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import { Link } from "react-router-dom";

const MyProject = () => {
  return (
    <section>
      <Header />
      <div className="m-20">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-primary">Stay informed</h1>
          {/* <p className="text-primary">We Focous On...</p> */}
        </div>
        <div className="grid grid-cols-12 gap-8 my-10">
          <div className="col-span-4">
            <img src={img1} alt="" />
          </div>
          <div className="col-span-4">
            <img src={img2} alt="" />
          </div>
          <div className="col-span-4">
            <img src={img3} alt="" />
          </div>
          <div className="col-span-4 bg-teal-600 text-center text-white py-20 ">
            <Link to="/?scrollTo=timber" className="text-lg px-3">
              How to identify illegal timber?
            </Link>
            <Link to="/?scrollTo=timber" className="mt-5 px-5 block">
              Stopping the trade in illegal timber is imperative for several
              reasons. Firstly, it helps preserve our global forests, which are
              crucial for maintaining biodiversity, regulating climate, and
              supporting the livelihoods of local communities. Illegal logging
              often involves destructive practices that contribute to
              deforestation, threatening the delicate balance of ecosystems.
              Identifying illegal timber is essential to combat this issue
              effectively. By doing so, we can disrupt the illicit supply chains
              and hold responsible parties accountable.
            </Link>
          </div>
          <div className="col-span-4 bg-primary text-center text-white py-20 h-max">
            <Link to="/?scrollTo=unsolved">Ongoing alerts</Link>
            <Link to="/?scrollTo=unsolved" className="mt-5 px-5 block">
              In our ongoing alert, we provide updates on current deforestation
              incidents worldwide. The associated reports and indicators are
              visualized on an interactive map to offer a comprehensive
              overview.
            </Link>
          </div>
          <div className="col-span-4 bg-teal-100 text-center text-green-900 py-20 h-max">
            <Link to="/?scrollTo=solved" className="text-lg">
              Solved requests
            </Link>
            <Link to="/?scrollTo=solved" className="mt-5 px-5 block">
              We are pleased to announce the resolution of a previous request,
              signifying successful intervention. Explore these developments to
              actively engage in our environmental conservation efforts.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
