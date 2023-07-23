import React, { useRef } from "react";

const DayCard = ({ dayMenu }) => {
  return (
    <div>
      {/* <div className="days-bloc"> */}
      <div className="day-container">
        <h4>{dayMenu[2]}</h4>

        {/* </div> */}
        {/* <h4>{dayMenu[4] ? dayMenu[4] : null}</h4> */}
        {dayMenu[4] ? <h4>{dayMenu[4]}</h4> : null}
      </div>
      <h6> * * * </h6>
      {/* </div> */}
    </div>
  );
};

export default DayCard;
