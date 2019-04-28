import React from 'react'
import classes from './Teams.module.css'


const Cardiff =() => {
    return (
        <div className={classes.team}>
            <div><img className={classes.image} src={require("./images/Cardiff.png")} alt=""/></div>
            <p><strong>Футбольный клуб «Кардифф </strong> (англ. Cardiff City Football Club) — валлийский профессиональный футбольный клуб из города Кардифф, Уэльс. Был основан 9 октября 1899 года и является одним из немногих валлийских клубов, выступающих в системе английских футбольных лиг. Один из двух неанглийских клубов, выходивших в финал Кубка Англии, и единственный, выигравший его (в сезоне 1926/27).</p>
            <p>В настоящее время выступает в Премьер-лиге, высшем дивизионе в системе футбольных лиг Англии. Домашний стадион клуба — «Кардифф Сити» — вмещает более 33 тысяч зрителей.</p>
        </div>
    )
};

export default Cardiff;