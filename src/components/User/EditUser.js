import { CloudUploadOutlined } from "@material-ui/icons";
import React from "react";
import "./User.scss";
export default function EditUser() {
  return (
    <div className="editUser">
      <span className="editTitle">Edit</span>
      <div className="editContainer">
        <div className="form-container">
          <div className="form-element-wrap">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="annabeck99" />
          </div>

          <div className="form-element-wrap">
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" placeholder="Anna Becker" />
          </div>
          <div className="form-element-wrap">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="annabeck99@gmail.com" />
          </div>
          <div className="form-element-wrap">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" placeholder="+91 123 123456" />
          </div>
          <div className="form-element-wrap">
            <label htmlFor="address">Address </label>
            <input type="text" id="address" placeholder="New York, USA" />
          </div>
        </div>
        <div className="upload-img">
          <img
            src="https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzI5MjU4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <label htmlFor="file">
            <CloudUploadOutlined className="uploadicon" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
      </div>
      <div className="btn-di">
          <div></div>
        <button className="btn-primary">Update</button>
      </div>
    </div>
  );
}
