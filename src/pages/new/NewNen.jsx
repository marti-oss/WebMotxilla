import React from "react";
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";

const NewNen = () => {
    return (
        <div>
            <div className="newContainer">
                <Navbar/>
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
                                                <label>Autorització</label>
                                                <input type="email" placeholder="Sí" />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="formInput">
                                                <label>DNI</label>
                                                <input type="text" placeholder="4797*****" />
                                            </div>
                                            <div className="formInput">
                                                <label>Data Neixament</label>
                                                <input type="text" placeholder="26-01-1999"/>
                                            </div>
                                            <div className="formInput">
                                                <label>Targeta Sanitària</label>
                                                <input type="text" placeholder=" SEAG 0 990126 003" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pares">
                                <div className="pare">
                                <div className="top">
                                        <h1>Pare/Mare/Tutor Legal</h1>
                                    </div>
                                    <div className="bottom">
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
                                                    <input type="email" placeholder="jja@motixilla.cat" />
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="formInput">
                                                    <label>DNI</label>
                                                    <input type="text" placeholder="4797*****" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 1</label>
                                                    <input type="number" placeholder="69234578"/>
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 2</label>
                                                    <input type="number" placeholder="69234578" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mare">
                                    <div className="top">
                                        <h1>Pare/Mare/Tutor Legal</h1>
                                    </div>
                                    <div className="bottom">
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
                                                    <input type="email" placeholder="jja@motixilla.cat" />
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="formInput">
                                                    <label>DNI</label>
                                                    <input type="text" placeholder="4797*****" />
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 1</label>
                                                    <input type="number" placeholder="69234578"/>
                                                </div>
                                                <div className="formInput">
                                                    <label>Telèfon 2</label>
                                                    <input type="number" placeholder="69234578" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <div style={{visibility:"hidden"}}>
                                    <Button></Button>
                                </div> 
                                <Button type="Save"/>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewNen