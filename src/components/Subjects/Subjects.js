import React from 'react';
import Subject from '../Subject/Subject';
import logo from '../../assets/images/images.jfif'

const Subjects = ({subjects,handleAddBtn}) => {

  


   
 
    return (
       <div className=' w-[98%] ml-auto my-8 '>
        <nav className='flex items-center gap-4 shadow-xl mb-6 sticky top-0 z-50 bg-white'>
         <img className='w-14 h-14' src={logo} alt="" />
        <h1 className='text-4xl my-7 text-violet-600 font-bold'>Track your own Activities</h1>
        </nav>
       <h3 className='text-2xl font-medium text-gray-600'>Today's Task List</h3>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            
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