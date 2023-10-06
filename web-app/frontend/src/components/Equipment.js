import description from "../utility/descriptions";
import styles from "./Ontology.module.css";
import { useState } from "react";

import marverImg from "../assets/marver.png";
import pipeWarmerImg from "../assets/pipeWarmer.png";
import yolkImg from "../assets/yolk.png";
import gloryImg from "../assets/glory.png";
import annealerImg from "../assets/annealer.png";
import pipeCoolerImg from "../assets/pipeCooler.png";

export default function Equipment({ handleClick }) {
  const [cool, setCool] = useState(false);
  const [env, setEnv] = useState(false);
  const [heat, setHeat] = useState(false);
  const [annealer, setAnnealer] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [pipe, setPipe] = useState(false);
  const [marver, setMarver] = useState(false);
  const [yolk, setYolk] = useState(false);
  const [glory, setGlory] = useState(false);
  const [pipeWarmer, setPipeWarmer] = useState(false);
  return (
    <div className={styles.ont_cnt}>
      <div className={styles.parent_cnt}>
        <header>
          <h1 onClick={handleClick}>Fixture Equipment</h1>
        </header>
        <section className={styles.content_des}>
          <p>{description["FixtureEquipment"]}</p>
        </section>
        <div className={styles.child_cnt}>
          {cool ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setCool(!cool)}>Cooling Equipment</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["CoolingEquipment"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {annealer ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setAnnealer(!annealer)}>Annealer</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Annealer"]}</p>
                      <img src={annealerImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setAnnealer(!annealer)}
                  >
                    Annealer
                  </div>
                )}
                {compressed ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setCompressed(!compressed)}>
                        Compressed Air
                      </h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["CompressedAir"]}</p>
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setCompressed(!compressed)}
                  >
                    Compressed Air
                  </div>
                )}
                {pipe ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setPipe(!pipe)}>Pipe Cooler</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["PipeCooler"]}</p>
                      <img src={pipeCoolerImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setPipe(!pipe)}
                  >
                    Pipe Cooler
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.ont_main} onClick={() => setCool(!cool)}>
              Cooling Equipment
            </div>
          )}

          {env ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setEnv(!env)}>Environmental Equipment</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["EnvironmentalEquipment"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {marver ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setMarver(!marver)}>Marver</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Marver"]}</p>
                      <img src={marverImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setMarver(!marver)}
                  >
                    Marver
                  </div>
                )}
                {yolk ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setYolk(!yolk)}>Yolk</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Yolk"]}</p>
                      <img src={yolkImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setYolk(!yolk)}
                  >
                    Yolk
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.ont_main} onClick={() => setEnv(!env)}>
              Environmental Equipment
            </div>
          )}
          {heat ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setHeat(!heat)}>Heating Equipment</h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["HeatingEquipment"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {glory ? (
                  <div className={styles.instance_element}>
                    <header>
                      <h1 onClick={() => setGlory(!glory)}>Glory Hole</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["GloryHole"]}</p>
                      <img src={gloryImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setGlory(!glory)}
                  >
                    Glory Hole
                  </div>
                )}
                {pipeWarmer ? (
                  <div className={styles.instance_element}>
                    <header>
                      <h1 onClick={() => setPipeWarmer(!pipeWarmer)}>
                        Pipe Warmer
                      </h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["PipeWarmer"]}</p>
                      <img src={pipeWarmerImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setPipeWarmer(!pipeWarmer)}
                  >
                    Pipe Warmer
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.ont_main} onClick={() => setHeat(!heat)}>
              Heating Equipment
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
