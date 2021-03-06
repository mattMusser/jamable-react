import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn up the jams!</h1>
    
    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">If you want more options to choose from then use Spotify</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited streaming and ad-free</h2>
        <p className="point-description">No streaming limits or distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile Enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile browsers.</p>
      </div>
    </section>
  </section>
);

export default Landing;