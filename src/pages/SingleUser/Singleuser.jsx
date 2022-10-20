import React from "react";
import { useLocation } from "react-router-dom";
import "../SingleUser/Singleuser.scss";
import Chart from "../../Componets/Chart/Chart";
import ProductTable from "../../Componets/table/Table";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
const Singleuser = () => {
  const locations = useLocation();
  const row = locations.state;

  return (
    <div className="singleContainer">
      <div className="top">
        <div className="left">
          <h1 className="title">User Information</h1>
          <span className="editButton">Edit</span>
          <div className="userinfo">
            <div className="image-container">
              <img src={row.img} alt="profile" />
              <AddAPhotoIcon className="photo"/>
            </div>
            <div className="deatilInfo">
              <h2 className="name">
                {row.fname} {row.lname}
              </h2>
              <div className="item">
                <span className="key">Username:</span>
                <span className="value">{row.username}</span>
              </div>{" "}
              <div className="item">
                <span className="key">Email:</span>
                <span className="value">{row.email}</span>
              </div>{" "}
              <div className="item">
                <span className="key">Phone:</span>
                <span className="value">{row.phone}</span>
              </div>{" "}
              <div className="item">
                <span className="key">Status:</span>
                <span className="value">{row.status}</span>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="right">
          <h2>User Spending (Last 6 Month)</h2>{" "}
          <Chart aspect={3 / 1} isDouble={false} />
        </div>
      </div>
      <div class="bottom">
        <h2>Last Trasaction made by {row.fname}</h2>
        <ProductTable />
      </div>
      ;
    </div>
  );
};

export default Singleuser;
