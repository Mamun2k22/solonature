import React, { useState } from 'react';

const Login = () => {
    const [passwordEntered, setPasswordEntered] = useState()
    return (
        <div>
       <div className="max-w-sm w-full bg-white rounded">
        <div className="mb-4 border-gray-200">
            <img src="https://i.ibb.co/4NVMBPr/homesix.jpg" alt="Background Image" className="w-full h-auto" />
        </div>
        <form>   
          <div className='grid justify-items-center'>

          <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
          <input
            type="text"
            placeholder="Email"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
          />
          
        </div>
        <div className="mb-4 mt-6 relative">
       <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
          <input
            type="text"
            placeholder="Password"
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
       
    </form>
       <div className='mx-auto h-[5px] w-40 bg-black mt-8 rounded '>
            
      </div>
       </div>

        </div>
    );
};

export default Login;