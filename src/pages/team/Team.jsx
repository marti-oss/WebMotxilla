import "../../pages/list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { tabUnstyledClasses } from "@mui/base";

const rowsMonitors = [
    { id: 1, nom: 'Martí', primercognom: 'Serra', segoncognom:"Aguilera" , dni:"4797****N", llicencia:"123456789", sanitaria:"SEAG 0 990226 025",email: "msa@upc.edu"},
    { id: 2, nom: 'Berta', primercognom: 'Martínez', segoncognom:"Pocurull" , dni:"4797****Z", llicencia:"12394567", sanitaria:"MAPO 0 990226 025",email: "bmp@upc.edu"},
    { id: 3, nom: 'Maria', primercognom: 'Costa', segoncognom:"Vázquez" , dni:"4797****B", llicencia:"123456798", sanitaria:"COVA 0 990226 025",email: "mcv@upc.edu"},
    { id: 4, nom: 'Arnau', primercognom: 'Ferrer', segoncognom:"Herra" , dni:"4797****K", llicencia:"123456987", sanitaria:"FEHE 0 990226 025",email: "afh@upc.edu"}
];

const columnsMonitors = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'Primer Cognom', width: 200 },
    { field: 'segoncognom', headerName: 'Segon Cognom', width: 200 },
    {
        field: 'dni',
        headerName: 'DNI',
        type: 'number',
        width: 200,
    },
    { field: 'llicencia', headerName: 'Llicència', type: 'number', width: 200 },
    { field: 'sanitaria', headerName: 'Targeta Sanitària', width: 200 },
    { field: 'email', headerName: 'Correu electrònic', width: 200 },
];

const rowsNens = [
    { id: 1, nom: 'Paula', primercognom: 'Torres', segoncognom:"Aguilera" , dni:"4797****N", dataNeix:"22-01-2001", autoritzacio: "Sí", sanitaria:"TOAG 0 990226 025"},
    { id: 2, nom: 'Berta', primercognom: 'Martínez', segoncognom:"Pocurull" , dni:"4797****Z", dataNeix:"02-03-2002", autoritzacio: "Sí", sanitaria:"MAPO 0 990226 025"},
    { id: 3, nom: 'Maria', primercognom: 'Costa', segoncognom:"Vázquez" , dni:"4797****B", dataNeix:"07-07-2003", autoritzacio: "Sí", sanitaria:"COVA 0 990226 025"},
    { id: 4, nom: 'Arnau', primercognom: 'Ferrer', segoncognom:"Herra" , dni:"4797****K", dataNeix:"22-12-2001", autoritzacio: "Sí", sanitaria:"FEHE 0 990226 025"},
    { id: 5, nom: 'Iker', primercognom: 'Ferrer', segoncognom:"Herra" , dni:"4797****P", dataNeix:"22-12-2001", autoritzacio: "Sí", sanitaria:"FEHE 0 990226 028"}
];

const columnsNens = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'Nom', width: 200 },
    { field: 'primercognom', headerName: 'Primer Cognom', width: 200 },
    { field: 'segoncognom', headerName: 'Segon Cognom', width: 200 },
    {
        field: 'dni',
        headerName: 'DNI',
        type: 'number',
        width: 200,
    },
    { field: 'dataNeix', headerName: 'Data Neixament', type: 'date', width: 200 },
    { field: 'autoritzacio', headerName: 'Autorització', width: 200 },
    { field: 'sanitaria', headerName: 'Targeta Sanitària', width: 200 },
    { field: 'email', headerName: 'Correu electrònic', width: 200 },
];


function taula(){
    var url =  window.location.href;
    if (url.match("monitor")) return <Datatable rows={rowsMonitors} columns={columnsMonitors}/>
    if (url.match("nen")) return <Datatable rows={rowsNens} columns={columnsNens}/>
    if (url.match("equip")) return (
        <div>
            <h1>Monitors</h1>
            <Datatable rows={rowsMonitors.filter(item=>item.id==1)} columns={columnsMonitors}/>
            <h1>Nens</h1>
            <Datatable rows={rowsNens} columns={columnsNens}/>
        </div>

    )
}

const List = () => {
    return (
        <div className="list">
            <div className="listContainer">
                <Navbar/>
                <div className="top">
                    <Link to="new">
                    <Button type="New"/>
                    </Link>
                </div>
                {taula()}
            </div>

        </div>
    )
}

export default List