import React, { useEffect, useState } from 'react';
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import config from "../../config";
import APIClient from "../../client";
import SaveIcon from '@mui/icons-material/Save';
import Switch from "../../components/switch/Switch";
import { CookieTwoTone } from '@mui/icons-material';

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
                if (inputs[i].id == "nenDataNaixement") string += "dataNaixement=" + inputs[i].value;
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
                    if (!inputs[i].value.includes("@")) return alert("CORREU ELECTRÒNIC FORMAT INVÀLID");
                }
                if (inputs[i].id == "pareDni") string += "res1dni=" + inputs[i].value;
                if (inputs[i].id == "pareTelefon1") string += "res1telefon1=" + inputs[i].value;
                if (inputs[i].id == "pareTelefon2") string += "res1telefon2=" + inputs[i].value;
            }
            if (inputs[i].id.includes("mare")) {
                if (string.length == 0) string += "?"
                else string += "&"
                if (inputs[i].id == "mareNom") string += "res2nom=" + inputs[i].value;
                if (inputs[i].id == "mareCognom1") string += "res2cognom1=" + inputs[i].value;
                if (inputs[i].id == "mareCognom2") string += "res2cognom2=" + inputs[i].value;
                if (inputs[i].id == "mareEmail") {
                    string += "res2email=" + inputs[i].value;
                    if (!inputs[i].value.includes("@")) return alert("CORREU ELECTRÒNIC FORMAT INVÀLID");
                }
                if (inputs[i].id == "mareDni") string += "res2dni=" + inputs[i].value;
                if (inputs[i].id == "mareTelefon1") string += "res2telefon1=" + inputs[i].value;
                if (inputs[i].id == "mareTelefon2") string += "res2telefon2=" + inputs[i].value;
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
    //if (string == 0 && stringResponsable2 == 0) return alert("Completar com a mínim un tutor legal")
    if (string.length != 0) {
        if (!string.includes("res1nom")) return alert("INDICAR NOM A RESPONSABLE 1");
        if (!string.includes("res1cognom")) return alert("INDICAR PRIMER COGNOM A RESPONSABLE 1");
        if (!string.includes("res1email")) return alert("INDICAR CORREU ELECTRÒNIC A RESPONSABLE 1");
        if (!string.includes("res1dni")) return alert("INDICAR DNI A RESPONSABLE 1");
        if (!string.includes("res1telefon1")) return alert("INDICAR DE TELÈFON 1 A RESPONSABLE 1");
    }

    /*
    if(string.length != 0){
        if(!string.includes("res2nom")) return alert("INDICAR NOM A RESPONSABLE 2");
        if(!string.includes("res2nom")) return alert("INDICAR PRIMER COGNOM A RESPONSABLE 2");
        if(!string.includes("res2nom")) return alert("INDICAR CORREU ELECTRÒNIC A RESPONSABLE 2");
        if(!string.includes("res2nom")) return alert("INDICAR DNI A RESPONSABLE 2");
        if(!string.includes("res2nom")) alert("INDICAR DE TELÈFON 1 A RESPONSABLE 2");
    }
    */
    return string
}

