import React from "react";
import { useNavigate } from "react-router-dom";
import "./Target.css";

const Target = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-align-center flex-justify-between">
        <div className="filter">
          <span>Filter</span>
          <select name="filter" id="filter">
            <option value="status">Status</option>
            <option value="completed">Last Scanned</option>
          </select>
        </div>
        <div className="target-block">
          <button onClick={() => navigate("/dashboard/target/add-new")}>
            Add Target
          </button>
          <button>Scan Target</button>
          <button>Delete Multiple Target</button>
        </div>
      </div>
    </div>
  );
};

export default Target;
