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
  _id: string;
  email: string;
  image?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  displayEmail?: string | null;
};

type UserLink = {
  _id: string;
  platform: Socials | null;
  url: string;
  order: number;
  new?: true;
  updated?: true;
};
