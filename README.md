# 🚀 React Todo CRUD App

A premium, modern, and sleek Task Management (To-Do) application built with **React JS** and styled using **Bootstrap** with a custom dark-glassmorphism theme.

## 🔗 Live Demo
Check out the live application here: **[React-Todo-CRUD Live Website](https://arpitkumargoel.github.io/React-Todo-CRUD/)**

## ✨ Features
* **Create:** Add new tasks with titles and descriptions.
* **Read:** View your active tasks in a beautifully integrated table.
* **Update:** Edit existing tasks dynamically via state tracking.
* **Delete:** Remove tasks instantly from the list.
* **UI/UX:** Fully custom Dark Midnight-Blue gradient background with neon cyan accent lines.

## 📂 Project Component Structure
Here is how the React components are structured inside the `src` directory:

* 📂 **`src/`**
  * 📄 **`main.jsx`** - The main entry point of our React application that renders the App component.
  * 📄 **`App.jsx`** - The root component that holds the global state (`todos`) and manages the main layout of the application.
  * 📂 **`components/`**
    * 📄 **`Form.jsx`** - Handles the input form for adding new tasks and editing existing ones. It passes the inputs back to `App.jsx`.
    * 📄 **`Tables.jsx`** - Displays the list of tasks in a clean Bootstrap table with **Edit** and **Delete** action buttons.
  * 📄 **`index.css`** - Custom dark midnight-blue gradient styles and glassmorphism UI rules.

## 🛠️ Tech Stack
* **Frontend Library:** React JS (Hooks used: `useState`, `useEffect`)
* **Styling:** Bootstrap 5 & Custom CSS (Glassmorphism & Gradients)
* **Build Tool:** Vite

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/ArpitKumarGoel/React-Todo-CRUD.git
```

### 2. Navigate to the project folder
```bash
cd React-Todo-CRUD
```
### 3. Install the dependencies
```bash
npm install
```
### 4. Start the Local Development Server
```bash
npm run dev
```
Once the server starts, open your browser and go to http://localhost:5173 to see the app running!
