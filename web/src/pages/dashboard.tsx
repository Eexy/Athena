import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTodosQuery } from "../generated/graphql";
import PageProps from "../utils/page-props";

interface DashboardProps extends PageProps {}

const Dashboard: React.FC<DashboardProps> = ({ pageName }) => {
  const history = useHistory();

  useEffect(() => {
    document.title = `${pageName}`;
  });

  return <div>Dashboard</div>;
};

export default Dashboard;
