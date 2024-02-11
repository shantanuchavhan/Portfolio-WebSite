import React, { useState } from 'react'

const Contact = () => {
  const [section, setSection] = useState('email')
  return (
    <div className="hidden md:block w-full flex flex-col gap-3">
      <h1 className=" text-[18px] md:text-[32px] italic font-semibold">
         Contact me
      </h1>
      <div className='bg-white text-black'>
        <div className="border flex justify-between  items-center h-[40px]  bg-gray-800 text-white border border-black">
          <div
            className={`${section === 'email' ? 'bg-gray-700 border-black' : ''}  border-x flex justify-center  items-center   h-full w-full cursor-pointer`}
            onClick={() => setSection('email')}
          >
            <h1>Email</h1>
          </div>
          <div
            className={`${section === 'linkdin' ? 'bg-gray-700 border-black' : ''} border-x h-full w-full cursor-pointer flex justify-center  items-center`}
            onClick={() => setSection('linkdin')}
          >
            <h1>Linkdin</h1>
          </div>
        </div>
        <div>
          {section === 'email' ? (
            <div className="flex items-center justify-center border p-4">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1>shantanuchavhan002@gmail.com</h1>
                <button className="border px-3 py-1 bg-gray-800 text-white">
                  Send Email
                </button>
              </div>
            </div>
          ) : section === 'linkdin' ? (
            <div className="flex items-center justify-center border p-4">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1>https://www.linkedin.com/in/shantanu-chavhan-2b89b3164/</h1>
                <a
                  href="https://www.linkedin.com/in/shantanu-chavhan-2b89b3164/"
                  className="border px-3 py-1 bg-gray-800 text-white"
                >
                  Connect
                </a>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
