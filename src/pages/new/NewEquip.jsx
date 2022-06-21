import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import config from "../../config";
import APIClient from "../../client";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

const client = new APIClient(config);

function crearSelectInputMonitor(pending){
    if(pending != false){
        return(
        <select id='selectMonitor' name="monitors" className="form-control">
            {
                pending.map(element=>(
                    <option key={element.id} value={element.id}>{element.nom} {element.cognom1} {element.cognom2}</option>
                ))
            }
        </select>
        );
    }
}

function crearSelectInputParticipant(pending){
    if(pending != false){
        return(
        <select id='selectParticipant' name="participants" className="form-control">
            {
                pending.map(element=>(
                    <option key={element.id} value={element.id}>{element.nom} {element.cognom1} {element.cognom2}</option>
                ))
            }
        </select>
        );
    }
}

function addMonitor() {
    var select = document.getElementById('selectMonitor')
    var text = select.options[select.selectedIndex].text
    var id = select.value
    if(id.disabled != true){
        document.getElementById("taulaMonitor").insertRow(-1).innerHTML = `<td name='id'>${id}</td><td>${text}</td>`;
        var valEsborrar = select.selectedIndex;
        select.removeChild(select[valEsborrar]);
    }
}

function addParticipant() {
    var select = document.getElementById('selectParticipant')
    var text = select.options[select.selectedIndex].text
    var id = select.value
    if(id.disabled != true){
        document.getElementById("taulaParticipant").insertRow(-1).innerHTML = `<td name='id'>${id}</td><td>${text}</td>`;
        var valEsborrar = select.selectedIndex;
        select.removeChild(select[valEsborrar]);
    }
}


function crearTaulaMonitor() {
    return(
        <table id='taulaMonitor'>
            <tr>
                <th>Nom</th>
            </tr>
        </table>
    );

}
function crearTaulaParticipant() {
    return(
        <table id='taulaParticipant'>
            <tr>
                <th>Nom</th>
            </tr>
        </table>
    );

}

function botoMonitor() {
    return(
    <div className="button">
        <div style={{visibility:"hidden"}}>
            <Button></Button>
        </div> 
        <button type="button" style={{color: "darkblue", borderColor: "rgba(0, 0, 139, 0.596)"}} onClick={() => addMonitor()}>
            <AddIcon ></AddIcon>
            <span>Afegir Monitor</span>
        </button>
    </div>
    );
}
function botoParticipant() {
    return(
    <div className="button">
        <div style={{visibility:"hidden"}}>
            <Button></Button>
        </div> 
        <button type="button" style={{color: "darkblue", borderColor: "rgba(0, 0, 139, 0.596)"}} onClick={() => addParticipant()}>
            <AddIcon ></AddIcon>
            <span>Afegir Paticipant</span>
        </button>
    </div>
    );
}


function guardarEquip() {
    //MONITORS
    var taulaMonitor = document.getElementById("taulaMonitor")
    var rowLength = taulaMonitor.rows.length;
    var monitorsList = ""

    //loops through rows    
    for (var i = 0; i < rowLength; i++){

      //gets cells of current row  
       var oCells = taulaMonitor.rows.item(i).cells;

       //gets amount of cells of current row
       var cellLength = oCells.length;

       //loops through each cell in current row
       for(var j = 0; j < cellLength; j++){

              // get your cell info here
              var cellVal = oCells.item(j).innerHTML;
              if(j == 0 && cellVal != "Nom") {
                  if (monitorsList.length == 0) monitorsList += "&idmonitors=" + cellVal
                  else monitorsList += "-" + cellVal
              }
           }
    }

    //PARTICIPANTS
    var taulaMonitor = document.getElementById("taulaParticipant")
    var rowLength = taulaMonitor.rows.length;
    var participantsList = ""

    //loops through rows    
    for (var i = 0; i < rowLength; i++){

      //gets cells of current row  
       var oCells = taulaMonitor.rows.item(i).cells;

       //gets amount of cells of current row
       var cellLength = oCells.length;

       //loops through each cell in current row
       for(var j = 0; j < cellLength; j++){

              // get your cell info here
              var cellVal = oCells.item(j).innerHTML;
              if(j == 0 && cellVal != "Nom") {
                    if (participantsList.length == 0) participantsList += "&idparticipants=" + cellVal
                    else participantsList += "-" + cellVal
                }
           }
    }
    var nom = document.getElementById("nom").value;
    if (!nom) return alert("INDICAR NOM")
    if (!participantsList) return alert("INDICAR PARTICIPANTS")
    if (!monitorsList) return alert("INDICAR MONITORS")
    
    var body = "?nom="+ nom + monitorsList + participantsList
    return body

}

const NewEquip = () =>{
    const [pending, setData] = useState(false);
    const showData = async() =>{
        client.getMonitors().then((data) => {
            if(data.code != 200) window.location.href= '/login'
            else setData(data.data);
            }
        ) 
    }


    const [pendingParticipants, setParticipants] = useState(false);
    const showParticipants = async() =>{
        client.getParticipants().then((data) => {
            if(data.code != 200) window.location.href= '/login'
            else setParticipants(data.data);
            }
        ) 
    }
    useEffect(() => {
        showParticipants()
        showData()
    },[])

    const [pending2, setData2] = useState(false);
    const guardar = async() => {
        var body = guardarEquip()
        if (body.length != 0){
            client.postEquip(body).then((data) => {
                if(data.code != 200) window.location.href= '/login'
                else {
                    setData(data.data)
                    window.location.href='/equip'
                }
            })
       }
    }

    function visulitzar() {
        if(localStorage.getItem("token") == "null") window.location.href = '/login'
    }

    useEffect(() => {
        visulitzar()
    }, []);


    return(
        <div className="new">
            <div className="newContainer">
                <Navbar></Navbar>
                <div className="box">
                    <h1>Nou Equip</h1>
                    <div className="bottom">
                        <div className="input">
                            <div className="left">
                                <div className="formInput">
                                    <label>Nom</label>
                                    <input id="nom" type="text" placeholder="Formigues"/>
                                </div>
                            </div>
                            <div className="right">
                                <div className="formInput" style={{visibility:"hidden"}}>
                                    <label>Nom</label>
                                    <input id="nom" type="text" placeholder="Formigues"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="input">
                            <div className="left">
                                <h2>Seleccionar Monitor</h2>
                                <div className="select">
                                    {crearSelectInputMonitor(pending)}
                                </div>
                                {botoMonitor()}
                                {crearTaulaMonitor()}
                            </div>
                            <div className="right">
                            <h2>Seleccionar Participant</h2>
                                <div className="select">
                                    {crearSelectInputParticipant(pendingParticipants)}
                                </div>
                                {botoParticipant()}
                                {crearTaulaParticipant()}
                            </div>
                        </div>
                        <div className="button">
                            <div style={{visibility:"hidden"}} id="nocal">
                                <Button></Button>
                            </div> 
                            <button type="button" style={{color: "darkblue", borderColor: "rgba(0, 0, 139, 0.596)"}} onClick={() => guardar()}>
                                <SaveIcon ></SaveIcon>
                                <span>Guardar</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NewEquip