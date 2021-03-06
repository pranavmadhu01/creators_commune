import "./News.css";
import React, { useState, useEffect } from "react";
import newsnowimg from "../../images/news-happening-now.svg";
export default function News() {
  const [events, setEvents] = useState([]);
  const [image, setImage] = useState({ newsnowimg });
  async function fetchData() {
    await fetch(`${process.env.REACT_APP_FIREBASE_DOMAIN}/Events.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setImage(data[data.length - 1].photo);
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
          <img src={image} alt="events image"  loading="lazy"/>
        </div>
        <div className="news-upcoming-wrapper">
          <h3>Events</h3>
          <div className="news-card-wrapper">
            {events
              .map((event) => (
                <div
                  className="news-card"
                  id={event.date}
                  key={event.date + event.day}
                >
                  <div className="date-wrapper">
                    <span style={{ fontSize: "1.9rem" }}>{event.date}</span>
                    <span style={{ fontSize: "1.1rem" }}>{event.day}</span>
                  </div>
                  <div className="news-description-wrapper">
                    <h4>{event.name}</h4>
                    <p>{event.description}</p>
                    <p>{event.time}</p>
                  </div>
                  {event.photo === image && (
                    <a
                      href={event.link}
                      className="news-register-link"
                      target="_blank_"
                    >
                      REGISTER
                    </a>
                  )}
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
}
