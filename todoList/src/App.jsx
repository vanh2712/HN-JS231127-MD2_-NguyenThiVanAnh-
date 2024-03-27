import { useState } from "react";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <div
      className="wrapper "
      style={{ backgroundColor: "#f23e3e", width: "600px", height: "100%" }}
    >
      <br></br>
      <h1 className="text-center">TODO LIST</h1>
      <h5>Get things done, one item at a time </h5>
      <hr style={{ color: "#736f6f;", width: "400px" }}></hr>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />
      {todos.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
