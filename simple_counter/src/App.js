
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Simple Counter</h1>
    </header>
  );
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    count: 0,
    };
  }

  handleCountAdd = e => {
    e.preventDefault();
    let count = this.state.count +1;
    this.setState({ count });
  };

  handleCountMin = e => {
    e.preventDefault();
    let count = this.state.count -1;
    this.setState({ count });
  };

  render() {
    return (
      <div>
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
        <Content />
      </React.Fragment>
    );
  }
}

export default App;