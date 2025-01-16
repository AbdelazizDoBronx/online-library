import React from 'react'

const Sign = () => {
  return (
    <div className='max-w-3xl mx-auto mt-10'>
      <h2 className='text-center mb-2 text-3xl font-bold text-neutral-500'>Welcome to the best libray in town!</h2>
      <p className='text-center text-sm font-medium underline'>Create your account for FREE</p>
      <form className=''>
        <div className='flex flex-col'>
          <label className='mt-5 mb-1 text-xl '>Full name</label>
          <input type='text' className='shadow-sm border-2 w-[90%] py-3 px-5 rounded-md focus:outline-slate-500 '/>
        </div>
        <div className='flex flex-col'>
          <label className=' mt-5 mb-1 text-xl '>Email</label>
          <input type='text' className='shadow-sm border-2 w-[90%] py-3 px-5 rounded-md focus:outline-slate-500 '/>
        </div>
        <div className='flex flex-col'>
          <label className=' mt-5 mb-1 text-xl '>Password</label>
          <input type='text' className='shadow-sm border-2 w-[90%] py-3 px-5 rounded-md focus:outline-slate-500 '/>
        </div>
        <button className='mt-3 font-semibold bg-purple-500 text-white px-20 py-3 rounded-md shadow-md'>Register</button>
      </form>
    </div>
  )
}

export default Sign