function TaskList({
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
    return true;
  })
  .filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

{filteredTasks.map((task) => (
  <div key={task._id}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTask(task._id)}
    />
    {task.text}
  </div>
))}

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Task List</h2>

      
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter("all")} className="border rounded p-2 bg-pink-300 hover:bg-pink-500 cursor-pointer">All</button>
        <button onClick={() => setFilter("completed")} className="border rounded p-2 bg-pink-300  hover:bg-pink-500 cursor-pointer">Completed</button>
        <button onClick={() => setFilter("pending")} className="border rounded p-2 bg-pink-300  hover:bg-pink-500  cursor-pointer">Pending</button>
        <button onClick={() => setFilter("high")} className="border rounded p-2 bg-pink-300  hover:bg-pink-500 cursor-pointer">High_Priority</button>
      </div>

     
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />

     
      {filteredTasks.map((task) => (
        <div key={task._id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task._id)}
          />
          {task.text}
        </div>
      ))}
    </div>
  );
}
export default TaskList;