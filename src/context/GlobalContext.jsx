import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState({
    userName: "Gul",
    password: "gul1",
    role: "admin",
  });

  return (
    <GlobalContext.Provider value={{ admin, setAdmin }}>
      {children}
    </GlobalContext.Provider>
  );
};

