import React from "react";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  useScrollToTop();
  return (
    <div>
      <div>Hassss</div>
    </div>
  );
};

export default Dashboard;
