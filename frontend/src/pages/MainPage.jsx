import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo_pequeño from '../logo_pequeño.png';

import "./MainPage.css";

function MainPage() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [helps, setHelps] = useState([]);
  const [setErrorMessage] = React.useState(false);

  const { username } = useParams();

  const ws = useRef();

  function handleSubmit() {
    if (!username) {
      setErrorMessage(true);
      return;
    }

    navigate(`/`);
  }

  useEffect(() => {
    //Example: ws://localhost:8080/?username=tiburcio
    const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/?username=${username}`
    ws.current = new WebSocket(SERVER_URL);

    ws.current.onopen = () => {
      console.log("Connection opened");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setUsers(data.users);
      setHelps(data.helps);
    };

    return () => {
      console.log("Cleaning up...");
      ws.current.close();
    };
  }, [username]);

  const scrollTarget = useRef(null);

  useEffect(() => {
    if (scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [helps]);

  return (
    <div className="main">
      <div id="helping-me-view-container">
        <h2>Lista Empleados</h2>
        <h3>Lista de Empleados Fichando</h3>
        <img src={logo_pequeño} alt=""></img>
        {
          users.map((user, index) => {


            return (
              <div class="helper" key={index}>
                <div>{user.username} esta fichando</div>
              </div>
            )
          })
        }
        <button className="boton" type="button" onClick={handleSubmit}>Dejar de fichar</button>
      </div>

      <div ref={scrollTarget} />
    </div>
  );
}

export default MainPage;