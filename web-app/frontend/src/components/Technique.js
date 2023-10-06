import description from "../utility/descriptions";
import styles from "./Ontology.module.css";
import { useState } from "react";

export default function Technique({ handleClick }) {
  const [pressure, setPressure] = useState(false);
  const [gravity, setGravity] = useState(false);
  const [grip, setGrip] = useState(false);
  const [blow, setBlow] = useState(false);
  const [steam, setSteam] = useState(false);
  const [centrifugl, setCentrifugal] = useState(false);
  const [centripetal, setCentripetal] = useState(false);
  const [weight, setWeighted] = useState(false);
  const [oneHand, setOneHand] = useState(false);
  const [twoHand, setTwoHand] = useState(false);

  return (
    <div className={styles.ont_cnt}>
      <div className={styles.parent_cnt}>
        <header>
          <h1 onClick={handleClick}>Technique</h1>
        </header>
        <section className={styles.content_des}>
          <p>{description["Technique"]}</p>
        </section>
        <div className={styles.child_cnt}>
          {pressure ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setPressure(!pressure)}>
                  Pressure Technique
                </h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["PressureTechnique"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {blow ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setBlow(!blow)}>Blow Technique</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["BlowTechnique"]}</p>
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setBlow(!blow)}
                  >
                    Blow Technique
                  </div>
                )}

                {steam ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setSteam(!steam)}>Steam Technique</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["SteamTechnique"]}</p>
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setSteam(!steam)}
                  >
                    Steam Technique
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className={styles.ont_main}
              onClick={() => setPressure(!pressure)}
            >
              Pressure Technique
            </div>
          )}

          {gravity ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setGravity(!gravity)}>Gravity Technique</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["GravityTechnique"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {centrifugl ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setCentrifugal(!centrifugl)}>
                        Centrifugal Technique
                      </h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["CentrifugalTechnique"]}</p>
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setCentrifugal(!centrifugl)}
                  >
                    Centrifugal Technique
                  </div>
                )}
                {centripetal ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setCentripetal(!centripetal)}>
                        Centripetal Technique
                      </h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["CentripetalTechnique"]}</p>
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setCentripetal(!centripetal)}
                  >
                    Centripetal Technique
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className={styles.ont_main}
              onClick={() => setGravity(!gravity)}
            >
              Gravity Technique
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
