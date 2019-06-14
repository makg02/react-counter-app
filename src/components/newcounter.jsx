import React, { Component } from "react";
class NewCounter extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          onClick={() => this.props.onAddCounter(this.state.value)}
          type="text"
        >
          {" "}
          Add{" "}
        </button>
      </div>
    );
  }
}

export default NewCounter;
