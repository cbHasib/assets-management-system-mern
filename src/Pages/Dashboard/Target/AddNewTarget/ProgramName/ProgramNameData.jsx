import React from "react";
import toast from "react-hot-toast";

const ProgramNameData = ({ formData, setFormData, setPage }) => {
  return (
    <div className="formInputParent">
      <div className="steps">Step 1</div>
      <div className="formData">
        <div className="formDataText">
          <span className="inputTitle">Program Name</span>
          <span className="subText">Write your new program name</span>
        </div>
        <div className="formInput">
          <input
            type="text"
            name="programName"
            value={formData.programName}
            onChange={(e) => {
              setFormData({ ...formData, programName: e.target.value });
            }}
          />
          <div className="formAction">
            <button
              onClick={() => {
                if (formData.programName) {
                  setPage(2);
                } else {
                  toast.error("Please fill the program name first");
                }
              }}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramNameData;
