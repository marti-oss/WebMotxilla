import React, { useEffect, useState } from 'react';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import Datatable from "../../components/datatable/Datatable";
import config from "../../config";
import APIClient from "../../client";
import { Link } from "react-router-dom";
import { Monitor } from '@mui/icons-material';

const client = new APIClient(config);

function readURL(param){
    var url =  window.location.href;
    if (url.match(param)) return "block";
    return "none";
}

const rowsPares = [
    { id: 1, nom: 'Josep', primercognom: 'Jiménez', segoncognom:"Aguilera" , dni:"4798****J", telefon1:"699234578", telefon2:"",email: "jja@upc.edu"},
    { id: 2, nom: 'Marc', primercognom: 'Costa', segoncognom:"Cruz" , dni:"8897****K", telefon1:"645239871", telefon2:"698784578",email: "mcc@upc.edu"},
];

const columnsPares = [
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
    { field: 'telefon1', headerName: 'Telèfon 1', type: 'number', width: 200 },
    { field: 'telefon2', headerName: 'Telèfon 2', width: 200 },
    { field: 'email', headerName: 'Correu electrònic', width: 200 },
];


function monitor(pending) {
    if(pending){
        return(
            <div>
            <h1 className="title">Informació</h1>
                        <div className="nom">Nom: {pending.nom}</div>
                        <div className="cognoms">Cognoms: {pending.cognom1} {pending.cogonm2}</div>
                        <div className="dni">DNI: {pending.dni}</div>
                        <div className="llicencia">Llicència: {pending.llicencia}</div>
                        <div className="targetasanitaria">Target Sanitària: {pending.targetaSanitaria}</div>
                        <div className="equip">Correu Electrònic: {pending.email}</div>
            </div>
        );

    }
}


const Single = () => {
    var url =  window.location.href;
    var id =  url.substring(url.lastIndexOf("/") + 1);

    const [pending, setData] = useState(false);
    const showData = async() =>{
        if (url.match("monitor")) {
            client.getMonitor(id).then((data) => {
                setData(data.data);
                }
            )
        }
    }
    useEffect(() => {
        showData()
    },[])

    return (
        <div className="single">
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="buttons">
                        <Link to={"/edit"}>
                            <Button type="Edit"/>
                        </Link>
                        
                    </div>
                    <div className="monitor" style={{display :readURL("monitor")}}>
                        {monitor(pending)}
                    </div>
                    <div className="nen" style={{display:readURL("nen")}}>
                        <h1 className="title">Informació</h1>
                        <div className="nom">Nom: Martí</div>
                        <div className="cognoms">Cognoms: Serra Aguilera</div>
                        <div className="dni">DNI: 4797****</div>
                        <div className="Autorització">Autorització: Sí/No</div>
                        <div className="targetasanitaria">Target Sanitària: SEAG 0 990126 003</div>
                        <div className="equip">Equip: Campaments</div>
                    </div>
                    <div className="pare" style={{display:readURL("pare")}}>
                        <h1 className="title">Informació</h1>
                        <div className="nom">Nom: Martí</div>
                        <div className="cognoms">Cognoms: Serra Aguilera</div>
                        <div className="dni">DNI: 4797****</div>
                        <div className="email">Email: msa@motixilla.cat</div>
                        <div className="telefon1">Telèfon 1: 619126797</div>
                        <div className="telefon2">Telèfon 2: 949712518</div>
                    </div>
                </div>
                <div className="bottom" style={{display:readURL("nen")}}>
                    <h1>Pares i Mares</h1>
                    <Datatable rows={rowsPares} columns={columnsPares} buttons="false"></Datatable>
                </div>
            </div>
        </div>
    )
}

export default Single