import description from "../utility/descriptions";
import styles from "./Ontology.module.css";
import { useState } from "react";

import kevlarImg from "../assets/kevlarsleeve.png";
import shieldImg from "../assets/shield.png";

export default function Maker({ handleClick }) {
  const [shield, setShield] = useState(false);
  const [kevlar, setKevlar] = useState(false);

  return (
    <div className={styles.ont_cnt}>
      <div className={styles.parent_cnt}>
        <header>
          <h1 onClick={handleClick}>Personal Protective Equipment</h1>
        </header>
        <section className={styles.content_des}>
          <p>{description["PersonalProtectiveEquipment"]}</p>
        </section>
        <div className={styles.child_cnt}>
          {shield ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setShield(!shield)}>Shield</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["Shield"]}</p>
                <img src={shieldImg} width="200" height="200" />
              </section>
            </div>
          ) : (
            <div className={styles.ont_main} onClick={() => setShield(!shield)}>
              Shield
            </div>
          )}
          {kevlar ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setKevlar(!kevlar)}>Kevlar Sleeve</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["Kevlar"]}</p>
                <img src={kevlarImg} width="200" height="200" />
              </section>
            </div>
          ) : (
            <div className={styles.ont_main} onClick={() => setKevlar(!kevlar)}>
              Kevlar Sleeve
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
