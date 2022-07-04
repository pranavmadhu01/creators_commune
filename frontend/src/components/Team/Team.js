import "./Team.css";
import { teamdata } from "./teamdata";
import React, { useEffect, useState } from "react";

export default function Team() {
  const [members, setMembers] = useState([]);

  const fetchData = () => {
    fetch("")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMembers(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all-sections team-wrapper" id="team">
      <div className="section-title-wrapper">
        <h2>MEET OUR TEAM</h2>
      </div>
      <div className="team-cards-wrapper">
        {teamdata.map((team) => (
          <div className="team-card">
            <img src={team.img} className="team-card-image" />
            <div className="team-card-details-wrapper">
              <h3>{team.name}</h3>
              <span>{team.desig}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
