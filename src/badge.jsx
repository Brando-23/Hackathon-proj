import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS directly
import './assets/theme.css'; // Import educational theme

export default function Home() {
  const [image, setImage] = useState(null);
  const [achievement, setAchievement] = useState('');
  const [category, setCategory] = useState('Academic');
  const [achievements, setAchievements] = useState([]);
  const [profileBadge, setProfileBadge] = useState(''); // State to store current profile badge
  const [showCelebration, setShowCelebration] = useState(false); // State for showing badge celebration
  const [prevBadge, setPrevBadge] = useState(''); // Store previous badge for comparison

  // Achievement categories
  const categories = [
    'Academic', 
    'Research', 
    'Sports', 
    'Extracurricular', 
    'Competition', 
    'Internship', 
    'Community Service'
  ];

  // Load achievements from localStorage on initial render
  useEffect(() => {
    const savedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];
    setAchievements(savedAchievements);
    const initialBadge = assignProfileBadge(savedAchievements);
    setProfileBadge(initialBadge);
    setPrevBadge(initialBadge); // Initialize prevBadge
  }, []);

  // Save achievements to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
    const updatedBadge = assignProfileBadge(achievements);

    // Trigger celebration if the badge has changed
    if (updatedBadge !== prevBadge) {
      setProfileBadge(updatedBadge);
      setPrevBadge(updatedBadge);
      triggerBadgeCelebration();
    }
  }, [achievements]);

  // Badge Assignment Function based on total number of approved achievements
  const assignProfileBadge = (currentAchievements) => {
    const approvedAchievements = currentAchievements.filter(a => a.status === 'approved');
    if (approvedAchievements.length >= 15) {
      return '🥇 Gold Badge';
    } else if (approvedAchievements.length >= 10) {
      return '🥈 Silver Badge';
    } else if (approvedAchievements.length >= 5) {
      return '🥉 Bronze Badge';
    }
    return 'Aspiring Scholar';
  };

  // Get badge icon and color based on badge name
  const getBadgeDetails = (badgeName) => {
    switch (badgeName) {
      case 'Gold Scholar':
        return { icon: '🏆', color: 'var(--edu-accent)', bgColor: 'rgba(245, 158, 11, 0.1)' };
      case 'Silver Innovator':
        return { icon: '🥈', color: 'var(--edu-secondary)', bgColor: 'rgba(124, 58, 237, 0.1)' };
      case 'Bronze Achiever':
        return { icon: '🥉', color: '#b87333', bgColor: 'rgba(184, 115, 51, 0.1)' };
      default:
        return { icon: '🌱', color: 'var(--edu-success)', bgColor: 'rgba(5, 150, 105, 0.1)' };
    }
  };

  // Convert image file to base64 string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select an image to upload');
      return;
    }

    try {
      // Convert image to base64 and add the new achievement to the list with pending status
      const base64Image = await convertToBase64(image);
      const newAchievement = {
        id: achievements.length + 1,
        achievement,
        category,
        image: base64Image,
        status: 'pending', // Set initial status as 'pending'
        date: new Date().toISOString()
      };

      const updatedAchievements = [...achievements, newAchievement];
      setAchievements(updatedAchievements);
      setAchievement('');
      setCategory('Academic');
      setImage(null);

      // Reset file input
      document.getElementById('achievement-image').value = '';
    } catch (error) {
      console.error('Error handling image:', error);
      alert('There was an error processing your image. Please try again.');
    }
  };

  // Trigger badge celebration and hide after 3 seconds
  const triggerBadgeCelebration = () => {
    setShowCelebration(true); // Show celebration message
    setTimeout(() => {
      setShowCelebration(false); // Hide celebration message after 3 seconds
    }, 3000);
  };

  // Delete an achievement
  const deleteAchievement = (id) => {
    const updatedAchievements = achievements.filter((a) => a.id !== id);
    setAchievements(updatedAchievements);
  };

  // Get color based on category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic':
        return 'var(--edu-primary)';
      case 'Research':
        return 'var(--edu-secondary)';
      case 'Sports':
        return '#e11d48';
      case 'Extracurricular':
        return '#059669';
      case 'Competition':
        return '#ea580c';
      case 'Internship':
        return '#0891b2';
      case 'Community Service':
        return '#8b5cf6';
      default:
        return 'var(--edu-primary)';
    }
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const badgeDetails = getBadgeDetails(profileBadge);

  return (
    <div style={{ background: 'var(--edu-neutral-200)', minHeight: '100vh', paddingBottom: '2rem' }}>
      {/* Header with gradient background */}
      <div style={{ 
        background: 'linear-gradient(135deg, var(--edu-primary), var(--edu-secondary))',
        padding: '2rem 0',
        marginBottom: '2rem',
        color: 'white',
        borderRadius: '0 0 20px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1 className="mb-1">Achievement Showcase</h1>
              <p className="mb-0 lead">Document and share your academic journey</p>
            </div>
            <div className="d-none d-md-flex align-items-center">
              <div style={{ 
                background: badgeDetails.bgColor, 
                color: badgeDetails.color,
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{badgeDetails.icon}</span>
                {profileBadge}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Badge Celebration Section - with animation */}
        {showCelebration && (
          <div className="alert shadow-sm" role="alert" style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.2))',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: 'var(--edu-primary)',
            borderRadius: '10px',
            padding: '1rem',
            animation: 'fadeInUp 0.5s ease-out',
            marginBottom: '1.5rem'
          }}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="celebration-icon me-3" style={{ fontSize: '2rem', animation: 'pulse 1s infinite' }}>
                🎉
              </div>
              <div>
                <h4 className="mb-0">Congratulations! You've earned a new badge</h4>
                <p className="mb-0" style={{ fontWeight: '600' }}>
                  <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>{badgeDetails.icon}</span>
                  {profileBadge}
                </p>
              </div>
              <div className="celebration-icon ms-3" style={{ fontSize: '2rem', animation: 'pulse 1s infinite' }}>
                🎉
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {/* Left Column - Achievement Form */}
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-header py-3" style={{ background: 'linear-gradient(to right, var(--edu-primary), var(--edu-primary-light))', color: 'white', border: 'none' }}>
                <h5 className="mb-0">
                  <i className="bi bi-trophy me-2"></i>
                  Submit Achievement
                </h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Achievement Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={achievement}
                      onChange={(e) => setAchievement(e.target.value)}
                      placeholder="E.g., First Prize in Science Exhibition"
                      required
                      style={{ borderColor: '#e2e8f0', padding: '0.75rem', borderRadius: '8px' }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold">Category</label>
                    <select 
                      className="form-select" 
                      value={category} 
                      onChange={(e) => setCategory(e.target.value)}
                      style={{ borderColor: '#e2e8f0', padding: '0.75rem', borderRadius: '8px' }}
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">Upload Certificate/Image</label>
                    <input
                      id="achievement-image"
                      type="file"
                      className="form-control"
                      onChange={(e) => setImage(e.target.files[0])}
                      accept="image/*"
                      required
                      style={{ borderColor: '#e2e8f0', padding: '0.75rem', borderRadius: '8px' }}
                    />
                    <div className="form-text">
                      Upload an image or certificate as proof of your achievement.
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn w-100 py-2"
                    style={{ 
                      background: 'var(--edu-primary)', 
                      color: 'white',
                      borderRadius: '8px',
                      fontWeight: '500',
                      boxShadow: '0 2px 6px rgba(30, 58, 138, 0.2)'
                    }}
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Submit Achievement
                  </button>
                </form>
              </div>
            </div>

            {/* Badge Progress Card */}
            <div className="card border-0 shadow-sm mt-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-header py-3" style={{ background: 'linear-gradient(to right, var(--edu-secondary), var(--edu-secondary-light))', color: 'white', border: 'none' }}>
                <h5 className="mb-0">
                  <i className="bi bi-award me-2"></i>
                  Your Badge Progress
                </h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div style={{ 
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: badgeDetails.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    marginRight: '1rem'
                  }}>
                    {badgeDetails.icon}
                  </div>
                  <div>
                    <h6 className="mb-0" style={{ color: badgeDetails.color, fontWeight: '600' }}>{profileBadge}</h6>
                    <p className="mb-0 text-muted">{achievements.filter(a => a.status === 'approved').length} Verified Achievements</p>
                  </div>
                </div>

                <div className="badge-progress">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Progress to Next Badge</span>
                    <span>
                      {profileBadge === 'Aspiring Scholar' ? '5' : 
                       profileBadge === 'Bronze Achiever' ? '10' :
                       profileBadge === 'Silver Innovator' ? '15' : '✓'}
                    </span>
                  </div>
                  <div className="progress" style={{ height: '10px', borderRadius: '5px' }}>
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ 
                        width: `${profileBadge === 'Gold Scholar' ? '100' : 
                                (achievements.filter(a => a.status === 'approved').length % 5) * 20}%`,
                        background: badgeDetails.color,
                        borderRadius: '5px'
                      }} 
                      aria-valuenow={profileBadge === 'Gold Scholar' ? 100 : (achievements.filter(a => a.status === 'approved').length % 5) * 20} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="badge-levels mt-4">
                  <div className="d-flex align-items-center mb-2" style={{ opacity: profileBadge === 'Aspiring Scholar' ? '1' : '0.5' }}>
                    <div style={{ 
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(5, 150, 105, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      marginRight: '0.75rem'
                    }}>
                      🌱
                    </div>
                    <span>Aspiring Scholar (0-4 achievements)</span>
                  </div>
                  <div className="d-flex align-items-center mb-2" style={{ opacity: profileBadge === 'Bronze Achiever' ? '1' : '0.5' }}>
                    <div style={{ 
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(184, 115, 51, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      marginRight: '0.75rem'
                    }}>
                      🥉
                    </div>
                    <span>Bronze Achiever (5-9 achievements)</span>
                  </div>
                  <div className="d-flex align-items-center mb-2" style={{ opacity: profileBadge === 'Silver Innovator' ? '1' : '0.5' }}>
                    <div style={{ 
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(124, 58, 237, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      marginRight: '0.75rem'
                    }}>
                      🥈
                    </div>
                    <span>Silver Innovator (10-14 achievements)</span>
                  </div>
                  <div className="d-flex align-items-center" style={{ opacity: profileBadge === 'Gold Scholar' ? '1' : '0.5' }}>
                    <div style={{ 
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(245, 158, 11, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      marginRight: '0.75rem'
                    }}>
                      🏆
                    </div>
                    <span>Gold Scholar (15+ achievements)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Achievement Gallery */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-header py-3" style={{ background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <i className="bi bi-collection me-2"></i>
                    Your Achievement Gallery
                  </h5>
                  <span className="badge" style={{ 
                    background: 'var(--edu-primary-light)', 
                    color: 'white',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '50px',
                    fontWeight: '500'
                  }}>
                    {achievements.filter(a => a.status === 'approved').length} Achievements
                  </span>
                </div>
              </div>
              <div className="card-body">
                {achievements.filter(a => a.status === 'approved').length === 0 ? (
                  <div className="text-center py-5">
                    <div style={{ 
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'var(--edu-neutral-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      margin: '0 auto 1rem'
                    }}>
                      <i className="bi bi-journal-text" style={{ color: 'var(--edu-neutral-500)' }}></i>
                    </div>
                    <h5>No Achievements Yet</h5>
                    <p className="text-muted">Submit your achievements to get started on your journey.</p>
                  </div>
                ) : (
                  <div className="row">
                    {achievements.filter(a => a.status === 'approved').map((a) => (
                      <div className="col-md-6 mb-3" key={a.id}>
                        <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                          <div className="position-relative">
                            <img src={a.image} className="card-img-top" alt="achievement" style={{ height: '180px', objectFit: 'cover' }} />
                            <div className="position-absolute top-0 end-0 m-2">
                              <span className="badge" style={{ 
                                background: 'white',
                                color: getCategoryColor(a.category),
                                padding: '0.4rem 0.75rem',
                                borderRadius: '50px',
                                fontWeight: '500'
                              }}>
                                {a.category}
                              </span>
                            </div>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title mb-2" style={{ color: 'var(--edu-neutral-800)' }}>{a.achievement}</h5>
                            <p className="text-muted mb-3">
                              <i className="bi bi-calendar3 me-1"></i>
                              {formatDate(a.date)}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge me-2" style={{ 
                                  background: 'var(--edu-primary-light)',
                                  color: 'white',
                                  padding: '0.4rem 0.75rem',
                                  borderRadius: '50px'
                                }}>
                                  <i className="bi bi-check-circle me-1"></i>
                                  Verified
                                </span>
                              </div>
                              <button 
                                className="btn btn-sm btn-outline-danger" 
                                onClick={() => deleteAchievement(a.id)}
                                style={{ borderRadius: '50px' }}
                              >
                                <i className="bi bi-trash3"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pending Achievements Section */}
                {achievements.filter(a => a.status === 'pending').length > 0 && (
                  <div className="mt-4">
                    <h6 className="border-bottom pb-2 mb-3" style={{ color: 'var(--edu-neutral-600)' }}>
                      <i className="bi bi-hourglass-split me-2"></i>
                      Pending Verification ({achievements.filter(a => a.status === 'pending').length})
                    </h6>
                    <div className="row">
                      {achievements.filter(a => a.status === 'pending').map((a) => (
                        <div className="col-md-6 mb-3" key={a.id}>
                          <div className="card h-100 border-0" style={{ 
                            borderRadius: '10px', 
                            overflow: 'hidden',
                            background: 'rgba(0, 0, 0, 0.02)',
                            opacity: '0.8'
                          }}>
                            <div className="position-relative">
                              <img src={a.image} className="card-img-top" alt="achievement" style={{ height: '180px', objectFit: 'cover', filter: 'grayscale(0.7)' }} />
                              <div className="position-absolute top-0 end-0 m-2">
                                <span className="badge" style={{ 
                                  background: 'white',
                                  color: getCategoryColor(a.category),
                                  padding: '0.4rem 0.75rem',
                                  borderRadius: '50px',
                                  fontWeight: '500'
                                }}>
                                  {a.category}
                                </span>
                              </div>
                              <div className="position-absolute" style={{
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '50px',
                                fontWeight: '500'
                              }}>
                                <i className="bi bi-hourglass-split me-2"></i>
                                Pending Verification
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title mb-2" style={{ color: 'var(--edu-neutral-800)' }}>{a.achievement}</h5>
                              <p className="text-muted mb-3">
                                <i className="bi bi-calendar3 me-1"></i>
                                {formatDate(a.date)}
                              </p>
                              <div className="d-flex justify-content-end">
                                <button 
                                  className="btn btn-sm btn-outline-danger" 
                                  onClick={() => deleteAchievement(a.id)}
                                  style={{ borderRadius: '50px' }}
                                >
                                  <i className="bi bi-trash3"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      
      {/* Add Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
