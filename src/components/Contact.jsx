import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
    <div className='max-w-[1200px] m-auto p-8'>
        <h1 className='text-6xl text-center font-light text-t1 pb-12'>Get in Touch</h1>
        <form action="https://getform.io/f/e643e1d4-d48a-4dca-b6ca-44105715dab0" 
              method="POST" 
              encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-8 w-full'>
                <div className='flex flex-col col-span-2 sm:col-span-1'>
                    <input className='rounded-lg p-2 bg-black/30 border-2 border-c2 text-white font-mono' placeholder='Name' type='text' name='name'/>
                </div>
                <div className='flex flex-col col-span-2 sm:col-span-1'>
                    <input className='rounded-lg p-2 bg-black/30 border-2 border-c2 text-white font-mono' placeholder='Email' type='email' name='email'/>
                </div>
                <div className='flex flex-col col-span-2'>
                    <input className='rounded-lg p-2 bg-black/30 border-2 border-c2 text-white font-mono' placeholder='Subject' type='text' name='subject'/>
                </div>
                <div className='flex flex-col col-span-2'>
                    <textarea className='rounded-lg p-2 bg-black/30 border-2 border-c2 text-white font-mono' placeholder='Write your message here' rows={10} name='message'/>
                </div>
                <div className='col-span-2 flex justify-center'>
                    <button className='bg-transparent border-c3 border-4 font-semibold font-mono text-xl text-white mt-4 p-2 rounded-3xl w-1/2 hover:bg-c3 hover:text-white transition duration-300'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

  )
}

export default Contact