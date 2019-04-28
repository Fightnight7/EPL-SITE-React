import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Arsenal from "./Components/Content/TeamsInfo/Arsenal"
import Bournemouth from "./Components/Content/TeamsInfo/Bournemouth";
import Brighton from "./Components/Content/TeamsInfo/Brighton";
import Burnley from "./Components/Content/TeamsInfo/Burnley";
import Cardiff from "./Components/Content/TeamsInfo/Cardiff";
import Chelsea from "./Components/Content/TeamsInfo/Chelsea";
import CrystalPalace from "./Components/Content/TeamsInfo/CrystalPalace";
import Everton from "./Components/Content/TeamsInfo/Everton";
import Fulham from "./Components/Content/TeamsInfo/Fulham";
import Huddersfield from "./Components/Content/TeamsInfo/Huddersfield";
import Leicester from "./Components/Content/TeamsInfo/Leicester";
import Liverpool from "./Components/Content/TeamsInfo/Liverpool";
import MC from "./Components/Content/TeamsInfo/MC";
import MU from "./Components/Content/TeamsInfo/MU";
import Newcastle from "./Components/Content/TeamsInfo/Newcastle";
import Southampton from "./Components/Content/TeamsInfo/Southampton";
import Tottenham from "./Components/Content/TeamsInfo/Tottenham";
import Watford from "./Components/Content/TeamsInfo/Watford";
import WestHam from "./Components/Content/TeamsInfo/WestHam";
import Wolves from "./Components/Content/TeamsInfo/Wolves";
import MainArticlePageContainer from "./Components/Content/News/MainArticlePage/MainArticlePageContainer";

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
            <Sidebar/>
            <Route exact path='/' render={() => <Content/>}/>
            <Route path='/Arsenal' render={() => <Arsenal/>}/>
            <Route path='/Bournemouth' render={() => <Bournemouth/>}/>
            <Route path='/Brighton' render={() => <Brighton/>}/>
            <Route path='/Burnley' render={() => <Burnley/>}/>
            <Route path='/Cardiff' render={() => <Cardiff/>}/>
            <Route path='/Chelsea' render={() => <Chelsea/>}/>
            <Route path='/CrystalPalace' render={() => <CrystalPalace/>}/>
            <Route path='/Everton' render={() => <Everton/>}/>
            <Route path='/Fulham' render={() => <Fulham/>}/>
            <Route path='/Huddersfield' render={() => <Huddersfield/>}/>
            <Route path='/Leicester' render={() => <Leicester/>}/>
            <Route path='/Liverpool' render={() => <Liverpool/>}/>
            <Route path='/MC' render={() => <MC/>}/>
            <Route path='/MU' render={() => <MU/>}/>
            <Route path='/Newcastle' render={() => <Newcastle/>}/>
            <Route path='/Southampton' render={() => <Southampton/>}/>
            <Route path='/Tottenham' render={() => <Tottenham/>}/>
            <Route path='/Watford' render={() => <Watford/>}/>
            <Route path='/WestHam' render={() => <WestHam/>}/>
            <Route path='/Wolves' render={() => <Wolves/>}/>

            <Route exact path='/MainArticle' render={() => <MainArticlePageContainer/>}/>

            <Footer/>
        </div>
    )
};

export default App;
