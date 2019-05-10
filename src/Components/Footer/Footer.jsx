import React from 'react';
import classes from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <p><NavLink to="/ContactUs">Контакты</NavLink></p>
            <p><NavLink to="/AboutUs">О нас</NavLink></p>
            <p>Все права защищены</p>
            <p>© EPL Football Site 2019</p>
        </div>
    )
};

export default Footer;

