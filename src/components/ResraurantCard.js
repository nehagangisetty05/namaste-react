import { CDN_URL } from "../utils/constants";

const ResraurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, deliveryTime, costForTwo, cuisines} = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img 
            src={CDN_URL+cloudinaryImageId}>
        </img>
      <h3>{name}</h3>
      <div className="h4content">
        <h4>&#9733; {avgRating}</h4>
        <h4>{resData.info.sla.deliveryTime}min</h4>
        <h4>{costForTwo}</h4>
      </div>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};
export default ResraurantCard;