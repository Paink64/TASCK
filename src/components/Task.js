/*Breaking up functionallity so its hopefully easier to read and follow
*This file actually displays the contents of the task allowing tasks to displayed in multiple pages if needed.
    TODO FUNCTIONALLITY: Make it so that it task also takes in user and checks if User assigned IDS match Task.id then render
    Also Check if Task.id is not assigned to anyone then render

    TODO CSS: Tasks need to be seperated with CSS. Currently our CSS is conflicting with the tutorials stated CSS.
*/
/*
TODO: get Delete working. 
*/
import handleDeleteClick from "../MyTasks";

function Task({ task }) {
    return (
      <div className="card">
        <div className="col-12 text-left" key={task.taskID}>
          <h4>{task.title}_ID:{task.taskID}</h4>
          <div className="col-12 text-left">
            Description: 
              <div className="col-12 tex-left">
                {task.desc}
                </div>
            Date Created: {task.dateCreated}
            <div className="col-12 text-left">
            Deadline: {task.taskDeadlineDate}
            </div>
          </div>
          <div className="col-12 text-center">
            {/*
            Todo for delete
          */}
            <button onClick={() => 
              console.log("deleting task")}>
                Delete Task</button>
            {/*
            Todo for Edit
          */}
            <button onClick={() => console.log("editing task")}>Edit Task</button>
            {/**
             * Display "Take Task" if task is not assigned
             * Flesh out assignment button later
             */}
            {!task.isAssigned && <button onClick={() => 
              console.log("taking task")}>
                Take Task</button> }
          </div>
        </div>
      </div>
    );
  }
  
  export default Task;
  