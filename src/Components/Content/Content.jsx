import React from 'react';
import classes from './Content.module.css'
import MainArticle from "./News/MainArticle/MainArticle";
import RegularArticle from "./News/RegularArticle/RegularArticle";

const Content = () => {
    return (
        <div className={classes.content}>
            <MainArticle/>
            <RegularArticle/>
        </div>
    )
};

export default Content;

