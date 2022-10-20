import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/rootreducer";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { appUseDispatch } from "../../common/Hooks";
import { deleteHandler } from "../../common/Dialog";

const ProductList = () => {
  const dispatch = appUseDispatch();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "product",
      headerName: "Product Name",
      width: 120,
    },
    {
      field: "model",
      headerName: "Product Model",
      width: 150,
      editable: true,
    },
    {
      field: "selling",
      headerName: "Selling Prices",
      width: 120,
    },
    {
      field: "purchase",
      headerName: "Purchase Prices",
      width: 200,
      editable: true,
    },
    {
      field: "quantity",
      width: 100,
      headerName: "Quantity",
    },
    {
      field: "exDate",
      headerName: "Expired Date",
      width: 120,
    },
    {
      field: "purchaseDate",
      headerName: "Purchase Date",
      width: 120,
    },
    {
      filed: "action",
      headerName: "Action",
      width: 200,
      renderCell: (param) => {
        return (
          <div className="action">
            <Link to={param.row.id}
              state={param.row}
              className="actionView"
            >
              View
            </Link>
            <Link className="actionDelete" onClick={
              (e) => {
                  deleteHandler(e, param.row.id,"product", dispatch, {
                    title: "Confirm to delete",
                    body: `Are you sure to delete product ${param.row.product}`,
                  });
              }
            }>Delete</Link>
          </div>
        );
      },
    },
  ];
  const productList = useSelector(getProducts);
  console.log(productList);
  return (
    <div className="product">
      <div className="add-new-user">
        <div className="title">Add New Product</div>
        <Link to="new-product" className="new-user">
          Add New
        </Link>
      </div>
      <DataGrid
        columns={columns}
        rows={productList}
        rowsPerPageOptions={[8]}
        pageSize={8}
        autoHeight
        getRowId={(row)=>row.id}
        checkboxSelection
        headerHeight={60}
        className="data-table-container"
      >
        {" "}
      </DataGrid>
    </div>
  );
};

export default ProductList;
