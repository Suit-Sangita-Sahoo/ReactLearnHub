import { Link } from "react-router-dom"
import NavList from "./NavList"


const Navbar=({changed })=>{
    return(
        <div className="w-full h-[80px]  bg-blue-50  flex shadow-2xl fixed snap-normal">
            <div className="w-[20%] h-[50px] font-bold text-[50px] flex items-center justify-center " >
                <img src="./public/FinalProjectlogo.png" alt=""  className="w-[200px] h-[80px] mt-[40px]"/>
            </div>
            <div className="w-[20%] h-full">

            </div>
            <div className="w-[50%] h-full  ">
                <NavList/>
                 </div>
            <div className="w-[10%] h-full  flex items-center justify-center">
                <div className="w-[70px] h-[50px] bg-white-200  cursor-pointer text-center shadow-lg rounded-lg hover:bg-white-600 ">
                   <div className="w-[65px] h-[45px] bg-blue-300 hover:bg-blue-500 hover:text-white">
                    <Link to="/login"><button className="px-4 py-2 rounded-md">
      {changed ? "Logout" : "Login"}
    </button></Link>
                   </div>
                </div>

            </div>

        </div>
    )
}
export default Navbar