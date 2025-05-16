import { useState, useEffect } from 'react';

export default function AwardsPage() {
  const [achievements, setAchievements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index for the carousel

  // Load approved achievements from localStorage on initial render
  useEffect(() => {
    const savedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];
    const approvedAchievements = savedAchievements.filter((a) => a.status === 'approved');
    setAchievements(approvedAchievements);
  }, []);

  // Automatically slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      slide(1); // Move to the next item
    }, 1000); // Change to 1000 milliseconds for 1 second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex, achievements.length]); // Add achievements.length as a dependency

  // Function to handle sliding
  const slide = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = achievements.length - 1; // Wrap to the last item
      } else if (newIndex >= achievements.length) {
        newIndex = 0; // Wrap to the first item
      }
      return newIndex;
    });
  };

  // Carousel Styles
  const carouselStyle = {
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const carouselItemStyle = {
    display: 'none', // Hide items by default
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const activeItemStyle = {
    display: 'block', // Show the active item
    opacity: 1,
  };

  const carouselImageStyle = {
    width: '100%',
    height: 'auto',
  };

  const carouselCaptionStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
  };

  const carouselControlStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 10,
  };

  const prevControlStyle = {
    ...carouselControlStyle,
    left: '10px',
  };

  const nextControlStyle = {
    ...carouselControlStyle,
    right: '10px',
  };

  return (
    <div style={carouselStyle}>
      <h1 className="mb-4 text-center">Awards & Achievements</h1>
      
      {/* Carousel Section */}
      {achievements.length > 0 ? (
        <div>
          
          {achievements.map((a, index) => (
            <div
              key={a.id}
              style={index === currentIndex ? activeItemStyle : carouselItemStyle}
            >
              <img src={a.image} style={carouselImageStyle} alt="achievement" />
              <div style={carouselCaptionStyle}>
                {/* <h5>{a.achievement}</h5> */}
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            style={prevControlStyle}
            onClick={() => slide(-1)}
          >
            &#10094;
          </button>
          <button
            style={nextControlStyle}
            onClick={() => slide(1)}
          >
            &#10095;
          </button>
        </div>

      ) : (
        <p className="text-center">No achievements to display at the moment.</p>
      )}
    </div>
  );
}
