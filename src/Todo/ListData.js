import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export class ListData extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        console.log('list data on click');
        e.preventDefault();
        console.log(e);
        const index = e.target.value;
        console.log(index);
        console.log(this.props);
        this.props.actions(index);
    }

    render(){
        return (
            <ul>
              {this.props.notes.map((note, key)=>{
                  return (
                      <li key={key}>{note} | <button onClick={this.onClick} type="button" value={key}>delete</button></li>
                  );
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

function deleteListItem(index){
    return {
        type: 'DELETE_ITEM',
        index: index
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      actions: bindActionCreators(deleteListItem, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListData);