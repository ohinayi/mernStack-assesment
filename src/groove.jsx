import "./grove.css";
import rVector from "./assets/rVector.png";
import grove from "./assets/grove.png";
import lButton from "./assets/lButton.png";
import rButton from "./assets/rButton.png";
import sGrove from "./assets/sGrove.png";
const Grove = () => {
  return (
    <div className="grove-container">
      <div className="f-groove">
        <div className="f-p-content">
          <p>
            How it worked for Jason
            <img src={rVector} alt="rVector" className="rVector"/>
            at
            <img src={grove} alt="grove" className="grove"/>
          </p>
        </div>
        <p className="grove-t">
          Zwilt enabled us to deliver on time and they’ve been heavy hitters in
          our corner since.
        </p>
        <div className="b-container">
          <button className="grove-button">
            <img src={lButton} alt="lbutton" />
          </button>
          <button className="grove-button">
            <img src={rButton} alt="rbutton" />
          </button>
        </div>
      </div>

      <div className="s-groove">
        <div className="s-f-grove">
          <div className="sGrove-c">
            <img src={sGrove} alt="sgrove " />
          </div>
          <div className="grove-d">
          <p className="jason">Jason Makki</p>
          <p className="eng">Engineer at GROOVE</p>
          <p className="san">San Francisco</p>
          </div>
        </div>
        <div className="grove-l">
          Zwilt enabled us to deliver on time and they’ve been heavy hitters in
          our corner since. Zwilt enabled us to deliver on time and they’ve been
          heavy hitters in our corner since.Zwilt enabled us to deliver on time
          and they’ve been heavy hitters.
        </div>
      </div>
    </div>
  );
};

export default Grove;
