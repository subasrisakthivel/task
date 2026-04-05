export default function TaskList({
  tasks,
  toggleTask,
  filter,
  setFilter,
  search,
  setSearch,
}) {
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      if (filter === "high") return task.priority === "high";
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Task List</h2>

      
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("high")}>High Priority</button>
      </div>

     
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />

     
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.title}
        </div>
      ))}
    </div>
  );
}