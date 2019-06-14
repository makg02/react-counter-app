import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, title: "Bob" },
      { id: 2, value: 0, title: "Steve" },
      { id: 3, value: 0, title: "Pat" }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Contructor", props);
  }

  componentDidMount() {
    console.log("App - Mounted");
    // this.setState({movies})
  }

  makeId = () => {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Handle Delete Called!", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAddCounter = title => {
    if (title) {
      const counters = this.state.counters.slice();
      const newCounter = {
        title: title,
        value: 0,
        id: this.makeId()
      };

      console.log(newCounter);
      counters.push(newCounter);
      this.setState({ counters });
    } else {
      alert("Please input a title");
    }

    console.log("add counter called!!");
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          // totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalCounters={this.state.counters.reduce(
            (prev, next) => prev + next.value,
            0
          )}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onAddCounter={this.handleAddCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
