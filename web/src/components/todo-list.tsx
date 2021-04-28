import Todo from "./todo";

interface ITodo {
  desc: string;
  id: string;
  completed: boolean;
}

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          desc={todo.desc}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
