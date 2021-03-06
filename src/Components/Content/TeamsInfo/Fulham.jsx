import React from 'react'
import classes from './Teams.module.css'


const Fulham =() => {
    return (
        <div className={classes.team}>
            <div><img className={classes.image} src={require("./images/Fulham.jpg")} alt=""/></div>
            <p><strong>Футбольный клуб «Фулхэм»</strong> (англ. Fulham Football Club) — английский футбольный клуб, старейшая команда Лондона. Назван по имени лондонского района Фулем (Fulham), в котором расположен домашний стадион команды «Крейвен Коттедж», открытый в 1896 году. Клуб основан учащимися воскресной школы в 1879 году. Был принят во Второй дивизион Футбольной лиги 1 июня 1905 года.</p>
            <p>Прозвище команды — «дачники» (англ. The Cottagers).</p>
            <p>«Фулхэм» не выигрывал серьёзных трофеев, однако дважды в своей истории принял участие в финалах крупных турниров: в 1975 году «дачники» вышли в финал Кубка Англии, проиграв в нём другому лондонскому клубу «Вест Хэм Юнайтед», а в 2010 году сыграли в финале Лиги Европы, проиграв клубу «Атлетико Мадрид» в овертайме.</p>
        </div>
    )
};

export default Fulham;