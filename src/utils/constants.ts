import GithubIcon from "../../public/assets/icons/github.svg";
import XIcon from "../../public/assets/icons/x.svg";
import LinkedInIcon from "../../public/assets/icons/linkedin.svg";

export const ARR_OF_SOCIAL_MEDIA = [
  {
    name: "Github",
    Component: GithubIcon,
    href: "https://github.com/rohilpinto",
  },
  {
    name: "X",
    Component: XIcon,
    href: "https://x.com/Rohil_Cris",
  },
  {
    name: "Linkedin",
    Component: LinkedInIcon,
    href: "https://www.linkedin.com/in/rohil-pinto/",
  },
] as const;
