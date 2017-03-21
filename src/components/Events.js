import React from 'react';
import Event from './../components/Event';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group">
            {this.props.events.map(function(event, key) {
                return <Event key={key} event={event} />
            })}
            </ul>
        )
    }

}

export default Events;