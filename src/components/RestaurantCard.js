import {Img_cdn_url} from "../config";

// Restaurant card component: Image, name, cuisine

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, lastMileTravelString}) => {
    return (
      <div className="card">
        <img src={ Img_cdn_url  +
            cloudinaryImageId }/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;