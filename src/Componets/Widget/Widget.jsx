import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const Widget = ({ type }) => {
  let allData;
  switch (type) {
    case "user":
      allData = {
        title: "Users",
        counter: 15,
        link: "See all user",
        isMoney: false,
        percent: 20,
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "red",
              backgroundColor: "rgb(241, 171, 171)",
              padding: "5px",
            }}
          />
        ),
      };
      break;
    case "order":
      allData = {
        title: "Orders",
        counter: 10,
        link: "See all order",
        isMoney: false,
        percent: 10,
        icon: (
          <Inventory2Icon
            className="icon1"
            style={{
              color: "rgb(0, 255, 0)",
              backgroundColor: "rgba(0, 255, 0,0.3)",
              padding:"5px"
            }}
          />
        ),
      };
      break;
    case "earning":
      allData = {
        title: "Earnings",
        counter: 45,
        link: "See all Earnings",
        isMoney: true,
        percent: 15,
        icon: (
          <PaidIcon
            className="icon"
            style={{
              color: "rgb(255,255,0)",
              backgroundColor: "rgba(255,255,0,0.3)",
              padding: "5px",
            }}
          />
        ),
      };
      break;
    case "balance":
      allData = {
        title: "Balance",
        counter: 45,
        link: "See all balance",
        isMoney: true,
        percent: 15,
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{
              color: "rgb(207, 26, 243)",
              backgroundColor: "rgba(207, 26, 243,0.3)",
              padding: "5px",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widgetContainer">
      <div className="left">
        <span className="title">Total {allData.title}</span>
        <span className="counter">
          {allData["counter"]}
          {allData["isMoney"] ? <span>$</span> : null}
        </span>
        <span className="link">{allData["link"]}</span>
      </div>
      <div className="right">
        <div className="percent positive">
          <KeyboardArrowUpIcon className="icon"  />
          {allData["percent"]}%
        </div>
        {allData["icon"]}
      </div>
    </div>
  );
};

export default Widget;
