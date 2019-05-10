import React from 'react';
import classes from './Content.module.css'
import {Route} from "react-router-dom";
import LeagueTable from "./LeagueTableMain/LeagueTableMain";
import MainArticlePageContainer from "./News/MainArticlePage/MainArticlePageContainer";
import RegularArticlePageContainer from "./News/RegularArticlePage/RegularArticlePageContainer";
import ContactUs from "../Footer/ContactUs/ContactUs";
import Arsenal from "./TeamsInfo/Arsenal"
import Bournemouth from "./TeamsInfo/Bournemouth";
import Brighton from "./TeamsInfo/Brighton";
import Burnley from "./TeamsInfo/Burnley";
import Cardiff from "./TeamsInfo/Cardiff";
import Chelsea from "./TeamsInfo/Chelsea";
import CrystalPalace from "./TeamsInfo/CrystalPalace";
import Everton from "./TeamsInfo/Everton";
import Fulham from "./TeamsInfo/Fulham";
import Huddersfield from "./TeamsInfo/Huddersfield";
import Leicester from "./TeamsInfo/Leicester";
import Liverpool from "./TeamsInfo/Liverpool";
import MC from "./TeamsInfo/MC";
import MU from "./TeamsInfo/MU";
import Newcastle from "./TeamsInfo/Newcastle";
import Southampton from "./TeamsInfo/Southampton";
import Tottenham from "./TeamsInfo/Tottenham";
import Watford from "./TeamsInfo/Watford";
import WestHam from "./TeamsInfo/WestHam";
import Wolves from "./TeamsInfo/Wolves";
import News from "./News/News";



const Content = () => {
    return (
        <div className={classes.container}>
            <Route exact path='/' render={()=> <News/>} />

            <Route exact path='/MainArticle' render={() => <MainArticlePageContainer/>}/>
            <Route exact path='/RegularArticle' render={() => <RegularArticlePageContainer/>}/>

            <Route exact path='/LeagueTable' render={() => <LeagueTable/>}/>

            <Route path='/ContactUs' render={() => <ContactUs/>}/>

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
        </div>
    )
};

export default Content;

