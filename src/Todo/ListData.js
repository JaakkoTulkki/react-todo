import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

export class ListData extends React.Component{
    render(){
        return (
            <ul>
              {this.props.notes.map((note, key)=>{
                  return <li key={key}>{note}</li>;
              })}
            </ul>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        notes: state.notes
    };
};

export default connect(mapStateToProps)(ListData);