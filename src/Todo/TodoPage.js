import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import InsertData from './InsertData';

class TodoPage extends React.Component{
    render(){
        return (
            <div>
                <h1>Todo App</h1>
                <InsertData/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        notes: state.notes
    };
};

export default connect(mapStateToProps)(TodoPage);