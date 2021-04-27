interface AuthFormProps {
  type: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  return (
    <div>
      <form className="form" id="auth-form">
        <div className="form-group">
          <label htmlFor="email">email : </label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">password : </label>
          <input type="password" id="password" />
        {type === "signup" ? 
          <input type="password" id="confirm-password" />
        : null}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
