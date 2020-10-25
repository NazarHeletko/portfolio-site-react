import {combineReducers, createStore} from "redux";
import {navReducer} from "./navReducer";


let rootReducer = combineReducers({
    navData: navReducer
});

export let store = createStore(rootReducer);