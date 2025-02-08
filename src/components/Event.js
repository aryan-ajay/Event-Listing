import React, { useState } from "react";
import './Event.css'

const events = [
  { id: 1, title: "UFC 312: du Plessis vs. Strickland 2", date: "February 9, 2025", venue: "Qudos Bank Arena", description: "A highly anticipated rematch...", link: "https://www.ticketmaster.com/ufc312" },
  { id: 2, title: "Drake's 'Anita Max Win' Tour", date: "February 16-20, 2025", venue: "Qudos Bank Arena", description: "Drake returns to Sydney...", link: "https://www.ticketmaster.com/drake" },
  { id: 3, title: "Gatsby Boat Party", date: "February 15, 2025", venue: "King Street Wharf 9", description: "Experience the glitz and glamour...", link: "https://www.eventbrite.com/gatsby-boat" },
  { id: 4, title: "Kurtis Conner - The Goodfellow Tour", date: "February 15, 2025", venue: "State Theatre Sydney", description: "Comedian and YouTube sensation...", link: "https://www.ticketmaster.com/kurtisconner" },
  { id: 5, title: "Mayday 5525 Live Tour", date: "February 22, 2025", venue: "Accor Stadium", description: "Legendary Asian rock band Mayday...", link: "https://www.ticketmaster.com/mayday" }
];

const App = () => {
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleGetTickets = (event) => {
    setSelectedEvent(event);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = selectedEvent.link;
    }
  };

  return (
    <div className="container">
      <h1>Upcoming Events in Sydney</h1>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="events-list">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p>{event.description}</p>
            <button onClick={() => handleGetTickets(event)}>Get Tickets</button>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="modal-overlay">
            <div className="modal">
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>×</button>
            <h2>Enter your email to proceed</h2>
            <form onSubmit={handleEmailSubmit}>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit">Proceed</button>
            </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;
