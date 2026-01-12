import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicEffect from "./component/BasicEffect";
import { UserData } from "./component/Usercontext";
import Userprofile from "./component/userprofile";

function App() {
  const user = {
    name: "Nabeel Rahman",
    email: "nabeel@example.com",
    designation: "Software Developer",
  };
  return (
    <div>
      <UserData.Provider value={user}>
        <Userprofile />
      </UserData.Provider>
    </div>
  );
}

export default App;
