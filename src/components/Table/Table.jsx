import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./Table.css";

/*
 *
 * Coded by Md. Hasibul Hasan
 * Date: 04-Dec-2022
 * Version: 1.0.0
 * Email: hasibul.hasan2905@gmail.com
 * Phone: +8801780-568256
 *
 */

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_serverURL}/assets`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.data);
          setLoading(false);
          setError("");
        } else {
          setLoading(false);
          setError(data.error);
        }
      })
      .catch((err) => {
        setError(err.error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleDelete = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_serverURL}/assets/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    if (result.success) {
      toast.success(result.message);
      const newData = data.filter((item) => item._id !== id);
      setData(newData);
    } else {
      toast.error(result.error);
    }
  };

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Targets</th>
            <th>Description</th>
            <th>Category</th>
            <th>Team Members</th>
            <th>Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item?.programName}</td>
              <td>
                {item?.description.length > 60
                  ? item?.description.slice(0, 60) + "..."
                  : item?.description}
              </td>
              <td>{item?.category}</td>

              <td>
                {item?.team?.map((member, index) => (
                  <div key={index}>
                    <span>{member?.name}</span>
                  </div>
                ))}
              </td>
              <td>{new Date(item?.added).toLocaleString()}</td>
              <td>
                <div className="tableAction">
                  <button
                    onClick={() => {
                      const userConfirm = window.confirm(
                        "Are you sure to delete this item?"
                      );
                      if (userConfirm) {
                        handleDelete(item._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
