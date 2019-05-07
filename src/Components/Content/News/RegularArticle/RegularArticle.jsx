import React from 'react';
import classes from './RegularArticle.module.css'
import {NavLink} from "react-router-dom";

const RegularArticle = () => {
    let ArticleData = [
        {
            id:1,
            image: "'./Articles/ArticlesImg/NorwichArticle.jpg'",
            header: '"Норвич" вышел в Премьер-Лигу"',
            paragraph: '"Норвич" гарантировал себе прямую путевку из Чемпионшипа в Премьер-Лигу на сезон 2019/20.',
            comments: "Коментарии (20)"
        },
        {
            id:2,
            image: "'./Articles/ArticlesImg/NorwichArticle.jpg'",
            header: '"Норвич" вышел в Премьер-Лигу"',
            paragraph: '"Норвич" гарантировал себе прямую путевку из Чемпионшипа в Премьер-Лигу на сезон 2019/20.',
            comments: "Коментарии (20)"
        },
        {
            id:3,
            image: "'./Articles/ArticlesImg/NorwichArticle.jpg'",
            header: '"Норвич" вышел в Премьер-Лигу"',
            paragraph: '"Норвич" гарантировал себе прямую путевку из Чемпионшипа в Премьер-Лигу на сезон 2019/20.',
            comments: "Коментарии (20)"
        },
        {
            id:4,
            image: "'./Articles/ArticlesImg/NorwichArticle.jpg'",
            header: '"Норвич" вышел в Премьер-Лигу"',
            paragraph: '"Норвич" гарантировал себе прямую путевку из Чемпионшипа в Премьер-Лигу на сезон 2019/20.',
            comments: "Коментарии (20)"
        },

    ];

    let RegArticle = (props) => {
        return (
            <div className={classes.article}>
                <img className={classes.img} src={require("./ArticlesImg/NorwichArticle.jpg")} alt=""/>
                <div className={classes.text}>
                    <h3><NavLink to="/RegularArticle">{props.header}</NavLink></h3>
                    <p>{props.paragraph}</p>
                    <div className={classes.comments}>{props.comments}</div>
                </div>
            </div>
        )
    };

    let ArticleDataMap = ArticleData.map(
        t => <RegArticle key={t.id} image={t.image} header={t.header} paragraph={t.paragraph} comments={t.comments}/>);


    return (
        <div className={classes.regularArticle}>
            {ArticleDataMap}
        </div>
    )
};

export default RegularArticle;
