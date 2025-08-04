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
## 🔹 Functionality

- **Role Selection & Switching**  
  Choose Manager or User on start. Switch roles anytime with the "Switch Role" button. Tasks remain saved when switching.

- **Manager**  
  Can create tasks with name, description, and number of uploads. Tasks are visible to all users.

- **User**  
  Can see all tasks. Start a task to lock it for others until completed. Upload exactly the required number of images to submit.

- **Image Upload**  
  Accepts only images. Shows count of selected files. Blocks submission if the count doesn't match the task requirement.

- **Concurrency**  
  Once a task is started, it becomes unavailable to others until finished.

- **Modal with Blur**  
  When a modal is open, background is dimmed and blurred for better focus.


