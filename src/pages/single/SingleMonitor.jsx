import React, { useEffect, useState } from 'react';
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import config from "../../config";
import APIClient from "../../client";
import { Link } from "react-router-dom";

const client = new APIClient(config);

function readURL(param){
    var url =  window.location.href;
    if (url.match(param)) return "block";
    return "none";
}


function monitor(pending) {
    if(pending){
        return(
            <div>
            <h1 className="title">Informació</h1>
                        <div className="nom">Nom: {pending.nom}</div>
                        <div className="cognoms">Cognoms: {pending.cognom1} {pending.cognom2}</div>
                        <div className="dni">DNI: {pending.dni}</div>
                        <div className="llicencia">Llicència: {pending.llicencia}</div>
                        <div className="targetasanitaria">Target Sanitària: {pending.targetaSanitaria}</div>
                        <div className="equip">Correu Electrònic: {pending.email}</div>
            </div>
        );

    }
}


const SingleMonitor = () => {
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
                        <Link to="edit">
                            <Button type="Edit"/>
                        </Link>
                        
                    </div>
                    <div className="monitor" style={{display :readURL("monitor")}}>
                        {monitor(pending)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMonitor