/*Breaking up functionallity so its hopefully easier to read and follow
*This file actually displays the contents of the task allowing tasks to displayed in multiple pages if needed.
    TODO FUNCTIONALLITY: Make it so that it task also takes in user and checks if User assigned IDS match Task.id then render
    Also Check if Task.id is not assigned to anyone then render

    TODO CSS: Tasks need to be seperated with CSS. Currently our CSS is conflicting with the tutorials stated CSS.
*/
function Task({ task }) {
    return (
      <div className="card">
        <div className="col-12 text-left" key={task.taskID}>
          <h4>{task.title}_ID:{task.taskID}</h4>
          <n>{task.desc}</n>
          <n>{task.dateCreated}</n>
        </div>
      </div>
    );
  }
  
  export default Task;
  