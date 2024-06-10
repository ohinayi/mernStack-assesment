import "./market.css";
import skills from "./assets/skills.png";
import category from "./assets/category.png";
import profile from "./assets/profile.png";
import shoplify from "./assets/shoplify.png";
import magneto from "./assets/magneto.png";
import data from "./assets/data.png";
import webflow from "./assets/webflow.png";
import dotNet from "./assets/dotNet.png";
import rightV from "./assets/rightV.png";
import { useState } from "react";
import vectorB from './assets/vector-b.png';

const Market = () => {
    const [active, setActive] = useState(false);
  return (
    <div className="market-container">
      <div className="first-m">
        Your one-stop marketplace for finding the talent your business needs.
      </div>
      <div className="card-flex">
        {/* icons with their details */}
        <div className="card-flex-child">
          <p className="card-flex-p">
            Find Dev and IT professionals to scale your business.
          </p>
          <div className="icons-container">
            <div className="icon">
              <img src={skills} alt="skills" />
              <p>989 Skills</p>
            </div>
            <div className="icon">
              <img src={category} alt="category" />
              <p>45 Sub-Categories</p>
            </div>
            <div className="icon">
              <img src={profile} alt="profile" />
              <p>1011 Profiles</p>
            </div>
          </div>
          {/* icons with their details */}
        </div>
        <div className="detailed-card">
          <p className="detailed-header">IT & Development</p>
          <div className="detailed-icon-c">
            <div className="detailed-icons">
              <div className="d-icon-container">
                <img src={shoplify} alt="shopify" />
              </div>
              <p className="d-icon-p">Shopify Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={magneto} alt="magneto" />
              </div>
              <p className="d-icon-p">Magento Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={data} alt="data" />
              </div>
              <p className="d-icon-p">Data Scientist</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={webflow} alt="webflow" />
              </div>
              <p className="d-icon-p">Webflow Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={dotNet} alt="dotNet" />
              </div>
              <p className="d-icon-p">Dot Net Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={rightV} alt="rightV" />
              </div>
            </div>
          </div>
        </div>

        <div className="card-flex-child2">
          <p className="card-flex-p">
            Explore Creative individuals with a keen eye for detail.  
          </p>
          <div className="icons-container">
            <div className="icon">
              <img src={skills} alt="skills" />
              <p>989 Skills</p>
            </div>
            <div className="icon">
              <img src={category} alt="category" />
              <p>45 Sub-Categories</p>
            </div>
            <div className="icon">
              <img src={profile} alt="profile" />
              <p>1011 Profiles</p>
            </div>
          </div>
          {/* icons with their details */}
        </div>
        <div className="detailed-card">
          <p className="detailed-header">IT & Development</p>
          <div className="detailed-icon-c">
            <div className="detailed-icons">
              <div className="d-icon-container">
                <img src={shoplify} alt="shopify" />
              </div>
              <p className="d-icon-p">Shopify Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={magneto} alt="magneto" />
              </div>
              <p className="d-icon-p">Magento Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={data} alt="data" />
              </div>
              <p className="d-icon-p">Data Scientist</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={webflow} alt="webflow" />
              </div>
              <p className="d-icon-p">Webflow Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={dotNet} alt="dotNet" />
              </div>
              <p className="d-icon-p">Dot Net Developer</p>
            </div>
            <div>
              <div className="d-icon-container">
                <img src={rightV} alt="rightV" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="action-container">
        <div className="action-div">
        <button className="action-button" onClick={()=>setActive(!active)}>
            <p className={active? 'show': 'none'}>Explore More</p>
            <img src={vectorB} alt="vectorB" />
        </button>
        <p className={!active? 'show': 'none'}>Explore More</p>
        </div>
        <div>
            <p>30 more to explore</p>
        </div>
      </div>
    </div>
  );
};

export default Market;
