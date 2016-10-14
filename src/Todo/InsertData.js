import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListData from './ListData';
import * as appActions from '../actions/actions';

export class InsertData extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        console.log("in onsubmit");
        console.log(e.target.note);
        console.log(this.props);
        console.log("end of props in onsbumit");
        this.props.actions.dispatchNote(e.target.note.value);
        // this.setState({notes: [...this.props.notes, e.target.note.value]});
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        Insert your note: <input type="text" name="note"/>
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
        notes: state.notes
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions, dispatch)//course => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertData);
