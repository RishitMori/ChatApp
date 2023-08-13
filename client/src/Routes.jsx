import RegisterAndLoginForm from "./Register";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import Chat from "./Chat"

export default function Routes() {
  const {username} = useContext(UserContext);

  if (username) {
    // return <Chat />;
    return <div><Chat/></div>
  }

  return (
    <RegisterAndLoginForm />
  );
}