import React from "react";
import "./NewUser.scss";
export default function NewUser() {
  return (
    <div className="newUser">
      <span className="userTile">New User</span>
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-item">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" placeholder="john" />
          </div>
          <div className="form-item">
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" placeholder="John Doe" />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@gmail.com" />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-item">
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="+12 -1234567894" />
          </div>
          <div className="form-item">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="New York " />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-item">
            <label htmlFor="male">Gender</label>
            <div className="userGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="address">Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>
      <button className="blue-btn">Create User</button>
    </div>
  );
}
