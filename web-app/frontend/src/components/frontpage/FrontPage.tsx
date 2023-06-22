import React from 'react';
import { useState } from 'react';
import './FrontPage.css';

import frontImage from '../../images/frontpage.svg';
import downarrow from '../../images/down-arrow.svg';
import hamburger from '../../images/hamburger.svg';
import full_hamburger from '../../images/full-hamburger.svg';

import equipment from '../../images/equipment.svg';
import handtools from '../../images/handtools.svg';
import maker from '../../images/maker.svg';
import material from '../../images/material.svg';
import ppe from '../../images/ppe.svg';

function FrontPage() {
  const [navBarFull, setNavBarFull] = useState<boolean>(false);
  return (
    <div className="FrontPage">
      <NavgationBar navBarFull={navBarFull} setNavBarFull={setNavBarFull}/>
      <HomePage/>
      <OntologySelection/>
      <Footnote/>
    </div>
  );
}

export default FrontPage;

const NavgationBar = ({navBarFull,setNavBarFull}:{navBarFull:boolean,setNavBarFull:Function}):JSX.Element=>{
      return navBarFull?(
      <nav className="full-nav-bar">
        <div className="full-top-bar">
          <h1 className="nav-header">Hybrid Atelier</h1>
          <div className="full-hamburger-container">
            <img src={`${full_hamburger}`} alt="Menu Icon" onClick={()=>{setNavBarFull(!navBarFull)}}/>
          </div>
        </div>
      </nav>
      )
      :
      <nav className="top-nav-bar">
        <h1 className="nav-header">Hybrid Atelier</h1>
        <div className="hamburger-container">
          <img src={`${hamburger}`} alt="Menu Icon" onClick={()=>{setNavBarFull(!navBarFull)}}/>
        </div>
      </nav>
}

function HomePage(){
  return(
    <section className="front-page-container">
      <div className="front-page-absolute">
        <img className="front-page-img" src={`${frontImage}`} alt="Background"/>
        <div className="black-semi-circle"/>
        <div className="front-page-text">
          <header>
            <h1>Learn <br/>Glass Blowing</h1>
            <h2>With the help of professional <br/>glass blowers</h2>
          </header>
          <div className="browse-skill-btn">
            Browse Skill
            <img src={`${downarrow}`} alt="Downarrow Icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

function OntologySelection(){
  return(
    <section className="ont-container">
      <header className="ont-header-container">
        <h2 className="ont-header">FIND WHAT YOU ARE LOOKING FOR</h2>
        <p className="ont-para">Our glass blowing modules are geared to teach you how to familiarize with the basics of glass blowing</p>
      </header>

      <section className="ont-selection-container">
        <div className="ont-element">
          <img src={`${equipment}`} alt="Background"/>
          <text className="img-text">Fixture Equipment</text>
        </div>
        <div className="ont-element">
          <img src={`${handtools}`} alt="Background"/>
          <text className="img-text">Hand Tool</text>
        </div>
        <div className="ont-element">
          <img src={`${maker}`} alt="Background"/>
          <text className="img-text">Maker</text>
        </div>
        <div className="ont-element">
          <img src={`${material}`} alt="Background"/>
          <text className="img-text">Material</text>
        </div>
        <div className="ont-element">
          <img src={`${ppe}`} alt="Background"/>
          <text className="img-text">Personal Protective Equipment</text>
        </div>
        <div className="ont-element">
          <img src={`${handtools}`} alt="Background"/>
          <text className="img-text">Technique</text>
        </div>
      </section>

    </section>
  )
}

function Footnote(){
  return(
    <footer>
      
    </footer>
  )
}
