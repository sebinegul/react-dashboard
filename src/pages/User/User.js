import React from "react";
import "./User.scss";
import UserDetails from "../../components/User/UserDetails";
import Transactions from "../../components/User/EditUser";
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user">
      <div className="titleWarpper">
        <h1>Edit User</h1>
        <Link to="/newUser">
          <button className="createButton">Create User</button>
        </Link>
      </div>
      <div className="userDeatilsContaner">
        <UserDetails />
        <Transactions />
      </div>
    </div>
  );
}
