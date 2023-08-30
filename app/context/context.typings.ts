type UserContextState = {
  userInfo: UserInfo;
  links: UserLink[];
  addLink: () => void;
  changePlatform: (id: string, platform: Socials) => void;
  updateInfo: (name: string, value: string) => void;
  updateUrl: (id: string, value: string) => void;
};
