// https://react-icons.github.io/react-icons/
import {
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaRaspberryPi
} from "react-icons/fa";
import {DiJava, DiPython} from "react-icons/di";

// Projects Images (add your images to the /assets/images directory and import below)
import colors from "./assets/images/colors.svg";
import react from "./assets/images/logo.svg";
import notepad from "./assets/images/notepad.svg";
import symphony from "./assets/images/Symphony.png"
import sudoku from "./assets/images/sudoku.png"
import skreamSauce from "./assets/images/summerFellowship.png"
import grooveBlocks from "./assets/images/grooveBlocks.png"
import website from "./assets/images/website.png"


export const githubUsername = "finnbergquist";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
    skill: <DiPython className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <DiJava className="display-4" />,
    name: "Java",
  },
  {
    id: 3,
    skill: <FaRaspberryPi className="display-4" />,
    name: "Raspberry Pi",
  },
  {
    id: 4,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  }
];

/* Projects
 ************************************************************** */
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = [
  "Symphony",
  "Groove-Blocks",
  "Summer-Fellowship",
  "Sudoku-Solver",
  //"StaffScheduler",
  "Writing-Simulator",
  "Website"
];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: grooveBlocks,
  },
  {
    image: sudoku,
  },
  {
    image: skreamSauce,
  },
  {
    image: symphony,
  },
  {
    image: website,
  },
  {
    image: notepad,
  },
  
  

  
  
];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "fbergqui@bowdoin.edu",
  phone: "857-200-5274",
  //mailChimp: "https://www.mailchimp.com/",
};
