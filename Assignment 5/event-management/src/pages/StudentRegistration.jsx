import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import './StudentRegistration.css';

export default function StudentRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    gender: '',
    country: '',
    state: '',
    address1: '',
    address2: '',
    address3: '',
    cgpa: '',
    caste: '',
    category: '',
    disabled: '',
    password: '',
    confirmPassword: ''
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
    
    // Check if passwords match
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setStatus('idle');
      return;
    }

    // Simulate API registration
    setTimeout(() => {
      setStatus('success');
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="student-register-page animate-fade-in container">
      <div className="register-card">
        <div className="register-header">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div className="login-icon">
              <UserPlus size={40} />
            </div>
          </div>
          <h2 className="register-title">Student Registration</h2>
          <p className="register-subtitle">Create your account to participate in campus events</p>
        </div>

        <form className="student-register-form" onSubmit={handleSubmit}>
          
          <div className="section-divider">Personal Details</div>
          
          <div className="form-section">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" className="form-control" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" className="form-control" placeholder="john@college.edu" required value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" className="form-control" placeholder="+1 (555) 000-0000" required value={formData.phone} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select name="gender" className="form-select" required value={formData.gender} onChange={handleChange}>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="section-divider">Family Details</div>

          <div className="form-section">
            <div className="form-group">
              <label>Father's Name</label>
              <input type="text" name="fatherName" className="form-control" placeholder="Father's Full Name" required value={formData.fatherName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Mother's Name</label>
              <input type="text" name="motherName" className="form-control" placeholder="Mother's Full Name" required value={formData.motherName} onChange={handleChange} />
            </div>
          </div>

          <div className="section-divider">Location & Address</div>

          <div className="form-section">
            <div className="form-group">
              <label>Country</label>
              <input type="text" name="country" className="form-control" placeholder="Country" required value={formData.country} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>State / Province</label>
              <input type="text" name="state" className="form-control" placeholder="State" required value={formData.state} onChange={handleChange} />
            </div>
          </div>

          <div className="form-section full-width">
            <div className="form-group">
              <label>Address Line 1</label>
              <textarea name="address1" className="form-textarea" placeholder="Street Address" required value={formData.address1} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label>Address Line 2 (Optional)</label>
              <textarea name="address2" className="form-textarea" placeholder="Apartment, suite, etc." value={formData.address2} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label>Address Line 3 (Optional)</label>
              <textarea name="address3" className="form-textarea" placeholder="Landmarks or additional info" value={formData.address3} onChange={handleChange}></textarea>
            </div>
          </div>

          <div className="section-divider">Academic & Background</div>

          <div className="form-section">
            <div className="form-group">
              <label>Current CGPA</label>
              <input type="number" name="cgpa" className="form-control" placeholder="e.g. 3.8" step="0.01" required value={formData.cgpa} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select name="category" className="form-select" required value={formData.category} onChange={handleChange}>
                <option value="" disabled>Select Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>

            <div className="form-group">
              <label>Caste</label>
              <input type="text" name="caste" className="form-control" placeholder="Caste Details" required value={formData.caste} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Are you disabled?</label>
              <select name="disabled" className="form-select" required value={formData.disabled} onChange={handleChange}>
                <option value="" disabled>Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="section-divider">Account Security</div>

          <div className="form-section">
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Create Password" required value={formData.password} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" required value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          <div className="register-actions">
            <button 
              type="submit" 
              className={`btn btn-primary register-btn ${status === 'submitting' ? 'loading' : ''}`}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Registering...' : 'Register Account'}
            </button>
            <p className="login-link">
              Already have an account? <Link to="/login" className="link">Login here</Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
