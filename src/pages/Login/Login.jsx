import React, { useEffect, useRef, useState } from "react";
import authentication from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const use_captcha_value = captchaRef.current.value;
    if (validateCaptcha(use_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <section className="bgImg">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row shadow-2xl">
          <div className="text-left lg:w-1/2">
            <img src={authentication} alt="" />
          </div>
          <div className="card shrink-0 w-full lg:w-1/2">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control font-inter">
                <h3 className="text-center text-lg lg:text-4xl font-bold text-solid pb-4">
                  Login
                </h3>
                <label className="label">
                  <span className="label-text text-xl font-semibold text-[#444444]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Here"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold text-[#444444]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Type Here"
                  className="input input-bordered bg-white"
                  ref={captchaRef}
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-3"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary bg-[#D1A054] hover:bg-[#D1A054] border-0 bg-opacity-70 text-white font-bold text-xl"
                  value="Login"
                  disabled={disabled}
                />
              </div>
              <div className="form-control mt-6">
                <p className="text-dark-yellow text-center">
                  New here? <Link to="/registration">Create a New Account</Link>
                </p>
                <p className="text-center text-solid font-medium text-xl mt-3">
                  Or sign in with
                </p>
                <div className="flex justify-center items-center space-x-5 mt-5 text-xl text-[#444444]">
                  <FaFacebook />
                  <FaGoogle />
                  <FaGithub />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