function putParticipant(setSwitchValue) {
    var string = ""
    if (document.getElementById("nenNom").length != 0) string += "?nom=" + document.getElementById("nenNom").value
    if (document.getElementById("nenCognom1").length != 0) string += "&cognom1=" + document.getElementById("nenCognom1").value
    if (document.getElementById("nenCognom2").length != 0) string += "&cognom2=" + document.getElementById("nenCognom2").value
    if (document.getElementById("nenreact-switch-new")) string += "&autoritzacio=" + setSwitchValue
    if (document.getElementById("nenDni").length != 0) string += "&dni=" + document.getElementById("nenDni").value
    if (document.getElementById("nenDataNaixement").length != 0) string += "&dataNaixement=" + document.getElementById("nenDataNaixement").value
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
        if (!document.getElementById("pareEmail").value.includes("@")) return alert("CORREU ELECTRÒNIC FORMAT INVÀLID");
        string += "&email=" + document.getElementById("pareEmail").value;
    }
    if (document.getElementById("pareDni").length != 0) string += "&dni=" + document.getElementById("pareDni").value
    if (document.getElementById("pareTelefon1").length != 0) string += "&telefon1=" + document.getElementById("pareTelefon1").value
    if (document.getElementById("pareTelefon2").length != 0) string += "&telefon2=" + document.getElementById("pareTelefon2").value

    if (string.length != 0) {
        if (!string.includes("nom")) return alert("INDICAR NOM A RESPONSABLE 1");
        if (!string.includes("cognom1")) return alert("INDICAR PRIMER COGNOM A RESPONSABLE 1");
        if (!string.includes("email")) return alert("INDICAR CORREU ELECTRÒNIC A RESPONSABLE 1");
        if (!string.includes("dni")) return alert("INDICAR DNI A RESPONSABLE 1");
        if (!string.includes("telefon1")) return alert("INDICAR DE TELÈFON 1 A RESPONSABLE 1");
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
                setData(data.data);
                setSwitchValue(data.data.autoritzacio)
                document.getElementById("nenNom").value = data.data.nom
                document.getElementById("nenCognom1").value = data.data.cognom1
                document.getElementById("nenCognom2").value = data.data.cognom2
                document.getElementById("nenDni").value = data.data.dni;
                document.getElementById("nenDataNaixement").value = data.data.dataNaixement.date.split(" ")[0]
                document.getElementById("nenTargetaSanitaria").value = data.data.targetaSanitaria
            }
            )
        }

    }

    const [pendingPares, setPares] = useState(false);
    const showPares = async () => {
        if (url.match("edit")) {
            client.getParticipantResponsable(id).then((data) => {
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
                    else {
                        document.getElementById("mareNom").value = data.data[i].nom
                        document.getElementById("mareCognom1").value = data.data[i].cognom1
                        document.getElementById("mareCognom2").value = data.data[i].cognom2
                        document.getElementById("mareEmail").value = data.data[i].email
                        document.getElementById("mareDni").value = data.data[i].dni
                        document.getElementById("mareTelefon1").value = data.data[i].telefon1
                        document.getElementById("mareTelefon2").value = data.data[i].telefon2
                    }
                }
            })
        }
    }

    useEffect(() => {
        showData()
        showPares()
    }, []);


    const [pending2, setData2] = useState(false);
    const guardarParticipant = async (setData, setPares,setSwitchValue) => {
        var url = window.location.href

        if (url.match("edit")) {
            var idParticipant = setData.id
            var stringParticipant = putParticipant(setSwitchValue)
            var stringResponable1 = putResponsable1()
            var stringResponsable2 = ""
            if (typeof stringParticipant === 'undefined' || typeof stringResponable1 === 'undefined' || typeof stringResponsable2 == 'undefined') return

            for (var i = 0; i < setPares.length; i++) {
                client.editParcipantResponsable(idParticipant, setPares[i].id, stringResponable1).then((data) => {
                    data = data
                }).then((data) => {
                    data = data
                })
            }
            client.editParticipant(idParticipant, stringParticipant).then((data) => {
                data = data;
                window.location.href = '/nen/' + idParticipant
            })
        }
        else {
            var string = bodyPost(setSwitchValue)
            if  (string != undefined) {
                client.postParticipant(string).then((data) => {
                    data = data
                    window.location.href = '/nen'
                })
            }
        }
    }

    const [switchValue, setSwitchValue] = useState(false);


    return (
        <div>
            <div className="newContainer">
                <Navbar />
                <div className="box">
                    <form>
                        <div className="input">
                            <div className="nen">
                                <div className="top">
                                    <h1>Nou Nen/a</h1>
                                </div>
                                <div className="bottom">
                                    <div className="input">
                                        <div className="left">
                                            <div className="formInput">
                                                <label>Nom</label>
                                                <input id="nenNom" type="text" placeholder="Martí" required />
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
                                                {/*<label>Autorització</label>
                                                <input id="nenAutoritzacio" type="email" placeholder="Sí" required />
    */}
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
                                                <input id="nenDataNaixement" type="text" placeholder="1999-05-27" required />
                                            </div>
                                            <div className="formInput">
                                                <label>Targeta Sanitària</label>
                                                <input id="nenTargetaSanitaria" type="text" placeholder=" SEAG0990126333" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pares">
                                <div className="pare">
                                    <div className="top">
                                        <h1>Responsable 1</h1>
                                    </div>
                                    <div className="bottom">
                                        <div className="input">
                                            <div className="left">
                                                <div className="formInput">
                                                    <label>Nom</label>
                                                    <input id="pareNom" type="text" placeholder="Martí" />
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
                                                    <label>Correu electrònic</label>
                                                    <input id="pareEmail" type="email" placeholder="jja@motixilla.cat" />
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="formInput">
                                                    <label>DNI</label>
                                                    <input id="pareDni" type="text" placeholder="4797*****" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 1</label>
                                                    <input id="pareTelefon1" type="number" placeholder="69234578" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 2</label>
                                                    <input id="pareTelefon2" type="number" placeholder="69234578" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mare">
                                    <div className="top">
                                        <h1>Responsable 2</h1>
                                    </div>
                                    <div className="bottom">
                                        <div className="input">
                                            <div className="left">
                                                <div className="formInput">
                                                    <label>Nom</label>
                                                    <input id="mareNom" type="text" placeholder="Martí" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Primer cognom</label>
                                                    <input id="mareCognom1" type="text" placeholder="Serra" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Segon cognom</label>
                                                    <input id="mareCognom2" type="text" placeholder="Aguilera" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Correu electrònic</label>
                                                    <input id="mareEmail" type="email" placeholder="jja@motixilla.cat" />
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="formInput">
                                                    <label>DNI</label>
                                                    <input id="mareDni" type="text" placeholder="4797*****" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 1</label>
                                                    <input id="mareTelefon1" type="number" placeholder="69234578" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 2</label>
                                                    <input id="mareTelefon2" type="number" placeholder="69234578" />
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