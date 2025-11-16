const Login = () => {
  return (
    <div className="m-0 h-screen w-screen">
    <div className="flex w-screen  justify-between *: items-center mx-[70px] ">
       <div className="hidden md:flex w-[50%] h-80 items-center justify-center mt-[200px]  mx-[100px] ">
        <img
          src="./public/instagram.png"
          alt="Instagram preview"
          className="w-[70%] rounded-xl  border-0 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />

      </div>


      <div className="w-[50%] h-full ">
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt="Instagram" className="w-[300px] h-[80px]  mt-[150px] mx-[50px]" />
        <input type="text" placeholder="phone number,username,or email" className="w-[300px] h-[50px] mx-[50px] text-center rounded-lg border border-solid " />
         <input type="text" placeholder="Password" className="w-[300px] h-[50px] mx-[50px] mt-[20px] text-center rounded-lg border border-solid " />
         <button className="w-[300px] h-[50px] mx-[50px] mt-[20px] text-center rounded-lg border border-solid  bg-blue-500">Login</button>
        
         <div>
            <div>
                 <div className="flex items-center my-4 w-[300px] mx-[50px]">
            <div className="flex-1 h-px bg-gray-300 w-[30px]"></div>
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300 w-[30px]"></div>
          </div>

            </div>
            <div>
                <button className="flex justify-center items-center gap-2 text-blue-700 font-semibold text-sm mb-4 mx-[110px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
              alt="Facebook"
              className="w-5 h-5 rounded-lg"
            />
            Log in with Facebook
          </button>
          <p  className="text-xs text-blue-900 text-left mx-[150px] font-bold">Forgot Password?</p>
          <div className="flex mx-[80px] mt-[30px] ">
            <div >
                <p>Doesn't have an account?</p>
            </div>
            <div>
                <a href="#" className="text-blue-700 font-bold">SignUp</a>
            </div>
          </div>
          


            </div>

         </div>
      </div>
      
    </div>
    <footer className=" text-xs text-gray-500 text-center font-bold space-y-2 mt-[100px] mb-[90px] mx-[70px]  ">
          <div className="flex flex-wrap justify-center gap-7 ">
            <a href="#">Meta</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Threads</a>
            <a href="#">Contact Uploading & Non-Users</a>
          </div>
          <p>English (UK) © 2025 Instagram from Meta</p>
        </footer>
    </div>
  )
}
export default Login
