import React from "react";
import { Visibility } from "@material-ui/icons";
export default function WidgetList({ title, img, designation }) {
  return (
    <div>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={img} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{title}</span>
            <span className="widgetSmUserTitle">{designation}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="iconCl" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
