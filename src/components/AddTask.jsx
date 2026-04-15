function AddTask({ form, handleChange, addTask, errors }) {
  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold mb-4">Add Task</h2>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border rounded-2xl p-2 w-full mb-2 "
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="border rounded-2xl p-2 w-full mb-2"
      />
      {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="border rounded-2xl  p-2 w-full mb-4"
      >
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button onClick={addTask} className="bg-green-500 text-white px-4 py-2 rounded-2xl w-full">
        Add Task
      </button>
    </div>
  );
}
export default AddTask;