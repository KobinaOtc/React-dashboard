import React, { useState } from 'react'
import "./userList.css"
import { userRows } from "../../dummyData"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"

export default function UserList() {
    const [data,setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
 import React, { useState } from 'react'
import "./userList.css"
import { userRows } from "../../dummyData"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"

export default function UserList() {
    const [data,setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) =>{
            return (
                <div className="userListUser">
                    <img src={params.getValue(params.id, 'avatar') || ''} alt="" className="userListImg" />
                    {params.getValue(params.id, 'username') || ''}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/user/"+params.getValue(params.id, "id")}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.getValue(params.id, 'id'))} />
                    </>
                )
            }
        }
      ];

    return (
        <div className="userList">
            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
        </div>
    )
}
