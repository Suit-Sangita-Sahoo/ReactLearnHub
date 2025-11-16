import ListIterator from "../LoginNavbar/ListIterator";
import { Outlet } from "react-router-dom";

const Home = () => {
 // const home_list = ["introduction","installation","jsxrules","components","props","conditional reendering","hooks","form handling"];

  return (
    // <div className="w-full h-[89vh] flex">
    //   <div className="w-[20%] h-full">
    //     <ul className="w-[90%] h-full  m-auto flex flex-col justify-evenly font-bold border-[2px] shadow-lg">
    //       <ListIterator list={home_list} />
    //     </ul>
    //   </div>
    //   <div className="w-[80%] h-full p-4 text-black mt-[40px]">
    //     <Outlet />
    //   </div>
    // </div>
    <div>
      <h1>Welcome to Page</h1>
    </div>
  );
};

export default Home;
