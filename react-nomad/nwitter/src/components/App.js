import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [newName, setNewName] = useState("");
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {

      if (user) {
        // setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),

        });
      } else {
        setIsLoggedIn(false)
      };
      setInit(true)
    })
  }, [])

  const refreshUser = () => {
    const user = authService.currentUser;
    setNewName(user.displayName);
  };
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} ntwitter</footer>
    </>
  );
}

export default App;

