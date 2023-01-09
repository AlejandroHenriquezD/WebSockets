import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./LoginPage.css";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(false);

  function handleSubmit() {
    if (!username) {
      setErrorMessage(true);
      return;
    }

    navigate(`/main/${username}`);
  }

  return (
    <Layout>
      <form id="login-page-username-form">
        <label htmlFor="login-page-username">Type the username you'll use in the chat</label>
        <input id="login-page-username" type="text" placeholder="Your name or nickname"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errorMessage ? <span id="login-page-error-message">* Type in a username or nickname</span> : <></>}
        <button id="login-page-login-button" type="button" onClick={handleSubmit}>Log in the chat</button>
      </form>
    </Layout>
  )
}

export default LoginPage;