type UserContextState = {
  userInfo: UserInfo;
  links: UserLink[];
  loading: "PROFILE" | "LINKS" | false;
  removedLinks: Array<string> | null;
  addLink: () => void;
  removeLink: (id: string) => void;
  saveLinks: () => void;
  changePlatform: (id: string, platform: Socials) => void;
  updateInfo: (name: string, value: string) => void;
  updateUrl: (id: string, value: string) => void;
};
