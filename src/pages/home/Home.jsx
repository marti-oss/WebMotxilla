import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { Link } from "react-router-dom";
import APIClient from "../../client";
import config from "../../config";

const client = new APIClient(config);


const Home = () => {
    
    function visulitzar() {
        console.log(localStorage.getItem("token") == "null")
        if(localStorage.getItem("token") == "null") window.location.href = '/login'
    }

    useEffect(() => {
        visulitzar()
    }, []);


    return (
        <div className="home">
            <div className="homeContainer">
                <Navbar/>
                <Link to="monitor">
                    <div className="monitors">
                        <span className="logo">
                            Monitors
                        </span>
                    </div>
                </Link>
                <Link to="nen">
                    <div className="nens">
                        <span className="logo">
                            Nens
                        </span>
                    </div>
                </Link>
                <Link to="equip">
                    <div className="equips">
                        <span className="logo">
                            Equips
                        </span>
                    </div>
                </Link>
                    
             
            </div>
        </div>
    )
}

export default Home