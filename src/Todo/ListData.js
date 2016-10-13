import React, {PropTypes} from 'react';

export class ListData extends React.Component{
    constructor(notes){
        super(notes);
        this.state = {notes: notes.notes};
        console.log("ListData");
        console.log(this.state);
    }

    render(){
        return (
            <ul>
              {this.state.notes.map((note, key)=>{
                  return <li key={key}>{note}</li>;
              })}
            </ul>
        );
    }
}