import React, { useState } from "react";
import "./TodoApp.css"; // Import the CSS file

function TodoApp() {
  let [task, setTask] = useState("");
  let [taskList, setTaskList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit() {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTaskList([...taskList, task]);
    setTask(""); // Clear input after adding
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          name="input"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task..."
          className="todo-input"
        />
        <button onClick={handleSubmit} className="add-btn">
          ADD
        </button>
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Task Name</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((t, index) => (
            <tr key={index} style={{height:'1.5vh'}}>
              <td style={{height:'1.5vh'}}>{t}</td>
            </tr>
            
          ))}
          
        </tbody>
        <tfoot>
            <tr style={{height:'1.5vh'}}>

            </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default TodoApp;
