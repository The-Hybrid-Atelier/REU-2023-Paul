import description from "../utility/descriptions";
import styles from "./Ontology.module.css";
import { useState } from "react";

import jackImg from "../assets/jack.png";
import newspaperImg from "../assets/newspaper.png";
import puntyrodImg from "../assets/puntyrod.png";
import torchImg from "../assets/torch.png";
import blowpipeImg from "../assets/blowpipe.png";
import blockImg from "../assets/block.png";
import paddleImg from "../assets/paddleImg.png";
import soffiettaImg from "../assets/soffietta.png";
import tweezerImg from "../assets/tweezer.png";
import waterImg from "../assets/water.png";

export default function HandTools({ handleClick }) {
  const [pipeWarmerHT, setPipeWamerHT] = useState(false);
  const [stationHT, setStationHT] = useState(false);
  const [blowPipe, setBlowPipe] = useState(false);
  const [punty, setPunty] = useState(false);
  const [block, setBlock] = useState(false);
  const [jack, setJack] = useState(false);
  const [news, setNews] = useState(false);
  const [paddle, setPaddle] = useState(false);
  const [soffietta, setSoffietta] = useState(false);
  const [torch, setTorch] = useState(false);
  const [tweezer, setTweezer] = useState(false);
  const [water, setWater] = useState(false);

  return (
    <div className={styles.ont_cnt}>
      <div className={styles.parent_cnt}>
        <header>
          <h1 onClick={handleClick}>Hand Tools</h1>
        </header>
        <section className={styles.content_des}>
          <p>{description["HandTools"]}</p>
        </section>
        <div className={styles.child_cnt}>
          {pipeWarmerHT ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setPipeWamerHT(!pipeWarmerHT)}>
                  Pipe Warmer Hand Tools
                </h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["PipeWarmerHandTools"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {blowPipe ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setBlowPipe(!blowPipe)}>Blow Pipe</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["BlowPipe"]}</p>
                      <img src={blowpipeImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setBlowPipe(!blowPipe)}
                  >
                    Blow Pipe
                  </div>
                )}

                {punty ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setPunty(!punty)}>Punty Rod</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["PuntyRod"]}</p>
                      <img src={puntyrodImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setPunty(!punty)}
                  >
                    Punty Rod
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className={styles.ont_main}
              onClick={() => setPipeWamerHT(!pipeWarmerHT)}
            >
              Pipe Warmer Hand Tools
            </div>
          )}

          {stationHT ? (
            <div className={styles.child_element}>
              <header>
                <h1 onClick={() => setStationHT(!stationHT)}>
                  Station Hand Tool
                </h1>
              </header>
              <section className={styles.content_des}>
                <p>{description["StationHandTool"]}</p>
              </section>
              <div className={styles.instance_cnt}>
                {block ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setBlock(!block)}>Block</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Block"]}</p>
                      <img src={blockImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setBlock(!block)}
                  >
                    Block
                  </div>
                )}
                {jack ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setJack(!jack)}>Jack</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Jacks"]}</p>
                      <img src={jackImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setJack(!jack)}
                  >
                    Jack
                  </div>
                )}
                {news ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setNews(!news)}>Newspaper</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["NewsPaper"]}</p>
                      <img src={newspaperImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setNews(!news)}
                  >
                    Newspaper
                  </div>
                )}
                {paddle ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setPaddle(!paddle)}>Paddle</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Paddle"]}</p>
                      <img src={paddleImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setPaddle(!paddle)}
                  >
                    Paddle
                  </div>
                )}
                {soffietta ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setSoffietta(!soffietta)}>
                        Soffietta
                      </h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Soffietta"]}</p>
                      <img src={soffiettaImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setSoffietta(!soffietta)}
                  >
                    Soffietta
                  </div>
                )}
                {torch ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setTorch(!torch)}>Torch</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Torch"]}</p>
                      <img src={torchImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setTorch(!torch)}
                  >
                    Torch
                  </div>
                )}
                {tweezer ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setTweezer(!tweezer)}>Tweezer</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Tweezer"]}</p>
                      <img src={tweezerImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setTweezer(!tweezer)}
                  >
                    Tweezer
                  </div>
                )}
                {water ? (
                  <div className={styles.child_element}>
                    <header>
                      <h1 onClick={() => setWater(!water)}>Water</h1>
                    </header>
                    <section className={styles.content_des}>
                      <p>{description["Water"]}</p>
                      <img src={waterImg} width="200" height="200" />
                    </section>
                  </div>
                ) : (
                  <div
                    className={styles.ont_main}
                    onClick={() => setWater(!water)}
                  >
                    Water
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className={styles.ont_main}
              onClick={() => setStationHT(!stationHT)}
            >
              Station Hand Tool
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
