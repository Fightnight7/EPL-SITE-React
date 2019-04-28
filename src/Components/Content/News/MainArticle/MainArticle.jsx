import React from 'react'
import classes from './MainArticle.module.css'
import {NavLink} from "react-router-dom";

const MainArticle = () =>{
    return (
        <div className={classes.mainArticle}>
            <NavLink to="/MainArticle">
                <img className={classes.img} src={require('./MainArticleImg/MainArticle.jpg')} alt=""/>
            </NavLink>
            <div className={classes.article}>
                <NavLink to="/MainArticle">
                    <h2 className={classes.h2}>"Тоттенхэм" впервые проиграл на новом стадионе</h2>
                </NavLink>
                <p>"Тоттенхэм" потерпел свое первое поражение на новом стадионе, проиграв со счетом 0:1 "Вест Хэму".</p>
                <p>Маурисио Почеттино освежил стартовый состав "шпор" с помощью Давинсона Санчеса, Хуана Фойта, Бена Дэвиса и Эрика Дайера, которые заменили Яна Вертонгена, Кирана Триппьера, Виктора Ваньяму и Фернандо Льоренте.</p>
                <p>В старт "молотобойцев" влились Исса Диоп и Райан Фредерикс, заменив Анджело Огбонну и Пабло Сабалету.</p>
                <p className={classes.comments}>Коментарии (25)</p>
            </div>
        </div>
    )
};

export default MainArticle;