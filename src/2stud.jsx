import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { useEffect, useRef } from 'react'; 
import { useLocation, Link } from 'react-router-dom'; 
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const location = useLocation(); 
  const username = location.state?.username || "Student"; 

  useEffect(() => {}, []); 

  const data = {
    labels: ['Competitions', 'Prize', 'Certificates'],
    datasets: [
      {
        label: 'Count',
        data: [12, 10, 8],
        backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 5 } },
    },
  };

  useEffect(()=>{

  },[])

  const profileRef = useRef(null);
  const qualificationRef = useRef(null);
  const personalInfoRef = useRef(null);
  const honoursRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ backgroundColor: '#F3F6F9', fontFamily: 'Roboto, sans-serif' }}>
      <header className="bg-primary text-white py-3">
        <div className="container-fluid">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/cologo.jpg" alt="University Logo" width="60" className="img-fluid" />
              <div className="ms-3">
                <h1 className="mb-0">UNIVERSITY NAME</h1>
                <p className="lead mb-0">Tagline or motto here</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3 mt-md-0">
              <input type="text" placeholder="Search" className="form-control me-2" style={{ width: '200px' }} />
            </div>
          </div>
          <nav className="nav mt-3">
            <Link to="/innovhome" className="nav-link text-white">Research & Publications</Link>
            <Link to="/startup" className="nav-link text-white">Startup and Innovation</Link>
            <Link to="/collab" className="nav-link text-white">Collaboration & Partnership</Link>
            <Link to="/awardpage" className="nav-link text-white">Excellence & Awards</Link>
          </nav>
        </div>
      </header>

      <div className="text-center mt-4">
        <h2>Welcome, {username}!</h2>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <div className="list-group shadow-sm">
              <a href="#" className="list-group-item list-group-item-action" onClick={() => scrollToSection(profileRef)}>Profile</a>
              <a href="#" className="list-group-item list-group-item-action" onClick={() => scrollToSection(qualificationRef)}>Qualification</a>
              <a href="#" className="list-group-item list-group-item-action" onClick={() => scrollToSection(personalInfoRef)}>Personal Information</a>
              <a href="#" className="list-group-item list-group-item-action" onClick={() => scrollToSection(honoursRef)}>Certification</a>
              <Link to="/badge" className="list-group-item list-group-item-action">Make Submissions</Link>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="card shadow-lg border-light">
              <div className="card-header bg-light">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Student ID: PSNA100</h5>
                  <span className="badge bg-success p-2">CGPA: 8.0</span>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between" ref={profileRef}>
                  <div>
                    <h5>{username || "Your Name Here"}</h5>
                    <p className="text-muted mb-0">III-Student</p>
                    <p className="text-muted">PSNA College of Engg & Tech</p>
                  </div>
                </div>

                <div className="text-center" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                  <Bar data={data} options={options} width={500} height={450} />
                </div>

                <hr />

                <h5 ref={qualificationRef}>Qualification:</h5>
                <ul className="list-unstyled">
                  <li><strong>BE in Electrical Engineering</strong> - XYZ University</li>
                </ul>

                <hr />

                <h5 ref={personalInfoRef}>Personal Information:</h5>
                <p><strong>Date of Birth:</strong> January 1, 1970</p>
                <p><strong>Email:</strong> dr.rajendra@example.com</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
                <p><strong>Address:</strong> 123, University Road, City, Country</p>

                <hr />

                <h5 ref={honoursRef}>Certification:</h5>
                <ul>
                  <li>FullStack web development</li>
                  <li>Operating System using C</li>
                  <li>Database Management System</li>
                  <li>Computer Network using Java</li>
                </ul>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-4">
        <p className="mb-0">&copy; 2024 PSNA College of Engineering & Technology</p>
      </footer>
    </div>
  );
}
