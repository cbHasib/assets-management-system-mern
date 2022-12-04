import React, { useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import ProgramNameData from "./ProgramName/ProgramNameData";
import "./AddNewTarget.css";
import DesCatData from "./DesCatData/DesCatData";
import AddTeam from "./AddTeam/AddTeam";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddNewTarget = () => {
  useTitle("Add New Target");
  const navigate = useNavigate();

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
  const [loading, setLoading] = useState(false);

  const formSubmit = async () => {
    const team = formData.team.filter((member) => {
      return member.name && member.email;
    });

    const data = {
      programName: formData.programName,
      description: formData.description,
      category: formData.category,
      added: new Date(),
      team,
    };

    setLoading(true);

    const response = await fetch(`${process.env.REACT_APP_serverURL}/assets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      setLoading(false);
      toast.success(result.message);
      navigate("/dashboard/target");
    } else {
      setLoading(false);
      toast.error(result.error);
    }
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
          loading={loading}
        />
      )}
    </div>
  );
};

export default AddNewTarget;
