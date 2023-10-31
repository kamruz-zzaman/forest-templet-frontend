import React from "react";
import Header from "../components/Header";

const data = [
  {
    type: "Unmarked and covered stumps",
    address: "some location",
    name: "Mahmud The Engineer",
    email: "mahmud@eng.com",
    status: "Unsolved",
    media: "url",
    date: "20 Nov 2023",
  },
  {
    type: "Unmarked and covered stumps",
    address: "some location",
    name: "Mahmud The Engineer",
    email: "mahmud@eng.com",
    status: "Unsolved",
    media: "url",
    date: "20 Nov 2023",
  },
  {
    type: "Unmarked and covered stumps",
    address: "some location",
    name: "Mahmud The Engineer",
    email: "mahmud@eng.com",
    status: "Unsolved",
    media: "url",
    date: "20 Nov 2023",
  },
];

export default function Admin() {
  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto mt-16 px-12 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {data.map((dt, i) => {
          return (
            <div
              key={i}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <a href="#">
                <img class="rounded-t-lg" src={dt.media} alt="" />
              </a>
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {dt.type}
                </h5>
                <p class="mb-2 font-normal text-gray-700 ">
                  Where it happend: {dt.address}
                </p>
                <p class="mb-2 font-normal text-gray-700">User : {dt.name}</p>
                <p class="mb-2 font-normal text-gray-700">Date : {dt.date}</p>
                <p class="mb-2 font-normal text-gray-700">Email : {dt.email}</p>
                <p class="mb-8 font-normal text-gray-700">
                  Status : {dt.status}
                </p>

                <div className="flex gap-4">
                  <button class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Add To Map
                  </button>
                  <button class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-md hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ">
                    Marked it Solved
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
