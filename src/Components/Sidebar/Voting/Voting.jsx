import React from 'react';
import classes from './Voting.module.css'

class Voting extends React.Component {
    constructor(){
        super();
        this.state = {
            team: "",
            ManUnited: 0,
            Arsenal: 0,
            Chelsea: 0,
            Tottenham: 0,
            ManCity: 0,
            Liverpool: 0,
            result: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.voteClick = this.voteClick.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.id});
    }

    handleClick () {
        if (this.state.team=== "ManUnited"){
            this.setState(prevState=> {
                return {
                    ManUnited: prevState.ManUnited + 1,
                    result: true
                }})
        }
        else if (this.state.team=== "Arsenal"){
            this.setState(prevState=> {
                return {
                    Arsenal: prevState.Arsenal + 1,
                    result: true
                }})
        }
        else if (this.state.team=== "ManCity"){
            this.setState(prevState=> {
                return {
                    ManCity: prevState.ManCity + 1,
                    result: true
                }})
        }
        else if (this.state.team=== "Liverpool"){
            this.setState(prevState=> {
                return {
                    Liverpool: prevState.Liverpool + 1,
                    result: true
                }})
        }
        else if (this.state.team=== "Chelsea"){
            this.setState(prevState=> {
                return {
                    Chelsea: prevState.Chelsea + 1,
                    result: true
                }})
        }
        else if (this.state.team=== "Tottenham"){
            this.setState(prevState=> {
                return {
                    Tottenham: prevState.Tottenham + 1,
                    result: true
                }})
        }
    };

    voteClick () {
        this.setState({result: false})
    }

    render() {
        let result;
        let AllVotes;

        if (this.state.result === false){
            result = (
            <div>
                <form>
                    <label>
                        <input
                            type="radio"
                            name="team"
                            id="ManUnited"
                            value="team"
                            checked={this.state.team === "ManUnited"}
                            onChange={this.handleChange}/>Манчестер Юнайтед
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="team"
                            id="Arsenal"
                            value="team"
                            checked={this.state.team === "Arsenal"}
                            onChange={this.handleChange}/>Арсенал
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="team"
                            id="Chelsea"
                            value="team"
                            checked={this.state.team === "Chelsea"}
                            onChange={this.handleChange}/>Челси
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="team"
                            id="Tottenham"
                            value="team"
                            checked={this.state.team === "Tottenham"}
                            onChange={this.handleChange}/>Тоттенхэм
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="team"
                            id="ManCity"
                            value="team"
                            checked={this.state.team === "ManCity"}
                            onChange={this.handleChange}/>Манчестер Сити
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="team"
                            id="Liverpool"
                            value="team"
                            checked={this.state.team === "Liverpool"}
                            onChange={this.handleChange}/>Ливерпуль
                    </label>
                </form>
                <button className={classes.button} value={this.state.team} onClick={this.handleClick}>Отдать голос</button>
            </div>
            )
        }
        else {
            AllVotes = `${this.state.ManUnited + this.state.Arsenal + this.state.Chelsea + this.state.Tottenham + this.state.ManCity + this.state.Liverpool}`;
            result =
                <div>
                    <div className={classes.voteSection}>
                        <span className={classes.voteTeam}>Манчестер Юнайтед</span>
                        <span className={classes.range}
                              style={{width: ((this.state.ManUnited)/AllVotes)*45 + "%"}}>{(Math.round((this.state.ManUnited)/AllVotes*1000) / 10)}%</span>
                        <span className={classes.score}>{this.state.ManUnited}</span>
                    </div>
                    <div className={classes.voteSection}>
                        <span className={classes.voteTeam}>Арсенал</span>
                        <span className={classes.range}
                              style={{width: ((this.state.Arsenal)/AllVotes)*45 + "%"}}>{(Math.round((this.state.Arsenal)/AllVotes*1000) / 10)}%</span>
                        <span className={classes.score}>{this.state.Arsenal}</span>
                    </div>
                    <div className={classes.voteSection}>
                        <span className={classes.voteTeam}>Челси</span>
                        <span className={classes.range} style={{width: ((this.state.Chelsea)/AllVotes)*45 + "%"}}>{(Math.round((this.state.Chelsea)/AllVotes*1000) / 10)}%</span>
                        <span className={classes.score}>{this.state.Chelsea}</span>
                    </div>
                    <div className={classes.voteSection}>
                        <span className={classes.voteTeam}>Тоттенхэм</span>
                        <span className={classes.range} style={{width: ((this.state.Tottenham)/AllVotes)*45 + "%"}}>{(Math.round((this.state.Tottenham)/AllVotes*1000) / 10)}%</span>
                        <span className={classes.score}>{this.state.Tottenham}</span>
                    </div>
                    <div className={classes.voteSection}>
                        <span className={classes.voteTeam}>Манчестер Сити</span>
                        <span className={classes.range} style={{width: ((this.state.ManCity)/AllVotes)*45 + "%"}}>{(Math.round((this.state.ManCity)/AllVotes*1000) / 10)}%</span>
                        <span className={classes.score}>{this.state.ManCity}</span>
                    </div>
                    <div className={classes.voteSection}>
                        <span className={classes.voteTeam}>Ливерпуль</span>
                        <span className={classes.range} style={{width: ((this.state.Liverpool)/AllVotes)*45 + "%"}}>{(Math.round((this.state.Liverpool)/AllVotes*1000) / 10)}%</span>
                        <span className={classes.score}>{this.state.Liverpool}</span>
                    </div>
                    <div>Всего голосов: {AllVotes}</div>
                    <button className={classes.button} onClick={this.voteClick}>Вернуться</button>
                </div>
        }

        return (
            <div className={classes.voting}>
                <h3>Голосуем!</h3>
                <p>Кто станет чемпионом Англии в сезоне 2019-2020 ?</p>
                {result}
            </div>
        )
    }
};

export default Voting;