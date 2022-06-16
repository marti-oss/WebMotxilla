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
import NewMonitor from '../new/NewMonitor';

const client = new APIClient(config);

function readURL(param){
    var url =  window.location.href;
    if (url.match(param)) return "block";
    return "none";
}


const columnsPares = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'Nom', width: 200 },
    { field: 'cognom1', headerName: 'Primer Cognom', width: 200 },
    { field: 'cognom2', headerName: 'Segon Cognom', width: 200 },
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


function participant(pending) {
    if(pending != false){
        return(
            <div>
                <h1 className="title">Informació</h1>
                <div className="nom">Nom: {pending.nom}</div>
                <div className="cognoms">Cognoms: {pending.cognom1} {pending.cognom2}</div>
                <div className="dni">DNI: {pending.dni}</div>
                <div className="dataNaixement">Data Naixement: {pending.dataNaixement}</div>
                <div className="Autorització">Autorització: {pending.autoritzacio}</div>
                <div className="targetasanitaria">Target Sanitària:  {pending.targetaSanitaria}</div>
            </div>
        );
    }
}


function taula(pending){
    if(pending != false){
        return(
            <div>
                <h1>Pares i Mares</h1>
                <Datatable rows={pending} columns={columnsPares} buttons="false"></Datatable>
            </div>
        );
    }
}


const SingleNen = () => {
    var url =  window.location.href;
    var id =  url.substring(url.lastIndexOf("/") + 1);

    const [pending, setData] = useState(false);
    const showData = async() =>{
        client.getParticipant(id).then((data) => {
            if(data.code != 200) window.location.href= '/login'
            else setData(data.data);
            }
        )
    }
    useEffect(() => {
        showData()
        showPares()
    },[]);

    const [pendingPares, setPares] = useState(false);
    const showPares = async() =>{
        client.getParticipantResponsable(id).then((data) => {
            if(data.code != 200) window.location.href= '/login'
            else setPares(data.data)
        })
    }

    return (
        <div className="single">
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="buttons">
                        <Link to={"edit"} element={<NewMonitor></NewMonitor>}>
                            <Button type="Edit"/>
                        </Link>
                        
                    </div>
                    <div className="nen">
                        {participant(pending)}
                    </div>
                    
                </div>
                <div className="bottom" style={{display:readURL("nen")}}>
                    {taula(pendingPares)}
                </div>
            </div>
        </div>
    )
}

export default SingleNen