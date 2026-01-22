function Progress({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-1">
        <span>
          Completed: <strong>{completed}</strong> / {total}
        </span>
        <span>{percentage}%</span>
      </div>

      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
