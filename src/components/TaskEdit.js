import { useState } from 'react';

function TaskEdit ({ task, onEditTask}) {
    const [desc, updateDesc] = useState("");
    const [taskDeadlineDate, updatetaskDeadlineDate] = useState("");
    const [title, updateTitle] = useState("");

    const editTask = (e) =>
    {
        e.preventDefault();
        onEditTask({ desc: desc, taskDeadlineDate: taskDeadlineDate, title: title});
    
        updateTitle("");
        updateDesc("");
        updatetaskDeadlineDate("");
    };

//Copy and pasted from TaskAdd.js   
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

export default TaskEdit;
