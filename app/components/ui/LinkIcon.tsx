import React from "react";
import GitHubIcon from "@/assets/images/icon-github.svg";
import FEMIcon from "@/assets/images/icon-frontend-mentor.svg";
import TwitterIcon from "@/assets/images/icon-twitter.svg";
import LinkedInIcon from "@/assets/images/icon-linkedin.svg";
import HashnodeIcon from "@/assets/images/icon-hashnode.svg";
import DevToIcon from "@/assets/images/icon-devto.svg";
import StackOverflowIcon from "@/assets/images/icon-stack-overflow.svg";
import CodeWarsIcon from "@/assets/images/icon-codewars.svg";
import GitLabIcon from "@/assets/images/icon-gitlab.svg";
import TwitchIcon from "@/assets/images/icon-twitch.svg";
import YoutubeIcon from "@/assets/images/icon-youtube.svg";
import FacebookIcon from "@/assets/images/icon-facebook.svg";
import FCCIcon from "@/assets/images/icon-freecodecamp.svg";

type Props = {
  iconKey: Socials;
};

const Icons = {
  github: <GitHubIcon />,
  frontendMentor: <FEMIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
  hashnode: <HashnodeIcon />,
  devto: <DevToIcon />,
  stackOverflow: <StackOverflowIcon />,
  codeWars: <CodeWarsIcon />,
  gitlab: <GitLabIcon />,
  twitch: <TwitchIcon />,
  youtube: <YoutubeIcon />,
  facebook: <FacebookIcon />,
  freeCodeCamp: <FCCIcon />,
};

const LinkIcon = ({ iconKey }: Props) => {
  return Icons[iconKey];
};

export default LinkIcon;
