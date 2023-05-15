import { Button, TextField } from "@mui/material";
import { useState } from "react";

const TaskForm = ({ task, onCreate, onUpdate, onClose }) => {
  const [state, setState] = useState({
    title: task?.title ?? "",
    description: task?.description ?? "",
  });

  const _handleChange = ({ target: { value, name } }) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      if (onUpdate) {
        onUpdate({
          ...task,
          ...state,
        });
      }

      if (onClose) {
        onClose();
      }

      return;
    }

    if (onCreate) {
      onCreate(state);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <form onSubmit={_handleSubmit}>
      <TextField name="title" onChange={_handleChange} value={state.title} />
      <TextField
        name="description"
        onChange={_handleChange}
        value={state.description}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

export default TaskForm;
