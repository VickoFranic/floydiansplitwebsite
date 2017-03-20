import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Event extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <ul key={this.props.event.id} className="list-group">
              <li className="list-group-item">
                <span><h4>{this.props.event.name}</h4></span>
                <span>{this.props.event.description}</span>
              </li>
            </ul>
        )
    }
}

export default Event;