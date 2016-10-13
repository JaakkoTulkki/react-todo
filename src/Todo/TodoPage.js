import React, {PropTypes} from 'react';
import {InsertData} from './InsertData';

export class TodoPage extends React.Component{
    render(){
        const notes = [];
        return (
            <div>
                <h1>Todo App</h1>
                <InsertData notes={notes}/>
            </div>
        );
    }

}

