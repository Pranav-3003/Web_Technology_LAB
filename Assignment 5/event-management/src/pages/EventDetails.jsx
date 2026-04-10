import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Info, ChevronLeft, CalendarPlus, Share2 } from 'lucide-react';
import './EventDetails.css';

export default function EventDetails() {
  const { id } = useParams();
  
  // Here we would normally fetch the event by ID. For now, mocking:
  const event = {
    id: id,
    title: 'Annual Tech Symposium 2026',
    date: 'Oct 15, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'Main Auditorium, Tech Block',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    organizer: 'Computer Science Department',
    capacity: 500,
    registered: 342,
    description: `Join us for the largest tech gathering of the year! The Annual Tech Symposium brings together visionary speakers, industry experts, and top students for a day of learning and networking.

Highlights include:
• Keynote speech by industry leaders
• Hackathon showcase
• Interactive AI & Web3 workshops
• Panel discussions on the future of tech
• Networking lunch and recruitment drive

Whether you are a freshman looking to explore or a senior ready to debut your project, there is something for everyone.`,
  };

  return (
    <div className="event-details-container">
      <div className="hero-banner">
        <img src={event.image} alt={event.title} className="banner-img" />
        <div className="banner-overlay">
          <div className="container banner-content animate-fade-in">
            <Link to="/" className="back-link"><ChevronLeft size={20} /> Back to Events</Link>
            <span className="badge category-badge">{event.category}</span>
            <h1 className="hero-title pt-4">{event.title}</h1>
            <p className="organizer">Organized by <strong>{event.organizer}</strong></p>
          </div>
        </div>
      </div>

      <div className="container main-content-grid">
        <div className="main-col">
          <section className="detail-section">
            <h2 className="section-heading">About the Event</h2>
            <div className="description-content text-secondary">
              {event.description.split('\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2 className="section-heading">Agenda Highlights</h2>
            <ul className="agenda-list">
              <li>
                <div className="time">09:00 AM</div>
                <div className="event">Registration & Welcome Breakfast</div>
              </li>
              <li>
                <div className="time">10:00 AM</div>
                <div className="event">Opening Keynote</div>
              </li>
              <li>
                <div className="time">12:30 PM</div>
                <div className="event">Networking Lunch</div>
              </li>
              <li>
                <div className="time">02:00 PM</div>
                <div className="event">Hackathon Showcase</div>
              </li>
              <li>
                <div className="time">04:30 PM</div>
                <div className="event">Closing Ceremony & Awards</div>
              </li>
            </ul>
          </section>
        </div>

        <div className="sidebar-col">
          <div className="card sticky-card">
            <div className="card-header">
              <h3>Event Info</h3>
            </div>
            <div className="info-list">
              <div className="info-item">
                <div className="icon-wrap"><Calendar size={20} /></div>
                <div>
                  <div className="info-label">Date</div>
                  <div className="info-value">{event.date}</div>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-wrap"><Clock size={20} /></div>
                <div>
                  <div className="info-label">Time</div>
                  <div className="info-value">{event.time}</div>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-wrap"><MapPin size={20} /></div>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">{event.location}</div>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-wrap"><Users size={20} /></div>
                <div>
                  <div className="info-label">Availability</div>
                  <div className="info-value">{event.registered} / {event.capacity} Filled</div>
                  <div className="progress-bar mt-2">
                    <div className="progress" style={{ width: `${(event.registered/event.capacity)*100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <Link to={`/register/${event.id}`} className="btn btn-primary w-full btn-lg">Register Now</Link>
              <div className="secondary-actions">
                <button className="btn btn-secondary w-full"><CalendarPlus size={18} /> Add to Calendar</button>
                <button className="btn btn-secondary w-full"><Share2 size={18} /> Share Event</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
