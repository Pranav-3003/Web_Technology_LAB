import { Link } from 'react-router-dom';
import { Calendar, Menu, User } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <Calendar className="logo-icon" size={28} />
          <span className="logo-text">CampusEvents</span>
        </Link>
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#upcoming" className="nav-link">Events</a>
          <a href="#workshops" className="nav-link">Workshops</a>
          <a href="#clubs" className="nav-link">Clubs</a>
        </nav>
        <div className="header-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/student-register" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            Register
          </Link>
          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
