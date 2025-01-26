import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const SongManagement = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <span>Song Management</span>
      <button onClick={handleLogout}>Sign Out</button>
    </>
  );
};

export { SongManagement };
