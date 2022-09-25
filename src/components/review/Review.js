import "./review.css";
import Image from '../../assets/Ellipse 30.png'


const Review = () => {
  return (
    <div className="review__container">
      <h1>What People Say About Us</h1>
      <div className="reviews">
        <div className="review1"></div>
        <div className="review2">
          <div className="image">
            <img src={Image} alt="img" />
          </div>
          <div className="comment">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <h4>-Jeo Stanlee</h4>
          </div>
        </div>
        <div className="review3"></div>
      </div>
    </div>
  );
};

export default Review;
