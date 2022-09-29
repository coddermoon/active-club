import React from 'react';
import Subject from '../Subject/Subject';


const Subjects = ({subjects,handleAddBtn}) => {

  


   
 
    return (
       <div className=' w-[98%] ml-auto my-8'>
       <h3 className='text-2xl font-medium text-gray-600'>Today's Task List</h3>
         <div className='grid grid-cols-3 gap-4'>
            
            
            {
               subjects.map(subject=><Subject 
               key={subject.id}
               subject={subject}
               handleAddBtn={handleAddBtn}
               />)
            }
              
             
           </div>
       </div>
    );
};

export default Subjects;