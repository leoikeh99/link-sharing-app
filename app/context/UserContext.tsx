"use client";
import React, { useState, createContext } from "react";
type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: UserContextState = {
  name: "",
  changeName: () => {},
};

const UserContext = createContext<UserContextState>(contextDefaultValues);

export const UserProvider = ({ children }: Props) => {
  const [name, setName] = useState(contextDefaultValues.name);

  const changeName = () => setName("New name");

  return (
    <UserContext.Provider value={{ name, changeName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
