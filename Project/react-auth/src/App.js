import { Fragment } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Fragment>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Fragment>
  );
};

export default App;
