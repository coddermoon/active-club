import React from 'react';

const BreakBtn = () => {
    const dur = [5,10,15,20]

    return (
        <div className=' flex items-center justify-between my-5'>
            {
              dur.map(time=>   <button class="badge badge-secondary badge-outline   py-3 px-3"> {time} min</button>)
            }
           
         
        </div>
    );
};

export default BreakBtn;