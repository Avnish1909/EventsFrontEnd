import React, { useState, useEffect } from "react";
import styles from "./Events.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import eventsData from "../../data/eventsData"; // 👈 Static data import

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate async fetch delay (optional)
    const loadEvents = () => {
      setEvents(eventsData);
    };
    loadEvents();
  }, []);

  if (!events.length)
    return (
      <div className={styles.emptyContainer}>
        <p>No events available.</p>
      </div>
    );

  return (
    <div className={styles.pageWrapper}>
      <h4>Register Now!!</h4>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div className={styles.eventCard} key={event._id}>
            <img
              src={event.banner}
              alt={event.name}
              className={styles.bannerImage}
              onError={(e) => {
                e.target.src = "/placeholder-image.jpg";
              }}
            />
            <div className={styles.details}>
              <h2>{event.name}</h2>
              <p className={styles.description}>
                {event.description?.slice(0, 200)}...
              </p>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p className={styles.registerLink}>
                <Link to={`/events/${event._id}`}>Click Here to register!</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
