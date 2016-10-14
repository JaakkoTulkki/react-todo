import {combineReducers} from 'redux';

function helloWorldReducer(state="", action){
    if(action.type == "HELLO"){
        return action.hello;
    }
    return state;
}

function noteReducer(state=['initial commit'], action) {
    if(action.type == 'NOTE'){
        return [...state, action.note];
    }
    return state;
}

export default function rootReducer() {
    return combineReducers({
        hello: helloWorldReducer,
        notes: noteReducer
    });
}

