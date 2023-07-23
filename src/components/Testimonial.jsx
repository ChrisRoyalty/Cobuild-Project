import React from 'react';
import client1 from '../client-1.jpg';
import client2 from '../client-2.jpg';

function Testimonial() {
  return (
    <div className='w-full h-[70vh] flex items-center justify-center text-center'>
        <div className='w-[70%] flex flex-col items-center justify-start gap-10'>
            <div className='w-[55%]'>
                <p className='text-2xl font-semibold leading-10'>Our Clients Say</p>
                <p className='text-slate-600'>Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat pariature occaecat cupidatat proident culpa.</p>
            </div>
            <div className='flex text-sm text-slate-500 gap-6'>
                <div className='flex justify-center gap-5'>
                    <img src={client1} alt="client1" className='h-16'/>
                    <div className='flex flex-col items-start justify-center gap-5'>
                        <p>“It’s just brilliant. I will recommend Cobuild to everyone I know! I’m really glad to these guys got Cobuild out there.”</p>
                        <p className='text-black font-bold'>
                        Gene Stevens
                        </p>
                    </div>
                </div>
                <div className='flex justify-center gap-5'>
                    <img src={client2} alt="client2" className='h-16'/>
                    <div className='flex flex-col items-start justify-center gap-5'>
                        <p>“We are so excited to launch our new company, By using Cobuild it has a great features, I think you are all about to make me happy.”</p>
                        <p className='text-black font-bold'>
                        Gene Stevens
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial