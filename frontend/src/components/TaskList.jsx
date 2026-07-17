const STATUS_OPTIONS = ['Pending', 'In Progress', 'Completed'];

const priorityClass = {
  Low: 'priority-low',
  Medium: 'priority-medium',
  High: 'priority-high',
};

const statusClass = {
  Pending: 'status-pending',
  'In Progress': 'status-progress',
  Completed: 'status-completed',
};

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📋</div>
        <h3>No tasks found</h3>
        <p>Create a new task or adjust your filters</p>
      </div>
    );
  }

  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <div className="task-card-header">
            <span className={`badge ${priorityClass[task.priority]}`}>{task.priority}</span>
            <div className="task-actions">
              <button className="btn-icon" onClick={() => onEdit(task)} title="Edit">
                ✏️
              </button>
              <button className="btn-icon" onClick={() => onDelete(task._id)} title="Delete">
                🗑️
              </button>
            </div>
          </div>

          <h3 className="task-title">{task.title}</h3>
          {task.description && <p className="task-description">{task.description}</p>}

          <div className="task-card-footer">
            <select
              className={`status-select ${statusClass[task.status]}`}
              value={task.status}
              onChange={(e) => onStatusChange(task, e.target.value)}
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <span className="task-date">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
