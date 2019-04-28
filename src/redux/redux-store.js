import {combineReducers, createStore} from "redux";
import MainArticleReducer from "./MainArticleReducer";



let reducers = combineReducers({
    MainArticleComments: MainArticleReducer,
});

let store = createStore(reducers);
console.log(store.getState())
export default store;
