import React, {PropTypes} from 'react';
import {ListData} from './ListData';

export class InsertData extends React.Component{
    constructor(notes){
        super(notes);
        this.state = {notes};

        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.state);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({notes: [...this.state.notes, e.target.note.value]});
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        Insert your note: <input type="text" name="note"/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }

}