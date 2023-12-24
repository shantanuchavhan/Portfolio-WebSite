import homeIcon from "../../images/home.png";
import portfolioIcon from "../../images/suitcase.png";
import resumeIcon from "../../images/cv.png";
import AbouteMeIcon from "../../images/profile.png";
import blogIcon from "../../images/blog.png";
import contactIcon from "../../images/email.png";

const portfolioUrls = [
  { route: "", icon: homeIcon, label: "HOME" },
  { route: "about-me", icon: AbouteMeIcon, label: "ABOUT ME" },
  { route: "resume", icon: resumeIcon, label: "RESUME" },
  { route: "portfolio", icon: portfolioIcon, label: "PORTFOLIO" },
  { route: "blogs", icon: blogIcon, label: "BLOG" },
  { route: "contact", icon: contactIcon, label: "CONTACT" },
];

export default portfolioUrls;
