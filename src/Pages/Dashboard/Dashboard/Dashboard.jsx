import React from "react";
import Table from "../../../components/Table/Table";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  useScrollToTop();
  return (
    <div>
      <div>
        <h2>Assets</h2>
      </div>
      <div className="target-table">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
