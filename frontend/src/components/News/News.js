import "./News.css";
import React, { useState, useEffect } from "react";
import newsnowimg from "../../images/news-happening-now.svg";
export default function News() {
  const [events, setEvents] = useState([]);
  const fetchData = () => {
    fetch("http://192.168.60.150:8000/api/events/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      });
  };

  useEffect(()=>{
    fetchData();
  },[])

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
          {events.map((event) => (
            <div className="news-card-wrapper">
              <div className="date-wrapper">
                <span style={{ fontSize: "0.7rem" }}>{event.date}</span>
                <span style={{ fontSize: "2rem" }}>{event.day}</span>
              </div>
              <div className="news-description-wrapper">
                <h4>{event.name}</h4>
                <p>{event.description}</p>
                <p>{event.time}</p>
                {/* <img src={event.photo}></img> */}
              </div>
              <a href="#" className="news-register-link">
                REGISTER
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
