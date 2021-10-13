import React from "react";
import WidgetList from "./WidgetList";
import "./WidgetSm.scss";
import { developerData } from "../../developers";
export default function WidgetSm(props) {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitile">New Join Memebers</span>
      {developerData.map((datas) => (
        <WidgetList
          key={datas.id}
          title={datas.title}
          designation={datas.designation}
          img={datas.img}
        />
      ))}
    </div>
  );
}
