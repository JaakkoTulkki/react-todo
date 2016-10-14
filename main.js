import React from 'react';
import {createStore} from "redux";
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import rootReducer from './src/reducers/rootReducer';
import TodoPage from './src/Todo/TodoPage'


const store = createStore(rootReducer());

render(
    <Provider store={store}>
        <TodoPage/>
    </Provider>,
    document.getElementById('app')
);