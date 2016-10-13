import React, {PropTypes} from 'react';

export class ListData extends React.Component{
    constructor(props){
        super(props);
    }

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