export default function Navbar({ setActiveSection }) {
  return (
    <nav className="flex gap-4 mb-6">
      <button onClick={() => setActiveSection("home")} className="px-4 py-2 bg-blue-500 text-white rounded">Home</button>
      <button onClick={() => setActiveSection("add")} className="px-4 py-2 bg-green-500 text-white rounded">Add Task</button>
      <button onClick={() => setActiveSection("tasklist")} className="px-4 py-2 bg-purple-500 text-white rounded">Task List</button>
      <button onClick={() => setActiveSection("summary")} className="px-4 py-2 bg-orange-500 text-white rounded">Summary</button>
    </nav>
  );
}