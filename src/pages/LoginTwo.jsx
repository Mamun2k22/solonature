import React, { useState } from 'react';

const LoginTwo = () => {
    return (
        <div className=''>
       <div className="max-w-sm w-full bg-white rounded">
      <h1 className='mx-8 mt-10'> Login</h1>
        <form>   
        <div className='grid justify-items-center mt-8'>

<div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
<input
  type="text"
  placeholder="eva@solonautru.com"
  className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
/>

        </div>
<div className="mb-4 mt-6 relative">
<div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
<input
  type="text"
  placeholder="••••••"
  className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
/>
  <span>
  {" "}
 <img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/128/9428/9428781.png" alt="" srcset="" />
</span>
        </div>
</div>

</div>

<div className="mb-4 text-end pr-8">
  <a href="#" className="text-blue-500 text-sm hover:underline">Password dimenticata?</a>
</div>

        <div className=" flex justify-center mt-6 space-x-4">
        <button className="bg-[#d4c4b0] text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]">Login</button>
        </div>

        <div className='flex justify-between items-center px-8 space-x-2'>

        <div className='h-[2px] w-32 bg-black col-start-1 col-end-2 mt-10'>
            
        </div>

        <div className='flex items-center justify-center col-start-2 col-end-3'>
            <h3 className='mt-7'>oppure</h3>
           
        </div>

        <div className='h-[2px] w-32 bg-black col-start-3 col-end-4 mt-10'>
       
        </div>

      </div>

        <div className=" flex justify-center mt-6 space-x-4">
        <button className="bg-black text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]">Register</button>
        </div>

        <div className="flex flex-row justify-center items-center mt-6">
            <button className="bg-[#dccfca] text-red-500 font-sans py-4 px-2 flex justify-center items-center gap-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[15px]">
                <img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/128/9392/9392775.png" alt="" />
                Password inserita errata
            </button>
        </div>

      
    </form>
    <div className='mx-auto h-[5px] w-40 bg-black mt-8 rounded '>
            
            </div>
    
       </div>

        </div>
    );
};

export default LoginTwo;