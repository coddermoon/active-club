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
    <div className="main grid  grid-cols-12 gap-4">
      <div className="content col-span-9">
        <Subjects 
        key={subjects.id}
        subjects={subjects}
        />
      </div>
      <div className="aside bg-white shadow-lg p-5 col-span-3">
        <Details />
      </div>
    </div>
  );
};

export default Main;
