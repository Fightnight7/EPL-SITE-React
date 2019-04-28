import React from 'react';
import classes from './Article2.module.css'

const Article1 = () => {
    return (
        <div className={classes.article}>
            <img className={classes.img} src={require('../ArticlesImg/NorwichArticle.jpg')} alt=""/>
            <div className={classes.text}>
                <h2>"Норвич" вышел в Премьер-Лигу</h2>
                <p>"Норвич" гарантировал себе прямую путевку из Чемпионшипа в Премьер-Лигу на сезон 2019/20.</p>
                <p className={classes.comments}>Коментарии (20)</p>
            </div>
        </div>
    )
};

export default Article1;
