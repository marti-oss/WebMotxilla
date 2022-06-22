import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { tabUnstyledClasses } from "@mui/base";
import config from "../../config";
import APIClient from "../../client";
import { useEffect, useState } from "react";

const client = new APIClient(config);

const columnsMonitors = [
    { field: 'nom', headerName: 'Nom', width: 200 },
    { field: 'cognom1', headerName: 'Primer Cognom', width: 200 },
    { field: 'cognom2', headerName: 'Segon Cognom', width: 200 },
    {
        field: 'dni',
        headerName: 'DNI',
        type: 'number',
        width: 200,
    },
    { field: 'llicencia', headerName: 'Llicència', type: 'number', width: 200 },
    { field: 'targetaSanitaria', headerName: 'Targeta Sanitària', width: 200 },
    { field: 'email', headerName: 'Correu electrònic', width: 200 },
];


const columnsNens = [
    { field: 'nom', headerName: 'Nom', width: 200 },
    { field: 'cognom1', headerName: 'Primer Cognom', width: 200 },
    { field: 'cognom2', headerName: 'Segon Cognom', width: 200 },
    {
        field: 'dni',
        headerName: 'DNI',
        type: 'number',
        width: 200,
    },
    { field: 'dataNaixement', headerName: 'Data Neixament', type: 'date', width: 200 },
    { field: 'autoritzacio', headerName: 'Autorització', width: 200 },
    { field: 'targetaSanitaria', headerName: 'Targeta Sanitària', width: 200 },
];

const columnsEquips = [
    {field: 'nom', headerName: 'Nom', width: 200}
]


function taula(state){
    if(state != false){
        var url =  window.location.href;
        if (url.match("monitor")){
         return ( 
                <div>
                    <h1>Monitors</h1>
                    <Datatable rows={state} columns={columnsMonitors} listfor="/monitors"/>
                </div>
            );
         }

        if (url.match("nen")) {
        return(<div>
            <h1>Participants</h1>
                <Datatable rows={state} columns={columnsNens} listfor="/participants"/>
            </div>)
        }
        if (url.match("equip")) return (
            <div>
                <h1>Equips</h1>
                <Datatable rows={state} columns={columnsEquips} listfor="/equips"/>
            </div>
        )
    }
    
}

const List = () => {
    const [pending, setData] = useState(false);
    var url =  window.location.href;
    const showData = async() =>{
            if (url.match("monitor")) {
                client.getMonitors().then((data) => {
                    if(data.code != 200) window.location.href= '/login'
                    else setData(data.data);
                    }
                )
            }
            else if (url.match("nen")) {
                client.getParticipants().then((data) => {
                    if(data.code != 200) window.location.href= '/login'
                    else setData(data.data);
                    }
                )
            }   
            else if (url.match("equip")) 
                client.getEquips().then((data) => {
                    if(data.code != 200) window.location.href= '/login'
                    else setData(data.data);
                    }
                )   
    }
        
            
        
    useEffect(() => {
        showData()
    },[])


    return (
        <div className="list">
            <div className="listContainer">
                <Navbar/>
                <div className="top">
                    <Link to="new">
                    <Button type="New"/>
                    </Link>
                </div>
                {taula(pending)}
            </div>

        </div>
    )
}

export default List