import React, { useRef, useEffect, useState } from "react";
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

  const [display, setDisplay] = useState("none");
  const handleSetDisplay = () => {
    setDisplay("block")
  }

  useEffect(() => {
    const envelopeEl = envelopeRef.current;
    const envelopeFlapEl = envelopeFlapRef.current;    
    const letterEl = letterRef.current;
    const letterInnerEl = letterInnerRef.current;
    const tapEl = tapToOpenRef.current;
    const envelopeFrontEl = envelopeFrontRef.current;
    const envelopeBgEl = envelopeBgRef.current;

    const handleClick = () => {
      handleSetDisplay();

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
          y: 110
        }, "<")
        .to([linaYMartin, fullDateTop], {
          y: "0%",
          opacity: .5,
          stagger: 0.1
        }, "<-.02")
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
          }
        })
        envelopeTl
          .to([envelopeFlapEl, envelopeEl, envelopeFrontEl, envelopeBgEl], {
            // y: 460,
            y: "25em",
          })
          .to(letterEl, {
            // height: 840,
            height: "80%",
            y: "5em"
          }, "<")

          const letterTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#mainContainer",
              start: "center top",
              end: "bottom+=2000 top",
              toggleActions: "play none reverse none",
              scrub: true,
              markers: false
            }
          })
          letterTl
            .to(letterInnerEl, {
              y: "-75%",
            })

          const introTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".guestsContainer",
              start: "center center",
              end: "bottom+=150 center",
              toggleActions: "play none reverse none",
              scrub: true,
              markers: false
            }
          })
          introTl
            .to([dear, guestsName], {
              y: "0%",
              stagger: 0.2,
              opacity: 1
            })
            .to(intro, {
              y: "0%",
              opacity: 1
            })

          const mainImageTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#mainImageContainer",
              start: "center+=150 center",
              end: "center+=150 center",
              toggleActions: "play none reverse none",
              scrub: false,
              markers: true
            }
          })
          mainImageTl
            .to(imgOverlay, {
              duration: 2,
              opacity: 0,
            })
            .to(photoLocation, {
              y: "-3rem",
              x: "4rem",
              rotate: 20,
              opacity: 1,
              scale: 1
            },"<")
            .to(mainImageId, {
              scale: 1.25,
              duration: 4
            },"<")
          
            const dateTl = gsap.timeline({
              scrollTrigger: {
                trigger: "#dateContainer",
                start: "center+=125 center",
                end: "center+=125 center",
                toggleActions: "play none reverse none",
                scrub: false,
                markers: false
              }
            })
            dateTl
            .to(countDown, {
              y: "0%",
              x: "30%",
              rotate: 15,
              opacity: 1,
              scale: 1
            })
            .to(martinaId, {
              scale: 1.25,
              duration: 4
            },"<")
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

            {/* Guests */}
            <div
              className="guestsContainer"
              ref={guestsRef}>

              <div className="guestsInner">
                <div className="dearContainer">
                  <p id="dear" className="dear">Queridos</p>
                </div>

                <div className="guestNameContainer">
                  <h1 id="guestsName" className="guestName">Igor &amp; Martina</h1>
                </div>
              </div>

              <div className="introContainer">
                <p id="intro" className="intro">Con mucho <span>cariño</span>, queremos compartir con ustedes una <strong>noticia que llena nuestros</strong> <strong>corazones de alegría y emoción.</strong></p>
              </div>

            </div>
            {/* End of Guests */}
            
            {/* Main Image */}
            <div id="mainImageContainer" className="mainImageContainer">
              <div id="photoLocation" className="mainImageTopText">
                <p>Argentina, 2024</p>
              </div>
              
              <div id="imgOverlay" className="imgOverlay">
                <FontAwesomeIcon icon={faCat} />
              </div>

              <div className="imageInner">
                <img
                  loading="lazy"
                  id="mainImageId"
                  className="mainImage"
                  src={mainImage}/>
              </div>
            </div>
            {/* End of Main Image */}
            
            <p className="mainParagraph">
            Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ustedes.
            </p>

            {/* imagesContainer */}
            <div className="imagesContainer">
              
              <div id="dateContainer">
                <Countdown/>
                <div className="imageInner">
                  <img id="martinaId" loading="lazy" src={martina}/>
                </div>
              </div>
              
              <img
                loading="lazy"
                src={midImage}/>
              <img
                loading="lazy"
                src={finalImage}/>
            </div>
            {/* End of imagesContainer */}


          </div>

        </div>
        {/* End of Letter Container */}

        <div className="scrollDown" style={{display: display}}>
          <FontAwesomeIcon icon={faCaretDown} />   
        </div>
      </div>
      {/* End of Main Container */}
    </>
  )
}

export default App;
