import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Button, Input } from "antd";
import { Header } from "../../components";
import { SongsTable } from "./components/SongsTable";
import { useState } from "react";
import { AddSongModal } from "./components/AddSongModal";

const SongManagement = () => {
  const [openAddSongModal, setOpenAddSongModal] = useState<boolean>(false);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const toggleModal = () => setOpenAddSongModal((prev) => !prev);

  const closeModal = () => setOpenAddSongModal(false);

  return (
    <>
      <div className="block">
        <div className="flex justify-between p-4 items-center border-b-1 border-slate-200">
          <span>Mary Immaculate Parish Filipino Chinese - Dumaguete</span>
          <div className="flex items-center space-x-4">
            <h2>Hello, {auth.currentUser?.displayName}</h2>
            <Button type="default" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>
        <div className="flex flex-col mx-auto max-w-7xl p-4 gap-4">
          <Header headerText="Song List" />
          <div>
            <Button type="primary" className="flex-none" onClick={toggleModal}>
              Add New Song
            </Button>
          </div>
          <div>
            <Input placeholder="Enter song name..." />
          </div>
          <SongsTable />
        </div>
      </div>
      <AddSongModal
        open={openAddSongModal}
        handleCancel={closeModal}
        handleOk={closeModal}
      />
    </>
  );
};

export { SongManagement };
