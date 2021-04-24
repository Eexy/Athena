import { useMediaQuery } from "react-responsive";
import { Todo } from "./todo";

interface TodoListProps {
  todos?: any[] | undefined;
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 70px)" });

  return (
    <div style={isLargeScreen ? { width: "700px" } : {}}>
      {todos
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              desc={todo.desc}
              completed={todo.completed}
            />
          ))
        : null}
    </div>
  );
};
