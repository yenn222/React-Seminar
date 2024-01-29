import "./Header.css"
import React from "react";
const Header = () => {
    let day = new Date();
    const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHDAY = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let week = WEEKDAY[day.getDay()];
    let month = MONTHDAY[day.getMonth()];

    return(
        <div className="Header">
            <h2>{week}, {new Date().getDate()} {month}</h2>
        </div>
    );
};

export default React.memo(Header);
