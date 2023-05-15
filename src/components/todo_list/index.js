import { Add as AddIcon } from "@mui/icons-material";
import { Box, List, Button, Dialog } from "@mui/material";
import { useState } from "react";
import TaskElementList from "./TaskElementList";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";
import { Status, statusConfigs } from "./constants";

const defaultTasks = [
  {
    _id: uuidv4(),
    title: "Task 1",
    status: Status.Todo,
    description: "Description 1",
  },
  {
    _id: uuidv4(),
    title: "Task 2",
    status: Status.Doing,
    description: "Description 2",
  },
  {
    _id: uuidv4(),
    title: "Task 3",
    status: Status.Completed,
    description: "Description 3",
  },
];

const TodoList = () => {
  const [tasks, setTasks] = useState(defaultTasks);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [taskSelected, setTaskSelected] = useState();

  const _handleCloseDialog = () => {
    setIsOpenDialog(false);
    setTaskSelected(null);
  };
  const _handleClickOpenDialog = () => setIsOpenDialog(true);

  const _handleCreateTask = (newTask) => {
    setTasks((prev) => [
      ...prev,
      {
        ...newTask,
        _id: uuidv4(),
        status: Status.Todo,
      },
    ]);
  };

  const _handleUpdateTask = (inputTask) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task._id !== inputTask._id) return task;

        return {
          ...task,
          ...inputTask,
        };
      })
    );
  };

  const _handleClickDeleted = (taskId) => {
    setTasks((prev) =>
      prev.filter((task) => {
        return task._id !== taskId;
      })
    );
  };

  const _handleClickEditTaskElement = (task) => {
    setTaskSelected(task);
    setIsOpenDialog(true);
  };

  const _handleClickNextStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task._id !== taskId) return task;

        const index = statusConfigs.findIndex(
          (statusConfig) => statusConfig.status === task.status
        );

        const nextStatus = statusConfigs[index + 1];

        if (!nextStatus) return task;

        return {
          ...task,
          status: nextStatus.status,
        };
      })
    );
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={_handleClickOpenDialog} startIcon={<AddIcon />}>
          Add
        </Button>
      </Box>
      <List>
        {tasks.map((task) => (
          <TaskElementList
            key={task._id}
            task={task}
            onClickStatus={_handleClickNextStatus}
            onDelete={_handleClickDeleted}
            onEdit={_handleClickEditTaskElement}
          />
        ))}
      </List>

      <Dialog open={isOpenDialog} onClose={_handleCloseDialog}>
        <TaskForm
          task={taskSelected}
          onCreate={_handleCreateTask}
          onUpdate={_handleUpdateTask}
          onClose={_handleCloseDialog}
        />
      </Dialog>
    </div>
  );
};

export default TodoList;
