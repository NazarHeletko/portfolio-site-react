import {combineReducers, createStore} from "redux";
import {navReducer} from "./navReducer";


let rootReducer = combineReducers({
    navData: navReducer
});

// Type for state
export type StateType = ReturnType<typeof rootReducer>



export let store = createStore(rootReducer,
            // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// @ts-ignore
window.store = store