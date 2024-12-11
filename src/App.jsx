import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import Countdown from "./Countdown";


function App() {
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const date = new Date();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const fullDate = `${month} ${day}, ${year}`;

  const envelopeRef = useRef(null);
  const envelopeFlapRef = useRef(null);
  const letterRef = useRef(null);
  const tapToOpenRef = useRef(null);
  
  useEffect(() => {
    const envelopeEl = envelopeRef.current;
    const envelopeFlapEl = envelopeFlapRef.current;    
    const letterEl = letterRef.current;
    const tapEl = tapToOpenRef.current;

    const handleClick = () => {

      const tl = gsap.timeline({
        defaults: { duration: .75, ease: "bounce.out" }
      });

      tl
        .to(envelopeFlapEl, {
          rotationX: 180,
        })
        .to(tapEl, {
          scale: 1.5,
          opacity: 0
        }, "<")
        .to(letterEl, {
          y: -200,
          height: 240
        })
        .to(envelopeFlapEl, {
          zIndex: -1
        }, "<")
        .to(envelopeEl, {
        })
    }

    envelopeEl.addEventListener("click", handleClick);

    return () => {
      envelopeEl.removeEventListener("click", handleClick);
    }

  }, [])

  return (
    <>
      <div className="mainContainer">

        {/* Envelope */}
        <div 
          className="envelopeContainer"
          ref={envelopeRef}>

          <div 
            className="tapToOpen"
            ref={tapToOpenRef}>
            <div className="outter"></div>
            <div className="inner"></div>
          </div>
          <div 
            className="envelopeFlap" 
            ref={envelopeFlapRef}>

          </div>
          <div className="envelope">
          </div>
          <div className="envelopeFront"></div>
          <div className="envelopeBg"></div>
          
        </div>

        <div 
          className="letterContainer"
          ref={letterRef}>
          <div className="letterTop">
            <p>Lina & Martín</p>
            <p>{fullDate}</p>
          </div>

          <div className="guestsContainer">
            <p className="dear">Queridos</p>
            <p className="guestName">Igor &amp; Martina</p>

            <div className="guestsIcons">
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faHeart} />
            </div>
            
          </div>

          {/* Main Image */}
          <div className="mainImageContainer">
            <div className="mainImageTopText">
              <p>Argentina, 2024</p>
            </div>
            <div className="imgOverlay"></div>
            <img className="mainImage" src="./src/assets/images/IMG_0537.webp" alt="" />
            <div className="mainImageBottomText">
              <p>Boda</p>
              <h1>Lina &amp; Martin</h1>
            </div>
          </div>
          {/* End of Main Image */}
          <p className="intro">
            El gran día se acerca, y no podríamos estar más emocionados de compartir este momento tan especial con ustedes. Queremos que sean parte de nuestra historia y acompañarnos en una celebración que hemos preparado con todo nuestro cariño.
          </p>
          <div className="imagesContainer">
            <img src="./src/assets/images/IMG_5621.webp" alt=""/>
            <img src="./src/assets/images/IMG_6571.webp" alt=""/>
            <img src="./src/assets/images/IMG_6593.webp" alt=""/>
          </div>
        </div>
          {/* End of Letter Container */}
      </div>

      <Countdown></Countdown>
    </>
  )
}

export default App;
