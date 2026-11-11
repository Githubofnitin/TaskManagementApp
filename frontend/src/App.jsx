import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    try {
      const response = await getTasks(
        statusFilter,
        search
      );

      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [search, statusFilter]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      if (editingTask) {
        await updateTask(editingTask.id, {
          id: editingTask.id,
          title,
          description,
          status,
          createdAt: editingTask.createdAt,
        });
      } else {
        await createTask({
          title,
          description,
          status,
        });
      }

      setTitle("");
      setDescription("");
      setStatus("Pending");
      setEditingTask(null);

      loadTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);

    setTitle(task.title);
    setDescription(task.description || "");
    setStatus(task.status);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this task?")) {
      await deleteTask(id);
      loadTasks();
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        Task Management Application
      </h2>

      <form
        onSubmit={handleSubmit}
        className="card p-3 mb-4"
      >
        <input
          className="form-control mb-2"
          placeholder="Title"
          maxLength="100"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <select
          className="form-select mb-2"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option value="Pending">
            Pending
          </option>

          <option value="InProgress">
            In Progress
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>

        <button
          type="submit"
          className="btn btn-primary"
        >
          {editingTask
            ? "Update Task"
            : "Add Task"}
        </button>
      </form>

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Search by title..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="">
              All Status
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="InProgress">
              In Progress
            </option>

            <option value="Completed">
              Completed
            </option>
          </select>
        </div>
      </div>

      {tasks.length === 0 && (
        <div className="alert alert-info">
          No tasks found.
        </div>
      )}

      {tasks.map((task) => (
        <div
          key={task.id}
          className="card mb-3"
        >
          <div className="card-body">
            <h5>{task.title}</h5>

            <p>{task.description}</p>

            <p>
              <strong>Status:</strong>{" "}
              {task.status}
            </p>

            <p>
              <strong>Created:</strong>{" "}
              {new Date(
                task.createdAt
              ).toLocaleString()}
            </p>

            <button
              className="btn btn-warning me-2"
              onClick={() =>
                handleEdit(task)
              }
            >
              Edit
            </button>

            <button
              className="btn btn-danger"
              onClick={() =>
                handleDelete(task.id)
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;