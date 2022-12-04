import React, { useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import ProgramNameData from "./ProgramName/ProgramNameData";
import "./AddNewTarget.css";
import DesCatData from "./DesCatData/DesCatData";
import AddTeam from "./AddTeam/AddTeam";

const AddNewTarget = () => {
  useTitle("Add New Target");

  const [formData, setFormData] = useState({
    programName: "",
    description: "",
    category: "",
    team: [
      {
        name: "",
        email: "",
      },
      {
        name: "",
        email: "",
      },
      {
        name: "",
        email: "",
      },
    ],
  });

  const [page, setPage] = useState(1);

  const formSubmit = () => {
    const team = formData.team.filter((member) => {
      return member.name && member.email;
    });

    const data = {
      programName: formData.programName,
      description: formData.description,
      category: formData.category,
      team,
    };

    console.log(data);
  };

  return (
    <div>
      {page === 1 && (
        <ProgramNameData
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
        />
      )}
      {page === 2 && (
        <DesCatData
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
        />
      )}
      {page === 3 && (
        <AddTeam
          formData={formData}
          setFormData={setFormData}
          formSubmit={formSubmit}
        />
      )}
    </div>
  );
};

export default AddNewTarget;
