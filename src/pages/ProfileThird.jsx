import React from 'react';

const ProfileThird = () => {
    return (
        <div className='mx-8'>
        <div className='flex items-center gap-24 mt-6'>
                <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/128/3877/3877262.png" alt="" srcset="" />
                <h2 className='font-bold text-black text-[23px]'>Ordini #3231</h2>
        </div>  

          {/* Card */}
            <div className='mt-10 bg-[#F1F5F9] w-80 px-4 py-3 shadow-md gap-6'>
            <div className='flex items-center gap-0 mx-14 mr-10'>
            <img className='h-7 w-7' src="https://i.ibb.co/CbLTQng/dots.png" alt="" srcset="" />
               
                <div className='h-[3px] w-20 bg-green-500 rounded'></div>
                <div className='h-[2px] w-24 bg-[#d0d8d4] rounded'></div>
                <img className='h-7 w-7' src="https://i.ibb.co/f9SpLbW/button.png" alt="" srcset="" />
            </div>

             <div className='flex justify-between mt-6'>

                <div className='grid justify-items-center gap-2 '>
                    <div> <img className='h-7 w-7' src="https://cdn-icons-png.flaticon.com/128/4296/4296929.png" alt="" srcset="" /></div>
                    <div>  <p className="text-black font-bold mt-2">Ordinato</p></div>
                    <div> <p className="text-black font-normal">2 voci - 12 agosto ’22</p></div>
                </div>
                <div className='grid justify-items-center gap-2'>
                    <img className='h-7 w-7' src="https://cdn-icons-png.flaticon.com/128/1442/1442912.png" alt="" srcset="" />
                    <p className="text-black font-bold mt-2">Stato ordine</p>
                    <p className="text-black font-normal">In lavorazione</p>
                </div>
                
             </div>
            </div>  
            <div className='mt-10'><h1 className="text-black font-semibold text-[20px]">Sommario d’ordine</h1></div>
            <div className='border-2 mt-5 w-80'></div>

            <div className='flex my-6 gap-8'>
                <img className='h-7 w-7' src="https://cdn-icons-png.flaticon.com/128/4807/4807774.png" alt="" srcset="" />
                <p className='text-black font-sans text-[18px]'>Pacchetto allergie × 1</p>
                <p className='text-black font-sans text-[18px]'>€51,80</p>
            </div>

            <div className='flex mt-8 gap-8'>
                <img className='h-7 w-7' src="https://cdn-icons-png.flaticon.com/128/4807/4807774.png" alt="" srcset="" />
                <p className='text-black font-sans text-[18px]'>BIOFENIX × 1</p>
                <p className='text-black font-sans text-[18px]'>€51,80</p>
            </div>
            <div className='border-2 mt-5 w-80'></div>
            <div className='flex items-center mt-4 gap-52'>
                <h2 className="text-black font semibold">Subtotale</h2>
                <h2 className="text-black font semibold">€51,80</h2>
            </div>
            <div className='border-2 mt-5 w-80'></div>
            <div className='flex items-center mt-4 gap-56'>
                <h2 className="text-black font-bold">Totale</h2>
                <h2 className="text-black font-bold text-[20px]">€51,80</h2>
            </div>

            <div className='mx-28 h-[5px] w-40 bg-black my-16 rounded'>
            
            </div>
        </div>
    );
};

export default ProfileThird;