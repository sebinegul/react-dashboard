import React, { useState } from "react";
import "./Products.scss";
import { productRows } from "../../developers";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Products() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((items) => items.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="products-wrapper">
            <img src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="buttonWrapper">
            <Link to={"product-item/" + params.row.id}>
              <button className="prod-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="delete-icon"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="products">
      <span className="productsTitle">Products</span>

      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
