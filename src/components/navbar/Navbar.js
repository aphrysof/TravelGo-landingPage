import "./navbar.css";
import logo from "../../assets/logo.png";
import star from "../../assets/star.png";
import profile from "../../assets/profile.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Packages</li>
      </ul>
      <div className="profile">
        <img src={star} alt="" />
        <img src={profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
