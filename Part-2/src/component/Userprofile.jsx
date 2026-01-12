import React from "react";
import { UserData } from "./Usercontext";
import { useContext } from "react";

const Userprofile = () => {
  const UserContext = useContext(UserData);
  return (
    <div>
      Hi i am {UserContext.name} and my email is {UserContext.email} and i am a{" "}
      {UserContext.designation}
    </div>
  );
};

export default Userprofile;
