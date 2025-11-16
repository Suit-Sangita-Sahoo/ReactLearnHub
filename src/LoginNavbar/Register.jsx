import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
 const handleSubmit = (e) => {
  e.preventDefault()

  if (!formData.username || !formData.email || !formData.password || !formData.age) {
    alert("Please fill in all fields.")
    return
  }

  const storeData=localStorage.setItem("userData", JSON.stringify(formData))
  console.log("Saved data:", localStorage.getItem("userData")) 
  setFormData({ username: "", email: "", password: "", age: "" })
  alert("Registration Successful!")
  if (!storeData) {
      alert("No user found. Please register first.")
      navigate("/sign")
      return
      
    }
     

    if (
      formData.email === storeData.email &&
      formData.password === storeData.password
    ) {
      alert("Login Successful ")
      navigate("/dashboard")
    } else {
      alert("Invalid email or password ❌")
    }

 
}
const handleInput=({para})=>{
  
  navigate("/homelogin")
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex text-center justify-center pt-[200px]">
        <div className="w-[300px] h-[500px] bg-gray-400 border-5 rounded-3xl">
          <p className="text-[20px] font-bold pt-[20px] flex justify-center">Create Account</p>

         
          <label className="flex flex-col justify-start pr-[160px]">
            <p>Username</p>
            <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} className="w-[250px] h-[35px] mx-[25px] rounded-md" />
          </label>

         
          <label className="flex flex-col justify-start pr-[190px] pt-[20px]">
            <p>Email</p>
            <input type="text" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} className="w-[250px] h-[35px] mx-[25px] rounded-md" />
          </label>

          
          <label className="flex flex-col justify-start pr-[160px] pt-[20px]">
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} className="w-[250px] h-[35px] mx-[25px] rounded-md" />
          </label>

          
          <label className="flex flex-col justify-start pr-[200px] pt-[20px]">
            <p>Age</p>
            <input type="text" name="age" placeholder="Enter age" value={formData.age} onChange={handleChange} className="w-[250px] h-[35px] mx-[25px] rounded-md" />
          </label>
          
          <button type="submit" className="w-[250px] h-[40px] bg-blue-900 mt-[40px] rounded-md text-white cursor-pointer">
            Register
          </button>
           <div className="flex mx-[20px] mt-[30px] ">
            <div >
                <p>Already have an Account</p>
            </div>
            <div>
                {/* <Link to="homelogin" onClick={handleInput}>Login</Link> */}
                <p onClick={handleInput} className='text-blue-800 cursor-pointer'>Login</p>

                
            </div>
          </div>
          

          
        </div>
      </form>
    </div>
  )
}

export default Register
