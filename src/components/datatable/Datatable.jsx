import { React, useState } from "react";
import "./datatable.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import Button from "../button/Button";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
                    <Button type="Delete"></Button>
                </div>
            );
        }

    }];
    if (rowsAndcolumns.buttons =="false"){
        return (
            <div class="datatable">
            <DataGrid
                rows={rowsAndcolumns.rows}
                columns={rowsAndcolumns.columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            </div>
        );
        
    }
    return (
        <div class="datatable">
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