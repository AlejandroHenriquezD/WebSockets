import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
// import ReactModal from "react-modal";
// import { useModal } from "react-modal-hook";
import "./MainPage.css";

function MainPage() {
  // const [showModal, hideModal] = useModal(() => (
  //   <ReactModal isOpen>
  //     <p>Modal content</p>
  //     <button onClick={hideModal}>Hide modal</button>
  //   </ReactModal>
  // ));
  const [users, setUsers] = useState([]);
  const [helps, setHelps] = useState([]);

  const { username } = useParams();

  const ws = useRef();

  const sendMessageNext = (name) => {
    ws.current.send(
      JSON.stringify({
        helper: username,
        helped: name,
        type: "next please"
      })
    );
  };

  const sendMessageAsk = (name) => {
    ws.current.send(
      JSON.stringify({
        helper: name,
        helped: username,
        type: "ask for help"
      })
    );
  };

  // const sendMessageRing = (name) => {
  //   ws.current.send(
  //     JSON.stringify({
  //       helper: username,
  //       helped: name,
  //       type: "ringing the bell"
  //     })
  //   );
  // };

  useEffect(() => {
    //Example: ws://localhost:8080/?username=tiburcio
    const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/?username=${username}`
    ws.current = new WebSocket(SERVER_URL);

    ws.current.onopen = () => {
      console.log("Connection opened");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // if (data.type && data.type == "ringing the bell") {
      //   showModal();
      //   return;
      // }
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
    <Layout>
      <div id="helping-others-view-container">
        <h2>Helping others</h2>
        <h3>List of people asking for your help</h3>
        {
          helps.filter(help => help.helper === username).map((u, index) => {
            return (
              <div class="helped" key={index}>
                <div>{index === 0 ?
                  <span>
                    It's {u.helped}'s turn.
                    <button onClick={() => sendMessageNext(u.helped)}>Help next</button>
                    {/* <button onClick={() => sendMessageRing(u.helped)}>Ring!!!</button> */}
                  </span>
                  :
                  u.helped}
                </div>
              </div>
            );
          })
        }
      </div>
      <div id="helping-me-view-container">
        <h2>Helping me</h2>
        <h3>List of people to help me</h3>
        {
          users.map((user, index) => {
            let usersWaiting = helps.filter((help) => help.helper === user.username);
            let waitingForHelper = usersWaiting.filter((help) => help.helped === username);
            let waitingIndexOf = null;
            for (let i = 0; i < usersWaiting.length; i++) {
              if (usersWaiting[i].helped === username) {
                waitingIndexOf = i;
                break;
              }
            }
            
            if (user.username !== username)
              return (
                <div class="helper" key={index}>
                  <div>People in {user.username}'s row: {usersWaiting.length}</div>
                  <div>{waitingForHelper.length === 0 ? <button onClick={() => sendMessageAsk(user.username)}>Ask for {user.username}'s help</button> : <></>}</div>
                  <div>{waitingForHelper.length > 0 ? `${waitingIndexOf} before you waiting for ${user.username}'s help` : <></>}</div>
                </div>
              )
              return null;
          })
          
        }
      </div>

      <div ref={scrollTarget} />
    </Layout>
  );
}

export default MainPage;