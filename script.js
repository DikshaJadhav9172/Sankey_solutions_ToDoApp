let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const totalCount = document.getElementById("totalCount");
const percentage = document.getElementById("percentage");
const progressBar = document.getElementById("progressBar");
const jokeEl = document.getElementById("joke");


fetch("https://api.chucknorris.io/jokes/random?category=dev")
  .then(res => res.json())
  .then(data => {
    jokeEl.textContent = data.value;
  })
  .catch(() => {
    jokeEl.textContent = "Error";
  });


addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const task = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(task);
  taskInput.value = "";
  saveAndRender();
}


function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );
  saveAndRender();
}


function editTask(id) {
  const newText = prompt("Edit task:");
  if (!newText) return;

  tasks = tasks.map(task =>
    task.id === id ? { ...task, text: newText } : task
  );
  saveAndRender();
}


function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveAndRender();
}


function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `
      <p class="text-center text-muted">
        No tasks added yet. Start by adding one 👆
      </p>
    `;
  }

  tasks.forEach(task => {
    const item = document.createElement("div");
    item.className = `list-group-item ${
      task.completed ? "completed" : ""
    }`;

    item.innerHTML = `
      <div class="flex-grow-1 me-3">
        <span class="${
          task.completed ? "text-decoration-line-through text-muted" : ""
        }">
          ${task.text}
        </span>
      </div>

      <div class="btn-group btn-group-sm">
        <button class="btn btn-success">
          ${task.completed ? "Undo" : "Complete"}
        </button>
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    `;

    item.querySelector(".btn-success").onclick = () =>
      toggleTask(task.id);
    item.querySelector(".btn-warning").onclick = () =>
      editTask(task.id);
    item.querySelector(".btn-danger").onclick = () =>
      deleteTask(task.id);

    taskList.appendChild(item);
  });

  updateProgress();
}


function updateProgress() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalCount.textContent = total;
  completedCount.textContent = completed;
  percentage.textContent = percent + "%";
  progressBar.style.width = percent + "%";
}


function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}


renderTasks();
