import { useRef, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo.todo);
  console.log(todo);
  const name = useRef("");
  const dispatch = useDispatch();

  function validate(name) {
    if (!name.current.value) {
      alert("Input is empty");
      name.current.value.focus();
      return false;
    }
    return true;
  }

  function handleAdd(e) {
    e.preventDefault();

    if (validate(name)) {
      let data = {
        name: name.current.value,
        id: Date.now(),
      };

      dispatch({ type: "ADD", payload: data });
      name.current.value = "";
    }
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <form>
          <input type="text" placeholder="Add a new todo" ref={name} />
          <button className="input-btn" onClick={handleAdd}>
            Add
          </button>
        </form>
        <div className="list">
          {todo.map((el, index) => (
            <div key={index} className="info">
              <h3>{el.name}</h3>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
