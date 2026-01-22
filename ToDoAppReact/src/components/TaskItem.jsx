import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSave = () => {
    if (editText.trim() === "") return;
    editTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="flex-grow-1 me-3">
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span
            className={task.completed ? "text-decoration-line-through text-muted" : ""}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="btn-group btn-group-sm">
        <button
          className={`btn ${
            task.completed ? "btn-secondary" : "btn-success"
          }`}
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        {isEditing ? (
          <button className="btn btn-primary" onClick={handleEditSave}>
            Save
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="btn btn-danger"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
