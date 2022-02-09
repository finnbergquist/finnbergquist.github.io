
import {
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaRaspberryPi
} from "react-icons/fa";
import {DiJava, DiPython} from "react-icons/di";

// Projects Images 
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

export const filteredProjects = [
  "Symphony",
  "Groove-Blocks",
  "Summer-Fellowship",
  "Sudoku-Solver",
  //"StaffScheduler",
  "Writing-Simulator",
  "Website"
];

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



export const contactInfo = {
  email: "fbergqui@bowdoin.edu",
  phone: "857-200-5274",
  //mailChimp: "https://www.mailchimp.com/",
};
