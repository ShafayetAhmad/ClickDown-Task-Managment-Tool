/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleAuthProvider = new GoogleAuthProvider();
  const googleLogIn = async () => {
    console.log("auth in authprovider");
    setUserLoading(true);
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);
      return response;
    } catch (error) {
      console.error(error.message);
    } finally {
      setUserLoading(false);
    }
  };

  const registerUser = async (userEmail, userPass) => {
    setUserLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPass
      );
      console.log(result.user);
      setUser(result.user);
    } catch (error) {
      console.log(error.message);
    }
  };
    const userLogOut = () => {
      setUserLoading(true);
      signOut(auth)
        .then(() => {
          console.log("logged Out")
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setUserLoading(false);
        });
    };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user on auth: ", currentUser);
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userLoading,
        user,
        googleLogIn,
        registerUser,
        userLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
