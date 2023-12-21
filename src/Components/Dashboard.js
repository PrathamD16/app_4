import React from "react";
import CompanyMetrics from "./CompanyMetrics";
import Graph from "./Graph";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <CompanyMetrics />
      <Graph />
    </div>
  );
}

export default Dashboard;
