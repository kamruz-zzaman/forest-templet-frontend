import React from "react";
import Header from "../components/Header";

const MyProject = () => {
  return (
    <section>
      <Header />
      <div className="m-20">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-primary">Current Project</h1>
          <p className="text-primary">We Focous On...</p>
        </div>
        <div className="grid grid-cols-12 gap-8 my-10">
          <div className="col-span-4">
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
              alt=""
            />
          </div>
          <div className="col-span-4">
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
              alt=""
            />
          </div>
          <div className="col-span-4">
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
              alt=""
            />
          </div>
          <div className="col-span-4 bg-teal-600 text-center text-white py-20 ">
            <p className="text-lg">How to identify illegal timber?</p>
            <p className="mt-5">Learn More</p>
          </div>
          <div className="col-span-4 bg-primary text-center text-white py-20 ">
            <p className="text-lg">Ongoing alert</p>
            <p className="mt-5">Find More</p>
          </div>
          <div className="col-span-4 bg-teal-100 text-center text-green-900 py-20 ">
            <p className="text-lg">Solved request</p>
            <p className="mt-5">Thank you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
