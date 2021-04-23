interface TodoProps{
  desc: string;
  completed: boolean;
}

export const Todo: React.FC<TodoProps> = ({desc, completed}) => {
  return <p>Todo</p>
}