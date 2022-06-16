import { React, useState } from "react";
import "./datatable.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import Button from "../button/Button";


const Datatable = (rowsAndcolumns) => {
    const actionColums = [{
        field:"action",
        headerName:"",
        width: 250,
        renderCell: (params) => {
            return(
                <div className="cellAction">
                    <Link to={params.row.id.toString()}>
                        <Button type="View"></Button>
                    </Link>
                    <Button type="Delete" isfor={rowsAndcolumns.listfor + '/' + params.row.id.toString()}></Button>
                </div>
            );
        }

    }];
    const actionButton = [{
        field:"action",
        headerName:"",
        width: 250,
        renderCell: (params) => {
            return(
                <div className="cellAction">
                    <Button type="Delete" isfor={rowsAndcolumns.listfor + '/' + params.row.id.toString()}></Button>
                </div>
            );
        }

    }];
    if (rowsAndcolumns.buttons =="false"){
        return (
            <div className="datatable">
            <DataGrid
                rows={rowsAndcolumns.rows}
                columns={rowsAndcolumns.columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            </div>
        );
        
    }
    if (rowsAndcolumns.buttons == "delete"){
        return(
            <div className="datatable">
                <DataGrid
                    rows={rowsAndcolumns.rows}
                    columns={rowsAndcolumns.columns.concat(actionButton)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        );
    }
    return (
        <div className="datatable">
        <DataGrid
            rows={rowsAndcolumns.rows}
            columns={rowsAndcolumns.columns.concat(actionColums)}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        </div>
    );
}

export default Datatable