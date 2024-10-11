// const jwt = require("jsonwebtoken");
// JWT_SECRET =
//   "77a3ad860f1726d383960f72d58c54b5cf16d40a23163ad335cbfe80267115f8e8a16421fb5320bfda8b0b4eca2d7214cf517d2b82a0b61bba93aec7d378c14c";
import React, { useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Null means no user is logged in

  const login = async (token, userData) => {
    setUser(userData);
    await AsyncStorage.setItem("token", token); // Save token in storage
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("token"); // Remove token from storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

module.exports = authMiddleware;
