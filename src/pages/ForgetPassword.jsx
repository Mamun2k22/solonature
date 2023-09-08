import React, { useState } from 'react';

const ForgetPassword = () => {
    const [passwordEntered, setPasswordEntered] = useState()
    return (
        <div>
       <div className="max-w-sm w-full bg-white rounded">
        <div className="mb-4 border-gray-200">
            <img src="https://i.ibb.co/6WGqmz4/forget.jpg" alt="Background Image" className="w-full h-auto" />
        </div>
        <form>   
          <div className='grid justify-items-center mt-12 gap-6'>
         <h1 className='text-black font-bold text-[26px] '>Password dimenticata?</h1>
          <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
          <input
            type="text"
            placeholder="Inserisci la tua email"
            className="focus:outline-0 placeholder:text-[20px] text-center font-md placeholder:text-black bg-base-200 w-full"
          />
          
        </div>

       </div>

        <div className=" flex justify-center mt-6 space-x-4">
        <button className="bg-black text-white py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]">Reimposta password</button>
        </div>
       
    </form>
       <div className='mx-auto h-[5px] w-40 bg-black mt-8 rounded '>
            
      </div>
       </div>

        </div>
    );
};

export default ForgetPassword;