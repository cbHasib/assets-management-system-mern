import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../Context/UserContext";
import { getAuthErrorMessage } from "../../../CustomFunction/getAuthErrorMessage";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import "./Login.css";

const Login = () => {
  useTitle("Login");
  useScrollToTop();

  const [load, setLoad] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    setLoad(true);

    try {
      signIn(email, password)
        .then((result) => {
          toast.success("Login Successful");
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
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="title-name">Login your account</h1>
          <input required type="email" name="email" placeholder="Your Email" />
          <input
            required
            type="password"
            name="password"
            placeholder="Your Password"
          />
          <button disabled={load}>
            {load ? (
              <div className="flex flex-justify-center">
                <SmallSpinner />
              </div>
            ) : (
              "Login"
            )}
          </button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
