import React from "react";

const Details = () => {
  return (
    <div>
      <div className="profile flex gap-3">
        <div className="img ">
          <img
            className="h-12 w-12 rounded-full "
            src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <h4 className="text-lg font-medium">Mahamodul Hasan</h4>
          <div className="text-gray-400  flex">
            <span className=" inline-block">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </span>{" "}
            <span>Netrakona,Bangladesh</span>
          </div>
        </div>
      </div>
      {/* info card */}

      <div className="info-cards  flex justify-around">
        <div className="rounded shadow-lg bg-[#F8FAFC]  m-2 p-2">
          <p>
            <span className="text-4xl">75</span>
            <span className="text-gray-500">kg</span>
          </p>
          <p className="text-2xl text-violet-600">weight</p>
        </div>
        {/*  */}
        <div className="rounded shadow-lg bg-[#F8FAFC]  m-2 p-2">
          <p>
            <span className="text-4xl">6.5</span>
            <span className="text-gray-500">feet</span>
          </p>
          <p className="text-2xl text-violet-600">Height</p>
        </div>
        {/*  */}
        <div className="rounded shadow-lg bg-[#F8FAFC]  m-2 p-2">
          <p>
            <span className="text-4xl">25</span>
            <span className="text-gray-500">yrs</span>
          </p>
          <p className="text-2xl text-violet-600">Age</p>
        </div>
        {/*  */}
       
      
      </div>
      
    </div>
  );
};

export default Details;
