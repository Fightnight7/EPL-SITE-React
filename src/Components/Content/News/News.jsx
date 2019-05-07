import React from "react"
import MainArticle from "./MainArticle/MainArticle";
import RegularArticle from "./RegularArticle/RegularArticle";


function News() {
    return (
        <div>
            <MainArticle/>
            <RegularArticle/>
        </div>
    )
}

export default News;