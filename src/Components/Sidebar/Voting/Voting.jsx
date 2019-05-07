import React from 'react';
import classes from './Voting.module.css'

class Voting extends React.Component {
    constructor(){
        super()
        this.state = {
            team: "",
            ManUnited: 0,
            Arsenal: 0,
            Chelsea: 0,
            Tottenham: 0,
            ManCity: 0,
            Liverpool: 0,

        };
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.id});
    }

    handleClick(event) {
        this.setState(prevState=> {
            return {
                ManUnited: prevState.ManUnited +1
            }});
        console.log(event)
    }

    render() {
        return (
            <div className={classes.voting}>
                <h3>Голосуем!</h3>
                <p>Кто станет чемпионом Англии в сезоне 2019-2020 ?</p>
                <form>
                    <label>
                        <input type="radio" name="team" id="ManUnited" value="team" checked={this.state.team === "ManUnited"} onChange={this.handleChange}/>Манчестер Юнайтед
                    </label>
                    <label>
                        <input type="radio" name="team" id="Arsenal" value="team" checked={this.state.team === "Arsenal"} onChange={this.handleChange}/>Арсенал
                    </label>
                    <label>
                        <input type="radio" name="team" id="Chelsea" value="team" checked={this.state.team === "Chelsea"} onChange={this.handleChange}/>Челси
                    </label>
                    <label>
                        <input type="radio" name="team" id="Tottenham" value="team" checked={this.state.team === "Tottenham"} onChange={this.handleChange}/>Тоттенхэм
                    </label>
                    <label>
                        <input type="radio" name="team" id="ManCity" value="team" checked={this.state.team === "ManCity"} onChange={this.handleChange}/>Манчестер Сити
                    </label>
                    <label>
                        <input type="radio" name="team" id="Liverpool" value="team" checked={this.state.team === "Liverpool"} onChange={this.handleChange}/>Ливерпуль
                    </label>
                </form>
                <button className={classes.button} value={this.state.team} onClick={this.handleClick}>Отдать голос</button>
            </div>
        )
    }
};

export default Voting;