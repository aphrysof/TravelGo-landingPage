import "./destination.css";
import { destination } from "../../data";
import Map from "../../assets/map2.png";

const Destination = () => {
  return (
    <div className = "dest">
      <h1>Our Popular Destination</h1>
      <div className="destination">
        <img src={Map} alt="map" />
        <div className="cities">
          {destination &&
            destination.map((place, index) => (
              <div className="place" key={index}>
                <div className="detail">
                  <img src={place.image} alt="city_image" />
                  <h2>{place.city}</h2>
                  <div className="info">
                    <p>{place.activities}</p>
                    <span>{place.rating}</span>
                  </div>

                  <img src={place.icon} alt="arrow" className="icon" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
