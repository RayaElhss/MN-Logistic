import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import KathyAccordion from './testt/KathyAccordion';

function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with a duration, "once" ensures animation happens only once
  }, []);

  return (
    <>
      <div
        className="mx-auto text-center mb-5"
        style={{
          maxWidth: '700px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '50px',
        }}
      >
        <div className="text" data-aos="fade-bottom">
          <h2 style={{ fontSize: '50px', margin: 0 }}>ЧЕСТО ЗАДАВАНИ ВЪПРОСИ</h2>
        </div>
      </div>

      {/* Add AOS animation to the accordion wrapper */}
      <div data-aos="fade-up">
        <KathyAccordion />
      </div>
    </>
  );
}

export default FAQ;
