import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/action";

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li
      className="todo-item"
      onClick={() => {
        toggleTodo(todo.id);
      }}
    >
      <h3>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
          )}
        >
          {todo.content}
        </span>
      </h3>
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);
