import React, {useState, useEffect} from 'react';
import classes from './ContactUs.module.css'
import axios from 'axios'

const ContactUs = (props) => {
    const [state, setState] = useState({
        data: [],
        username: ""
    });

    const handleChange = (event) => {
        setState({...state, username: event.target.value})
    };

    const user = state.username;

    const handleClick = () => {
        axios
            // .post('https://jsonplaceholder.typicode.com/users/', {user})
            // .then(response => {
            //     setState({...state, data: response.data, {user} })
            //     console.log(response);
            //     console.log(response.data)
            // });
    };

    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                setState({...state, data: response.data});
                console.log(response);
                console.log(response.data)
            })
        },[]);


    let Persons = (props) => {
        return (
            <div>{props.name}</div>
        )
    };

    const stateDataMap = state.data.map(t =>
        <Persons key={t.id} name={t.name}/>
    );

    return (
        <div className={classes.main}>
            <label>Введите имя:
                <br/>
                <input type="text" value={state.username} name="name" onChange={handleChange}/>
            </label>
            <button onClick={handleClick}>Добавить</button>
            {stateDataMap}
        </div>
    )
};

export default ContactUs;

