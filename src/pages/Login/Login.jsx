import React, { useContext, useEffect, useState } from "react";
import authentication from "../../assets/others/authentication1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathName || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result?.user;
        Swal.fire({
          title: "User Login Successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    const use_captcha_value = e.target.value;
    if (validateCaptcha(use_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //   Handle Google Sign In
  const handleGoogleSinIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign Up Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <>
      {/* Dynamic Title Part*/}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
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
                    onBlur={handleValidateCaptcha}
                    // required
                  />
                </div>
                <div className="form-control mt-6">
                  {/* TODO : Make btn disable for the captcha */}
                  <input
                    type="submit"
                    className="btn btn-primary bg-[#D1A054] hover:bg-[#D1A054] border-0 bg-opacity-70 text-white font-bold text-xl"
                    value="Login"
                    // disabled={disabled}
                    disabled={false}
                  />
                </div>
                <div className="form-control mt-6">
                  <p className="text-dark-yellow text-center">
                    New here?{" "}
                    <Link to="/registration">Create a New Account</Link>
                  </p>
                  <p className="text-center text-solid font-medium text-xl mt-3">
                    Or sign in with
                  </p>
                  <div className="flex justify-center items-center space-x-5 mt-5 text-xl text-[#444444]">
                    <FaFacebook />
                    <FaGoogle onClick={handleGoogleSinIn} />
                    <FaGithub />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
