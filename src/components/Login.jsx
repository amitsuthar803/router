import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("login", true);
  }

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  return (
    <div>
      Login Page
      <div>
        <label htmlFor="username"></label>
        <input id="username" type="text"></input>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
