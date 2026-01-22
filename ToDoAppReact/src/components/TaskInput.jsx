import { useState } from "react";

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim() === "") return;

    addTask(taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskInput;
