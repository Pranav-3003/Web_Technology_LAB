import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { KeyRound } from 'lucide-react';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [status, setStatus] = useState('idle');

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
      navigate('/');
    }, 1000);
  };

  return (
    <div className="login-page animate-fade-in container">
      <div className="login-card">
        <div className="login-icon-container">
          <div className="login-icon">
            <KeyRound size={40} />
          </div>
        </div>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to manage your events and registrations</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-control" 
              placeholder="you@college.edu"
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="form-control" 
              placeholder="••••••••"
              required 
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary login-btn ${status === 'submitting' ? 'loading' : ''}`}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/student-register" className="link">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
