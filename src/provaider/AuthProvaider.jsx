import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.init";
import { AuthContext } from "../contex/Index";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  // Load user from localStorage or Firebase Auth state on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    } else {
      const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
        if (currentUser) {
          const userRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUser({ ...currentUser, ...userSnap.data() });
          } else {
            setUser(currentUser);
          }

          localStorage.setItem("user", JSON.stringify({ ...currentUser, ...userSnap.data() }));
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, []);

  // Create a new user and save to Firestore
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        const userRef = doc(db, "users", newUser.uid);

        const userData = {
          email: newUser.email,
          createdAt: new Date(),
        };

        setDoc(userRef, userData);
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));

        return userCredential;
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Log in a user with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        return userCredential;
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Google Sign-In and save user data
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);

        const userData = {
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
          role: "user",
        };

        const userRef = doc(db, "users", user.uid);

        getDoc(userRef).then((userSnap) => {
          if (!userSnap.exists()) {
            setDoc(userRef, userData)
              .then(() => console.log("New user data saved to Firestore."))
              .catch((error) => console.error("Error saving user data:", error.message));
          } else {
            console.log("User already exists in the database.");
          }
        });

        fetch(`http://localhost:1000/user?email=${user.email}`)
          .then((res) => res.json())
          .then((existingUser) => {
            if (existingUser.length === 0) {
              fetch("http://localhost:1000/user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
              })
                .then((res) => res.json())
                .then(() => console.log("User data saved in external database."))
                .catch((error) => console.error("Error saving user data:", error.message));
            } else {
              console.log("User already exists in the external database.");
            }
          });

        localStorage.setItem("user", JSON.stringify(user));
        return result;
      })
      .catch((error) => {
        console.error("Error logging in with Google:", error.message);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    auth.signOut().then(() => console.log("User logged out."));
  };

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
