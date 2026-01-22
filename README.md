# Sankey Solutions To-Do App

Live demo: https://sankey-solutions-to-do-app.vercel.app/

## 🚀 Project Overview

**Sankey Solutions To-Do App** is a modern task management web application built with React (Vite), Bootstrap, and Axios.  
It allows users to efficiently manage their daily tasks with features including:

- Add, edit, delete tasks  
- Mark tasks as completed or pending  
- Persistent storage using Local Storage  
- Dynamic task progress tracking  
- Random joke displayed each time the app loads  

The app is fully responsive and styled with a clean UI.

---

## 🧩 Features

✔ Add new tasks  
✔ Edit existing tasks  
✔ Delete tasks  
✔ Toggle completion status  
✔ Task progress bar (% completed)  
✔ Local Storage persistence  
✔ Fetch a random (safe) joke from API  
✔ Visually appealing UI with shadows & responsive layout  
✔ Live deployment using Vercel

---

## 🛠 Built With

| Technology | Description |
|------------|-------------|
| **React** | JavaScript UI library |
| **Vite** | Fast frontend build tool |
| **Bootstrap 5** | UI components and responsive layout |
| **Axios** | HTTP client for API calls |
| **Local Storage** | Browser persistence |
| **Vercel** | Hosted live deployment |

---

## 🧠 How It Works

The app stores all tasks in the browser’s **Local Storage**, so your tasks persist even after:

- Refreshing the page  
- Closing the browser  
- Re-opening the app later

Progress is calculated automatically based on how many tasks are marked complete.

At startup, the app also fetches a lighthearted joke from a public API and displays it at the top of the page.

---

## 📦 Installation & Setup

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/DikshaJadhav9172/Sankey_solutions_ToDoApp.git

# Navigate into project
cd Sankey_solutions_ToDoApp/ToDoApp

# Install dependencies
npm install

# Start development server
npm run dev
