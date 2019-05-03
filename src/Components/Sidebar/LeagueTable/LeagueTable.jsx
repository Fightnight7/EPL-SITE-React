import React from 'react';
import classes from './LeagueTable.module.css'
import {NavLink} from "react-router-dom";

const LeagueTable = () => {

    let LeagueTableData = [
        {id:1, team:'Mанчестер Cити', teamEng: "MC", games:36, point: 92},
        {id:2, team:'Ливерпуль', teamEng: "Liverpool", games:36, point: 91},
        {id:3, team:'Тоттенхэм', teamEng: "Tottenham", games:36, point: 70},
        {id:4, team:'Челси', teamEng: "Chelsea", games:36, point: 68},
        {id:5, team:'Арсенал', teamEng: "Arsenal", games:36, point: 66},
        {id:6, team:'Манчестер Юнайтед', teamEng: "MU", games:36, point: 65},
        {id:7, team:'Вулверхэмптон', teamEng: "Wolves", games:36, point: 54},
        {id:8, team:'Лестер', teamEng: "Leicester", games:36, point: 51},
        {id:9, team:'Эвертон', teamEng: "Everton", games:36, point: 50},
        {id:10, team:'Уотфорд', teamEng: "Watford", games:36, point: 50},
        {id:11, team:'Вест Хэм', teamEng: "WestHam", games:36, point: 46},
        {id:12, team:'Кристал Пэлас', teamEng: "CrystalPalace", games:36, point: 43},
        {id:13, team:'Борнмут', teamEng: "Bournemouth", games:36, point: 42},
        {id:14, team:'Ньюкасл', teamEng: "Newcastle", games:36, point: 42},
        {id:15, team:'Бёрнли', teamEng: "Burnley", games:36, point: 40},
        {id:16, team:'Саутгемптон', teamEng: "Southampton", games:36, point: 38},
        {id:17, team:'Брайтон', teamEng: "Brighton", games:36, point: 35},
        {id:18, team:'Кардифф Сити', teamEng: "Cardiff", games:36, point: 31},
        {id:19, team:'Фулхэм', teamEng: "Fulham", games:36, point: 26},
        {id:20, team:'Хаддерсфилд Таун', teamEng: "Huddersfield", games:36, point: 14}
    ];

    let LeagueTeams = (props) => {
        return (
            <tbody>
                <tr>
                    <td className={classes.right}>{props.id}</td>
                    <td className={classes.right}>
                        <NavLink className={classes.link} to={"/" + props.teamEng}>{props.team}</NavLink>
                    </td>
                    <td className={`${classes.right} ${classes.center}`}>{props.games}</td>
                    <td className={`${classes.right} ${classes.center}`}>{props.point}</td>
                </tr>
            </tbody>
        )
    };

    let LeagueTableDataMap = LeagueTableData.map(t=>(
        <LeagueTeams id={t.id} team={t.team} key={t.id} games={t.games} point={t.point} teamEng={t.teamEng}/>));
    return (
        <div className={classes.leaguetable}>
            <NavLink className={classes.link} to="/LeagueTable">
                <h2 className={classes.header}>Турнирная таблица</h2>
            </NavLink>
            <table>
                <tbody>
                    <tr className={classes.tableheader}>
                        <th className={classes.center}>#</th>
                        <th className={classes.tableheader}>Команда</th>
                        <th className={classes.tableheader}>Игр</th>
                        <th className={classes.tableheader}>Очки</th>
                    </tr>
                </tbody>
                {LeagueTableDataMap}
            </table>
        </div>
    )
};

export default LeagueTable;
