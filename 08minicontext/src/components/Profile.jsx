import { useContext } from "react";
import UserContext from "../context/UseContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;
  return <div>Welcome {user.username}</div>;
};

export default Profile;
