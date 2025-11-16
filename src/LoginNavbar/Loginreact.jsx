import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Loginreact = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formdata, [name]: value })
  }

  const generateToken = (data) => {
    return (JSON.stringify(data))
  }

  const handleForm = (e) => {
    e.preventDefault()

    const storedData = JSON.parse(localStorage.getItem("userData"))

    if (!storedData) {
      alert("No user found. Please register first.")
      navigate("/sign")
      return
    }

    if (!formdata.email || !formdata.password) {
       alert("Please fill in all fields before logging in.")
      return
    }

    if (
      formdata.email === storedData.email &&
      formdata.password === storedData.password
    ) {
      alert("Login Successful ✅")

      const token = generateToken(storedData)
      localStorage.setItem("Token", token)
      console.log("Generated Token:", token)

      setTimeout(() => navigate("/dashboard"), 1000)

    } else {
      alert("Invalid email or password ❌")
    }
  }

  return (
    <form onSubmit={handleForm}>
      <div className='w-[400px] h-[400px] bg-zinc-900 mx-auto mt-[150px] text-white rounded-xl p-6'>
        <h1 className='text-[22px] text-center font-bold mb-6'>Welcome Back ⭐</h1>

        <label className='block mb-4'>
          <p className='pl-[5px] mb-1'>Email Address</p>
          <input
            type="text"
            name="email"
            placeholder='Enter Your Email'
            className='rounded-md w-full h-[40px] text-black px-2'
            value={formdata.email}
            onChange={handleChange}
          />
        </label>

        <label className='block mb-6'>
          <p className='pl-[5px] mb-1'>Password</p>
          <input
            type="password"
            name="password"
            placeholder='Enter Your Password'
            className='rounded-md w-full h-[40px] text-black px-2'
            value={formdata.password}
            onChange={handleChange}
          />
        </label>

        <button 
          type="submit"
          className='w-full h-[40px] bg-blue-800 rounded-md'
        >
          Login
        </button>

        <div className="flex justify-center mt-[25px]">
          <p>Don't have an account?</p>
          <Link to="/sign" className='text-blue-400 font-bold ml-2'>
            Sign up
          </Link>
        </div>
      </div>
    </form>
  )
}

export default Loginreact
