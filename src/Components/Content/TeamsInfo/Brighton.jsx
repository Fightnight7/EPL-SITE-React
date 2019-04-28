import React from 'react'
import classes from './Teams.module.css'


const Brighton =() => {
    return (
        <div className={classes.team}>
            <div><img className={classes.image} src={require("./images/Brighton.jpg")} alt=""/></div>
            <p><strong>Футбольный клуб «Брайтон энд Хоув Альбион»</strong> (англ. Brighton & Hove Albion Football Club) — английский профессиональный футбольный клуб из муниципалитета Брайтон-энд-Хов, Восточный Суссекс. По итогам сезона 2016/17 завоевал себе право выхода в Премьер-лигу.</p>
            <p>Клуб был основан в 1901 году. Домашний стадион — «Фалмер» (коммерческое название — «Американ экспресс комьюнити стэдиум», или «Амэкс»), вмещающий более 30 тысяч зрителей. Главный тренер клуба — Крис Хьютон.</p>
        </div>
    )
};

export default Brighton;