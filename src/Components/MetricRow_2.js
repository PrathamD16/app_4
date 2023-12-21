import React from "react";

function CompanyMetric_2() {
  return (
    <div>
      <div className="my-4 flex justify-between space-x-5">
        <div className="bg-gray-100 flex flex-1 shadow-md">
          <div className="bg-green-500 px-1"></div>
          <div className="px-4 py-2 space-y-4">
            <p className="text-red-500 font-semibold">$110,448.8</p>
            <p className="text-sm">Outstanding amount</p>
          </div>
        </div>
        <div className=" bg-gray-100 flex flex-1 shadow-md">
          <div className="bg-green-500 px-1"></div>
          <div className="px-4 py-2 space-y-4">
            <p className=" font-semibold">105</p>
            <p className="text-sm">Membership sold</p>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-1 shadow-md">
          <div className="bg-green-500 px-1"></div>
          <div className="px-4 py-2 space-y-4">
            <p className=" font-semibold">436</p>
            <p className="text-sm">Jobs Completed</p>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-1 shadow-md ">
          <div className="bg-green-500 px-1"></div>
          <div className="px-4 py-2 space-y-4">
            <p className=" font-semibold">65</p>
            <p className="text-sm">Jobs cancelled</p>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default CompanyMetric_2;
