
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Simple Counter</h1>
    </header>
  );
};

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    count: 0,
    totalClick:0,
    };
  }

  handleCountAdd = e => {
    e.preventDefault();
    let count = this.state.count +1;
    let totalClick = this.state.totalClick+1;
    this.setState({ count });
    this.setState({ totalClick });
  };

  handleCountMin = e => {
    e.preventDefault();
    let count = this.state.count -1;
    let totalClick = this.state.totalClick +1;
    this.setState({ count });
    this.setState({ totalClick });
  };

  render() {
    return (
      <div>
        <p>Total Number of Clicks {this.state.totalClick}</p>
        <p>{this.state.count}</p>
        <button onClick={this.handleCountMin}>-</button>
        <button onClick={this.handleCountAdd}>+</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;