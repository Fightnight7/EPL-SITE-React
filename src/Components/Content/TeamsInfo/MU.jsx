import React from 'react'
import classes from './Teams.module.css'

const MU =() => {
    return (
        <div className={classes.team}>
            <div><img className={classes.image} src={require("./images/MU.jpg")} alt=""/></div>
            <p><strong>Футбольный клуб «Манчестер Юнайтед»</strong> (англ. Manchester United Football Club) — английский профессиональный футбольный клуб из Стретфорда, Большой Манчестер. Был основан в 1878 году под названием «Ньютон Хит (Ланкашир энд Йоркшир Рейлуэй)», в 1902 году изменил название на «Манчестер Юнайтед». Один из самых популярных футбольных клубов в мире. Один из основателей английской Премьер-лиги в 1992 году.</p>
            <p>Домашний стадион «Юнайтед», «Олд Траффорд», был открыт в 1910 году. Он является крупнейшим после «Уэмбли» футбольным стадионом в Англии и вмещает около 75 тысяч зрителей. </p>
            <p>«Манчестер Юнайтед» является одним из самых успешных английских клубов по количеству выигранных титулов за всю историю, а под руководством Алекса Фергюсона — самым успешным клубом в Англии, выиграв 38 трофеев с 1986 по 2013 год. В сезоне 2012/13 «Юнайтед» в рекордный 20-й раз выиграл чемпионский титул. В 1968 году «Манчестер Юнайтед» стал первым английским клубом, выигравшим Кубок европейских чемпионов, победив в финале португальскую «Бенфику» со счётом 4:1. В 1999 году клуб во второй раз выиграл главный европейский клубный трофей, одолев в финале мюнхенскую «Баварию» со счётом 2:1. В 2008 году «Юнайтед» вновь выиграл Лигу чемпионов, обыграв в финале лондонский «Челси». </p>
            <p>В 2019 году «Манчестер Юнайтед» занимал третье место по доходам среди всех футбольных клубов мира. В 2018 году Forbes оценил клуб в 4,123 млрд долларов (3,059 млрд фунтов). Таким образом «Манчестер Юнайтед» занимает второе место в списке самых дорогостоящих спортивных клубов в мире и первое место в списке самых дорогостоящих футбольных клубов.</p>
            <p>Главным тренером клуба является норвежский специалист Уле Гуннар Сульшер, назначенный на эту должность в декабре 2018 года после увольнения Жозе Моуринью. Капитаном команды в сезоне 2018/19 является Антонио Валенсия, сменивший завершившего карьеру в мае 2018 года Майкла Каррика.</p>
        </div>
    )
};

export default MU;