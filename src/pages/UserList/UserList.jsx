import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import "./UserList.scss";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/rootreducer";
import { deleteHandler } from "../../common/Dialog";
import { appUseDispatch, appUseSelector } from "../../common/Hooks";
const UserList = () => {
  const dispatch = appUseDispatch();
  const columns = [
    {
      field: "username",
      headerName: "Username",
      editable: true,
      width: 120,
      renderCell: (params) => (
        <div className="avator-container">
          <img src={params.row.img} alt="" className="avator" />
          {params.row.username}
        </div>
      ),
    },
    {
      field: "fname",
      headerName: "First Name",
      width: 150,
      editable: true,
    },
    {
      field: "lname",
      headerName: "Last Name",
      width: 120,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      width: 100,
      headerName: "Status",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      filed: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {
        return (
          <div className="action">
            <Link
              to={{ pathname: param.row.username }}
              state={param.row}
              className="actionView"
            >
              View
            </Link>
            <Link
              className="actionDelete"
              onClick={(e) => {
                deleteHandler(e, param.row.id, "user", dispatch, {
                  title: "Confirm to delete",
                  body:`Are you sure to delete username ${param.row.username}`
                });
              }}
            >
              Delete
            </Link>
          </div>
        );
      },
    },
  ];
  const userList = appUseSelector(getUsers);

  return (
    <Box sx={{ height: 400, width: "90%" }}>
      <div className="add-new-user">
        <div className="title">Add New User</div>
        <Link to="new-user" className="new-user">
          Add New
        </Link>
      </div>
      <DataGrid
        columns={columns}
        rows={userList}
        rowsPerPageOptions={[8]}
        pageSize={8}
        autoHeight
        getRowId={(row) => row.id}
        checkboxSelection
        headerHeight={60}
        className="data-table-container"
      >
        {" "}
      </DataGrid>
    </Box>
  );
};

export default UserList;
