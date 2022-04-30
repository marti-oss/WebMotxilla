import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import Datatable from "../../components/datatable/Datatable";

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

const Single = () => {
    return (
        <div className="single">
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="buttons">
                        <Button type="Edit"/>
                    </div>
                    <div className="monitor" style={{display :readURL("monitor")}}>
                        <h1 className="title">Informació</h1>
                        <div className="nom">Nom: Martí</div>
                        <div className="cognoms">Cognoms: Serra Aguilera</div>
                        <div className="dni">DNI: 4797****</div>
                        <div className="llicencia">Llicència: 12345567</div>
                        <div className="targetasanitaria">Target Sanitària: SEAG 0 990126 003</div>
                        <div className="equip">Equip: Campaments</div>
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