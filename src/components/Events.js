import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    renderEvent(event, key) {
        return (
            <li key={key}>
                <p className="lead">{event.name}</p>
                <p>{event.description}</p>
            </li>
        )
    }

    render() {
        return <ul className="list-group">{this.props.events.map(this.renderEvent)}</ul>
    }

}

export default Events;