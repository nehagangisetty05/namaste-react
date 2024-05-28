import React from "react";
import ReactDOM from "react-dom/client"; 

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      -ResraurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="../asset/foodlogo.png"></img>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);