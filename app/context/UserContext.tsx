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
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    displayEmail: "",
  },
  links: [],
  addLink: () => {},
  changePlatform: () => {},
  updateInfo: () => {},
  updateUrl: () => {},
};

const UserContext = createContext<UserContextState>(contextDefaultValues);

export const UserProvider = ({ data, children }: Props) => {
  const [userInfo, setUserInfo] = useState({
    ...data.userInfo,
    displayEmail: data.userInfo.displayEmail || data.userInfo.email,
  });
  const [links, setLinks] = useState(data.links);

  const addLink = () =>
    setLinks((_links) => [
      ..._links,
      {
        platform: null,
        url: "",
        order: _links.length + 1,
        _id: crypto.randomUUID(),
        new: true,
      },
    ]);

  const changePlatform = (id: string, platform: Socials) =>
    setLinks((_links) =>
      _links.map((values) =>
        values._id === id
          ? values.new
            ? { ...values, platform }
            : { ...values, platform, updated: true }
          : values
      )
    );

  const updateUrl = (id: string, value: string) => {
    setLinks((_links) =>
      _links.map((values) =>
        values._id === id
          ? values.new
            ? { ...values, url: value }
            : { ...values, url: value, updated: true }
          : values
      )
    );
  };

  const updateInfo = (name: string, value: string) =>
    setUserInfo((info) => {
      return { ...info, [name]: value };
    });

  return (
    <UserContext.Provider
      value={{
        userInfo,
        links,
        addLink,
        changePlatform,
        updateInfo,
        updateUrl,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
