import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-muted">
        No tasks added yet. Start by adding one 👆
      </p>
    );
  }

  return (
    <div className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
