import React, { useEffect, useState } from "react";
import BreakBtn from "../BreakBtn/BreakBtn";

import Swal from "sweetalert2";
const Details = ({totalAdded}) => {
 

const [time,setTime]=useState(0)

  const handleBreakTime=(time)=>{
    localStorage.setItem('break',time)
    setTime(time)

  }
  useEffect(()=>{
const storedBreakTime =localStorage.getItem('break')
const breakTime = JSON.parse(storedBreakTime)
setTime(breakTime)
  },[time])
 
  return (
    <div className="sticky top-5">
      <div className="profile flex flex-wrap gap-3">
        <div className="img ">
          <img
            className="h-12 w-12 rounded-full "
            src="https://scontent.fdac68-1.fna.fbcdn.net/v/t39.30808-6/272160991_140324801743980_7748238149535044986_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHpiPKDMpgaNatTdGt-3ETl3SCo5u9lO77dIKjm72U7vhbuN4ubSWoOfbvklkUxeCUYOv_Luiz7LxSoNuM2XplN&_nc_ohc=QVD2VrzrLIIAX8WiLP8&tn=Mmm6LXdW5ME4KYL2&_nc_zt=23&_nc_ht=scontent.fdac68-1.fna&oh=00_AT_0O0XxWu6OPNM_3K0oL6GkvPtDO212iu6WzQYDdgG8Sg&oe=63398DBD"
            alt=""
          />
        </div>
        <div className="info">
          <h4 className="text-lg font-medium">Mahamodul Hasan</h4>
          <div className="text-gray-400  flex flex-wrap">
            <span className=" inline-block">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </span>{" "}
            <span>Netrakona,Bangladesh</span>
          </div>
        </div>
      </div>
      {/* info card */}

      <div className="info-cards   flex flex-wrap justify-around">
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
          <BreakBtn 
          handleBreakTime={handleBreakTime}
          />
        </div>
      </div>
      {/* exercise details */}

      <div className="activity-details">
        <h2 className="text-2xl font-medium text-gray-600 ">
          Activity Details
        </h2>
        <div className="showDetails">
          {/*input 1 */}
          <div className="exercise-time">
            <div className="rounded  bg-[#d9e2ec]  m-2 p-2 my-5">
              <div className="flex flex-wrap items-center justify-between my-3 px-4">
                <p className="text-xl font-medium text-gray-700">
                  Total Activity : 
                </p>
                <p className="font-medium">
                {totalAdded} <span className="text-sm font-mono">min</span>
                </p>
              </div>
            </div>
          </div>
          <div className="break-time">
            <div className="rounded  bg-[#d9e2ec]  m-2 p-2 my-5">
              <div className="flex flex-wrap items-center justify-between my-3 px-4">
                <p className="text-xl font-medium text-gray-700">Break :</p>
                <p className="font-medium">
                  {time} <span className="text-sm font-mono">min</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-violet-400 py-2 cursor-pointer shadow w-full  rounded text-white mt-2" onClick={() => {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Succrssfully done your task',
                  showConfirmButton: false,
                  timer: 1500
                })
            }}>Completed Activity</button>
           
    </div>
  );
};

export default Details;
