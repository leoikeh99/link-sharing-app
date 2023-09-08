type UserContextState = {
  userInfo: UserInfo;
  links: UserLink[];
  loading: "PROFILE" | "LINKS" | false;
  removedLinks: Array<string> | null;
  uploadImage?: string | null;
  addLink: () => void;
  removeLink: (id: string) => void;
  saveLinks: () => void;
  changePlatform: (id: string, platform: Socials) => void;
  updateInfo: (name: string, value: string) => void;
  updateUrl: (id: string, value: string) => void;
  updateProfile: (
    imageFile: Blob | undefined | null,
    clearFile: Function
  ) => void;
  updateUploadImage: (image: string | null) => void;
};

type AlertTypes = "success" | "danger" | "info" | "warning";

type Alert = {
  id: string;
  type: AlertTypes;
  message: string;
};

type AlertContextState = {
  alerts: Array<Alert>;
  createAlert: (type: AlertTypes, message: string) => void;
  removeAlert: (id: string) => void;
};
