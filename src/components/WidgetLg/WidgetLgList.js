import React from "react";
import "./WidgetLg.scss";

const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

export default function WidgetLgList({ title, date, amount, type }) {
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img
          src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="widgetLgImg"
        />
        <span className="widgetLgName">{title}</span>
      </td>
      <td className="widgetLgDate">{date}</td>
      <td className="widgetLgAmount">$ {amount}</td>
      <td className="widgetLgStatus">
        <Button type={type} />
      </td>
    </tr>
  );
}
