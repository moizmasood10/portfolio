import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
    <div className='max-w-[1200px] m-auto p-8'>
        <h1 className='pb-12 text-6xl font-light text-center text-t1'>Get in Touch</h1>
        <form action="https://getform.io/f/e643e1d4-d48a-4dca-b6ca-44105715dab0" 
              method="POST" 
              encType='multipart/form-data'>
            <div className='grid w-full gap-8 md:grid-cols-2'>
                <div className='flex flex-col col-span-2 sm:col-span-1'>
                    <input className='p-2 font-mono text-white border-2 rounded-lg bg-black/30 border-c2' placeholder='Name' type='text' name='name'/>
                </div>
                <div className='flex flex-col col-span-2 sm:col-span-1'>
                    <input className='p-2 font-mono text-white border-2 rounded-lg bg-black/30 border-c2' placeholder='Email' type='email' name='email'/>
                </div>
                <div className='flex flex-col col-span-2'>
                    <input className='p-2 font-mono text-white border-2 rounded-lg bg-black/30 border-c2' placeholder='Subject' type='text' name='subject'/>
                </div>
                <div className='flex flex-col col-span-2'>
                    <textarea className='p-2 font-mono text-white border-2 rounded-lg bg-black/30 border-c2' placeholder='Write your message here' rows={10} name='message'/>
                </div>
                <div className='flex justify-center col-span-2'>
                    <button className='w-1/2 p-2 mt-4 font-mono text-xl font-semibold text-white transition duration-300 bg-transparent border-4 border-c3 rounded-3xl hover:bg-c3 hover:text-white'>
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