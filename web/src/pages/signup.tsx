import { UserForm } from "../components/user-form";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <UserForm type="signup" />
    </main>
  );
};
