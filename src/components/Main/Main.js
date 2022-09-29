
import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Subjects from "../Subjects/Subjects";


const Main = () => {


  
// load data
const [addDuration,setAddDuration]= useState([])
const [subjects,setSubjects]= useState([])
useEffect(()=>{
  fetch('./data/data.json')
  .then(res=>res.json())
  .then(data =>setSubjects(data))
  
},[])


const handleAddBtn = (dur)=>{
  
  const newDurArr = [...addDuration,dur]


  setAddDuration(newDurArr)


}
const totalAdded = addDuration.reduce((partial,current)=>partial+current,0)



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
       totalAdded={totalAdded}
        
        />
      </div>
    </div>
  );
};

export default Main;
