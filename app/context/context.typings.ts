type UserContextState = {
  userInfo: UserInfo;
  links: UserLink[];
  addLink: () => void;
  changePlatform: (id: string, platform: Socials) => void;
};
