import gamedevlogo from "../../images/Group.svg";
import uiuxlogo from "../../images/Vector.svg";
import vfxlogo from "../../images/Vector (1).svg";
import "./About.css";

export default function About() {
  return (
    <div className="all-sections about-wrapper" id="about">
      <div className="section-title-wrapper">
        <h2>WHO ARE WE ?</h2>
      </div>
      <div className="about-content-wrapper">
        <div className="about-grid-wrapper">
          <div className="about-grid-top">
            <div className="about-text-wrapper">
              <h3>ABOUT US</h3>
              <p>
                <span style={{textTransform:"capitalize"}}>CREATORS COMMUNE</span> was founded to serve as an
                environment for people to learn about the process of developing
                games, to play and understand game design, and to collaborate
                with others in researching and creating their own games.
              </p>
            </div>
            <div className="about-title-image-container"></div>
          </div>
          <div className="about-grid-bottom">
            <div className="bottom-image-wrapper bottom-left-image-wrapper"></div>
            <div className="what-we-do-wrapper">
              <h3>WHAT DO WE DO ?</h3>
              <div className="what-we-do-content-wrapper">
                <div className="what-we-do-content">
                  <img src={gamedevlogo} alt="" srcset="" />
                  <h4>
                    GAME<br></br>DEVELOPMENT
                  </h4>
                </div>
                <div className="what-we-do-content">
                  <img src={uiuxlogo} alt="" srcset="" />

                  <h4>UI UX DESIGN</h4>
                </div>
                <div className="what-we-do-content">
                  <img src={vfxlogo} alt="" srcset="" />

                  <h4>
                    VISUAL EFFECTS<br></br>[VFX]
                  </h4>
                </div>
              </div>
            </div>
            <div className="bottom-image-wrapper bottom-right-image-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
