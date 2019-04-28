import React from 'react';
import classes from './LeagueTable.module.css'



const LeagueTable = () => {

    let LeagueTableData = [
        {id:1, team:'MC', games:36, point: 88},
        {id:2, team:'MC', games:36, point: 88},
        {id:3, team:'MC', games:36, point: 88},
        {id:4, team:'MC', games:36, point: 88},
        {id:5, team:'MC', games:36, point: 88},
        {id:6, team:'MC', games:36, point: 88},
        {id:7, team:'MC', games:36, point: 88},
        {id:8, team:'MC', games:36, point: 88},
        {id:9, team:'MC', games:36, point: 88},
        {id:10, team:'MC', games:36, point: 88},
        {id:11, team:'MC', games:36, point: 88},
        {id:12, team:'MC', games:36, point: 88},
        {id:13, team:'MC', games:36, point: 88},
        {id:14, team:'MC', games:36, point: 88},
        {id:15, team:'MC', games:36, point: 88},
        {id:16, team:'MC', games:36, point: 88},
        {id:17, team:'MC', games:36, point: 88},
        {id:18, team:'MC', games:36, point: 88},
        {id:19, team:'MC', games:36, point: 88},
        {id:20, team:'MC', games:36, point: 88}
    ];

    let LeagueTeams = (props) => {
        return (
            <tr>
                <td className={classes.right}>{props.id}</td>
                <td className={classes.right}>{props.team}</td>
                <td className={classes.right}>{props.games}</td>
                <td>{props.point}</td>
            </tr>
        )
    };

    let LeagueTableDataMap = LeagueTableData.map(t=>(
        <LeagueTeams id={t.id} team={t.team} key={t.id} games={t.games} point={t.point}/>));

    return (
        <div className={classes.leaguetable}>
            <h3>Турнирная таблица</h3>
            <table>
                <tr>
                    <th>#</th>
                    <th>Команда</th>
                    <th>Игр</th>
                    <th>Очки</th>
                </tr>
                {LeagueTableDataMap}
            </table>
        </div>
    )
};

export default LeagueTable;
