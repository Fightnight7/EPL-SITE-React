import React from 'react';
import classes from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <p>Контакты</p>
            <p>О нас</p>
            <p>Все права защищены</p>
            <p>© EPL Football Site 2019</p>
        </div>
    )
};

export default Footer;

