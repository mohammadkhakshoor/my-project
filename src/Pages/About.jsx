import { Link } from "react-router-dom";
import AppNavigation from "../Components/AppNavigation";

const About = () => {
  return (
    <div>
      <AppNavigation />
      <p>about</p>
      <Link to="contact">con</Link>
    </div>
  );
};

export default About;
