import React from "react";

function Box() {
  return (
    <div className="my-4 flex justify-between space-x-5">
      <div className="bg-gray-100 flex flex-1 shadow-md">
        <div className="bg-green-500 px-1"></div>
        <div className="px-4 py-2 space-y-4">
          <p className="text-green-500 font-semibold">$406,411.29</p>
          <p className="text-sm">Total Revenue</p>
        </div>
      </div>
      <div className=" bg-gray-100 flex flex-1 shadow-md">
        <div className="bg-green-500 px-1"></div>
        <div className="px-4 py-2 space-y-4">
          <p className=" font-semibold">$620</p>
          <p className="text-sm">Total Jobs Avg</p>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-1 shadow-md">
        <div className="bg-green-500 px-1"></div>
        <div className="px-4 py-2 space-y-4">
          <p className=" font-semibold">655</p>
          <p className="text-sm">Tickets Created</p>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-1 shadow-md ">
        <div className="bg-green-500 px-1"></div>
        <div className="px-4 py-2 space-y-4">
          <p className=" font-semibold">735</p>
          <p className="text-sm">Tickets scheduled</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
