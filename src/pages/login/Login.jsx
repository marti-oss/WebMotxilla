import "./login.scss";
import React, { useState } from "react";
import Logo from "../../components/logo/Logo"
import config from "../../config";
import APIClient from "../../client";

const client = new APIClient(config);

const Login = () => {
    const [pending, setData] = useState(false);
    const iniciarSessio = async() => {

        var email = document.getElementById("email").value
        var contrasenya = document.getElementById("contrasenya").value
        if (email.length == 0 || contrasenya.length == 0) {
            alert("Omplit tots el camps");
            return;
        }
        client.iniciarSessio(email,contrasenya).catch((error) => {
            if(error) {
                document.getElementById("email").value = "";
                document.getElementById("contrasenya").value = "";
                alert("Correu electrònic o contrasenya incorrecta");
            }
        }).then((data) => {
            try{
                window.location.href = '/'
            }
            catch(error){}
                
        })
    }
  return(
      <div className="loginContainer">
          <Logo style={{with:0}}></Logo>
          <div className="box">
              <div className="top">
                  <h1>Iniciar Sessió</h1>
              </div>
              <div className="bottom">
                  <form>
                      <div className="formInput">
                          <label>Correu electrònic</label>
                          <input id="email" type="text"/>
                      </div>
                      <div className="formInput">
                          <label>Contrasenya</label>
                          <input id="contrasenya" type="password"/>
                      </div>
                      <div style={{ visibility: "hidden" }}>
                        <button type="button">
                            <span>Iniciar Sessió</span>
                        </button>
                      </div>
                      <button type="button" onClick={() => {iniciarSessio()}}>
                            <span>Iniciar Sessió</span>
                        </button>
                  </form>
              </div>
          </div>

      </div>
  )
}


export default Login