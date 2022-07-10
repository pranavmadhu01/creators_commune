import "./Team.css";
import React, { useEffect, useState } from "react";

export default function Team() {
  const [members, setMembers] = useState([]);

  const fetchData = () => {
    fetch("https://creators-commune.herokuapp.com/api/members/")
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
        {members.map((member) => (
          <div className="team-card">
            <img src={member.photo} className="team-card-image" />
            <div className="team-card-details-wrapper">
              <h3>{member.name}</h3>
              <span>{member.designation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
