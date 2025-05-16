// pages/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import Bootstrap JS directly
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/theme.css'; // Import the educational theme

export default function Home() {
  useEffect(() => {
    // No need to use require - we imported Bootstrap JS above
    // Just initialize any Bootstrap components that need JavaScript here if needed
    
    // For example, initialize tooltips if you're using them:
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <>
      {/* Meta tags directly in the component */}
      <div className="meta-tags">
        <title>Campus Connect - University Portal</title>
        <meta name="description" content="University impact report and campus connection platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </div>

      <div className="edu-homepage">
        {/* Header Section */}
        <header className="edu-navbar">
          <div className="edu-container">
            <div className="navbar-wrapper">
              <div className="logo-section">
                <div className="school-logo-wrapper">
                  <div className="school-logo">
                    <i className="fas fa-university"></i>
                  </div>
                </div>
                <div className="branding">
                  <h1 className="university-name">CAMPUS CONNECT</h1>
                  <p className="university-tagline">Empowering Education, Inspiring Innovation</p>
                </div>
              </div>
              
              <nav className="main-navigation">
                <Link to="/innovhome" className="nav-item">
                  <i className="fas fa-flask"></i>
                  <span>Research</span>
                </Link>
                <Link to="/startup" className="nav-item">
                  <i className="fas fa-rocket"></i>
                  <span>Innovation</span>
                </Link>
                <Link to="/collab" className="nav-item">
                  <i className="fas fa-handshake"></i>
                  <span>Partnerships</span>
                </Link>
                <Link to="/awardpage" className="nav-item">
                  <i className="fas fa-award"></i>
                  <span>Excellence</span>
                </Link>
                <Link to="/led" className="nav-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Leadership</span>
                </Link>
                
                {/* Login Dropdown */}
                <div className="nav-item dropdown">
                  <a className="dropdown-toggle" href="#" id="loginDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-user-circle"></i>
                    <span>Login</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                    <li><Link to="/loogin" className="dropdown-item"><i className="fas fa-user-graduate"></i> Student</Link></li>
                    <li><Link to="/facloogin" className="dropdown-item"><i className="fas fa-chalkboard-teacher"></i> Faculty</Link></li>
                  </ul>
                </div>

                <div className="search-form">
                  <div className="search-wrapper">
                    <input type="search" placeholder="Search..." className="search-input" />
                    <button className="search-button">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="edu-container">
            <div className="hero-content">
              <div className="hero-image">
                <div className="image-overlay"></div>
                <Link to="/flip" className="image-link">
                  <img
                    src="https://img.freepik.com/free-photo/group-diverse-graduates-posing-with-diplomas_23-2148201847.jpg?w=1060&t=st=1715610732~exp=1715611332~hmac=52ee75c01a3ec5336bed48f10e30e14d03a4722a3cead87cb2ba9dce9c8f54b3"
                    alt="University students graduating"
                    className="hero-img"
                  />
                </Link>
                <div className="featured-badge">
                  <span>Impact Report 2024</span>
                </div>
              </div>
              
              <div className="hero-text">
                <h2 className="edu-heading">Driving Innovation <br/>Toward Impact</h2>
                <p className="edu-text">Our university fosters a culture of innovation, research, and collaboration to tackle global challenges and create meaningful change.</p>
                <div className="hero-buttons">
                  <Link to="/" className="edu-btn edu-btn-primary">Our Vision</Link>
                  <Link to="/collab" className="edu-btn edu-btn-outline">Join Our Efforts</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="edu-container">
            <div className="stats-wrapper">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3 className="stat-number">$300M</h3>
                <p className="stat-desc">Industry research sponsored funding</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3 className="stat-number">900+</h3>
                <p className="stat-desc">Active Projects</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3 className="stat-number">96</h3>
                <p className="stat-desc">Collaborations</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="stat-number">5,800+</h3>
                <p className="stat-desc">Researchers</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Highlight Section */}
        <section className="highlight-section">
          <div className="edu-container">
            <h2 className="section-title">University Highlights</h2>
            <div className="highlights-wrapper">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Academic Excellence</h3>
                <p>Our university ranks in the top 5% of educational institutions worldwide.</p>
                <Link to="/" className="highlight-link">Learn More</Link>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Research Innovation</h3>
                <p>Leading breakthrough research across multiple disciplines and domains.</p>
                <Link to="/innovhome" className="highlight-link">Explore Research</Link>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Global Impact</h3>
                <p>Creating solutions to address global challenges through collaboration.</p>
                <Link to="/collab" className="highlight-link">View Partnerships</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="edu-footer">
          <div className="edu-container">
            <div className="footer-content">
              <div className="footer-branding">
                <div className="school-logo">
                  <i className="fas fa-university"></i>
                </div>
                <h2>Campus Connect</h2>
              </div>
              
              <div className="footer-links">
                <div className="footer-column">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link to="/innovhome">Research</Link></li>
                    <li><Link to="/startup">Innovation</Link></li>
                    <li><Link to="/collab">Partnerships</Link></li>
                    <li><Link to="/awardpage">Excellence</Link></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h3>Resources</h3>
                  <ul>
                    <li><a href="#">Library</a></li>
                    <li><a href="#">Academic Calendar</a></li>
                    <li><a href="#">Student Services</a></li>
                    <li><a href="#">Campus Map</a></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h3>Connect</h3>
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                    <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; 2024 Campus Connect University | All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* CSS for the homepage */}
      <style jsx>{`
        /* Import Font Awesome for icons */
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .edu-homepage {
          font-family: var(--edu-font-primary);
          color: var(--edu-neutral-800);
          background-color: var(--edu-neutral-200);
        }
        
        /* Header Styling */
        .edu-navbar {
          background: linear-gradient(to right, var(--edu-primary-dark), var(--edu-primary));
          padding: 0.75rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .school-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .school-logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--edu-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .branding {
          display: flex;
          flex-direction: column;
        }
        
        .university-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: white;
          letter-spacing: 1px;
        }
        
        .university-tagline {
          font-size: 0.75rem;
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .main-navigation {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: background-color 0.3s ease;
          font-size: 0.85rem;
          text-align: center;
        }
        
        .nav-item i {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        
        .nav-item:hover, .dropdown:hover .dropdown-toggle {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .dropdown {
          position: relative;
        }
        
        .dropdown-toggle {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: background-color 0.3s ease;
          font-size: 0.85rem;
          cursor: pointer;
        }
        
        .dropdown-toggle i {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: white;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
          min-width: 150px;
          z-index: 1000;
          display: none;
        }
        
        .dropdown:hover .dropdown-menu {
          display: block;
        }
        
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          color: var(--edu-neutral-700);
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        
        .dropdown-item:hover {
          background-color: var(--edu-neutral-200);
          color: var(--edu-primary);
        }
        
        .search-form {
          margin-left: 0.5rem;
        }
        
        .search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-input {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 50px;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 0.85rem;
          width: 150px;
          transition: width 0.3s ease, background-color 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          width: 180px;
          background-color: rgba(255, 255, 255, 0.3);
        }
        
        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .search-button {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 0.85rem;
        }
        
        /* Hero Section */
        .hero-section {
          padding: 3rem 0;
          background-color: var(--edu-neutral-100);
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
        }
        
        .hero-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
          z-index: 1;
        }
        
        .hero-img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .hero-image:hover .hero-img {
          transform: scale(1.05);
        }
        
        .featured-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: var(--edu-accent);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .hero-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--edu-primary);
          line-height: 1.2;
          margin: 0;
        }
        
        .hero-text p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--edu-neutral-700);
          margin: 0;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        
        /* Stats Section */
        .stats-section {
          padding: 4rem 0;
          background-color: var(--edu-primary);
          color: white;
        }
        
        .stats-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.15);
        }
        
        .stat-icon {
          font-size: 2rem;
          color: var(--edu-accent-light);
          margin-bottom: 0.5rem;
        }
        
        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0;
          color: white;
        }
        
        .stat-desc {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.9;
        }
        
        /* Highlight Section */
        .highlight-section {
          padding: 4rem 0;
          background-color: var(--edu-neutral-100);
        }
        
        .section-title {
          text-align: center;
          font-size: 2rem;
          color: var(--edu-primary);
          margin-bottom: 2.5rem;
          position: relative;
          padding-bottom: 1rem;
        }
        
        .section-title:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(to right, var(--edu-primary), var(--edu-secondary));
          border-radius: 3px;
        }
        
        .highlights-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .highlight-card {
          background-color: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .highlight-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--edu-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .highlight-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--edu-primary);
          margin: 0;
        }
        
        .highlight-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--edu-neutral-600);
          margin: 0;
          flex-grow: 1;
        }
        
        .highlight-link {
          color: var(--edu-primary);
          text-decoration: none;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .highlight-link:hover {
          color: var(--edu-primary-light);
        }
        
        .highlight-link:after {
          content: '→';
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }
        
        .highlight-link:hover:after {
          transform: translateX(4px);
        }
        
        /* Footer */
        .edu-footer {
          background-color: var(--edu-neutral-800);
          color: white;
          padding: 4rem 0 1rem;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .footer-branding {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .footer-branding h2 {
          font-size: 1.5rem;
          margin: 0;
        }
        
        .footer-links {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
        }
        
        .footer-column h3 {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: var(--edu-accent);
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-column h3:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: var(--edu-accent);
          border-radius: 2px;
        }
        
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-column li {
          margin-bottom: 0.75rem;
        }
        
        .footer-column a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-column a:hover {
          color: white;
        }
        
        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-bottom p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }
        
        .footer-bottom-links a:hover {
          color: white;
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
          }
          
          .stats-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .highlights-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .navbar-wrapper {
            flex-direction: column;
            gap: 1rem;
          }
          
          .main-navigation {
            width: 100%;
            justify-content: center;
          }
          
          .hero-img {
            height: 350px;
          }
          
          .highlights-wrapper {
            grid-template-columns: 1fr;
          }
          
          .footer-branding {
            margin-bottom: 2rem;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 2rem;
          }
          
          .footer-links {
            gap: 2rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .stats-wrapper {
            grid-template-columns: 1fr;
          }
          
          .hero-text h2 {
            font-size: 2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
