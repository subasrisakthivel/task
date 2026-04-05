import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import Summary from "./components/Summary.jsx";


export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    category: "",
    priority: "",
    status: "pending",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!form.title) err.title = "Required";
    if (!form.category) err.category = "Required";
    if (!form.priority) err.priority = "Required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const addTask = () => {
    if (!validate()) return;

    const newTask = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      priority: form.priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setForm({ title: "", category: "", priority: "", status: "pending" });
    setActiveSection("tasklist");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="p-6">
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" && <Home />}
      {activeSection === "add" && (
        <AddTask form={form} handleChange={handleChange} addTask={addTask} errors={errors} />
      )}
      {activeSection === "tasklist" && (
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
      )}
      {activeSection === "summary" && <Summary tasks={tasks} />}
    </div>
  );
}