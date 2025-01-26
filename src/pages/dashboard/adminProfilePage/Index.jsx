import React from "react";
import UserProfile from "./UserProfile";

const Admin = () => {
  const user = {
    name: "Tamim Khan",
    email: "hmdtamimkhan@gmail.com",
    gender: "Male",
    role: "Admin",
    profilePicture: "https://via.placeholder.com/150",
  };

  return <UserProfile user={user} />;
};

export default Admin;
