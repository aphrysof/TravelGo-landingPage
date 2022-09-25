import "./footer.css";
import logo from "../../assets/logo2.png";
import fb from "../../assets/Social.png";
import ig from "../../assets/Social (1).png";
import ps from "../../assets/Play Store.png";
import as from "../../assets/Google Play.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_1">
          <img src={logo} alt="logo" />
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="footer_2">
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>

          <ul>
            <li>Contact</li>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliate</li>
          </ul>

          <ul>
            <li>More</li>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low Fare Trips</li>
          </ul>
        </div>
        <div className="footer_3">
          <div className="socials">
            <img src={fb} alt="fb" />
            <img src={ig} alt="ig" />
          </div>
          <p>Discover our app</p>
          <div className="download">
            <img src={ps} alt="ps" />
            <img src={as} alt="as" />
          </div>
        </div>
      </div>
      <p className="fta">All rights reserved@travelgoo.co</p>
    </>
  );
};

export default Footer;
