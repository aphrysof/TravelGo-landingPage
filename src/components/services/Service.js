import "./service.css";
import { services, otherServices } from "../../data";

const Service = () => {
  return (
    <section>
      <h1>Our Services</h1>
      <div className="card__container">
        {services
          ? services.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.icons} alt="icons" />
                <h1>{item.title}</h1>
                <p>{item.details}</p>
              </div>
            ))
          : null}
      </div>
      <div className="servies">
        <div className="world__map">
          <div className="details">
            <h1>We always try to give you the best service</h1>
            <p>
              We always try to make our customer Happy. We provide all kind of
              facilities. Your Satisfaction is our main priority.
            </p>
          </div>
          <div className="services">
            {otherServices &&
              otherServices.map((item, index) => (
                <div className="service_cards" key={index}>
                  <img src={item.icons} alt="icons" />
                  <h1>{item.numbers}</h1>
                  <p>{item.info}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
