import "./News.css";
import { newsdata } from "./Newsdata";
import newsnowimg from "../../images/news-happening-now.svg";
export default function News() {
  return (
    <div className="all-sections news-wrapper" id="events">
      <div className="section-title-wrapper">
        <h2>HAPPENING</h2>
      </div>
      <div className="news-inner-wrapper">
        <div className="news-happening-now-wrapper">
          <h3>Live Now</h3>
          <img src={newsnowimg} alt="" />
        </div>
        <div className="news-upcoming-wrapper">
          <h3>Upcoming Events</h3>
          {newsdata.map((news) => (
            <div className="news-card-wrapper">
              <div className="date-wrapper">
                <span style={{ fontSize: "0.7rem" }}>{news.month}</span>
                <span style={{ fontSize: "2rem" }}>{news.day}</span>
              </div>
              <div className="news-description-wrapper">
                <h4>{news.eventname}</h4>
                <p>{news.desc}</p>
              </div>
              <a href="#" className="news-register-link">REGISTER</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
