import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../datas";
const Button = ({ type }) => {
  return <button className={`btn ${type}`}>{type}</button>;
};
function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lates TransActions</h3>
      <ul className="widgetHeader">
        <li>Customer</li>
        <li>Date</li>
        <li>Amount</li>
        <li>status</li>
      </ul>
    { transactions.map((user)=>  <ul key={user.id} className="widgetCostomer">
        <li className="widgetCostomerdetails">
          <img src={user.img} alt="" className="widgetLgImg" />
          <p className="widgetCostomeruser">{user.customer}</p>
        </li>
        <li className="widgetCostomerdetails">{user.date}</li>
        <li className="widgetCostomerdetails">{user.amount}</li>
        <li className="widgetCostomerdetails">
          <Button type={user.status}/>
        </li>
      </ul>)}
    </div>
  );
}

export default WidgetLg;
