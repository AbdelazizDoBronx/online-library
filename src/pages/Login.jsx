import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkAuth } from '../redux/authSlice'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()

  const handlleSubmit = (e) => {
    e.preventDefault()
    dispatch(checkAuth({email,password}))
    console.log('from login',password,email)
    console.log('clicked')
  }

  return (
    <div className='max-w-3xl mx-auto mt-10'>
     <h2 className='text-center mb-2 text-3xl font-bold text-neutral-500'>Welcome Back , we've missed you</h2>
     <p className='text-center text-sm font-medium underline'>login to your account</p>
      <form className='' onSubmit={(e)=>handlleSubmit(e)}>
        <div className='flex flex-col'>
          <label className=' mt-5 mb-1 text-xl '>Email</label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
          type='text' className='shadow-sm border-2 w-[90%] py-3 px-5 rounded-md focus:outline-slate-500 '/>
        </div>
        <div className='flex flex-col'>
          <label className=' mt-5 mb-1 text-xl '>Password</label>
          <input
          onChange={(e)=>setPassword(e.target.value)}
          type='text' className='shadow-sm border-2 w-[90%] py-3 px-5 rounded-md focus:outline-slate-500 '/>
        </div>
        <button className='mt-3 font-semibold bg-purple-500 text-white px-20 py-3 rounded-md shadow-md'>Register</button>
      </form>
  </div>
  )
}

export default Login