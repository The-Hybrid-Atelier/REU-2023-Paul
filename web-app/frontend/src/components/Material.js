import description from "../utility/descriptions";
import styles from "./Ontology.module.css";
import { useState } from "react";

import spruceImg from "../assets/spruce.png";
import fritsImg from "../assets/frits.png";

export default function Material({ handleClick }) {
  const [glass, setGlass] = useState(false);
  const [rod, setRod] = useState(false);
  const [frits, setFrits] = useState(false);
  const [spruce, setSpruce] = useState(false);
  return (
    <div className={styles.ont_cnt}>
      <div className={styles.parent_cnt}>
        <header>
          <h1 onClick={handleClick}>Material</h1>
        </header>
        <section className={styles.content_des}>
          <p>{description["Material"]}</p>
        </section>
        <div className={styles.child_cnt}>
          {glass ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setGlass(!glass)}>Glass Material</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["GlassMaterial"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {rod ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setRod(!rod)}>Color Rod</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["ColorRod"]}</p>
                    </section>
                  </div>
                ) : (
                  <div className={styles.ont_main} onClick={() => setRod(!rod)}>
                    Color Rod
                  </div>
                )}
                {frits ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setFrits(!frits)}>Frits</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Frits"]}</p>
                      <img src={fritsImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setFrits(!frits)}
                  >
                    Frits
                  </div>
                )}
                {spruce ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setSpruce(!spruce)}>Spruce</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Spruce"]}</p>
                      <img src={spruceImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setSpruce(!spruce)}
                  >
                    Spruce
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.ont_main} onClick={() => setGlass(!glass)}>
              Glass Material
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
