import ontology from "./utility/revised.json";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Maker from "./components/Maker";
import Material from "./components/Material";
import Equipment from "./components/Equipment";
import HandTools from "./components/HandTools";
import Technique from "./components/Technique";
import PPE from "./components/PPE";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ontology />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

const Ontology = () => {
  const [open, setOpen] = useState("");
  const keys = Object.keys(ontology["Glassblowing"]);
  return (
    <MainPage>
      <section className={styles.content}>
        {keys.map((key) => (
          <OntologyElement
            element={key}
            key={key}
            setOpen={setOpen}
            open={open}
          />
        ))}
      </section>
    </MainPage>
  );
};

const OntologyElement = ({ element, setOpen, open }) => {
  const newElement = element.replace(/([A-Z])/g, " $1").trim();
  const childKeys = Object.keys(ontology["Glassblowing"][element]);

  function handleClick() {
    if (element === open) {
      setOpen("");
    } else {
      setOpen(element);
    }
  }
  return (
    <div
      className={
        open === element
          ? styles.ontology_element_open
          : styles.ontology_element
      }
    >
      {open === element ? (
        open === "Maker" ? (
          <Maker handleClick={handleClick} />
        ) : open === "FixtureEquipment" ? (
          <Equipment handleClick={handleClick} />
        ) : open === "Material" ? (
          <Material handleClick={handleClick} />
        ) : open === "HandTools" ? (
          <HandTools handleClick={handleClick} />
        ) : open === "Technique" ? (
          <Technique handleClick={handleClick} />
        ) : open === "PersonalProtectiveEquipment" ? (
          <PPE handleClick={handleClick} />
        ) : null
      ) : (
        // <Child
        //   head={newElement}
        //   childKeys={childKeys}
        //   handleClick={handleClick}
        // />
        <div onClick={handleClick}>{newElement}</div>
      )}
    </div>
  );
};
// function renderFunction(type){
//   if type == oarent{
//     return (<parent></parent>)
//   }
// }

const Child = ({ head, childKeys, handleClick }) => {
  return (
    <div className={styles.child_cnt}>
      <h1 onClick={handleClick}>{head}</h1>
      <div className={styles.child_content}>
        {childKeys.map((key) => (
          <div>{key}</div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <MainPage>
      <section className={styles.about_content}>
        <h1>ABOUT</h1>
        <p>
          This web application represents an ontology about the glass shop.
          Hybrid Atelier conducted a research in the hot glass shop for the 2023
          summer REU program.
        </p>
      </section>
    </MainPage>
  );
};
const MainPage = ({ children }) => {
  return (
    <div className={styles.mainContent}>
      <Navbar />
      <div className={styles.body}>{children}</div>
      <footer className={styles.footer}>GLASSBLOWING ONTOLOGY @ 2023</footer>
    </div>
  );
};

const Navbar = () => {
  const navigation = useNavigate();
  function handleAboutClick() {
    navigation("/about");
  }
  function handleTitleClick() {
    navigation("/");
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.title} onClick={handleTitleClick}>
        The Hybrid Atelier
      </div>
      <div className={styles.about} onClick={handleAboutClick}>
        ABOUT
      </div>
    </nav>
  );
};
