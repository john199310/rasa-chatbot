import React from "react";
import "./styles.css";
import { Widget } from "rasa-webchat";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Widget
        initPayload={"/get_started"}
        embedded="false"
        socketUrl={"https://311320773469.ngrok.io"}
        socketPath={"/socket.io/"}
        customData={{ language: "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"Atlas Bot"}
        subtitle="A Troy Kirin Experience."
      />
    </div>
  );
}
