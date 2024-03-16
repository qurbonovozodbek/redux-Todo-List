import { useRef, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo.todo);
  const name = useRef("");
  const age = useRef("");
  const dispatch = useDispatch();

  function validate(name) {
    if (!name.current.value) {
      alert("Name is empty");
      name.current.focus();
      return false;
    }
    if (!Number(age.current.value)) {
      alert("Age must be a number");
      age.current.focus();
      return false;
    }
    return true;
  }

  function handleAdd(e) {
    e.preventDefault();

    if (validate(name)) {
      const data = {
        name: name.current.value,
        age: age.current.value,
        id: Date.now(),
      };

      dispatch({ type: "ADD", payload: data });
      name.current.value = "";
      age.current.value = "";
    }
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function handleEditDelete(id) {
    const newName = prompt("Edit your name");
    const newAge = prompt("Edit your age");

    if (newName && newAge) {
      const data = {
        name: newName,
        age: newAge,
        id: id,
      };
      dispatch({ type: "EDIT", payload: data });
    }
  }

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <form>
          <input type="text" placeholder="Enter your name" ref={name} />
          <input type="text" placeholder="Enter your age" ref={age} />
          <button className="input-btn" onClick={handleAdd}>
            Add
          </button>
        </form>
        <div className="list">
          {todo.map((el) => (
            <div key={el.id} className="info">
              <h3>{el.name}</h3>
              <h4 style={{ color: "white" }}>{el.age}</h4>
              <div className="btn">
                <button onClick={() => handleEditDelete(el.id)}>Edit</button>
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;