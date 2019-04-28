import React from 'react';
import classes from './Voting.module.css'

const Voting = () => {
    return (
        <div className={classes.voting}>
            <h3>Голосуем!</h3>
            <p>Кто станет чемпионом Англии в сезоне 2019-2020 ?</p>
            <form>
                <label htmlFor="ManUnited"><input type="radio" name="team" id="ManUnited" value="team"/>Манчестер Юнайтед</label>
                <label htmlFor="Arsenal"><input type="radio" name="team" id="Arsenal" value="team"/>Арсенал</label>
                <label htmlFor="Chelsea"><input type="radio" name="team" id="Chelsea" value="team"/>Челси</label>
                <label htmlFor="Tottenham"><input type="radio" name="team" id="Tottenham" value="team"/>Тоттенхэм</label>
                <label htmlFor="ManCity"><input type="radio" name="team" id="ManCity" value="team"/>Манчестер Сити</label>
                <label htmlFor="Liverpool"><input type="radio" name="team" id="Liverpool" value="team"/>Ливерпуль</label>
            </form>
            <button className={classes.button}>Отдать голос</button>
        </div>
    )
};

export default Voting;