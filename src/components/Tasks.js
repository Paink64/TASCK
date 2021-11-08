import Task from "./Task";

/*
This file is has a new button at the top of the page
It then receives tasks then breaks it down into its components eg: title, desc, etc
then feeds broken down pieces of task into Task.js the render component using the id as a identifier in the task array.
*/ 
function Tasks({ tasks }) {
  return (
    /**
      Presently the New button does nothing.
      This is simply the New button. Nothing else.
      TODO: Fix conflicting CSS
     */
    <div className="row">
      <div className="col-12 text-right">
        <button className="button primary">New</button>
      </div>
       {tasks.map((task) => (
        <Task task={task} key={task.taskID} />
      ))}
      <div className="col-12"></div>
    </div>
  );
}

export default Tasks;
