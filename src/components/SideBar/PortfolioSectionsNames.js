import homeIcon from "../../images/home.png";
import portfolioIcon from "../../images/suitcase.png";
import resumeIcon from "../../images/cv.png";
import AbouteMeIcon from "../../images/profile.png";
import blogIcon from "../../images/blog.png";
import contactIcon from "../../images/email.png";

const portfolioUrls = [
  { route: "", icon: homeIcon, label: "home" },
  { route: "about-me", icon: AbouteMeIcon, label: "about me" },
  { route: "resume", icon: resumeIcon, label: "resume" },
  { route: "portfolio", icon: portfolioIcon, label: "portfolio" },
  { route: "blogs", icon: blogIcon, label: "blog" },
  { route: "contact", icon: contactIcon, label: "contact me" },
];

export default portfolioUrls;
