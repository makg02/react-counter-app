import React, { Component } from "react";
import Counter from "./counter";
import NewCounter from "./newcounter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAddCounter
    } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <NewCounter onAddCounter={onAddCounter} />
        {/* <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button> */}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
