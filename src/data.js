
import {
  FaReact,
  FaConfluence,
  FaAws,
  FaRaspberryPi,
  FaRegListAlt,
  FaProjectDiagram,
  FaPercentage
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
import fluid_dynamics from './assets/images/fluid_dynamics.png'
import neural_net from './assets/images/nn.png'
import markov_chain from './assets/images/mc.png'
import traffic from './assets/images/traffic.png'
import qlearn from './assets/images/qlearn.png'


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
    skill: <FaAws className="display-4" />,
    name: "AWS",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <FaConfluence className="display-4" />,
    name: "Agile Development",
  },
  {
    id: 7,
    skill: <FaRegListAlt className="display-4" />,
    name: "Databases",
  },
  {
    id: 8,
    skill: <FaProjectDiagram className="display-4" />,
    name: "AI",
  },
  {
    id: 8,
    skill: <FaPercentage className="display-4" />,
    name: "Math",
  }

  
];

/* Projects
 ************************************************************** */

export const filteredProjects = [
  "Stock-Trader-Neural-Net",
  "Groove-Blocks",
  "Summer-Fellowship",
  "fluid_dynamic",
  //"StaffScheduler",
  "Writing-Simulator",
  "Website",
  "Symphony",
  "traffic_model_simulation",
  "Stock-Trading-Q-Learner"
];

export const projectData = [
  {
    image: fluid_dynamics,
  },
  {
    image: grooveBlocks,
  },
  {
    image: neural_net,
  },
  {
    image: qlearn,
  },
  {
    image: skreamSauce,
  },
  {
    image: symphony,
  },
  {
    image: traffic,
  },
  {
    image: website,
  },
  {
    image: markov_chain,
  }
  

  
  
];



export const contactInfo = {
  email: "fbergqui@bowdoin.edu",
  phone: "857-200-5274",
  //mailChimp: "https://www.mailchimp.com/",
};
