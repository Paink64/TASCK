import { useState } from "react";

function TaskAdd({ task, onAddTask }) {
  const [desc, setDesc] = useState("");
  const [taskDeadlineDate, settaskDeadlineDate] = useState("");
  const [title, setTitle] = useState("");
  const [taskID, setTaskId] = useState("");


  const addTask = (e) => {
    e.preventDefault();
    onAddTask({ desc: desc, taskDeadlineDate: taskDeadlineDate, title: title, taskID: taskID });

    setTitle("");
    setDesc("");
    settaskDeadlineDate("");
    setTaskId("");
  };
  return (
    <div className="card">
      <h3>Add New Task</h3>
      {/**
       * Title Field (Copy and Pasted from a tutorial)
       */}
      <form>
        <label htmlFor="desc">Title</label>
        <input
          type="text"
          name="title"
          placeholder= "Title of Task"
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
          placeholder="Description of the Task"
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
          placeholder="Date when task should be complete"
          id="date"
          value={taskDeadlineDate}
          onChange={(e) => settaskDeadlineDate(e.target.value)}
        />

        <div className="text-right">
          <button className="button primary" onClick={addTask}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskAdd;
