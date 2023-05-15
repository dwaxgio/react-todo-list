import { Chip, IconButton, ListItem, ListItemText } from "@mui/material";
import { Edit as EditIcon, Close as CloseIcon } from "@mui/icons-material";
import { statusConfigByStatus } from "./constants";

const TaskElementList = ({ task, onEdit, onDelete, onClickStatus }) => {
  const statusConfig = statusConfigByStatus[task.status];

  const _handleClickEdit = () => {
    if (onEdit) onEdit(task);
  };

  const _handleClickDelete = () => {
    if (onDelete) onDelete(task._id);
  };

  const _handleClickStatus = () => {
    if (onClickStatus) onClickStatus(task._id);
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <Chip
            sx={{
              backgroundColor: statusConfig.color
            }}
            label={statusConfig.label}
            variant="outlined"
            onClick={_handleClickStatus}
          />
          <IconButton size="small" onClick={_handleClickEdit}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={_handleClickDelete}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={task.title} secondary={task.description} />
    </ListItem>
  );
};

export default TaskElementList;
