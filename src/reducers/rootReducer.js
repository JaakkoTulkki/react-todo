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
    if(action.type == "DELETE_ITEM"){
        state.splice(parseInt(action.index), 1);
        return Object.assign([], state);
    }
    return state;
}
function textInputReducer(state='', action) {
    if(action.type=='TEXT_INPUT'){
        return action.text_input
    }
    return state;
}


export default function rootReducer() {
    return combineReducers({
        hello: helloWorldReducer,
        notes: noteReducer,
        textInput: textInputReducer,
    });
}

