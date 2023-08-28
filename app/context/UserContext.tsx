"use client";
import React, { useState, createContext } from "react";

type Props = {
  children: React.ReactNode;
  data: {
    userInfo: UserInfo;
    links: UserLink[];
  };
};

const contextDefaultValues: UserContextState = {
  userInfo: {
    firstName: "",
    lastName: "",
    displayEmail: "",
  },
  links: [],
  addLink: () => {},
  changePlatform: () => {},
};

const UserContext = createContext<UserContextState>(contextDefaultValues);

export const UserProvider = ({ data, children }: Props) => {
  const [userInfo, setUserInfo] = useState(data.userInfo);
  const [links, setLinks] = useState(data.links);

  const addLink = () =>
    setLinks((_links) => [
      ..._links,
      {
        platform: null,
        url: "",
        order: _links.length + 1,
        id: crypto.randomUUID(),
        new: true,
      },
    ]);

  const changePlatform = (id: string, platform: Socials) =>
    setLinks((_links) =>
      _links.map((val) =>
        val.id === id
          ? val.new
            ? { ...val, platform }
            : { ...val, platform, updated: true }
          : val
      )
    );

  return (
    <UserContext.Provider value={{ userInfo, links, addLink, changePlatform }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
