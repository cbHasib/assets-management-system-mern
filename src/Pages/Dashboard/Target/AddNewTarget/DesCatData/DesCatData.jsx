import React from "react";
import toast from "react-hot-toast";

const DesCatData = ({ formData, setFormData, setPage }) => {
  return (
    <div className="formInputParent">
      <div className="steps">Step 2</div>
      <div className="formData">
        <div className="formDataText">
          <span className="inputTitle">Description</span>
          <span className="subText">Write your new program Description</span>
        </div>
        <div className="formInput">
          <textarea
            type="text"
            name="programName"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
        </div>

        <div className="formDataText">
          <span className="inputTitle">Category</span>
        </div>
        <div className="formInput">
          <select
            type="text"
            name="programName"
            value={formData.category}
            required
            defaultChecked="Select Category"
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
          >
            <option>Select Category</option>
            <option value="Website Testing">Website Testing</option>
            <option value="API Testing">API Testing</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
            <option value="IoT">IoT</option>
            <option value="Hardware Testing">Hardware Testing</option>
            <option value="Cloud Solution">Cloud Solution</option>
            <option value="Others">Others</option>
          </select>
          <div className="formAction">
            <button
              onClick={() => {
                if (formData.description && formData.category) {
                  setPage(3);
                } else {
                  toast.error(
                    "Please fill the program description and category first"
                  );
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

export default DesCatData;
