import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/action";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state= ({
      input: "",
    });
  }

  updateInput = (inputVal) => {
    this.setState({
      input: inputVal,
    });
  };
  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.updateInput(e.target.value);
          }}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
            Add Todo
        </button>
      </div>
    );
  }
}

export default connect(null,{addTodo})(AddTodo);
