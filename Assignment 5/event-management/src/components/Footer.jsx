import { Calendar, Github, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Calendar className="logo-icon" size={24} />
            <span className="logo-text">CampusEvents</span>
          </div>
          <p className="footer-desc">
            The premium event management system for your college campus. Stay connected, stay updated.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Twitter size={20} /></a>
            <a href="#" className="social-link"><Github size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="link-group">
          <h4 className="group-title">Explore</h4>
          <a href="#upcoming">Upcoming Events</a>
          <a href="#workshops">Workshops</a>
          <a href="#clubs">Club Activities</a>
        </div>
        
        <div className="link-group">
          <h4 className="group-title">Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CampusEvents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
