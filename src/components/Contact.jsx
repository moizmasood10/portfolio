import React from 'react'

const Contact = () => {
  return (
    <div id="contact" >
        <div className='max-w-[1200px] m-auto md:pl-20 p-8 py-16'>
            <h1 className='text-6xl font-bold text-center text-t1 pb-16'>Contact</h1>
            <form action="https://getform.io/f/e643e1d4-d48a-4dca-b6ca-44105715dab0" 
                  method="POST" 
                  encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-16 w-full py-2'>
                <div className='flex flex-col py-2'>
                    <label className='text-white font-semibold uppercase text-md py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-white font-semibold uppercase text-md py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300'  type='email' name='email'/>
                </div>
                <div className='flex flex-col py-2 col-span-2'>
                    <label className='text-white font-semibold uppercase text-md py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300'  type='text' name='subject'/>
                </div>
                <div className='flex flex-col py-2 col-span-2'>
                    <label className='text-white font-semibold uppercase text-md py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300'  rows={10} name='message'/>
                </div>
                <button className='bg-transparent border-c3 border-4 font-semibold text-xl text-white mt-4 w-full p-4 rounded-lg col-span-2  hover:bg-c3 hover:text-white transition duration-300'>
                    Submit
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact