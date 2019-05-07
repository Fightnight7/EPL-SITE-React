import React from 'react'
import classes from './RegularArticlePage.module.css'

const RegularArticlePage = (props) =>{
    let CurrentComment = "";

    let GetCurrentComment = (e) => {
        let CurrentComment = e.target.value;
        props.getNewComment(CurrentComment);
    };

    let PostComment = () =>{
        props.postComment(props.Comments.CurrentComment);
        CurrentComment = "";
        props.getNewComment(CurrentComment);
    };

    const AllComments = (props) => {
        return (
            <div>
                <p className={classes.user}>{props.user}</p>
                <p className={classes.text}>{props.text}</p>
            </div>
        )
    };

    let CommentsRow = props.Comments.AllComments.map(t => {
        return (
            <AllComments id={t.id} user={t.user} text={t.text}/>
        )
    });

    return (
        <div className={classes.mainArticle}>
            <img className={classes.img} src={require('../RegularArticle/ArticlesImg/NorwichArticle.jpg')} alt=""/>
            <div className={classes.article}>
                <h2 className={classes.h2}>"Норвич" вышел в Премьер-Лигу</h2>
                <p>"Норвич" гарантировал себе прямую путевку из Чемпионшипа в Премьер-Лигу на сезон 2019/20.</p>
                <p>В последние недели команд Даниэля Фарка заметно сбавила обороты, четыре раза подряд сыграв вничью. Однако в субботу "канарейки" собрались и с большим игровым преимуществом одолели в домашних стенах "Блэкберн" — 2:1.</p>

                <p>Этой победой "Норвич" гарантировал себе, что уже не опустится ниже второго места в Чемпионшипе. Таким образом, клуб с "Кэрроу Роуд" возвращается в элитный дивизион после трех лет перерыва.</p>
                <p>Добавим, что в матче заключительного тура "Норвичу" будет достаточно ничьей в гостях у "Астон Виллы", чтобы финишировать первым в Чемпионшипе.</p>

                <div className={classes.comments}>
                    <div>
                        <h3>Комментарии к этой новости</h3>
                        <p>Макс <input type="text" onChange={GetCurrentComment} value={props.Comments.CurrentComment}/></p>
                        <button className={classes.button} onClick={PostComment}>Запостить</button>
                    </div>
                    {CommentsRow}
                </div>
            </div>
        </div>
    )
};

export default RegularArticlePage;