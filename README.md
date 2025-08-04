# Task Manager

A simple role-based task management portal built with **React** and **Tailwind CSS**, where a **Manager** can create tasks and a **User** can start and complete them.  
Includes concurrency control to ensure a task can only be worked on by one user at a time.

---

## 🚀 Features

### 👨‍💼 Manager
- Create tasks with:
  - Task name
  - Description
  - Number of uploads required (integer)
- View all created tasks
- Tasks are shared with all users in real time

### 👤 User
- View all available tasks
- Start a task (locks it for other users)
- Upload the exact number of images required by the task
- Submit completed tasks

### 🔒 Concurrency
- Once a task is started by a user, it becomes **unavailable** to others until completed.

---

## 🛠 Tech Stack
- **React** (UI)
- **Tailwind CSS** (Styling)
- **Lucide Icons** (Icons)
- **Vite** (Build tool)

---

## 📂 Project Structure
