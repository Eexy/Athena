import { UserForm } from "../components/user-form"


interface LoginProps{}

export const Login: React.FC<LoginProps> = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <UserForm type="login"/>
    </main>
  );
};
