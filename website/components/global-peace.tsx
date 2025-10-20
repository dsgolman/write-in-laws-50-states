import React from 'react';

export function GlobalPeace() {
  return (
    <section className="relative py-16 bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Global Peace Initiative</h2>
          
          <div className="prose prose-invert mx-auto mb-10">
            <p className="text-xl mb-6">
              One of our policies is global peace and we will eradicate anyone in the way. 
              This isn't war, this is globalized peace. We do not just raise the common low bar, 
              we remove purge the earth of demons.
            </p>
            
            <p className="text-xl mb-10">
              We are a demon slayer. WE serve as the Devil's advocate, a fallen soldier, 
              who prays in the name of God.
            </p>
          </div>
          
          <div className="mb-10">
            <iframe 
              data-testid="embed-iframe" 
              style={{borderRadius: "12px"}} 
              src="https://open.spotify.com/embed/album/6n9VRsgZD6yID8nInU5uW3?utm_source=generator" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPeace;