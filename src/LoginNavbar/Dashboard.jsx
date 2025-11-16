import React from 'react'
import ListIterator from './ListIterator';
import { Outlet } from 'react-router-dom';
import Dashboard_iterator from './Dashboard_iterator';

const Dashboard = () => {
 const dashboard_list = ["introduction","installation","jsxrules","components","props","conditional reendering","hooks","form handling"];

  return (
    <div className="w-full h-[89vh] flex">
      <div className="w-[20%] h-full flex flex-col text-center justify-evenly">
        <ul className="w-[90%] h-full   flex flex-col  justify-evenly pl-[30px] font-bold border-[2px] shadow-lg">
          <Dashboard_iterator list={dashboard_list} />
        </ul>
      </div>
      <div className="w-[80%] h-full p-4 text-black mt-[40px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard
