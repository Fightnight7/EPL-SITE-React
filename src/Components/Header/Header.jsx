import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let LogoList = (props) => {
        return (
            <NavLink to={props.team}>
                <img src={require("./images" + props.team + ".png")} alt=""/>
            </NavLink>
        )
    };

    let TeamLogosMap = props.teams.map(
        t => <LogoList id={t.id} team={"/" + t.team} key={t.id}/>);

    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <NavLink to="/"> <img className={classes.logoimg} src={require('./images/premier-league-logo-header.svg')} alt=""/></NavLink>
                <div className={classes.buttonarea}>
                    <button className={classes.button}>Авторизироваться</button>
                    <button className={classes.button}>Голосования</button>
                </div>
            </div>
            <div className={classes.title}>
                <h1><NavLink to="/">Английский футбол</NavLink></h1>
            </div>
            <div className={classes.images}>
                {TeamLogosMap}
            </div>
        </div>
    )
};

export default Header;
