import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListData from './ListData';
import * as appActions from '../actions/actions';

export class InsertData extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.props.actions.dispatchNote(e.target.note.value);
        this.props.actions.updateNoteInput('');
    }

    onChange(e){
        e.preventDefault();
        this.props.actions.updateNoteInput(e.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        Insert your note: <input type="text" name="note" value={this.props.textInput} onChange={this.onChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                    <div>
                        <ListData/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        notes: state.notes,
        textInput: state.textInput,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions, dispatch)//course => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertData);
