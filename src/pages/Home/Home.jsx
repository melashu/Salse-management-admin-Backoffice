import React from "react";
import Widget from "../../Componets/Widget/Widget";
import "./Home.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import "react-circular-progressbar/dist/styles.css";
import Chart from "../../Componets/Chart/Chart";
import ProductTable from "../../Componets/table/Table";

const Home = () => {
  let percent = Math.round(Math.random() * 100);

  return (
    <>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="featureContainer">
        <div className="feature">
          <div className="top">
            <span>Feature</span>
            <MoreVertIcon fontSize="small" />
          </div>
          <div className="bottom">
            <div className="progress">
              <CircularProgressbar
                value={percent}
                text={percent}
                strokeWidth={8}
                styles={buildStyles({
                  rotation: 0.25,
                  backgroundColor: "#4ff569",
                  textSize: 18,
                })}
              />
            </div>
            <div className="title">Total Sales made today</div>
            <div className="amount">120k Br</div>
            <div className="desc">Last Month transaction is not included</div>
            <div className="summery">
              <div className="item negative">
                <div className="itemTitle">Target</div>
                <div className="result ">
                  <ExpandMoreIcon />
                  <span className="itemAmount">180k Br</span>
                </div>
              </div>
              <div className="item positive">
                <div className="itemTitle">Last Week</div>
                <div className="result positive">
                  <KeyboardControlKeyIcon />
                  <span className="amont">100k Br</span>
                </div>
              </div>{" "}
              <div className="item positive">
                <div className="itemTitle">Last Month</div>
                <div className="result ">
                  <KeyboardControlKeyIcon />
                  <span className="amont">200k Br</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <h1 className="title">Last 6 month revenue </h1>
          <div className="body">
            <Chart aspect={2 / 1} />
          </div>
        </div>
      </div>
      <div className="table-container">
        <h1 className="table-title">Latest Transactions</h1>
        <ProductTable/>
      </div>
    </>
  );
};

export default Home;
