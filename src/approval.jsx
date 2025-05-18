import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './assets/theme.css'; // Import educational theme

export default function FacultyDashboard() {
  const [achievements, setAchievements] = useState([]);
  const [activeTab, setActiveTab] = useState('pending');

  // Load achievements from mongodb
  useEffect(() => {
  fetchAchievements(); // Load both approved and pending on first render
}, []);

//Load on intial render
const fetchAchievements = async () => {
  try {
    const response = await fetch('http://localhost:5000/certificates');
    const data = await response.json();
    setAchievements(data); // Now contains both approved & pending
  } catch (error) {
    console.error("Error fetching achievements:", error);
  }
};

  // Approve an achievement by changing its status to 'approved'
 const approveAchievement = async (mongoId) => {
  try {
    const response = await fetch(`http://localhost:5000/certificates/${mongoId}/approve`, {
      method: 'PATCH',
    });
    if (!response.ok) throw new Error('Approval failed');
    await fetchAchievements(); // Refresh the list automatically
  } catch (error) {
    console.error('Error approving achievement:', error);
  }
};

const rejectAchievement = async (mongoId) => {
  try {
    const response = await fetch(`http://localhost:5000/certificates/${mongoId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Rejection failed');
    await fetchAchievements(); // Refresh the list automatically
  } catch (error) {
    console.error('Error rejecting achievement:', error);
  }
};


  const pendingCount = achievements.filter(a => a.status === 'pending').length;
  const approvedCount = achievements.filter(a => a.status === 'approved').length;

  return (
    <div style={{ 
      background: 'var(--edu-neutral-200)', 
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      {/* Header section */}
      <div className="container mb-5">
        <h1 style={{ 
          color: 'var(--edu-primary)',
          fontWeight: '600',
          borderBottom: '2px solid var(--edu-primary)',
          paddingBottom: '0.5rem',
          marginBottom: '1rem'
        }}>Faculty Approval Dashboard</h1>
        <p className="lead" style={{ color: 'var(--edu-neutral-700)' }}>
          Review and validate student achievement submissions
        </p>
      </div>

      <div className="container">
        {/* Summary cards */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card shadow-sm" style={{ 
              borderRadius: '10px', 
              border: 'none'
            }}>
              <div className="card-body d-flex align-items-center">
                <div style={{ 
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(124, 58, 237, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <i className="bi bi-hourglass-split" style={{ color: 'var(--edu-secondary)', fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  <h5 className="mb-0" style={{ color: 'var(--edu-neutral-800)' }}>Pending Approvals</h5>
                  <h2 style={{ color: 'var(--edu-secondary)', fontWeight: '600' }}>{pendingCount}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card shadow-sm" style={{ 
              borderRadius: '10px', 
              border: 'none'
            }}>
              <div className="card-body d-flex align-items-center">
                <div style={{ 
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(5, 150, 105, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <i className="bi bi-check-circle" style={{ color: 'var(--edu-success)', fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  <h5 className="mb-0" style={{ color: 'var(--edu-neutral-800)' }}>Approved Achievements</h5>
                  <h2 style={{ color: 'var(--edu-success)', fontWeight: '600' }}>{approvedCount}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <a 
              className={`nav-link ${activeTab === 'pending' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('pending');
              }}
              style={{ 
                color: activeTab === 'pending' ? 'var(--edu-primary)' : 'var(--edu-neutral-600)',
                fontWeight: activeTab === 'pending' ? '600' : '400',
                borderColor: activeTab === 'pending' ? 'var(--edu-primary)' : 'transparent'
              }}
            >
              Pending ({pendingCount})
            </a>
          </li>
          <li className="nav-item">
            <a 
              className={`nav-link ${activeTab === 'approved' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('approved');
              }}
              style={{ 
                color: activeTab === 'approved' ? 'var(--edu-success)' : 'var(--edu-neutral-600)',
                fontWeight: activeTab === 'approved' ? '600' : '400',
                borderColor: activeTab === 'approved' ? 'var(--edu-success)' : 'transparent'
              }}
            >
              Approved ({approvedCount})
            </a>
          </li>
        </ul>

        {/* Display relevant achievements based on active tab */}
      <div className="row">
          {activeTab === 'pending' ? (
            achievements.filter(a => a.status === 'pending').length > 0 ? (
          achievements.filter(a => a.status === 'pending').map((a) => (
                <div className="col-md-4 mb-4" key={a._id}>
                  <div className="card shadow-sm" style={{ 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    border: 'none',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src={a.image} 
                      className="card-img-top" 
                      alt="achievement" 
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    
                <div className="card-body">
                      <span className="badge mb-2" style={{ 
                        background: 'var(--edu-primary-light)',
                        color: 'white',
                        fontWeight: '500',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px'
                      }}>
                        {a.category || 'Achievement'}
                      </span>
                      
                      <h5 className="card-title" style={{ fontWeight: '600' }}>
                        {a.achievement}
                      </h5>
                      
                      <div className="d-flex mt-3">
                        <button 
                          className="btn btn-success me-2 flex-fill" 
                          onClick={() => approveAchievement(a._id)}
                          style={{
                            background: 'var(--edu-success)',
                            border: 'none',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <i className="bi bi-check me-1"></i> Approve
                  </button>
                        <button 
                          className="btn btn-danger flex-fill" 
                          onClick={() => rejectAchievement(a._id)}
                          style={{
                            background: 'var(--edu-error)',
                            border: 'none',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <i className="bi bi-x me-1"></i> Reject
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div style={{ 
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'var(--edu-neutral-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <i className="bi bi-inbox" style={{ fontSize: '2rem', color: 'var(--edu-neutral-600)' }}></i>
                </div>
                <h4 style={{ color: 'var(--edu-neutral-700)' }}>No pending achievements</h4>
                <p className="text-muted">All student submissions have been processed</p>
              </div>
            )
          ) : (
            achievements.filter(a => a.status === 'approved').length > 0 ? (
              achievements.filter(a => a.status === 'approved').map((a) => (
                <div className="col-md-4 mb-4" key={a._id}>
                  <div className="card shadow-sm" style={{ 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    border: 'none'
                  }}>
                    <div className="position-relative">
                      <img 
                        src={a.image} 
                        className="card-img-top" 
                        alt="achievement" 
                        style={{ height: '180px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge" style={{ 
                          background: 'var(--edu-success)',
                          color: 'white',
                          fontWeight: '500',
                          borderRadius: '20px',
                          padding: '0.35rem 0.75rem',
                        }}>
                          <i className="bi bi-check-circle me-1"></i> Approved
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <span className="badge mb-2" style={{ 
                        background: 'var(--edu-primary-light)',
                        color: 'white',
                        fontWeight: '500',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px'
                      }}>
                        {a.category || 'Achievement'}
                      </span>
                      
                      <h5 className="card-title" style={{ fontWeight: '600' }}>
                        {a.achievement}
                      </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
              <div className="col-12 text-center py-5">
                <div style={{ 
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'var(--edu-neutral-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <i className="bi bi-trophy" style={{ fontSize: '2rem', color: 'var(--edu-neutral-600)' }}></i>
                </div>
                <h4 style={{ color: 'var(--edu-neutral-700)' }}>No approved achievements</h4>
                <p className="text-muted">Start by approving pending submissions</p>
              </div>
            )
          )}
        </div>
      </div>
      
      {/* Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </div>
  );
}
