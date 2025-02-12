import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const FadeInComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 20 },
  });

  const expandAnimation = useSpring({
    height: isExpanded ? '300px' : '100px',
    padding: '20px',
    background: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: isHovered 
      ? '0 8px 16px rgba(0,0,0,0.2)' 
      : '0 2px 5px rgba(0,0,0,0.1)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={fadeIn}>
      <animated.div 
        style={expandAnimation} 
        className="financial-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2>Welcome to FinanceForAll</h2>
        <p>Your journey to financial freedom starts here</p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="action-button"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>

        {isExpanded && (
          <div className="expanded-content">
            <h3>Our Services:</h3>
            <ul>
              <li>Basic Banking</li>
              <li>Financial Education</li>
              <li>Savings Goals</li>
              <li>Budget Planning</li>
            </ul>
            <p>Start your financial journey today!</p>
          </div>
        )}
      </animated.div>
    </animated.div>
  );
};

export default FadeInComponent;
