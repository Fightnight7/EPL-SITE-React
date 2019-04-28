import React from 'react'
import classes from './Teams.module.css'

const Tottenham =() => {
    return (
        <div className={classes.team}>
            <div><img className={classes.image} src={require("./images/Tottenham.png")} alt=""/></div>
            <p><strong>Футбольный клуб «Тоттенхэм Хотспур»</strong> (англ. Tottenham Hotspur Football Club) — английский профессиональный футбольный клуб из Тоттенема, района на севере Лондона, выступающий в Премьер-лиге. Основан в 1882 году. Прозвище клуба — «шпоры». Выступает на стадионе «Тоттенхэм Хотспур». </p>
            <p>«Тоттенхэм Хотспур» стал первым клубом в XX веке, сделавшим домашний «дубль», выиграв и чемпионат, и Кубок Англии в сезоне 1960/1961. В 1963 году «шпоры» стали первым британским клубом, выигравшим европейский кубок — Кубок обладателей кубков УЕФА. В 1980-е годы «шпоры» выиграли несколько трофеев: дважды Кубок Англии, Суперкубок Англии, Кубок УЕФА (1983/1984). В 2008 году клуб выиграл Кубок Футбольной лиги, переиграв в финале «Челси» со счётом 2:1 в дополнительное время; таким образом, «Тоттенхэм» выигрывал титул хотя бы один раз в десятилетие на протяжении последних 60 лет, как и «Манчестер Юнайтед». </p>
            <p>«Тоттенхэм» традиционно соперничает с ближайшим соседом, «Арсеналом»: матчи между этими двумя командами называют «северолондонским дерби».</p>
        </div>
    )
};

export default Tottenham;