import { keyBy } from "lodash";

export const Status = {
  Todo: "TODO",
  Doing: "DOING",
  Completed: "COMPLETED",
};

export const statusConfigs = [
  {
    status: Status.Todo,
    label: "To do",
    color: "grey",
  },
  {
    status: Status.Doing,
    label: "In progress",
    color: "yellow",
  },
  {
    status: Status.Completed,
    label: "Completed",
    color: "green",
  },
];

export const statusConfigByStatus = keyBy(statusConfigs, "status");

/*
  const [status, setStatus] = useState(Status.Todo)

  const configStatus = statusConfigByStatus[status]

  return (
    <Button style={{color: configStatus.color}}>
      {configStatus.label}
    </Button>
  )
*/
