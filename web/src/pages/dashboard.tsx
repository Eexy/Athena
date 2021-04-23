import { useHistory } from "react-router-dom";
import { TodoInputBar } from "../components/todo-input-bar";
import { TodoList } from "../components/todo-list";
import { useTodosQuery } from "../generated/graphql";

interface DashboardProps {
  isAuth: boolean;
  setAuth(value: boolean): void;
}

export const Dashboard: React.FC<DashboardProps> = ({ isAuth }) => {
  const history = useHistory();
  const [result, queryTodos] = useTodosQuery();

  // if user is not authentified redirect to login page
  if (!isAuth) {
    history.push("/login");
  }

  const { data, error, fetching } = result;

  if (fetching) {
    return <div>Loading todo list</div>;
  }

  if (error) {
    history.push("/login");
  }

  const addTodoCallback = (desc: string) => {
    console.log(desc);
  }

  return (
    <main style={{padding: '1.5rem'}}>
      <TodoInputBar addTodoCallback={addTodoCallback} />
      <TodoList todos={result.data?.todos} />
    </main>
  );
};
