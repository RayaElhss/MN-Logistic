import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import faqData from '../faqs/faqData.json'; // Adjust the path as needed
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

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
          marginBottom: '70px',
          fontFamily: '"Roboto", sans-serif',
          fontSize: '24px',
          color: 'black',
          fontWeight: 'lighter'
        }}>
          В днешния динамичен свят на глобалната търговия, бизнесът често се изправя пред предизвикателствата на сложни митнически процедури.
          Вносът и износът на стоки от и до страни извън Европейския съюз изисква специфични познания, време и ресурси. Затова много компании
          се доверяват на професионалните услуги на митнически представители от МН ЛОДЖИСТИК. С нашата експертиза и грижа за детайла, Ви помагаме
          да преминете безпроблемно през всички етапи на митническите процеси, спестявайки Ви време и усилия.
        </h5>
      </div>

      <div
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
              <Accordion.Header className="faq-question">
                {item.question}
              </Accordion.Header>
              <Accordion.Body>
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
      </div>
    </>
  );
}

export default FAQ;
