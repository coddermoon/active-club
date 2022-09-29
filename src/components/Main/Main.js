import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Subjects from "../Subjects/Subjects";


const Main = () => {
  
// load data

const [subjects,setSubjects]= useState([])
useEffect(()=>{
  fetch('./data/data.json')
  .then(res=>res.json())
  .then(data =>setSubjects(data))
  
},[])

  return (
    <div className="main grid  grid-cols-5 gap-4">
      <div className="content col-span-4">
        <Subjects 
        key={subjects.id}
        subjects={subjects}
        />
      </div>
      <div className="aside bg-white shadow-lg p-5">
        <Details />
      </div>
    </div>
  );
};

export default Main;
