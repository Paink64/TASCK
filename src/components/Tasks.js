import Task from "./Task";
import handleDeleteClick from "../MyTasks";
import { useEffect, useState } from "react";
/**
 * 
 * I now understand. This is a helper function that takes and displays organized Task renders.
 * 
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
      </div>
       {tasks.map((task) => (
        <Task task={task} key={task.taskID} />
      ))}
      <div className="col-12"></div>
    </div>
  );
}

export default Tasks;
