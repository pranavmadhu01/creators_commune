import "./Team.css";
import { teamdata } from "./teamdata";

export default function Team() {
  return (
    <div className="team-wrapper">
      <div className="section-title-wrapper">
        <h2>MEET OUR TEAM</h2>
      </div>
      <div className="team-cards-wrapper">
        {teamdata.map((team) => (
          <div className="team-card">
            <img src={team.img} className="team-card-image"/>
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
