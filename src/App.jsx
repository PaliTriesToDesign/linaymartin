import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import Countdown from "./Countdown";
import mainImage from './assets/images/main.webp'
import martina from './assets/images/martina.webp'
import midImage from './assets/images/mid.webp'
import finalImage from './assets/images/final.webp'

gsap.registerPlugin(ScrollTrigger);

function App() {

  function generateURL(baseURL, name) {
    if (!baseURL.endsWith("/")) {
      baseURL += "/";
    }
    return `${baseURL}${encodeURIComponent(name)}`;
  }
  
  // Example usage:
  const baseURL = "https://linaymartin.com";
  const guestName = "Lina y Martín";
  
  const generatedURL = generateURL(baseURL, guestName);
  console.log(generatedURL);

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
          backgroundColor: "#ffe999"
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
        .to([linaYMartin, fullDateTop], {
          y: "0%",
          opacity: .5,
          stagger: 0.1
        }, "<-.02")
        .to(letterEl, {
          // width: "100vw",
          // height: "500vh",
        },"<")
        .to([dear, guestName], {
          y: "0%",
          opacity: 1
        }, "<")
        .to([envelopeFlapEl, envelopeEl, envelopeFrontEl, envelopeBgEl], {
          // opacity: 0
        }, "<")

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
            y: 460,
          })
          .to(letterEl, {
            height: 840,
          }, "<")

          const letterTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#mainContainer",
              start: "center top",
              end: "bottom+=2000 top",
              toggleActions: "play none reverse none",
              scrub: true,
              markers: false
            },
            defaults: {
              // ease: "Power3.easeInOut",
            }
          })
          letterTl
            .to(letterInnerEl, {
              y: "-75%",
            })

          const mainImageTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#mainImageContainer",
              start: "center+=150 center",
              end: "bottom+=50 center",
              toggleActions: "play none reverse none",
              scrub: true,
              markers: true
            },
            defaults: {
              // ease: "Power3.easeInOut",
            }
          })
          mainImageTl
          .to(countDown, {
            y: "0%",
            opacity: 1
          })
          .to(photoLocation, {
            y: 56
          }, "<")
          .to(imgOverlay, {
            opacity: 0
          })
    }

    tapEl.addEventListener("click", handleClick);

    return () => {
      tapEl.removeEventListener("click", handleClick);
    }

  }, [])

  return (
    <>
      <Countdown/>
    
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
            ref={envelopeFrontRef}>
          </div>
          <div 
            className="envelopeBg"
            ref={envelopeBgRef}></div>
          
        </div>

        {/* Letter Container */}
        <div 
          className="letterContainer"
          ref={letterRef}>

          <div className="letterTopBar">
            <div className="letterTop">
              <p id="linaYMartin">Lina & Martín</p>
              <p id="fullDateTop">{fullDate}</p>
            </div>
          </div>

          <div 
            className="letterInner"
            ref={letterInnerRef}>
            <div
              className="guestsContainer"
              ref={guestsRef}>
              <p id="dear" className="dear">Queridos</p>
              <p id="guestName" className="guestName">Igor &amp; Martina</p>
            </div>
            
            {/* Main Image */}
            <div id="mainImageContainer" className="mainImageContainer">
              <div id="photoLocation" className="mainImageTopText">
                <p>Argentina, 2024</p>
              </div>
              
              <div id="imgOverlay" className="imgOverlay">
                <FontAwesomeIcon icon={faCat} />
              </div>

              <img
                loading="lazy"
                className="mainImage"
                src={mainImage}/>
            </div>
            {/* End of Main Image */}
            
            <p className="intro">
              El gran día se acerca, y no podríamos estar más emocionados de compartir este momento tan especial con ustedes. Queremos que sean parte de nuestra historia y acompañarnos en una celebración que hemos preparado con todo nuestro cariño.
            </p>
            <div className="imagesContainer">
              <img
                loading="lazy"
                src={martina}/>
              <img
                loading="lazy"
                src={midImage}/>
              <img
                loading="lazy"
                src={finalImage}/>
            </div>
          </div>
        </div>
        {/* End of Letter Container */}

        <div className="scrollDown">
          <FontAwesomeIcon icon={faCaretDown} />   
        </div>
      </div>
      {/* End of Main Container */}
    </>
  )
}

export default App;
