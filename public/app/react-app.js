import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

import Http from './services/http';

// Components
import Event from './components/event';
import Navigation from './components/navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = [];
    this.Http = new Http;
  }

  componentDidMount() {
    this.Http.getAllEvents()
        .then((data) => { this.setState({data: data}); });
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.state.data.map(function(event, key) {
          return (
              <Event key={key} event={event} />
          )
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));