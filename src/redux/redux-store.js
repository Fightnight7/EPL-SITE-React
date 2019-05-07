import {combineReducers, createStore} from "redux";
import MainArticleReducer from "./MainArticleReducer";
import RegularArticleReducer from "./RegularArticleReducer";



let reducers = combineReducers({
    MainArticleComments: MainArticleReducer,
    RegularArticleComments: RegularArticleReducer,
});

let store = createStore(reducers);
export default store;
