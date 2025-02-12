import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedCard = ({ children, delay = 0 }) => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay,
    config: { tension: 280, friction: 20 },
  });

  return (
    <animated.div 
      style={animation}
      className="animated-card"
    >
      {children}
    </animated.div>
  );
};

export default AnimatedCard; 