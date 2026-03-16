import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';
import './Registration.css';

export default function Registration() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    department: '',
    dietaryReq: '',
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Redirect after 3s
      setTimeout(() => navigate('/'), 3000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="container registration-page">
        <div className="success-card card animate-fade-in">
          <div className="success-icon">
            <CheckCircle2 size={64} />
          </div>
          <h2 className="title">Registration Successful!</h2>
          <p className="subtitle mt-4">Thank you, {formData.fullName}. Your spot has been reserved.</p>
          <p className="text-muted mt-2">A confirmation email has been sent to {formData.email}. Redirecting to home...</p>
          <Link to="/" className="btn btn-primary mt-6">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container registration-page animate-fade-in">
      <Link to={`/events/${id}`} className="back-link mb-6"><ChevronLeft size={20} /> Back to Event</Link>
      
      <div className="registration-layout">
        <div className="form-container">
          <h1 className="title">Secure Your Spot</h1>
          <p className="subtitle mb-8">Please fill out the form below to register for the event.</p>
          
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                className="form-control" 
                placeholder="John Doe"
                required 
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">College Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  placeholder="john.doe@college.edu"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentId">Student ID</label>
                <input 
                  type="text" 
                  id="studentId" 
                  name="studentId" 
                  className="form-control" 
                  placeholder="CS2026XXX"
                  required 
                  value={formData.studentId}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="department">Department / Major</label>
              <select 
                id="department" 
                name="department" 
                className="form-control" 
                required
                value={formData.department}
                onChange={handleChange}
              >
                <option value="" disabled>Select your department</option>
                <option value="cs">Computer Science</option>
                <option value="ee">Electrical Engineering</option>
                <option value="me">Mechanical Engineering</option>
                <option value="arts">Liberal Arts</option>
                <option value="business">Business Administration</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dietaryReq">Dietary Requirements (Optional)</label>
              <textarea 
                id="dietaryReq" 
                name="dietaryReq" 
                className="form-control" 
                placeholder="Vegan, Gluten-free, etc."
                rows="3"
                value={formData.dietaryReq}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to abide by the event <a href="#" className="link">Code of Conduct</a>.</label>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary w-full btn-lg ${status === 'submitting' ? 'loading' : ''}`}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Processing...' : 'Complete Registration'}
            </button>
          </form>
        </div>
        
        <div className="event-summary-side">
          {/* A side summary of what they are registering for */}
          <div className="card summary-card">
            <h3>Registration Summary</h3>
            <div className="summary-details">
              <div className="s-item">
                <span className="s-label">Event</span>
                <span className="s-value">Annual Tech Symposium 2026</span>
              </div>
              <div className="s-item">
                <span className="s-label">Date</span>
                <span className="s-value">Oct 15, 2026</span>
              </div>
              <div className="s-item">
                <span className="s-label">Ticket Type</span>
                <span className="s-value badge">VIP Student</span>
              </div>
              <div className="s-item total-row">
                <span className="s-label">Total Fee</span>
                <span className="s-value highlight">Free</span>
              </div>
            </div>
          </div>
          
          <div className="info-box mt-4">
            <AlertCircle size={20} className="info-icon" />
            <p>Please note that spots are verified against your valid student ID upon entry.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
