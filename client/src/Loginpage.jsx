import React, { PureComponent } from "react";
import "./css/Loginpage.css";
import { useState } from "react";
import axios from 'axios';

export default function Loginpage() {
  const [loginData, setLoginData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const onLoginclick = async(event) => {
	event.preventDefault();
	//decontruction array
	const {email,phoneNumber,password}=loginData;
	if ((!email || !phoneNumber)&&(!password)) {
		alert("Please enter either email or phone number with password.");
		return;
	  } 

	  const response=await axios.post("http://localhost:3000/login",loginData) 
	  .then((response)=>
	  {
      alert(response.data);
	  })
	  .catch((error)=>{
		console.error("API error:", error);
	  });
    console.log("loginData after API call:", loginData);
	 

  };
  return (
    <div>
      <main className="main">
        <div className="logincontainer">
          <section className="wrapper">
            <div className="heading">
              <h1 className="text text-large" id="text-large">
                Welcome back to Yumtiffin
              </h1>
              <p id="Login-heading">Login to continue</p>
            </div>
            <form name="signin" className="form" onSubmit={onLoginclick}>
              <p id="login-label">Email</p>
              <div className="input-control">
                <label htmlFor="email" className="input-label" hidden>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Email Address"
                />
              </div>
              <p id="login-label">phoneNumber</p>
              <div className="input-control">
                <label htmlFor="phoneNumber" className="input-label" hidden>
				phoneNumber
                </label>
                <input
                  type="Number"
                  name="phoneNumber"
                  id="email"
                  value={loginData.phoneNumber}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="phoneNumber"
                />
              </div>
              <div className="input-control">
                <p id="login-label">Password</p>
                <label htmlFor="password" className="input-label" hidden>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  id="password"
                  className="input-field"
                  placeholder="Password"
                />
              </div>
              <div className="input-control-fgpass">
                <a href="#" className="text text-links">
                  Forgot Password
                </a>
              </div>
              <div>
                <input
                  type="submit"
                  name="submit"
                  onSubmit={onLoginclick}
                  className="input-submit"
                  value="Sign In"
                  
                />
              </div>
            </form>
            <div className="striped">
              <span className="striped-line">
                ----------------------------------------------{" "}
              </span>
              <span className="striped-text">or continue with </span>
              <span className="striped-line">
                -----------------------------------------------
              </span>
            </div>
            <div className="method">
              <div className="method-control1">
                <a href="#" className="method-action">
                  Login with Google
                </a>
              </div>
              <div className="method-control2">
                <a href="#" className="method-action">
                  Login with Phonenumber
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
