import ResraurantCard from "./ResraurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [listOfRestaurents, setListOfRestaurents] = useState(resList);

    return (
      <div className="body">
        <div className="search">
          <div>
            <input type="text" placeholder="Seach Restaurant"></input>
            Search
          </div>
          <div>
            <button className="filter-btn" onClick={()=>{
                const updatedList = listOfRestaurents.filter((list)=>{
                    return list.info.avgRating > 4;
                })
                setListOfRestaurents(updatedList)
            }}>Top Rated Restaurant
            </button>
        </div>
        </div>
        <div className="res-container">
          {listOfRestaurents.map((restaurant) => (
              <ResraurantCard key={restaurant.info.id} resData = {restaurant}/>
          ))}
        </div>
      </div>
    );
  };
export default Body;