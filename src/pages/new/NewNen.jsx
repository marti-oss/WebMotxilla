import React, { useEffect, useState } from 'react';
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import config from "../../config";
import APIClient from "../../client";
import SaveIcon from '@mui/icons-material/Save';
import Switch from "../../components/switch/Switch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const client = new APIClient(config);

function bodyPost(setSwitchValue) {
    const inputs = document.getElementsByTagName("input")
    var string = ""
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length != 0) {
            if (inputs[i].id.includes("nen")) {
                if (string.length == 0) string += "?"
                else string += "&"
                if (inputs[i].id == "nenNom") string += "nom=" + inputs[i].value;
                if (inputs[i].id == "nenCognom1") string += "cognom1=" + inputs[i].value;
                if (inputs[i].id == "nenCognom2") string += "cognom2=" + inputs[i].value;
                if (inputs[i].id == "nenreact-switch-new") string += "autoritzacio=" + setSwitchValue
                if (inputs[i].id == "nenDni") string += "dni=" + inputs[i].value;
                if (inputs[i].id == "nenDataNaixement") {
                    var date = inputs[i].value.split("/")
                    var dataNaix = date[2] + "-" + date[1] + "-" + date[0]
                    string += "dataNaixement=" + dataNaix;
                }
                if (inputs[i].id == "nenTargetaSanitaria") string += "targetaSanitaria=" + inputs[i].value;
            }
            if (inputs[i].id.includes("pare")) {
                if (string.length == 0) string += "?"
                else string += "&"
                if (inputs[i].id == "pareNom") string += "res1nom=" + inputs[i].value;
                if (inputs[i].id == "pareCognom1") string += "res1cognom1=" + inputs[i].value;
                if (inputs[i].id == "pareCognom2") string += "res1cognom2=" + inputs[i].value;
                if (inputs[i].id == "pareEmail") {
                    string += "res1email=" + inputs[i].value;
                    if (!inputs[i].value.includes("@")) return alert("CORREU ELECTR??NIC FORMAT INV??LID");
                }
                if (inputs[i].id == "pareDni") string += "res1dni=" + inputs[i].value;
                if (inputs[i].id == "pareTelefon1") string += "res1telefon1=" + inputs[i].value;
                if (inputs[i].id == "pareTelefon2") string += "res1telefon2=" + inputs[i].value;
            }
        }
    }
    if (string.length != 0) {
        if (!string.includes("nom")) return alert("INDICAR NOM");
        if (!string.includes("cognom1")) return alert("INDICAR PRIMER COGNOM");
        if (!string.includes("autoritzacio")) return alert("INDICAR AUTORITZACIO");
        if (!string.includes("dni")) return alert("INDICAR DNI");
        if (!string.includes("dataNaixement")) return alert("INDICAR DATA DE NAIXEMENT");
        if (!string.includes("targetaSanitaria")) return alert("INDICAR TARGETA SANITARIA");

    }
    if (string.length != 0) {
        if (!string.includes("res1nom")) return alert("INDICAR NOM A RESPONSABLE 1");
        if (!string.includes("res1cognom")) return alert("INDICAR PRIMER COGNOM A RESPONSABLE 1");
        if (!string.includes("res1email")) return alert("INDICAR CORREU ELECTR??NIC A RESPONSABLE 1");
        if (!string.includes("res1dni")) return alert("INDICAR DNI A RESPONSABLE 1");
        if (!string.includes("res1telefon1")) return alert("INDICAR DE TEL??FON 1 A RESPONSABLE 1");
    }

    return string
}

function putParticipant(setSwitchValue,setStartDate) {
    var string = ""
    if (document.getElementById("nenNom").length != 0) string += "?nom=" + document.getElementById("nenNom").value
    if (document.getElementById("nenCognom1").length != 0) string += "&cognom1=" + document.getElementById("nenCognom1").value
    if (document.getElementById("nenCognom2").length != 0) string += "&cognom2=" + document.getElementById("nenCognom2").value
    if (document.getElementById("nenreact-switch-new")) string += "&autoritzacio=" + setSwitchValue
    if (document.getElementById("nenDni").length != 0) string += "&dni=" + document.getElementById("nenDni").value
    if (document.getElementById("nenDataNaixement").length != 0) {
        var date = document.getElementById("nenDataNaixement").value.split('/')
        var dataNaix = date[2] + "-" + date[1] + "-" + date[0]
        string += "&dataNaixement=" + dataNaix;
    }
    if (document.getElementById("nenTargetaSanitaria").length != 0) string += "&targetaSanitaria=" + document.getElementById("nenTargetaSanitaria").value

    if (string.length != 0) {
        if (!string.includes("nom")) return alert("INDICAR NOM");
        if (!string.includes("cognom1")) return alert("INDICAR PRIMER COGNOM");
        if (!string.includes("autoritzacio")) return alert("INDICAR AUTORITZACIO");
        if (!string.includes("dni")) return alert("INDICAR DNI");
        if (!string.includes("dataNaixement")) return alert("INDICAR DATA DE NAIXEMENT");
        if (!string.includes("targetaSanitaria")) return alert("INDICAR TARGETA SANITARIA");
    }
    return string
}

