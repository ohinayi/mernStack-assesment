import textImage from "./assets/textImage.png";
import Bvector from './assets/Bvector .png';
import ToggleSwitch from './toggleSwitch';
import "./work.css";

const Work = () => {
  return (
    <div className="work-container">
      <p className="first-p">
        Finding the right fit
        <img src={textImage} alt="image" className="p-image" />
        has never been easier.
      </p>
      <p className="second-p">
        With our rigorous pre-vetting process, you will never have to worry
        about finding the ideal candidate ever again.
      </p>
      <div className="input-container">
        <input type="text" className="work-input" />
        <button className="work-button" type="submit">
          <img src={Bvector} alt="image" className="button-image" />
        </button>
      </div>
      <div className="job-frame">
      <ToggleSwitch />
          <ul>
            <li>Python Developer</li>
            <li>Shopify Developer</li>
            <li>Shopify Developer</li>
            <li>Full Stack Developer</li>
            <li>Data Scientist</li>
            <li>Front End Developer</li>
            <li>Shopify Developer</li>
            <li>Python Developer</li>
            <li>Shopify Developer</li>
            <li>Shopify Developer</li>
            <li>Full Stack Developer</li>
            <li>Explore More ...</li>
          </ul>
      </div>
    </div>
  );
};

export default Work;
