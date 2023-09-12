"use client";
import React, {
  useState,
  useContext,
  createContext,
  useTransition,
} from "react";
import AlertContext from "./AlertContext";
import { arrayMove } from "@dnd-kit/sortable";
import { useRouter } from "next/navigation";

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
  removedLinks: [],
  addLink: () => {},
  changePlatform: () => {},
  saveLinks: () => {},
  updateInfo: () => {},
  updateUrl: () => {},
  removeLink: () => {},
  updateProfile: () => {},
  updateUploadImage: () => {},
  switchLinks: () => {},
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
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
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
      removedLinks: removedLinks?.length === 0 ? null : removedLinks,
    };

    await fetch("/api/users/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res: any) => {
      const data = await res.json();
      if (res.ok) {
        setLinks(data.links);
        setRemovedLinks([]);
        createAlert("success", data.message);
        return;
      }
      createAlert("danger", data.message);
    });
    setLoading(false);

    startTransition(() => {
      router.refresh();
    });
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

    startTransition(() => {
      router.refresh();
    });
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

  const switchLinks = (
    initialLinkId: string | number,
    destinationLinkId: string | number
  ) => {
    setLinks((links) => {
      const initialLinkIndex = links.findIndex(
        (val) => val._id === initialLinkId
      );
      const destinationLinkIndex = links.findIndex(
        (val) => val._id === destinationLinkId
      );

      const newArray = arrayMove(links, initialLinkIndex, destinationLinkIndex);

      return newArray.map((val) =>
        val.new
          ? {
              ...val,
              order: newArray.findIndex((_val) => _val._id === val._id) + 1,
            }
          : {
              ...val,
              order: newArray.findIndex((_val) => _val._id === val._id) + 1,
              updated: true,
            }
      );
    });
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
        switchLinks,
        removeLink,
        updateProfile,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
