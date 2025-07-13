import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-fuchsia-800 p-6 select-none">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0 bottom-0 text-fuchsia-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-fuchsia-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-fuchsia-200 p-4 rounded-md space-y-2">
          <h2 className="text-xl font-bold text-fuchsia-700">{title}</h2>
          <p className="text-fuchsia-700">{description}</p>
        </div>
      </div>
    </div>
  )
};

export default TaskPage;