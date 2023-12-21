import React from "react";
import MetricR1 from "./MetricsRow_1";
import MetricR2 from './MetricRow_2'

function CompanyMetrics() {
  return (
    <div>
      {/* Container Metric */}
      <div>
        <p className="font-semibold text-sm">Company Metrics</p>
        <MetricR1 />
        <MetricR2 />
      </div>
    </div>
  );
}

export default CompanyMetrics;
