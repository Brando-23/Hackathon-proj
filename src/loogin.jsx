// pages/login.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/theme.css'; // Import the educational theme

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Effect to ensure proper height is applied
  useEffect(() => {
    // Fix viewport height issues on mobile
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (username && password) {
      // Navigate to student dashboard with username as state
      navigate('/2stud', { state: { username } });
    }
  };

  return (
    <div className="login-page">
      <div className="row g-0 full-height">
        {/* Left side - Image with overlay */}
        <div className="col-md-6 d-none d-md-block login-image-side">
          <div className="overlay"></div>
          <div className="image-content">
            <h1 className="welcome-text">Welcome to <span className="highlight">Campus Connect</span></h1>
            <p className="tagline">Empowering students through innovation and excellence</p>
            <div className="edu-card testimonial-card">
              <p>"Campus Connect helps me stay connected with my academic journey and achieve my goals."</p>
              <div className="testimonial-author">
                <span className="name">Ravi Kumar</span>
                <span className="role">Computer Science, Class of 2024</span>
              </div>
            </div>
          </div>
          <img 
            src="https://img.freepik.com/free-photo/group-diverse-students-working-together_23-2148988845.jpg?w=1060&t=st=1715607111~exp=1715607711~hmac=b1bc48f9e36de9e0e8d1d90b79edd1d35c092a78d7fb58c8b67c6be215e59113" 
            alt="Students on campus" 
            className="login-image" 
          />
        </div>
        
        {/* Right side - Login Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center login-form-side">
          <div className="login-form-container">
            <div className="text-center mb-3">
              <div className="logo-container">
                <div className="school-logo">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
              <h2 className="edu-heading">Student Login</h2>
              <p className="text-muted small-text">Access your personalized student dashboard</p>
            </div>
            
            <div className="edu-card login-card">
              <div className="edu-card-body compact-form">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="edu-form-label">Student ID</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                      <input 
                        type="text" 
                        className="form-control edu-form-control" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your student ID"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="edu-form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-lock"></i></span>
                      <input 
                        type="password" 
                        className="form-control edu-form-control" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember" />
                      <label className="form-check-label small-text" htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#" className="edu-text-primary text-decoration-none small-text">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn w-100 edu-btn edu-btn-primary">Sign In</button>
                  
                  <div className="mt-3 text-center">
                    <Link to="/" className="btn edu-btn edu-btn-outline btn-sm">Back to Home</Link>
                  </div>
                </form>
                
                <div className="login-footer mt-3">
                  <p className="text-center mb-0">
                    <small className="small-text">Need help? Contact <a href="#" className="edu-text-primary">Student Support</a></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the login page */}
      <style jsx>{`
        /* Import Font Awesome for icons */
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .login-page {
          overflow: hidden;
          width: 100%;
          background-color: var(--edu-neutral-200);
          font-family: var(--edu-font-primary);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .full-height {
          height: 100vh; /* Fallback */
          height: calc(var(--vh, 1vh) * 100);
          max-height: 100vh;
        }
        
        .login-image-side {
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        
        .login-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.85) 0%, rgba(124, 58, 237, 0.85) 100%);
          z-index: 1;
        }
        
        .image-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
        }
        
        .welcome-text {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        
        .highlight {
          color: var(--edu-accent-light);
        }
        
        .tagline {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        
        .testimonial-card {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          padding: 1.25rem;
          margin-top: 1.5rem;
          border-left: 4px solid var(--edu-accent);
        }
        
        .testimonial-card p {
          font-style: italic;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }
        
        .testimonial-author {
          display: flex;
          flex-direction: column;
        }
        
        .testimonial-author .name {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .testimonial-author .role {
          font-size: 0.8rem;
          opacity: 0.8;
        }
        
        .login-form-side {
          background-color: var(--edu-neutral-100);
          height: 100%;
          overflow-y: auto;
        }
        
        .login-form-container {
          width: 100%;
          max-width: 400px;
          padding: 1.5rem;
        }
        
        .logo-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .school-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--edu-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.75rem;
          box-shadow: 0 4px 10px rgba(30, 58, 138, 0.3);
        }
        
        .login-card {
          border: none;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
        }
        
        .compact-form {
          padding: 1.25rem;
        }
        
        .input-group-text {
          background-color: var(--edu-primary);
          color: white;
          border: none;
        }
        
        .login-footer {
          border-top: 1px solid var(--edu-neutral-300);
          padding-top: 0.75rem;
        }
        
        .small-text {
          font-size: 0.85rem;
        }
        
        .edu-form-control {
          padding: 0.5rem 0.75rem;
        }
        
        @media (max-width: 768px) {
          .login-form-container {
            max-width: 100%;
            padding: 1rem;
          }
          
          .welcome-text {
            font-size: 1.75rem;
          }
          
          .full-height {
            height: -webkit-fill-available;
          }
        }
        
        @media (max-height: 700px) {
          .welcome-text {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .tagline {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          
          .testimonial-card {
            padding: 1rem;
            margin-top: 1rem;
          }
          
          .testimonial-card p {
            font-size: 0.85rem;
            margin-bottom: 0.5rem;
          }
          
          .school-logo {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
          
          .edu-heading {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentLogin;
