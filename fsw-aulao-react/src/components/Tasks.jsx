import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks(props) {

  return (
    <ul className="space-y-4 p-4 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
          onClick={() => props.onTaskClick(task.id)}
          className={`w-full bg-slate-400 text-white p-2 rounded-md text-left ${task.isCompleted && "line-through"}`}>
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button onClick={() => {props.onDeleteTaskClick(task.id)}} className="bg-slate-400 text-white p-2 rounded-md">
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;