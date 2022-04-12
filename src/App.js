import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {today: new Date()};
  }

  componentDidMount() {
    this.taskId = setInterval(this.tick, 1000); 
  }

  tick = () => this.setState({today: new Date()});

  componentWillUnmount() {
    clearInterval(this.taskId);
  }

  render() {
    return (
      <div>
        <h1>
          Online Department Store
        </h1>
        <h3>
          It is now {this.state.today.toLocaleTimeString('en-gb')}, {this.state.today.toLocaleDateString('en-gb')}.
        </h3>
      </div>
    );
  }
}

export default App;
