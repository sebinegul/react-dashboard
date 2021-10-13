import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/Featured/FeaturedInfo";
import "./Home.scss";
import { userData } from "../../Dummy";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
