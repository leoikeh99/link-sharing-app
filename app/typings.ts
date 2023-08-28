type Socials =
  | "github"
  | "frontendMentor"
  | "twitter"
  | "linkedin"
  | "hashnode"
  | "devto"
  | "stackOverflow"
  | "codeWars"
  | "gitlab"
  | "twitch"
  | "youtube"
  | "facebook"
  | "freeCodeCamp";

type UserInfo = {
  firstName: string;
  lastName: string;
  displayEmail: string;
};

type UserLink = {
  id: string;
  platform: Socials | null;
  url: string;
  order: number;
  new?: true;
  updated?: true;
};
