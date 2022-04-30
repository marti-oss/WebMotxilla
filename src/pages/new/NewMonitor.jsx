import React from "react";
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";

const NewMonitor = () => {
    return (
        <div>
            <div className="newContainer">
                <Navbar/>
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
                                        <input type="text" placeholder="Martí"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Primer cognom</label>
                                        <input type="text" placeholder="Serra"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Segon cognom</label>
                                        <input type="text" placeholder="Aguilera"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Correu electrònic</label>
                                        <input type="email" placeholder="msa@upc.edu" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="formInput">
                                        <label>DNI</label>
                                        <input type="text" placeholder="4797*****" />
                                    </div>
                                    <div className="formInput">
                                        <label>Llicència</label>
                                        <input type="text" placeholder="123456789"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Targeta Sanitària</label>
                                        <input type="text" placeholder=" SEAG 0 990126 003" />
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <div style={{visibility:"hidden"}}>
                                    <Button></Button>
                                </div> 
                                <Button type="Save"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMonitor