import React, { useState } from "react";
import toast from "react-hot-toast";

const AddTeam = ({ formData, setFormData, formSubmit }) => {
  const [memberNo, setMemberNo] = useState(1);

  return (
    <div className="formInputParent">
      <div className="steps">Step 3</div>
      <div className="formData">
        <div className="formDataText">
          <span className="inputTitle">Team</span>
          <span className="subText">Add Your Team Members</span>
        </div>

        {[...Array(memberNo).keys()].map((number) => (
          <div className="team-members-container" key={number}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.team[number]?.name}
                onChange={(e) => {
                  const team = formData.team;
                  team[number].name = e.target.value;
                  setFormData({ ...formData, team });
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.team[number]?.email}
                onChange={(e) => {
                  const team = formData.team;
                  team[number].email = e.target.value;
                  setFormData({ ...formData, team });
                }}
              />
            </div>
          </div>
        ))}

        <div className={memberNo >= 3 ? "hidden" : undefined}>
          <span
            onClick={() => {
              if (
                formData.team[memberNo - 1]?.name &&
                formData.team[memberNo - 1]?.email
              ) {
                setMemberNo(memberNo + 1);
              } else {
                toast.error("Please fill the previous member details first");
              }
            }}
            className="addMoreTeam"
          >
            + Add More
          </span>
        </div>

        <div className="formInput">
          <div className="formAction">
            <button
              onClick={() => {
                if (
                  formData.team[memberNo - 1]?.name &&
                  formData.team[memberNo - 1]?.email
                ) {
                  formSubmit();
                } else {
                  toast.error("Please fill the member details");
                }
              }}
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
