import "./packages.css";
import { button, packages } from "../../data";

const Packages = () => {
  return (
    <div className="packages">
      <h1>Best Packages For You</h1>
      <div className="buttons">
        {button &&
          button.map((item, idx) => <button key={idx}>{item.content}</button>)}
      </div>
      <div className="hotels">
        {packages &&
          packages.map((hotel, idx) => (
            <div className="hotel" key={idx}>
              <img src={hotel.image} alt="hotel" className="image__hotel" />
              <div className="more__info">
                <div className="stay">
                  <p>{hotel.days}</p>
                  <p>{hotel.price}</p>
                </div>
                <p>{hotel.details}</p>
                <div className="locate">
                  <div className="location">
                    <img src={hotel.icon} alt="icon" />
                    <span>{hotel.place}</span>
                  </div>
                  <p>{hotel.more}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="discover">
        <button>Discover More</button>
      </div>
    </div>
  );
};

export default Packages;
