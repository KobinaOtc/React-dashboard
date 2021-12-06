import React, { useState } from 'react'
import { productRows } from "../../dummyData"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"
import "./productList.css"


export default function ProductList() {
    const [data,setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Product', width: 200, renderCell: (params) =>{
            return (
                <div className="productListProduct">
                    <img src={params.getValue(params.id, 'img') || ''} alt="" className="productListImg" />
                    {params.getValue(params.id, 'name') || ''}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/products/"+params.getValue(params.id, "id")}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.getValue(params.id, 'id'))} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="productList">
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
