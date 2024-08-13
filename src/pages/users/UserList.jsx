import React, { useState } from "react";
import "./UserList.css";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
function UserList() {
  const [userDates, setUserDatas] = useState(userRows);
  const userDelete = (id)=>{
    setUserDatas(userDates.filter((user)=>user.id != id))
  }
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 87,
    },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`} className="link">
            <div className="userListUser">
              <img
                src={params.row.avatar}
                className="
      userListImg"
              />
             {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 200,
    },
    {
      field: "action",
      renderCell: (param) => {
        return (
          <>
            <Link to={`/users/${param.row.id}`} className="link">
              <button className="userListEdit"> Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon className="userListDelete"
            onClick={()=>userDelete(param.row.id)} />
          </>
        );
      },
      headerName: "Action",
      width: 220,
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDates}
        columns={columns}
        disableSelectionOnClick
        pageSize={2}
      />
    </div>
  );
}

export default UserList;
