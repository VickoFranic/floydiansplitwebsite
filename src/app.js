import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

import EventsContainer from './containers/EventsContainer';
import Navigation from './components/navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <EventsContainer />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));