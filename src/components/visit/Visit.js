import "./visit.css";
import { steps } from "../../data";
import MainImage from "../../assets/n1.jpg";
import Main from "../../assets/n2.png";
import icon1 from "../../assets/p1.png";
import icon2 from "../../assets/p2.png";
import icon3 from "../../assets/p3.png";
import icon4 from "../../assets/p4.png";
import icon5 from "../../assets/p5.png";
const Visit = () => {
  return (
    <div className="visit">
      <div className="title">
        <h1>Book Your Next Trip in 3 Easy Steps</h1>
        <h3>Easy and Fast</h3>
      </div>
      <div className="more--details">
        <div className="information">
          {steps &&
            steps.map((step, idx) => (
              <div className="items" key={idx}>
                <img src={step.icon} alt="icon" />
                <div className="item_details">
                  <h3>{step.title}</h3>
                  <p>{step.info}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="progress">
          <div className="progress_card">
            <div className="inner_details">
              <img src={MainImage} alt="omg" />
              <div className="trip__details">
                <h4>Trip to Greece</h4>
                <span>14-29 June by Robbin joseph</span>
                <div className="icons">
                  <img src={icon1} alt="" />
                  <img src={icon2} alt="" />
                  <img src={icon3} alt="" />
                </div>
                <div className="ongoing">
                  <div className="going">
                    <img src={icon4} alt="" />
                    <span>24 people going</span>
                  </div>
                  <img src={icon5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="progress_bar" onClick={() => {}}>
            <img src={Main} alt="img" />
            <div className="progress_details">
              <h5>Ongoing</h5>
              <h4>Trip to Remote</h4>
              <label htmlFor="file">40% Completed</label>

              <progress id="file" max="100" value="40">
                40%
              </progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
