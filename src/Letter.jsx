import React, { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Countdown from "./Countdown";
import HorizontalScroll from "./HorizontalScroll";
import mainImage from "./assets/images/main.webp";
import martina from "./assets/images/martina.webp";
import midImage from "./assets/images/mid.webp";
import finalImage from "./assets/images/final.webp";
import DressCodeGrid from "./DressCodeGrid";
// import Overlay from "./Overlay";

gsap.registerPlugin(ScrollTrigger);

function Letter() {
  const [searchParams] = useSearchParams();
  const [guestName, setGuestName] = useState("");
  const [gender, setGender] = useState("masculino");
  const [guestType, setGuestType] = useState("individual");

  useEffect(() => {
    setGuestName(searchParams.get("guest") || "Invitado");
    setGender(searchParams.get("gender") || "masculino");
    setGuestType(searchParams.get("type") || "individual");
  }, [searchParams]);

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const date = new Date();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const fullDate = `${month} ${day}, ${year}`;

  const letterRef = useRef(null);
  const letterInnerRef = useRef(null);

  const guestsRef = useRef(null);

  const [display, setDisplay] = useState("none");
  const handleSetDisplay = () => {
    setDisplay("block");
  };

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const toggleActionsConfig = "play none reverse none";

  //   const startTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#fullLetter",
  //       start: "center center",
  //       end: "center center",
  //       markers: true,
  //     },
  //   });

  //   startTl.to([linaYMartin, fullDateTop], {
  //     y: 0,
  //     opacity: 1,
  //   });

  //   const guestsIntroTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".guestsInner",
  //       start: "center center",
  //       end: "center center",
  //       toggleActions: toggleActionsConfig,
  //       scrub: false,
  //       markers: false,
  //     },
  //   });

  //   guestsIntroTl.to([dear, guestsName], {
  //     y: "0%",
  //     stagger: 0.2,
  //     opacity: 1,
  //     ease: "elastic.out(0.6,0.75)",
  //     duration: 1,
  //   });

  //   const introTextTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".introContainer",
  //       start: "top+=150 center",
  //       end: "top+=150 center",
  //       toggleActions: toggleActionsConfig,
  //       scrub: false,
  //       markers: false,
  //     },
  //   });
  //   introTextTl.to(intro, {
  //     y: "0%",
  //     opacity: 1,
  //     ease: "elastic.out(0.6,0.75)",
  //     duration: 2,
  //   });

  //   const mainImageTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#mainImageContainer",
  //       start: "top center",
  //       end: "top center",
  //       toggleActions: toggleActionsConfig,
  //       scrub: false,
  //       markers: false,
  //     },
  //   });
  //   mainImageTl
  //     .to(photoLocation, {
  //       y: "-3rem",
  //       x: "4rem",
  //       rotate: 20,
  //       opacity: 1,
  //       scale: 1,
  //     })
  //     .to(
  //       mainImageId,
  //       {
  //         scale: 1.1,
  //         duration: 1,
  //         ease: "elastic.out(0.6,0.75)",
  //       },
  //       "<"
  //     );

  //   const mainParagraphTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#mainParagraphContainer",
  //       start: "top-=150 center",
  //       end: "top-=150 center",
  //       toggleActions: toggleActionsConfig,
  //       scrub: false,
  //       markers: false,
  //     },
  //   });
  //   mainParagraphTl.to(mainParagraph, {
  //     y: "0%",
  //     opacity: 1,
  //     ease: "elastic.out(0.6,0.75)",
  //     duration: 2,
  //   });

  //   const dateTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#dateContainer",
  //       start: "center+=125 center",
  //       end: "center+=125 center",
  //       toggleActions: "play none none none",
  //       // toggleActions: toggleActionsConfig,
  //       scrub: false,
  //       markers: false,
  //     },
  //   });
  //   dateTl
  //     .to(countDown, {
  //       y: "0%",
  //       x: "30%",
  //       rotate: 15,
  //       opacity: 1,
  //       scale: 1,
  //     })
  //     .to(
  //       martinaId,
  //       {
  //         scale: 1.25,
  //         duration: 4,
  //       },
  //       "<"
  //     );
  // }, []);

  return (
    <>
      <div id="fullLetter" className="fullLetter">
        {/* Letter Container */}

        <div className="letterContainer" ref={letterRef}>
          <div className="letterTopBar">
            <div className="letterTop">
              <p id="linaYMartin">L yM</p>
              <p id="fullDateTop">{fullDate}</p>
            </div>
          </div>

          {/* LETTER INNER ======= */}

          <div className="letterInner" ref={letterInnerRef}>
            {/* Guests */}
            <div className="mainSectionContainer">
              <div className="mainImageContainer">
                <div className="imageMask">
                  <img
                    id="mainSectionImage"
                    className="mainSectionImage"
                    src={mainImage}
                  />
                  <div className="mainImageDate textMask">
                    <p id="mainImageDate">28 de Julio, 2024</p>
                  </div>
                </div>
              </div>
              <div className="titleAndInfo">
                <div className="textMask">
                  <h1 id="mainTitle">Lina & Martín</h1>
                </div>
                <div className="textMask">
                  <div id="introDate">
                    <p>21 de junio</p>
                  </div>
                  <div id="introLocation">
                    <p>Iglesia de Palermo</p>
                  </div>
                  <div id="introCity">
                    <p>Manizales, Caldas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DEAR GUEST */}
          <div id="dearGuest" className="dearGuest">
            <div className="dearGuestInner">
              <div className="dearGuestTop">
                <div className="textMask">
                  <p id="dear" className="dear">
                    {guestType === "individual" &&
                      gender === "masculino" &&
                      "Querido"}
                    {guestType === "individual" &&
                      gender === "femenino" &&
                      "Querida"}
                    {guestType === "pareja" && "Queridos"}
                  </p>
                </div>
                <div className="textMask">
                  <h1 id="guestsName" className="guestName">
                    {!guestName && "Invitado"}
                    {guestName}
                  </h1>
                </div>
              </div>

              <div className="dearGuestDivider"></div>

              <div className="textMask">
                <p id="dearSectionParagraph" className="firstSectionParagraph">
                  {guestType === "individual" &&
                    gender === "masculino" &&
                    "Con mucho cariño, queremos compartir contigo una noticia que llena nuestros corazones de alegría y emoción"}
                  {guestType === "individual" &&
                    gender === "femenino" &&
                    "Con mucho cariño, queremos compartir contigo una noticia que llena nuestros corazones de alegría y emoción"}
                  {guestType === "pareja" &&
                    "Con mucho cariño, queremos compartir con ustedes una noticia que llena nuestros corazones de alegría y emoción"}
                </p>
              </div>
            </div>
          </div>
          {/* DEAR GUEST */}

          {/* FIRST */}
          <div id="firstSection" className="firstSection">
            <div className="sectionText">
              <div className="textMask">
                <h2 id="firstSectionTitle">El Gran Paso</h2>
              </div>
              <div className="textMask">
                <p
                  id="firstSectionParagraph"
                  className="secondSectionParagraph"
                >
                  {guestType === "individual" &&
                    gender === "masculino" &&
                    "Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ti"}
                  {guestType === "individual" &&
                    gender === "femenino" &&
                    "Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ti."}
                  {guestType === "pareja" &&
                    "Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ustedes."}
                </p>
              </div>
            </div>
          </div>
          {/* FIRST */}

          {/* SECOND */}
          <div className="secondSection">
            <div className="sectionText">
              <div className="textMask">
                <h2>El Reloj Sigue Avanzando</h2>
              </div>
              <div className="textMask">
                <p>
                  Y con él crece nuestra emoción. Falta poco tiempo para
                  celebrar el amor que nos une.
                </p>
              </div>
            </div>

            <div className="imageMask">
              <img
                id="mainSectionImage"
                className="mainSectionImage"
                src={finalImage}
              />
              <Countdown targetDate="2025-06-21T16:00:00" />
            </div>
          </div>
          {/* SECOND */}

          {/* THIRD */}
          <div className="thirdSection">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="textMask">
              <p className="location">
                Te esperamos en la <span>Iglesia de Palermo</span>, en el
                corazón del barrio Palermo en Manizales, un lugar lleno de
                historia y fe que será testigo del inicio de nuestra nueva vida
                juntos
              </p>
            </div>
            <div className="textMask">
              <p className="time">4:00 p.m.</p>
            </div>
          </div>
          {/* THIRD */}

          {/* DRESS CODE */}
          <div className="dressCode">
            <DressCodeGrid />
            <div className="textMask">
              <p>
                Para este día tan especial, te invitamos a unirte a nosotros
                <span>vistiendo un atuendo elegante en tonos tierra</span>, una
                elección que resaltará la calidez, la armonía y la esencia única
                de nuestra celebración
              </p>
            </div>
            <DressCodeGrid />
          </div>
          {/* DRESS CODE */}

          {/* OUTRO */}
          <div className="outro">
            <div className="imageMask">
              <img src={martina} alt="" />
            </div>
            <div className="textMask">
              <p>
                Tu presencia hará que este día sea aún más especial. Esperamos
                de corazón contar contigo para celebrar el comienzo de esta
                nueva etapa
              </p>
            </div>
          </div>
          {/* OUTRO */}
        </div>
        {/* End of Letter Container */}
      </div>
    </>
  );
}

export default Letter;
