import "./cta.css";
import arrow from "../../assets/arow.png";
import email from '../../assets/Group 46.png'
const Cta = () => {
  return (
    <div className="cta__container">
      <div className="cta">
        <div className="cta__details">
          <div className="cta__detail">
            <img src={arrow} alt=" " />
            <h2>
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h2>
            <div className="subscribe">
              <img src={email} alt="" />
              <input type="email" name="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