function putResponsable1() {
    var string = ""
    if (document.getElementById("pareNom").length != 0) string += "?nom=" + document.getElementById("pareNom").value
    if (document.getElementById("pareCognom1").length != 0) string += "&cognom1=" + document.getElementById("pareCognom1").value
    if (document.getElementById("pareCognom2").length != 0) string += "&cognom2=" + document.getElementById("pareCognom2").value
    if (document.getElementById("pareEmail").length != 0) {
        if (!document.getElementById("pareEmail").value.includes("@")) return alert("CORREU ELECTR??NIC FORMAT INV??LID");
        string += "&email=" + document.getElementById("pareEmail").value;
    }
    if (document.getElementById("pareDni").length != 0) string += "&dni=" + document.getElementById("pareDni").value
    if (document.getElementById("pareTelefon1").length != 0) string += "&telefon1=" + document.getElementById("pareTelefon1").value
    if (document.getElementById("pareTelefon2").length != 0) string += "&telefon2=" + document.getElementById("pareTelefon2").value

    if (string.length != 0) {
        if (!string.includes("nom")) return alert("INDICAR NOM A RESPONSABLE 1");
        if (!string.includes("cognom1")) return alert("INDICAR PRIMER COGNOM A RESPONSABLE 1");
        if (!string.includes("email")) return alert("INDICAR CORREU ELECTR??NIC A RESPONSABLE 1");
        if (!string.includes("dni")) return alert("INDICAR DNI A RESPONSABLE 1");
        if (!string.includes("telefon1")) return alert("INDICAR DE TEL??FON 1 A RESPONSABLE 1");
    }
    return string
}





