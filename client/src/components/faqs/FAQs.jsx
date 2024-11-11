import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import KathyAccordion from './testt/KathyAccordion';

function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
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

      <div className="container" data-aos="fade-bottom">
        <h5 style={{
          fontFamily: '"Roboto", sans-serif',
          fontSize: '24px',
          color: 'black',
          fontWeight: 'lighter',
          lineHeight: '1.6'
        }}>
          В днешния динамичен свят на глобалната търговия, бизнесът често се изправя пред предизвикателствата на сложни митнически процедури.
          Вносът и износът на стоки от и до страни извън Европейския съюз изисква специфични познания, време и ресурси. Затова много компании
          се доверяват на професионалните услуги на митнически представители от МН ЛОДЖИСТИК. С нашата експертиза и грижа за детайла, Ви помагаме
          да преминете безпроблемно през всички етапи на митническите процеси, спестявайки Ви време и усилия.
        </h5>
      </div>

      <KathyAccordion />

      {/* <div
        className="container"
        style={{
          marginTop: '20px',
          marginBottom: '50px', // Add bottom margin to create space after accordion
          backgroundColor: '#04305b',
          padding: '20px',
          borderRadius: '0 0 5px 5px'
        }}
        data-aos="fade-up" // Add AOS animation to the accordion container
      >
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((item) => (
            <Accordion.Item eventKey={item.id.toString()} key={item.id} data-aos="fade-up">
              <Accordion.Header className="faq-question" style={{ fontSize: '18px' }}>
                {item.question}
              </Accordion.Header>
              <Accordion.Body style={{ fontSize: '16px' }}>
                {item.answers.map((answer, index) => (
                  <div key={index}>
                    {answer}
                    {index < item.answers.length - 1 && <br />}
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div> */}
    </>
  );
}

export default FAQ;
