import React, { useContext } from "react";
import authentication from "../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updatedUserProfile, googleLogin } =
    useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    createUser(email, password)
      .then((result) => {
        const user = result?.user;
        console.log(user);
        updatedUserProfile(name)
          .then(() => {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Sign Up Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //   Handle Google Sing Up
  const handleGoogleSinUp = () => {
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
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <section className="bgImg">
      {/* Dynamic Title Part*/}
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">
          <div className="text-left lg:w-1/2">
            <img src={authentication} alt="" />
          </div>
          <div className="card shrink-0 w-full lg:w-1/2">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control font-inter">
                <h3 className="text-center text-lg lg:text-4xl font-bold text-solid pb-4">
                  Sign Up
                </h3>
                <label className="label">
                  <span className="label-text text-xl font-semibold text-[#444444]">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Here"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
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
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary bg-[#D1A054] hover:bg-[#D1A054] border-0 bg-opacity-70 text-white font-bold text-xl"
                  value="Sign Up"
                />
              </div>
              <div className="form-control mt-6">
                <p className="text-dark-yellow text-center">
                  Already registered? <Link to="/login">Go to log in</Link>
                </p>
                <p className="text-center text-solid font-medium text-xl mt-3">
                  Or sign up with
                </p>
                <div className="flex justify-center items-center space-x-5 mt-5 text-xl text-[#444444]">
                  <FaFacebook />
                  <FaGoogle onClick={handleGoogleSinUp} />
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

export default SignUp;
