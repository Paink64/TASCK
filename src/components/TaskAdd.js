import { useState } from "react";

function TaskAdd({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [taskDeadlineDate, settaskDeadlineDate] = useState("");
  const [title, setTitle] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, taskDeadlineDate: taskDeadlineDate, title: title });

    setTitle("");
    setDesc("");
    settaskDeadlineDate("");
  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      {/**
       * Title Field (Copy and Pasted from a tutorial)
       */}
      <form>
        <label htmlFor="desc">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      {/**
       * Description Field (Copy and Pasted from a tutorial)
       */}
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {/**
       * Deadline Date Field (Copy and Pasted from a tutorial)
       */}
        <label htmlFor="date">Deadline Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={taskDeadlineDate}
          onChange={(e) => settaskDeadlineDate(e.target.value)}
        />

        <div className="text-right">
          <button className="button primary" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskAdd;
