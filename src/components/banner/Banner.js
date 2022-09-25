import "./banner.css";
import BannerImage from "../../assets/banner.png";
import { Navbar, Button } from "../index";

const Banner = () => {
  return (
    <header>
      <Navbar />
      <div className="banner">
        <h1>Your Imagination Is Your Only Limit </h1>
        <p>
          {" "}
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority
        </p>
        <button>Discover More</button>
      </div>
    </header>
  );
};

export default Banner;
