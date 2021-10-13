import React from "react";
import "./WidgetLg.scss";
import WidgetLgList from "./WidgetLgList";
import { transactionData } from "../../developers";
export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transactionData.map((details) => (
          <WidgetLgList
            key={details.id}
            title={details.title}
            amount={details.amount}
            date={details.date}
            type={details.type}
          />
        ))}
      </table>
    </div>
  );
}
