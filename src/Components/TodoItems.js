import React, { Component, CSSProperties } from "react";
import propTypes from "prop-types";

// import { makeStyles } from "@material-ui/core/styles";
// import { List, ListItem, ListItemText } from "@material-ui/core";

export class TodoItems extends Component {
  getStyle = () => {
    if (this.props.todo.completed)
      return {
        background: "#f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: this.props.todo.completed ? "line-through" : "none",
      };
  };

  render() {
    const { id, title } = this.props.todo;
    const btnStyle = {
      background: "#ff0000",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      margin: "2px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right",
    };
    return (
      <div style={this.getStyle()}>
        <p>
          {" "}
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            // @ts-ignore
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItems.propTypes = {
  todo: propTypes.object.isRequired,
};

export default TodoItems;
