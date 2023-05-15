import logo from "./logo.svg";
import "./App.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ExampleTextField from "./ExampleTextField";

//

// import TodoList from "./components/todo_list";
import TodoList from "./components/todo_list/index";

function App() {
  return (
    <div className="App">
      {/* <Button variant="text">Text</Button> */}
      {/* <ExampleTextField/> */}
      <TodoList/>
    </div>
  );
}

export default App;
