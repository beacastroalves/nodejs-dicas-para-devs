import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col space-y-4 p-4 bg-fuchsia-200 rounded-md shadow">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa")
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-fuchsia-800 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  )
};

export default AddTask;

