import React from 'react';
import classes from './Sidebar.module.css'
import Voting from "./Voting/Voting";
import LeagueTable from "./LeagueTable/LeagueTable";

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <Voting/>
            <LeagueTable teams={props.teams}/>
        </div>
    )
};

export default Sidebar;
