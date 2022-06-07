import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import { Link } from "react-router-dom";
import List from "../../components/table/Table";
import { useEffect } from "react";
import { ConstructionOutlined } from "@mui/icons-material";

const Home = () => {
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