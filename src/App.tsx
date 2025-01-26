import "./App.css";
import { Login } from "./pages/Login";
import { auth, db } from "./config/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SongManagement } from "./pages/SongManagement";

function App() {
  // const [songList, setSongList] = useState<any[]>([]);

  // const songsCollectionRef = collection(db, "songs");

  // useEffect(() => {
  //   const getSongList = async () => {
  //     try {
  //       const data = await getDocs(songsCollectionRef);

  //       const filteredData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));

  //       console.log(filteredData);

  //       setSongList(filteredData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getSongList();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/" element={<SongManagement />} />
                </Routes>
              </ProtectedRoute>
            }
          />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
