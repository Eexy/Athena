import { useMediaQuery } from "react-responsive";
import { Todo } from "./todo";

interface TodoListProps {
  todos?: any[] | undefined;
  updateTodoList(): void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, updateTodoList }) => {
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
              updateTodoList={updateTodoList}
            />
          ))
        : null}
    </div>
  );
};
