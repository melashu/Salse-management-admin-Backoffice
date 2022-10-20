import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/rootreducer";

function createData(
  id,
  product,
  model,
  selling,
  purchase,
  quantity,
  exDate,
  purchaseDate,
  status
) {
  return {
    id,
    product,
    model,
    selling,
    purchase,
    quantity,
    exDate,
    purchaseDate,
    status,
  };
}
const ProductTable = () => {
  const productList = useSelector(getProducts);
  return (
    <TableContainer component={Paper} className="producttable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Model</TableCell>
            <TableCell align="right">Selling price</TableCell>
            <TableCell align="right">Purchase price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Purchase date"</TableCell>
            <TableCell align="right">Expired Date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((row) => (
            <TableRow
              hover
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.selling}</TableCell>
              <TableCell align="right">{row.purchase}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.exDate}</TableCell>
              <TableCell align="right">{row.purchaseDate}</TableCell>

              <TableCell align="right">
                <span className={row.status}> {row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export { createData };
export default ProductTable;
