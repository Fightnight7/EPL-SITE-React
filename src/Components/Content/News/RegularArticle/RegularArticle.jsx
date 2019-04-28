import React from 'react';
import classes from './RegularArticle.module.css'
import Article1 from "./Articles/Article1/Article1";
import Article2 from "./Articles/Article2/Article2";
import Article3 from "./Articles/Article3/Article3";
import Article4 from "./Articles/Article4/Article4";

const RegularArticle = () =>{
    return (
        <div className={classes.regularArticle}>
            <Article1 />
            <Article2 />
            <Article3 />
            <Article4 />
        </div>
    )
};

export default RegularArticle;