const NewNen = () => {

    var url = window.location.href;
    var id = url.split("/")[4]

    const [pending, setData] = useState(false);
    const showData = async () => {
        if (url.match("edit")) {
            client.getParticipant(id).then((data) => {
                if(data.code != 200) window.location.href= '/login'
                else{
                    setData(data.data);
                    setSwitchValue(data.data.autoritzacio)
                    var date = data.data.dataNaixement.split("/")
                    var date2 = date[2] + '-' + date[1] + '-' + date[0]+'T00:00:00.0000Z'
                    setStartDate(Date.parse(date2))
                    document.getElementById("nenNom").value = data.data.nom
                    document.getElementById("nenCognom1").value = data.data.cognom1
                    document.getElementById("nenCognom2").value = data.data.cognom2
                    document.getElementById("nenDni").value = data.data.dni;
                    document.getElementById("nenTargetaSanitaria").value = data.data.targetaSanitaria
                if(data.code != 200) window.location.href= '/login'
                }
            })
        }

    }

    const [pendingPares, setPares] = useState(false);
    const showPares = async () => {
        if (url.match("edit")) {
            client.getParticipantResponsable(id).then((data) => {
                if(data.code != 200) window.location.href= '/login'
                else{
                    setPares(data.data)
                    for (var i = 0; i < setPares.length; ++i) {
                        if (i == 0) {
                            document.getElementById("pareNom").value = data.data[i].nom
                            document.getElementById("pareCognom1").value = data.data[i].cognom1
                            document.getElementById("pareCognom2").value = data.data[i].cognom2
                            document.getElementById("pareEmail").value = data.data[i].email
                            document.getElementById("pareDni").value = data.data[i].dni
                            document.getElementById("pareTelefon1").value = data.data[i].telefon1
                            document.getElementById("pareTelefon2").value = data.data[i].telefon2
                        }
                    }
                }
            })
        }
    }

    useEffect(() => {
        showData()
        showPares()
        visulitzar()
    }, []);


    const [pending2, setData2] = useState(false);
    const guardarParticipant = async (setData, setPares,setSwitchValue,setStartDate) => {
        var url = window.location.href

        if (url.match("edit")) {
            var idParticipant = setData.id
            var stringParticipant = putParticipant(setSwitchValue,setStartDate)
            var stringResponable1 = putResponsable1()
            var stringResponsable2 = ""
            if (typeof stringParticipant === 'undefined' || typeof stringResponable1 === 'undefined' || typeof stringResponsable2 == 'undefined') return

            for (var i = 0; i < setPares.length; i++) {
                client.editParcipantResponsable(idParticipant, setPares[i].id, stringResponable1).then((data) => {
                }).then((data) => {
                })
            }
            client.editParticipant(idParticipant, stringParticipant).then((data) => {
                if(data.code != 200) window.location.href= '/login'
                else{
                    window.location.href = '/nen/' + idParticipant
                }
            })
        }
        else {
            var string = bodyPost(setSwitchValue)
            if  (string != undefined) {
                client.postParticipant(string).then((data) => {
                    if(data.code != 200) window.location.href= '/login'
                    else{
                        window.location.href = '/nen'
                    }
                })
            }
        }
    }

    const [switchValue, setSwitchValue] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    function visulitzar() {
        if(localStorage.getItem("token") == "null") window.location.href = '/login'
    }


    return (
        <div>
            <div className="newContainer">
                <Navbar />
                <div className="box">
                    <form>
                        <div className="input">
                            <div className="nen">
                                <div className="top">
                                    <h1>Nou Participant</h1>
                                </div>
                                <div className="bottom">
                                    <div className="input">
                                        <div className="left">
                                            <div className="formInput">
                                                <label>Nom</label>
                                                <input id="nenNom" type="text" placeholder="Mart??" required />
                                            </div>
                                            <div className="formInput">
                                                <label>Primer cognom</label>
                                                <input id="nenCognom1" type="text" placeholder="Serra" required />
                                            </div>
                                            <div className="formInput">
                                                <label>Segon cognom</label>
                                                <input id="nenCognom2" type="text" placeholder="Aguilera" />
                                            </div>
                                            <div className="formInput">
                                                <label>Autoritzaci??</label>
                                                <Switch isOn={switchValue} handleToggle={() => setSwitchValue(!switchValue)}></Switch>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="formInput">
                                                <label>DNI</label>
                                                <input id="nenDni" type="text" placeholder="4797*****" required />
                                            </div>
                                            <div className="formInput">
                                                <label>Data Naixement</label>
                                                {/*<input id="nenDataNaixement" type="text" placeholder="1999-05-27" required />*/}
                                                <DatePicker id={"nenDataNaixement"}selected={startDate}  dateFormat='dd/MM/yyyy' onChange={(date) => setStartDate(date)}></DatePicker>
                                            </div>
                                            <div className="formInput">
                                                <label>Targeta Sanit??ria</label>
                                                <input id="nenTargetaSanitaria" type="text" placeholder=" SEAG0990126333" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pares">
                                <div className="pare">
                                    <div className="top">
                                        <h1>Responsable</h1>
                                    </div>
                                    <div className="bottom">
                                        <div className="input">
                                            <div className="left">
                                                <div className="formInput">
                                                    <label>Nom</label>
                                                    <input id="pareNom" type="text" placeholder="Mart??" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Primer cognom</label>
                                                    <input id="pareCognom1" type="text" placeholder="Serra" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Segon cognom</label>
                                                    <input id="pareCognom2" type="text" placeholder="Aguilera" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Correu electr??nic</label>
                                                    <input id="pareEmail" type="email" placeholder="jja@motixilla.cat" />
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="formInput">
                                                    <label>DNI</label>
                                                    <input id="pareDni" type="text" placeholder="4797*****" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Tel??fon 1</label>
                                                    <input id="pareTelefon1" type="number" placeholder="69234578" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Tel??fon 2</label>
                                                    <input id="pareTelefon2" type="number" placeholder="69234578" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <div style={{ visibility: "hidden" }}>
                                    <Button></Button>
                                </div>
                                <button type="button" style={{ color: "darkblue", borderColor: "rgba(0, 0, 139, 0.596)" }} onClick={() => guardarParticipant(pending, pendingPares, switchValue)}>
                                    <SaveIcon ></SaveIcon>
                                    <span>Guardar</span>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewNen