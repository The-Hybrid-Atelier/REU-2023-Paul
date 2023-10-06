import description from "../utility/descriptions";
import styles from "./Ontology.module.css";
import { useState } from "react";

export default function Maker({ handleClick }) {
  const [assistant, setAssistant] = useState(false);
  const [gaffer, setGaffer] = useState(false);
  return (
    <div className={styles.ont_cnt}>
      <div className={styles.parent_cnt}>
        <header>
          <h1 onClick={handleClick}>Maker</h1>
        </header>
        <section className={styles.content_des}>
          <p>{description["Maker"]}</p>
        </section>
        <div className={styles.child_cnt}>
          {assistant ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setAssistant(!assistant)}>
                  Assistant Maker
                </h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["Assistant"]}</p>
              </section>
            </div>
          ) : (
            <div
              className={styles.ont_main}
              onClick={() => setAssistant(!assistant)}
            >
              Assistant Maker
            </div>
          )}
          {gaffer ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setGaffer(!gaffer)}>Gaffer Maker</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["Gaffer"]}</p>
              </section>
            </div>
          ) : (
            <div className={styles.ont_main} onClick={() => setGaffer(!gaffer)}>
              Gaffer
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
