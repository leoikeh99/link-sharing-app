"use client";
import React, { useState, useContext, createContext } from "react";
import AlertContext from "./AlertContext";

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
  uploadImage: null,
  links: [],
  loading: false,
  removedLinks: null,
  addLink: () => {},
  changePlatform: () => {},
  saveLinks: () => {},
  updateInfo: () => {},
  updateUrl: () => {},
  removeLink: () => {},
  updateProfile: () => {},
  updateUploadImage: () => {},
};

const UserContext = createContext<UserContextState>(contextDefaultValues);

export const UserProvider = ({ data, children }: Props) => {
  const [userInfo, setUserInfo] = useState(data.userInfo);
  const [links, setLinks] = useState(data.links);
  const [removedLinks, setRemovedLinks] = useState(
    contextDefaultValues.removedLinks
  );
  const [loading, setLoading] = useState(contextDefaultValues.loading);
  const [uploadImage, setUploadImage] = useState(
    contextDefaultValues.uploadImage
  );
  const { createAlert } = useContext(AlertContext);

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

  const removeLink = (id: string) => {
    const order = links.find((values) => values._id === id)?.order;
    setLinks((_links) =>
      _links
        .filter((values) => values._id !== id)
        .map((values) =>
          order && values.order > order
            ? values.new
              ? { ...values, order: values.order - 1 }
              : { ...values, order: values.order - 1, updated: true }
            : values
        )
    );

    if (!links.find((_links) => _links._id === id)?.new) {
      setRemovedLinks((_links) => (_links ? [..._links, id] : [id]));
    }
  };

  const saveLinks = async () => {
    setLoading("LINKS");
    const data = {
      links: links.filter((values) => values.new || values.updated),
      removedLinks,
    };

    await fetch("/api/users/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res: any) => {
      const data = await res.json();
      if (res.ok) {
        setLinks(data.links);
        createAlert("success", data.message);
        return;
      }
      createAlert("danger", data.message);
    });
    setLoading(false);
  };

  const updateProfile = async (
    ImageFile: Blob | undefined | null,
    clearFile: Function
  ) => {
    setLoading("PROFILE");
    let avatarUploadSuccessfull = false;

    if (ImageFile && clearFile) {
      //upload image
      const formData = new FormData();
      formData.set("avatar", ImageFile);

      await fetch("/api/users/avatar", {
        method: "PUT",
        body: formData,
      }).then(async (res: any) => {
        const data = await res.json();

        if (!res.ok) {
          createAlert("danger", data.message);
          return;
        }
        setUserInfo((info) => {
          return { ...info, image: data.imageUrl };
        });
        clearFile();
        avatarUploadSuccessfull = true;
      });
    }

    if (ImageFile && !avatarUploadSuccessfull) return;

    const data = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      displayEmail: userInfo.displayEmail,
    };

    await fetch("/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res: any) => {
      const data: { message: string } = await res.json();
      if (res.ok) {
        setUploadImage(null);
        createAlert("success", "Your changes have been successfully saved!");
        return;
      }
      createAlert("danger", data.message);
    });

    setLoading(false);
  };

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

  const updateUploadImage = (image: string | null) => setUploadImage(image);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        links,
        loading,
        removedLinks,
        uploadImage,
        updateUploadImage,
        addLink,
        saveLinks,
        changePlatform,
        updateInfo,
        updateUrl,
        removeLink,
        updateProfile,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
