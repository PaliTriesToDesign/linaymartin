import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Countdown from "./Countdown";
import imageMain from './assets/images/IMG_0537.webp'

gsap.registerPlugin(ScrollTrigger);

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
  const letterInnerRef = useRef(null);
  const letterBgRef = useRef(null);
  const tapToOpenRef = useRef(null);

  const envelopeFrontRef = useRef(null);
  const envelopeBgRef = useRef(null);
  const guestsRef = useRef(null);  

  useEffect(() => {
    const envelopeEl = envelopeRef.current;
    const envelopeFlapEl = envelopeFlapRef.current;    
    const letterEl = letterRef.current;
    const letterInnerEl = letterInnerRef.current;
    const tapEl = tapToOpenRef.current;
    const envelopeFrontEl = envelopeFrontRef.current;
    const envelopeBgEl = envelopeBgRef.current;

    const handleClick = () => {

      const tl = gsap.timeline({
        defaults: { duration: .75, ease: "Power3.easeInOut" }
      });

      tl
        .to(envelopeFlapEl, {
          rotationX: 180,
        })
        .to(tapEl, {
          scale: 1.5,
          opacity: 0
        }, "<")
        .to(envelopeFlapEl, {
          zIndex: -1,
        }, "<")
        .to([envelopeFlapEl, envelopeEl, envelopeFrontEl, envelopeBgEl], {
          y: 100
        })
        .to(envelopeFlapEl, {
          y: 102
        }, "<")
        .to(letterEl, {
          // width: "100vw",
          // height: "500vh",
        },"<")
        .to([linaYMartin, fullDateTop, dear, guestName], {
          y: "0%",
          opacity: 1
        }, "<")
        .to([envelopeFlapEl, envelopeEl, envelopeFrontEl, envelopeBgEl], {
          // opacity: 0
        }, "<")
        .to(photoLocation, {
          y: 56
        })

        const envelopeTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#mainContainer",
            start: "top top",
            end: "bottom+=500 top",
            toggleActions: "play none reverse none",
            scrub: true,
            markers: false
          },
          defaults: {
            // ease: 'elastic.out(0.15, 0.3)',
            // ease: "Power3.easeInOut",
          }
        })
        envelopeTl
          .to([envelopeFlapEl, envelopeEl, envelopeFrontEl, envelopeBgEl], {
            y: 360,
          })
          .to(letterEl, {
            height: 640,
          }, "<")

          const letterTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#mainContainer",
              start: "center top",
              end: "bottom+=1000 top",
              toggleActions: "play none reverse none",
              scrub: true,
              markers: true
            },
            defaults: {
              // ease: "Power3.easeInOut",
            }
          })
          letterTl
            .to(letterInnerEl, {
              y: "-80%",
            })
    }

    tapEl.addEventListener("click", handleClick);

    return () => {
      tapEl.removeEventListener("click", handleClick);
    }

  }, [])

  return (
    <>
      <div id="mainContainer" className="mainContainer">

        <div 
          className="tapToOpen"
          ref={tapToOpenRef}>
          <div className="outter"></div>
          <div className="inner"></div>
        </div>

        {/* Envelope */}
        <div className="envelopeContainer">
          <div 
            className="envelopeFlap" 
            ref={envelopeFlapRef}>

          </div>
          <div 
            className="envelope"
            ref={envelopeRef}>
          </div>
          <div 
            className="envelopeFront"
            ref={envelopeFrontRef}></div>
          <div 
            className="envelopeBg"
            ref={envelopeBgRef}></div>
          
        </div>

        {/* Letter Container */}
        <div 
          className="letterContainer"
          ref={letterRef}>

          <div 
            className="letterInner"
            ref={letterInnerRef}>

            <div className="letterTop">
              <p id="linaYMartin">Lina & Martín</p>
              <p id="fullDateTop">{fullDate}</p>
            </div>
            <div
              className="guestsContainer"
              ref={guestsRef}>
              <p id="dear" className="dear">Queridos</p>
              <p id="guestName" className="guestName">Igor &amp; Martina</p>
            </div>
            {/* Main Image */}
            <div className="mainImageContainer">
              <div id="photoLocation" className="mainImageTopText">
                <p>Argentina, 2024</p>
              </div>
              <div id="overlay" className="imgOverlay"></div>
              <img
                loading="lazy"
                className="mainImage"
                src={imageMain}/>
            </div>
            {/* End of Main Image */}
            <p className="intro">
              El gran día se acerca, y no podríamos estar más emocionados de compartir este momento tan especial con ustedes. Queremos que sean parte de nuestra historia y acompañarnos en una celebración que hemos preparado con todo nuestro cariño.
            </p>
            <div className="imagesContainer">
              <img
                loading="lazy"
                src="./src/assets/images/IMG_5621.webp"
                alt=""/>
              <img
                loading="lazy"
                src="./src/assets/images/IMG_6571.webp"
                alt=""/>
              <img
                loading="lazy"
                src="./src/assets/images/IMG_6593.webp"
                alt=""/>
            </div>
          </div>
        </div>
        {/* End of Letter Container */}
      </div>

      <div className="scrollDown">
        <FontAwesomeIcon icon={faCaretDown} />   
      </div>

      <Countdown></Countdown>
      {/* Countdown on the envelope front! */}
    </>
  )
}

export default App;
