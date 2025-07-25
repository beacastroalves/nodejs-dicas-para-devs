import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-4 bg-fuchsia-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
          onClick={() => onTaskClick(task.id)}
          className={`flex items-center gap-2 w-full bg-fuchsia-600 text-white p-2 rounded-md text-left ${task.isCompleted && "line-through"}`}>
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => { onDeleteTaskClick(task.id)}}>
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;