import { useEffect, useState } from "react";
import axios from "axios";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Progress from "./components/Progress";
import Joke from "./components/Joke";

function App() {
  const [tasks, setTasks] = useState([]);
  const [joke, setJoke] = useState("");


  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random"
        );
        setJoke(response.data.value);
      } catch (error) {
        setJoke("Joke service unavailable. Please try again later 😅");
      }
    };

    fetchJoke();
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

return (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="app-box">
          <h1 className="text-center mb-3">My Task Manager</h1>

          <Joke joke={joke} />

          <TaskInput addTask={addTask} />

          <Progress tasks={tasks} />

          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  </div>
);


}

export default App;
