import React from "react";
import { useNavigate } from "react-router-dom";
import logo_pequeño from '../logo_pequeño.png';
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
    <div className="center">
      <h1>Central Uniformes</h1>
      <img src={logo_pequeño} alt=""></img>
      <h3>Plataforma para fichar horas</h3>
      <form id="login-page-username-form">
        <label htmlFor="login-page-username">Introduce tu nombre y apellidos</label>
        <input id="login-page-username" type="text" placeholder="Nombre y Apellidos"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errorMessage ? <span id="login-page-error-message">* Introduce nombre y apellidos</span> : <></>}
        <button id="login-page-login-button" type="button" onClick={handleSubmit}>Fichar</button>
      </form>
    </div>
  )
}

export default LoginPage;