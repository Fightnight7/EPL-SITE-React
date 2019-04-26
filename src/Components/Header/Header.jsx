import React from 'react';
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img className={classes.logoimg} src={require('./images/premier-league-logo-header.svg')} alt=""/>
            </div>
            <div></div>
            <div className={classes.images}>
                <img src={require('./images/Arsenal.png')} alt=""/>
                <img src={require('./images/Bournemouth.png')} alt=""/>
                <img src={require('./images/Brighton.png')} alt=""/>
                <img src={require('./images/Burnley.png')} alt=""/>
                <img src={require('./images/Cardiff.png')} alt=""/>
                <img src={require('./images/Chelsea.png')} alt=""/>
                <img src={require('./images/CrystalPalace.png')} alt=""/>
                <img src={require('./images/Everton.png')} alt=""/>
                <img src={require('./images/Fulham.png')} alt=""/>
                <img src={require('./images/Huddersfield.png')} alt=""/>
                <img src={require('./images/Leicester.png')} alt=""/>
                <img src={require('./images/Liverpool.png')} alt=""/>
                <img src={require('./images/MC.png')} alt=""/>
                <img src={require('./images/MU.png')} alt=""/>
                <img src={require('./images/Newcastle.png')} alt=""/>
                <img src={require('./images/Southampton.png')} alt=""/>
                <img src={require('./images/Tottenham.png')} alt=""/>
                <img src={require('./images/Watford.png')} alt=""/>
                <img src={require('./images/WestHam.png')} alt=""/>
                <img src={require('./images/Wolves.png')} alt=""/>
            </div>
        </div>
    )
};

export default Header;
