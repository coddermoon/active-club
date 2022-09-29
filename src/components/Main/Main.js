
import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Subjects from "../Subjects/Subjects";


const Main = () => {


  
// load data
const [addDuration,setDuration]= useState(0)
const [subjects,setSubjects]= useState([])
useEffect(()=>{
  fetch('./data/data.json')
  .then(res=>res.json())
  .then(data =>setSubjects(data))
  
},[])

let duration= 0;
const handleAddBtn = (dur)=>{
  
  duration = addDuration + dur


  setDuration(duration)
}
console.log(duration);

  return (
    <div className="main grid  grid-cols-12 gap-4">
      <div className="content col-span-9">
        <Subjects 
        key={subjects.id}
        subjects={subjects}
        handleAddBtn={handleAddBtn}
        />
      </div>
      <div className="aside bg-white shadow-lg p-5 col-span-3">
        <Details
       
        
        />
      </div>
    </div>
  );
};

export default Main;
