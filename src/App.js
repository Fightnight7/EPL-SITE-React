import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

let TeamLogos = [
    {id: 1, team: "Arsenal"},
    {id: 2, team: "Bournemouth"},
    {id: 3, team: "Brighton"},
    {id: 4, team: "Burnley"},
    {id: 5, team: "Cardiff"},
    {id: 6, team: "Chelsea"},
    {id: 7, team: "CrystalPalace"},
    {id: 8, team: "Everton"},
    {id: 9, team: "Fulham"},
    {id: 10, team: "Huddersfield"},
    {id: 11, team: "Leicester"},
    {id: 12, team: "Liverpool"},
    {id: 13, team: "MC"},
    {id: 14, team: "MU"},
    {id: 15, team: "Newcastle"},
    {id: 16, team: "Southampton"},
    {id: 17, team: "Tottenham"},
    {id: 18, team: "Watford"},
    {id: 19, team: "WestHam"},
    {id: 20, team: "Wolves"}
];

const App = (props) => {
    return (
        <div className="main">
            <Header teams={TeamLogos}/>
            <Sidebar teams={TeamLogos}/>
            <Content />
            <Footer/>
        </div>
    )
};

export default App;
