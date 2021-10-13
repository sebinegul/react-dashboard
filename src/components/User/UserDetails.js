import React from "react";
import "./User.scss";
import {
  PersonOutline,
  CalendarToday,
  PhoneAndroidOutlined,
  MailOutline,
  PlaceOutlined,
 
} from "@material-ui/icons";
export default function UserDetails() {
  return (
    <div className="userDetails">
      <div className="userProfile">
        <img
          src="https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzI5MjU4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="nameContainer">
          <span className="profileName">Anna Becker</span>
          <span className="profileDesignation">Software Engineer</span>
        </div>
      </div>
      <div className="accountDetailsContainer">
        <span className="accountDetails">Account Details</span>
        <div className="iconContainer">
          <PersonOutline className="icon-color" />
          <span>annabeck99</span>
        </div>
        <div className="iconContainer">
          <CalendarToday className="icon-color" />
          <span>10.07.1994</span>
        </div>
      </div>

      <div className="accountDetailsContainer">
        <span className="accountDetails">Contact Details</span>
        <div className="iconContainer">
          <PhoneAndroidOutlined className="icon-color" />
          <span>+91 123 4567891</span>
        </div>
        <div className="iconContainer">
          <MailOutline className="icon-color" />
          <span>annabeck@gmail.com</span>
        </div>
        <div className="iconContainer">
          <PlaceOutlined className="icon-color" />
          <span>New York | USA</span>
        </div>
      </div>
    </div>
  );
}
