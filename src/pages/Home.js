import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import { useSpring, animated } from '@react-spring/web';

function Home() {
  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 280, friction: 20 },
  });

  const cards = [
    { title: "Digital Wallet", desc: "Manage your money securely." },
    { title: "UPI/QR Payments", desc: "Make seamless transactions." },
    { title: "Microloans & Credit Scoring", desc: "Access credit easily." },
    { title: "Financial Literacy", desc: "Learn and grow your financial knowledge." },
    { title: "Bill Payments & Remittances", desc: "Pay bills and send remittances effortlessly." },
    { title: "Offline Access", desc: "Access services even without an internet connection." }
  ];

  return (
    <div className="home-page">
      <animated.section style={heroAnimation} className="hero">
        <h2>Welcome to Financial In stability</h2>
        <p>Your gateway to financial inclusion and empowerment!</p>
      </animated.section>
      <section className="content">
        {cards.map((card, index) => (
          <AnimatedCard key={index} delay={index * 100}>
            <div className="card">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </AnimatedCard>
        ))}
      </section>
    </div>
  );
}

export default Home;
