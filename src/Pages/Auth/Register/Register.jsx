import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../Context/UserContext";
import { getAuthErrorMessage } from "../../../CustomFunction/getAuthErrorMessage";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  useScrollToTop();
  const [load, setLoad] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }

    setLoad(true);

    try {
      register(email, password)
        .then((result) => {
          toast.success("Registration Successful");
          setLoad(false);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setLoad(false);
          toast.error(getAuthErrorMessage(error));
        });
    } catch (error) {
      toast.error(getAuthErrorMessage(error));
      setLoad(false);
    }
  };

  return (
    <div className="form-center">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="title-name">Register a account</h1>
        <input required type="email" name="email" placeholder="Your Email" />
        <input
          required
          type="password"
          name="password"
          placeholder="Your Password"
        />
        <input
          required
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button disabled={load}>
          {load ? (
            <div className="flex flex-justify-center">
              <SmallSpinner />
            </div>
          ) : (
            "Register"
          )}
        </button>
        <p className="message">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
