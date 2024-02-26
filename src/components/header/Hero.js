import { Link } from "react-router-dom";
import "./style.css";
const Hero = () => {
  return (
    <div className="hero_section">
      <div className="overlay" />
      <div className="hero_section_content">
        <h1>
          WE ENSURE BETTER EDUCATION <br />
          FOR A BETTER WORLD
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing <br />
          elit. Alias aspernatur culpa distinctio! Assumenda illum excepturi
          repellendus
        </p>
        <button>
          <Link to="/login" className="link">
            get started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
