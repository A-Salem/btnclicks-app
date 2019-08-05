import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addClick = this.addClick.bind(this);
    this.state = {
      clicks: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          See number of your clicks
        </header>
        <br />
        <div>
          <button type="submit" onClick={this.addClick}>Click me</button>
        </div>
        <br />
        <h3 style={{color: 'blue'}}>{this.state.clicks}</h3>
      </div>
    );
  }

  addClick() {
    let clicks = this.state.clicks;
    clicks++;
    this.setState({
      clicks
    });
  }
}

export default App;
