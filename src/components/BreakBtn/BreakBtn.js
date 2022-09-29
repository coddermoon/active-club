import React from 'react';

const BreakBtn = ({handleBreakTime}) => {
    const dur = [5,10,15,20]

    return (
        <div className=' flex items-center flex-wrap gap-2 justify-between my-5'>
            {
              dur.map(time=>   <button onClick={()=>handleBreakTime(time)} className="badge badge-secondary badge-outline   py-3 px-3"> {time} min</button>)
            }
           
         
        </div>
    );
};

export default BreakBtn;