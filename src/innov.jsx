// pages/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS directly
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ProfilePage() {
  useEffect(() => {
    // Initialize any Bootstrap components that need JavaScript here if needed
    // No need to use require - we imported Bootstrap JS above
  }, []);

  // Data for the chart
  const chartData = {
    labels: ['1983', '1990', '2000', '2010', '2020', '2024'],
    datasets: [
      {
        label: 'Publications per year',
        data: [2, 5, 8, 13, 21, 35],
        backgroundColor: '#4e73df',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Publications',
        },
      },
    },
  };

  return (
    <>
      <div className="meta-tags">
        <title>Profile Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </div>

      {/* Global styles for the page */}
      <style>
        {`
        .profile-pic {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border: 2px solid #e63946;
        }

        .vidwan-score {
          background-color: #28a745;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
        }

        .card-header {
          background-color: #004f99;
          color: white;
          text-align: center;
        }

        .card-body h5 {
          font-weight: bold;
        }

        .pub-chart {
          height: 300px;
          background-color: #f8f9fa;
        }

        .side-panel {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
        }

        .similar-expert img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .similar-expert {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .edit-profile-btn {
          background-color: #004f99;
          color: white;
          font-weight: bold;
          padding: 8px 12px;
          border-radius: 5px;
          text-align: center;
          display: inline-block;
          width: 100%;
        }

        .profile-menu {
          background-color: #f8f9fa;
          padding: 10px;
          margin-top: 20px;
        }

        .profile-menu .list-group-item {
          display: flex;
          align-items: center;
          font-weight: bold;
          padding: 12px 10px;
        }

        .profile-menu .list-group-item i {
          margin-right: 10px;
          color: #004f99;
        }
        `}
      </style>

      <div className="container mt-4">
        <div className="row">
          {/* Left section: Profile details and publications */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <span>Vidwan-ID: 136</span>
              </div>
              <div className="row no-gutters">
                <div className="col-md-3 text-center p-3">
                  <img
                    src="pro.jpg"
                    alt="Profile"
                    className="profile-pic rounded-circle"
                  />
                  {/* Add the profile menu under the photo */}
                  <div className="profile-menu mt-3">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="bi bi-person-fill"></i> Profile
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-info-circle-fill"></i> Personal Information
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-lightbulb-fill"></i> Expertise Information
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-briefcase-fill"></i> Experience
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-mortarboard-fill"></i> Education Qualification
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-file-earmark-text-fill"></i> Publications
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5>Prof Bijnan Bandyopadhyay</h5>
                    <p>Visiting Professor</p>
                    <p>Indian Institute of Technology Jodhpur</p>
                    <div className="vidwan-score">Vidwan Score: 7.8</div>

                    {/* Add the chart directly below the vidwan score */}
                    <div className="pub-chart mt-4">
                      <h6>Publications 1983 - 2024</h6>
                      <Bar data={chartData} options={chartOptions} />
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-4 text-center">
                        <h5>138</h5>
                        <p>Journal Articles</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <h5>29</h5>
                        <p>Books</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <h5>178</h5>
                        <p>Conference Proceedings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right section: Similar experts */}
          <div className="col-md-4">
            <div className="side-panel">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Similar Experts (429)</h5>
                <a href="#" className="btn btn-link">View More</a>
              </div>
              <div className="similar-expert">
                <img src="/cologo.jpg" alt="Expert 1" />
                <p>Subhasish Dey</p>
              </div>
              <div className="similar-expert">
                <img src="/cologo.jpg" alt="Expert 2" />
                <p>D.V.T.G. Pavan Kumar</p>
              </div>
              <div className="similar-expert">
                <img src="/cologo.jpg" alt="Expert 3" />
                <p>Samir Kumar Neogy</p>
              </div>
              <div className="similar-expert">
                <img src="/cologo.jpg" alt="Expert 4" />
                <p>Nabanita Das</p>
              </div>
              <div className="similar-expert">
                <img src="/cologo.jpg" alt="Expert 5" />
                <p>Amitava Datta</p>
              </div>
            </div>

            <a href="#" className="edit-profile-btn mt-3">Edit Profile</a>
          </div>
        </div>
      </div>
    </>
  );
}
