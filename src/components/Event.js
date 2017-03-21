import React from 'react';

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <p className="lead">{this.props.event.name}</p>
                <p>{this.props.event.description}</p>
            </li>
        )
    }
}

export default Event;