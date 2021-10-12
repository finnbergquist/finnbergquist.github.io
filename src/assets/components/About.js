// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "../containers/NavBar";
import SocialLinks from "./SocialLinks";

// Image
import finn_photo from "../images/Finn_photo.png"

const About = ({ theme, setTheme, githubUrl, name, link, bio, twitter }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  const socialData = {
    githubUrl: githubUrl,
    link: link,
    twitter: twitter,
  };

  return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        <img
          src={finn_photo}
          alt="finn_phto"
          style={{width: 300, height: 400, float: 'left'}}
        />
        <h1>{"Finn Bergquist"}</h1>
        <hr />
        <p>{bio}</p>
        <SocialLinks {...socialData} />
        <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>

      <div>
      I am a Physics and Computer Science double major at
      Bowdoin College from Boston, MA. I love to work on
      long term projects, and I have experience working 
      by myself and on teams with more than 30 people 
      involved. I can appreciate having total control and 
      making my own critical decisions or collaborating with
      others to decide the best way forward.
      </div>
    </header>
  );
};

export default About;
