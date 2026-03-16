import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowRight, Zap, Star } from 'lucide-react';
import './Home.css';

// Mock Data
const upcomingEvents = [
  { id: 1, title: 'Annual Tech Symposium 2026', date: 'Oct 15, 2026', time: '09:00 AM', location: 'Main Auditorium', category: 'Technology', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Cultural Fest: Euphoria', date: 'Nov 02, 2026', time: '04:00 PM', location: 'Open Air Theatre', category: 'Cultural', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Startup Pitch Deck', date: 'Nov 18, 2026', time: '10:00 AM', location: 'Innovation Hub', category: 'Business', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const workshops = [
  { id: 101, title: 'Advanced React & Three.js', instructor: 'Dr. Sarah Connor', duration: '3 Days', participants: 45 },
  { id: 102, title: 'AI & Machine Learning Basics', instructor: 'Prof. Alan Turing', duration: '1 Week', participants: 120 },
  { id: 103, title: 'Creative Writing Workshop', instructor: 'Arthur C. Clarke', duration: '2 Days', participants: 30 },
];

const clubs = [
  { id: 201, name: 'Coding Ninjas', members: 340, active: 'High', description: 'Master algorithms and ace coding interviews.' },
  { id: 202, name: 'Robotics Society', members: 156, active: 'Medium', description: 'Build and program autonomous robots.' },
  { id: 203, name: 'Drama Club', members: 89, active: 'High', description: 'Express yourself on stage and improve acting skills.' },
];

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="container hero-content animate-fade-in">
          <div className="badge">
            <Zap size={16} className="badge-icon" />
            <span>Discover campus life like never before</span>
          </div>
          <h1 className="hero-title">Experience the Best <br/> <span className="text-gradient">College Events</span></h1>
          <p className="hero-subtitle">
            Your one-stop platform to discover, register, and participate in upcoming events, 
            exclusive workshops, and engaging club activities across the campus.
          </p>
          <div className="hero-actions">
            <a href="#upcoming" className="btn btn-primary btn-lg">Explore Events</a>
            <a href="#clubs" className="btn btn-secondary btn-lg">Join a Club</a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="section bg-card">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="title">Upcoming Events</h2>
              <p className="subtitle">Don't miss out on the biggest happenings on campus.</p>
            </div>
            <Link to="/events/all" className="view-all">View All <ArrowRight size={16} /></Link>
          </div>

          <div className="grid-3">
            {upcomingEvents.map(event => (
              <div key={event.id} className="card event-card">
                <div className="event-img-wrap">
                  <img src={event.image} alt={event.title} className="event-img" />
                  <span className="event-category">{event.category}</span>
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details">
                    <div className="detail-item"><Calendar size={16} /> {event.date}</div>
                    <div className="detail-item"><Clock size={16} /> {event.time}</div>
                    <div className="detail-item"><MapPin size={16} /> {event.location}</div>
                  </div>
                  <Link to={`/events/${event.id}`} className="btn btn-primary w-full mt-4">Details & Registration</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="title">Interactive Workshops</h2>
              <p className="subtitle">Upskill yourself with hands-on sessions led by experts.</p>
            </div>
          </div>

          <div className="grid-3">
            {workshops.map(workshop => (
              <div key={workshop.id} className="card workshop-card">
                <div className="workshop-icon"><Star size={24} /></div>
                <h3 className="workshop-title">{workshop.title}</h3>
                <p className="workshop-instructor">By {workshop.instructor}</p>
                <div className="workshop-meta">
                  <span><Clock size={15} /> {workshop.duration}</span>
                  <span><Users size={15} /> {workshop.participants} Limit</span>
                </div>
                <Link to={`/register/${workshop.id}`} className="btn btn-secondary w-full mt-4">Enroll Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="section bg-card">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="title">Active Student Clubs</h2>
              <p className="subtitle">Join communities that share your passion and interests.</p>
            </div>
          </div>

          <div className="grid-3">
            {clubs.map(club => (
              <div key={club.id} className="card club-card">
                <div className="club-header">
                  <h3 className="club-name">{club.name}</h3>
                  <span className={`status ${club.active.toLowerCase()}`}>{club.active} Activity</span>
                </div>
                <p className="club-desc">{club.description}</p>
                <div className="club-footer">
                  <span className="members"><Users size={16} /> {club.members} Members</span>
                  <button className="btn btn-link">View Activities <ArrowRight size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
