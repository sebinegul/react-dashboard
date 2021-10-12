import React from "react";
import "./Topbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">Admin</span>
        </div>
        <div className="topbar-right">
          <div className="right-wrapper">
            <div className="icons">
              <NotificationsNone />
              <span className="notification-badge">2</span>
            </div>
            <div className="icons">
              <Language />
              <span className="notification-badge">2</span>
            </div>
            <div className="icons">
              <Settings />
            </div>

            <img
              src="https://bebopbusiness.no/wp-content/uploads/2016/12/spearker_7-300x300.jpg"
              alt=""
              className="main-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
