import {  useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { AuthContext } from "../contex/Index";



// AuthProvider Component
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        SetUser(userCredential.user); // Set the user state with the created user
        return userCredential; // Return the userCredential object
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        throw error; // Re-throw the error for further handling in the calling function
      })
      .finally(() => {
        setLoading(false); // Ensure loading state is updated
      });
  };


  const userInfo = { user, SetUser, loading, setLoading, createUser };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
