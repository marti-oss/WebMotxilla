import React, { useEffect, useState } from 'react';
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import config from "../../config";
import APIClient from "../../client";
import SaveIcon from '@mui/icons-material/Save';

const client = new APIClient(config);


function guardarMonitor() {
    
    const inputs = document.getElementsByTagName("input")
    var string = ""
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length != 0) {
            if (string.length == 0) string += "?"
            else string += "&"
            if (inputs[i].id == "nom") string += "nom=" + inputs[i].value;
            if (inputs[i].id == "cognom1") string += "cognom1=" + inputs[i].value;
            if (inputs[i].id == "cognom2") string += "cognom2=" + inputs[i].value;
            if (inputs[i].id == "email") {
                string += "email=" + inputs[i].value;
                if (!inputs[i].value.includes("@")) return alert("CORREU ELECTRÒNIC FORMAT INVÀLID");
            }
            if (inputs[i].id == "dni") string += "dni=" + inputs[i].value;
            if (inputs[i].id == "llicencia") string += "llicencia=" + inputs[i].value;
            if (inputs[i].id == "targetaSanitaria") string += "targetaSanitaria=" + inputs[i].value;

        }
    }
    if (!string.includes("nom")) return alert("INDICAR NOM");
    if (!string.includes("cognom1")) return alert("INDICAR PRIMER COGNOM");
    if (!string.includes("email")) return alert("INDICAR NOM CORREU ELECTRÒNIC");
    if (!string.includes("dni")) return alert("INDICAR DNI");
    
    return string
}


const NewMonitor = () => {
    var url = window.location.href
    var id = url.split("/")[4];
    const [pending, setData] = useState(false);
    useEffect(() => {
        showData()
        visulitzar()
    }, [])
    const showData = async () => {
        if (url.match("edit")) {
            client.getMonitor(id).then((data) => {
                if(data.code != 200) window.location.href= '/login'
                else {
                    setData(data.data);
                    document.getElementById("nom").value = data.data.nom;
                    document.getElementById("cognom1").value = data.data.cognom1;
                    document.getElementById("cognom2").value = data.data.cognom2;
                    document.getElementById("email").value = data.data.email;
                    document.getElementById("dni").value = data.data.dni;
                    document.getElementById("llicencia").value = data.data.llicencia;
                    document.getElementById("targetaSanitaria").value = data.data.targetaSanitaria;
                }
            }
            )
        }
    }

    const [pending2, setData2] = useState(false);
    const guardar = async() => {
        var string = guardarMonitor()
        var url = window.location.href
        var id = url.split("/")[4];
        if (url.match("edit")) {
            client.editMonitor(id,string).then((data) =>{
                if(data.code != 200) window.location.href= '/login'
                else {
                    setData2(data)
                    window.location.href = '/monitor/' + id
                }                
            })
        }
        else {
            client.postMonitor(string).then((data) =>{
                if(data.code != 200) window.location.href= '/login'
                if (!data.success) {
                    alert("Ja existeix un monitor amb aquest correu electrònic");
                    return
                }
                else {
                    setData2(data)
                    window.location.href = '/monitor/' + id
                }
            })
        }
    }

    function visulitzar() {
        if(localStorage.getItem("token") == "null") window.location.href = '/login'
    }

    return (
        <div className="new">
            <div className="newContainer">
                <Navbar />
                <div className="box">
                    <div className="top">
                        <h1>Nou Monitor</h1>
                    </div>
                    <div className="bottom">
                        <form>
                            <div className="input">
                                <div className="left">
                                    <div className="formInput">
                                        <label>Nom</label>
                                        <input id="nom" type="text" placeholder="Martí" />
                                    </div>
                                    <div className="formInput">
                                        <label>Primer cognom</label>
                                        <input id="cognom1" type="text" placeholder="Serra" />
                                    </div>
                                    <div className="formInput">
                                        <label>Segon cognom</label>
                                        <input id="cognom2" type="text" placeholder="Aguilera" />
                                    </div>
                                    <div className="formInput">
                                        <label>Correu electrònic</label>
                                        <input id="email" type="email" placeholder="msa@upc.edu" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="formInput">
                                        <label>DNI</label>
                                        <input id="dni" type="text" placeholder="47973333P" />
                                    </div>
                                    <div className="formInput">
                                        <label>Llicència</label>
                                        <input id="llicencia" type="text" placeholder="123456789" />
                                    </div>
                                    <div className="formInput">
                                        <label>Targeta Sanitària</label>
                                        <input id="targetaSanitaria" type="text" placeholder=" SEAG0990126033" />
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <div style={{ visibility: "hidden" }}>
                                    <Button></Button>
                                </div>
                                <button type="button" style={{ color: "darkblue", borderColor: "rgba(0, 0, 139, 0.596)" }} onClick={() => {guardar()}}>
                                    <SaveIcon ></SaveIcon>
                                    <span>Guardar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMonitor