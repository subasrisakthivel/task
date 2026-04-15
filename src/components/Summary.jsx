function Summary({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {total - completed}</p>
    </div>
  );
}
export default Summary;
