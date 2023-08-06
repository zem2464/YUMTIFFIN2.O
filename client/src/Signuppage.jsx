import React from "react";
import "./css/Signuppage.css";
import { useState } from "react";
import axios from 'axios';
export default function Signuppage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleonSubmit = async(event) => {
    event.preventDefault();
    const { email, phoneNumber } = formData;
    if (!email && !phoneNumber) {
      alert("Please enter either email or phone number.");
      return;
    } 
      await axios
        .post("http://localhost:3000/register",formData) 
        .then((response) => {
          
          console.log("API response:", response.data);
        })
        .catch((error) => {
          
          console.error("API error:", error);
        });
      setFormData({
        ...formData,
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
      });
    
  };
  return (
    <div>
      <main className="main">
        <div className="signupcontainer">
          <section className="wrapper">
            <div className="heading">
              <h1 className="text text-large" id="text-large">
                Register your account
              </h1>
              <p id="register-heading">Fill the below details to register</p>
            </div>
            <form
              name="signin"
              className="form"
              onSubmit={handleonSubmit}
            >
              <div id="flnamelabel">
                <p id="fnamelabel">First Name</p>

                <p id="lnamelabel">Last Name</p>
              </div>
              <div id="flname">
                <div className="input-control">
                  <label htmlfor="text" className="input-label" hidden>
                  firstname
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="fname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="firstname"
                    required
                  />
                </div>
                <div className="input-control">
                  <label htmlfor="text" className="input-label" hidden>
                  lastname
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="lastname"
                    required
                  />
                </div>
              </div>

              <p id="login-label">Email</p>
              <div className="input-control">
                <label htmlfor="email" className="input-label" hidden>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  className="input-field"
                  
                  placeholder="Email Address"
                />
              </div>
              <div className="striped">
                <span className="striped-line">
                  ----------------------------------------------{" "}
                </span>
                <span className="striped-text">or continue with </span>
                <span className="striped-line">
                  -----------------------------------------------
                </span>
              </div>
              <div className="input-control">
                <p id="login-label">Phone Number</p>
                <label htmlfor="phone" className="input-label" hidden>
                  phone number
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Phone number"
                  pattern="[0-9]{10}"
                />
              </div>
              <div className="input-control">
                <p id="login-label">Password</p>
                <label htmlfor="password" className="input-label" hidden>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="method">
                <div className="method-control1">
                  <a href="#" className="method-action">
                    Sign Up with Google
                  </a>
                </div>
                <div>
                  {/* <input type="submit" name="submit" onSubmit={handleonSubmit} className="input-submit" value="Continue" /> */}
                  <button
                    type="submit"
                    onSubmit={handleonSubmit}
                    className="input-submit"
                  >
                    Continue
                  </button>
                </div>
                <div className="already">
                  <span id="already-account">Already have an account?</span>
                  <span>
                    <a href="/loginpage" className="already-login">
                      Login
                    </a>
                  </span>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
