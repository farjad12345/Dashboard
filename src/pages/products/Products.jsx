import React, { useState } from "react";
import "./Products.css";
import { products } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
function Products() {
  const [producsDates, setProductsDatas] = useState(products);
  const productDelete = (productId)=>{
    setProductsDatas(producsDates.filter((product)=>product.id != productId))
  }
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 87,
    },
    {
      field: "title",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img
                src={params.row.avatar}
                className="
      userListImg"
              />
             {params.row.title}
            </div>
          </Link>
        );
      },
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      renderCell: (param) => {
        return (
          <>
            <Link to={`/product/${param.row.id}`} className="link">
              <button className="userListEdit"> Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon className="userListDelete"
            onClick={()=>productDelete(param.row.id)} />
          </>
        );
      },
      headerName: "Action",
      width: 220,
    },
  ];

  return (
    <div className="UserList">
      <DataGrid
        rows={producsDates}
        columns={columns}
        disableSelectionOnClick
        pageSize={3}
        checkboxSelection
      />
    </div>
  );
}

export default Products;
