import React from 'react'
import classes from './Teams.module.css'


const Southampton =() => {
    return (
        <div className={classes.team}>
            <div><img className={classes.image} src={require("./images/Southampton.png")} alt=""/></div>
            <p><strong>Футбольный клуб «Саутгемптон»</strong> (англ. Southampton Football Club) — английский футбольный клуб из одноимённого города, графство Гэмпшир. Выступает в Премьер-лиге, высшем дивизионе в системе футбольных лиг Англии. Образован в 1885 году. Домашним стадионом клуба является «Сент-Мэрис», вмещающий 32 505 зрителей.</p>
            <p>Традиционное прозвище клуба — «святые», так как «Саутгемптон» был основан членами Молодёжной ассоциации церкви Святой Девы Марии. Традиционные цвета клуба — красно-белые.</p>
            <p>Главный тренер «Саутгемптона» — Ральф Хазенхюттль, назначенный на эту должность после увольнения Марка Хьюза. Капитаном команды является Стивен Дэвис.</p>
            <p>Принципиальным соперником «Саутгемптона» является «Портсмут», матчи против которого известны в Англии под названием «Дерби Южного побережья».</p>
        </div>
    )
};

export default Southampton;