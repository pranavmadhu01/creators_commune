import "./News.css";
import React, { useState, useEffect } from "react";
import newsnowimg from "../../images/news-happening-now.svg";
export default function News() {
  const [events, setEvents] = useState([]);
  const [image, setImage] = useState({ newsnowimg });
  async function fetchData() {
    await fetch("https://creators-commune.herokuapp.com/api/events/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setImage(data[data.length-1].photo);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all-sections news-wrapper" id="events">
      <div className="section-title-wrapper">
        <h2>HAPPENING</h2>
      </div>
      <div className="news-inner-wrapper">
        <div className="news-happening-now-wrapper">
          <h3>Live Now</h3>
          <img src={image} alt="events image" />
        </div>
        <div className="news-upcoming-wrapper">
          <h3>Events</h3>
          <div className="news-card-wrapper">
            {events
              .map((event) => (
                <div className="news-card" id={event.date} key={event.date}>
                  <div className="date-wrapper">
                    <span style={{ fontSize: "0.7rem" }}>{event.date}</span>
                    <span style={{ fontSize: "2rem" }}>{event.day}</span>
                  </div>
                  <div className="news-description-wrapper">
                    <h4>{event.name}</h4>
                    <p>{event.description}</p>
                    <p>{event.time}</p>
                  </div>
                  <a
                    href={event.link}
                    className="news-register-link"
                    target="_blank_"
                  >
                    REGISTER
                  </a>
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
}
