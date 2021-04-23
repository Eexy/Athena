import { Todo } from "./todo"

interface TodoListProps{
  todos?: any[] | undefined;
}

export const TodoList : React.FC<TodoListProps> = ({todos}) => {
  return (
    <div>
      {todos ? todos.map(todo => <Todo desc={todo.desc} completed={todo.completed}/>): null}
    </div>
  )
} 