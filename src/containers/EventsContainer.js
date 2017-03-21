import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Http from './../services/Http';
import Events from './../components/Events';

class EventsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { events: [] };
        this.Http = new Http;
    }

    componentDidMount() {
        this.Http.getAllEvents()
            .then((data) => { this.setState({events: data}); });
    }

    render() {
        return <Events events={this.state.events} />
    }
}

export default EventsContainer;