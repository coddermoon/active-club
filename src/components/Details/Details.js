import React from "react";
import BreakBtn from "../BreakBtn/BreakBtn";

const Details = () => {
  return (
    <div>
      <div className="profile flex gap-3">
        <div className="img ">
          <img
            className="h-12 w-12 rounded-full "
            src="https://scontent.fdac68-1.fna.fbcdn.net/v/t39.30808-6/272160991_140324801743980_7748238149535044986_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHpiPKDMpgaNatTdGt-3ETl3SCo5u9lO77dIKjm72U7vhbuN4ubSWoOfbvklkUxeCUYOv_Luiz7LxSoNuM2XplN&_nc_ohc=QVD2VrzrLIIAX8WiLP8&tn=Mmm6LXdW5ME4KYL2&_nc_zt=23&_nc_ht=scontent.fdac68-1.fna&oh=00_AT_0O0XxWu6OPNM_3K0oL6GkvPtDO212iu6WzQYDdgG8Sg&oe=63398DBD"
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
      {/* breaking times */}

    <div className="break">
        <h2 className="text-2xl font-medium text-gray-600 ">Add A Break</h2>
        <div className="breakBtn">
        <BreakBtn/>
        </div>
    </div>
      
    </div>
  );
};

export default Details;
