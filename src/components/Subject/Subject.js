import React from 'react';

const Subject = (props) => {
  const {subject,handleAddBtn}=props;
 

    const {name,img,description,duration}= subject
    
    return (
        <div className="card my-5 bg-base-100 shadow-xl">
  <figure><img className='h-[250px]' src={img} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">
      {name}
   
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-start items-center">
 <span>Duration</span>
      <div className="badge badge-secondary badge-outline">{duration} min</div>
     
    </div>
    <button onClick={()=>{
  
      handleAddBtn(duration)
 
    }}
       className='bg-violet-400 py-2 cursor-pointer shadow  rounded text-white mt-2' >Add To List</button>
  </div>
</div>
    );
};

export default Subject;