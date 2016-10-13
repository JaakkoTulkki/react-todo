import React, {PropTypes} from 'react';
import {ListData} from './ListData';

export class InsertData extends React.Component{
    constructor(props){
        super(props);
        this.state = {notes: this.props.notes};

        this.onSubmit = this.onSubmit.bind(this);
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
                    <div>
                        <ListData notes={this.state.notes}/>
                    </div>
                </div>
            </div>
        );
    }

}