import React, { useRef, useEffect, useState} from "react";
import {useSearchParams} from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Countdown from "../Countdown";
import mainImage from '../assets/images/main.webp'
import martina from '../assets/images/martina.webp'
import midImage from '../assets/images/mid.webp'
import finalImage from '../assets/images/final.webp'
import Overlay from "../Overlay";

gsap.registerPlugin(ScrollTrigger);

function Invitation() {

    useEffect(() => {
        // Ensure scroll is initially disabled
        document.body.style.overflow = 'hidden';
    
        return () => {
          // Cleanup on unmount
          document.body.style.overflow = 'auto';
        };
      }, []);
    
      const enableScroll = () => {
        document.body.style.overflow = 'auto';
      };

    useEffect(() => {
        // Scroll to the top when the component mounts (page reload or navigation)
        window.scrollTo(0, 0);
    }, []); // Empty dependency ensures it runs only on mount

    
    useEffect(() => {
    // Reset scroll on full browser reload
        const handleBeforeUnload = () => {
            window.scrollTo(0, 0);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const [searchParams] = useSearchParams();
    const [guestName, setGuestName] = useState('');
    const [gender, setGender] = useState('masculino');
    const [guestType, setGuestType] = useState('individual');
  
    useEffect(() => {
        setGuestName(searchParams.get('guest') || 'Invitado');
        setGender(searchParams.get('gender') || 'masculino');
        setGuestType(searchParams.get('type') || 'individual');
      }, [searchParams]);

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
            // toggleActions: "play none reverse none",
            toggleActions: "play none none none",
            // scrub: true, 
            scrub: false, 
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
              start: "center-=150 top",
              end: "bottom+=2000 top",
              // toggleActions: "play none reverse none",
              toggleActions: "play none none none",
              // scrub: true,
              scrub: true,
              markers: false
            }
          })
          letterTl
            .to(letterInnerEl, {
              y: "-75%",
            })

          const guestsIntroTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".guestsInner",
              start: "center center",
              end: "center center",
              toggleActions: "play none reverse none",
              scrub: false,
              markers: false
            }
          })

          guestsIntroTl
            .to([dear, guestsName], {
              y: "0%",
              stagger: 0.2,
              opacity: 1,
              ease: "elastic.out(0.6,0.75)",
              duration: 1
            })

            const introTextTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".introContainer",
                    start: "top+=150 center",
                    end: "top+=150 center",
                    toggleActions: "play none reverse none",
                    scrub: false,
                    markers: false
                }
            })
            introTextTl
                .to(intro, {
                    y: "0%",
                    opacity: 1,
                    ease: "elastic.out(0.6,0.75)",
                    duration: 2
                })

          const mainImageTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#mainImageContainer",
              start: "top center",
              end: "top center",
              toggleActions: "play none reverse none",
              scrub: false,
              markers: false
            }
          })
          mainImageTl
            .to(photoLocation, {
              y: "-3rem",
              x: "4rem",
              rotate: 20,
              opacity: 1,
              scale: 1
            })
            .to(mainImageId, {
              scale: 1.1,
              duration: 1,
              ease: "elastic.out(0.6,0.75)",
            },"<")

            const mainParagraphTl = gsap.timeline({
              scrollTrigger: {
                trigger: "#mainParagraphContainer",
                start: "top-=150 center",
                end: "top-=150 center",
                toggleActions: "play none reverse none",
                scrub: false,
                markers: false
              }
            })
            mainParagraphTl
              .to(mainParagraph, {
                y: "0%",
                opacity: 1,
                ease: "elastic.out(0.6,0.75)",
                duration: 2
              })
          
            const dateTl = gsap.timeline({
              scrollTrigger: {
                trigger: "#dateContainer",
                start: "center+=125 center",
                end: "center+=125 center",
                toggleActions: "play none none none",
                // toggleActions: "play none reverse none",
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

        <div className="tapToOpen" onClick={enableScroll} ref={tapToOpenRef}>
          <div className="outter"></div>
          <div className="inner"></div>
        </div>

        {/* Envelope */}
        <div className="envelopeContainer">
          <div className="envelopeFlap" ref={envelopeFlapRef}></div>
          <div className="envelope" ref={envelopeRef}></div>
          <div className="envelopeFront" ref={envelopeFrontRef}></div>
          <div className="envelopeBg" ref={envelopeBgRef}></div>
        </div>

        {/* Letter Container */}
        <div className="letterContainer" ref={letterRef}>

          <div className="letterTopBar">
            <div className="letterTop">
              <p id="linaYMartin">Lina & Martín</p>
              <p id="fullDateTop">{fullDate}</p>
            </div>
          </div>

          <div className="letterInner" ref={letterInnerRef}>

            {/* Guests */}
            <div className="guestsContainer" ref={guestsRef}>

                <div id="guestsInner" className="guestsInner">
                    <div className="dearContainer">
                        <p id="dear" className="dear">
                        {guestType === 'individual' && gender === 'masculino' && 'Querido'}
                        {guestType === 'individual' && gender === 'femenino' && 'Querida'}
                        {guestType === 'pareja' && 'Queridos'}
                        </p>
                    </div>

                    <div className="guestNameContainer">
                        <h1 id="guestsName" className="guestName">
                        {!guestName && 'Invitado'}
                        {guestName}
                        </h1>
                    </div>
                </div>

                <div className="introContainer">
                    <p id="intro" className="intro">
                        {guestType === 'individual' && gender === 'masculino' && 'Con mucho cariño, queremos compartir contigo una noticia que llena nuestros corazones de alegría y emoción'}
                        {guestType === 'individual' && gender === 'femenino' && 'Con mucho cariño, queremos compartir contigo una noticia que llena nuestros corazones de alegría y emoción'}
                        {guestType === 'pareja' && 'Con mucho cariño, queremos compartir con ustedes una noticia que llena nuestros corazones de alegría y emoción'}
                    </p>
                </div>

            </div>
            {/* End of Guests */}
            
            {/* Main Image */}
            <div id="mainImageContainer" className="mainImageContainer">
              <div id="photoLocation" className="mainImageTopText">
                <p>Argentina, 2024</p>
              </div>
              
              {/* Overlay here */}
              <Overlay />

              <div className="imageInner">
                <img
                  loading="lazy"
                  id="mainImageId"
                  className="mainImage"
                  src={mainImage}/>
              </div>
            </div>
            {/* End of Main Image */}
            
            <div id="mainParagraphContainer" className="mainParagraphContainer">
                <p id="mainParagraph" className="mainParagraph">
                    {guestType === 'individual' && gender === 'masculino' && 'Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ti'}
                    {guestType === 'individual' && gender === 'femenino' && 'Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ti.'}
                    {guestType === 'pareja' && 'Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ustedes.'}
                </p>
            </div>

            {/* imagesContainer */}
            <div className="imagesContainer">
              
                <div id="dateContainer">
                    <Overlay/>
                    <Countdown targetDate="2025-06-21T16:00:00"/>
                    <div className="imageInner">
                        <img id="martinaId" loading="lazy" src={martina}/>
                    </div>
                </div>
              
                <div id="locationContainer">
                  <Overlay/>
                  <img loading="lazy" src={midImage}/>
                </div>
                
                <div id="finalImageContainer">
                  <Overlay/>
                  <img loading="lazy" src={finalImage}/>
                </div>
                
                <div className="helperDiv"></div>

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

export default Invitation;
