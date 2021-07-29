import React from "react";

const cutDetails = (value) => {
  if (value.length > 140) {
    return value.slice(0, 137) + "...";
  } else {
    return value;
  }
};

const MissionsCard = (props) => {
  const { mission } = props;
  const date = new Date(mission.event_date_utc);
  const details = cutDetails(mission.details);

  console.log(mission);
  return (
    <div className="mission-card">
      <div className="mission-card-top">
        <h3 className="missions-card-title">{mission.title}</h3>
        <div className="mission-number">{mission.flight_number || "-"}</div>
      </div>

      <div>
        <div className="mission-date">{date.toLocaleDateString()}</div>
        <div>{details}</div>
      </div>
    </div>
  );
};
export default MissionsCard;
