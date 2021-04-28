import { useEffect, useState } from "react";
import {useUpdateTodoStatusMutation} from "../generated/graphql";

interface TodoProps {
  desc: string;
  id: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ id, desc, completed }) => {
  const [isCompleted, setCompleted] = useState(completed);
  const [,updateTodoStatus] = useUpdateTodoStatusMutation()

  const handleStatusChange = async () => {
    try{
      await updateTodoStatus({id, completed: !isCompleted});
      setCompleted(!isCompleted);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <li className="todo">
      <input type="checkbox" checked={isCompleted} onChange={handleStatusChange} />
      {desc}
    </li>
  );
};

export default Todo;
