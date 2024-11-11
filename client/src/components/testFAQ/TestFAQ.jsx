import React, { useState } from "react";
import styles from "./AccordionComponent.module.css"; // Import the styles module

const AccordionComponent = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.panelGroup}>
            <div className={styles.panel}>
              <div
                className={`${styles.panelHeading} ${openPanel === 1 ? styles.open : ""}`}
                onClick={() => togglePanel(1)}
              >
                <h4 className={styles.panelTitle}>
                  <i className={`${styles.icon} fa fa-globe`}></i> Section 1
                </h4>
              </div>
              {openPanel === 1 && (
                <div className={styles.panelBody}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
                    dictum id pellentesque at, vestibulum ut arcu.
                  </p>
                </div>
              )}
            </div>

            <div className={styles.panel}>
              <div
                className={`${styles.panelHeading} ${openPanel === 2 ? styles.open : ""}`}
                onClick={() => togglePanel(2)}
              >
                <h4 className={styles.panelTitle}>
                  <i className={`${styles.icon} fa fa-briefcase`}></i> Section 2
                </h4>
              </div>
              {openPanel === 2 && (
                <div className={styles.panelBody}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
                    dictum id pellentesque at, vestibulum ut arcu.
                  </p>
                </div>
              )}
            </div>

            <div className={styles.panel}>
              <div
                className={`${styles.panelHeading} ${openPanel === 3 ? styles.open : ""}`}
                onClick={() => togglePanel(3)}
              >
                <h4 className={styles.panelTitle}>
                  <i className={`${styles.icon} fa fa-mobile`}></i> Section 3
                </h4>
              </div>
              {openPanel === 3 && (
                <div className={styles.panelBody}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
                    dictum id pellentesque at, vestibulum ut arcu.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
