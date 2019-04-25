import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";


const App = (props) => {
    return (
        <div className="main">
            <Header/>
            <Sidebar/>
            <Main/>
            <Footer/>
        </div>
    )
};

export default App;
