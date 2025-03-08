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
                  <div id="introLocation">
                    <p>Iglesia de Palermo</p>
                  </div>
                  <div id="introCity">
                    <p>Manizales, Caldas</p>
                  </div>
                  <div id="introDate">
                    <p>21 de junio</p>
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

              <div id="dearGuestDivider" className="dearGuestDivider"></div>

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
                <p id="firstSectionParagraph" className="firstSectionParagraph">
                  {guestType === "individual" &&
                    gender === "masculino" &&
                    "Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ti"}
                  {guestType === "individual" &&
                    gender === "femenino" &&
                    "Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ti"}
                  {guestType === "pareja" &&
                    "Hemos decidido dar el gran paso y unir nuestras vidas en matrimonio. El gran día se acerca, y nos encantaría celebrarlo junto a ustedes"}
                </p>
              </div>
            </div>
          </div>
          {/* FIRST */}

          {/* SECOND */}
          <div id="secondSection" className="secondSection">
            <div className="sectionText">
              <div className="textMask">
                <h2 id="secondSectionTitle">El Reloj Sigue Avanzando</h2>
              </div>
              <div className="textMask">
                <p id="secondSectionParagraph">
                  Y con él crece nuestra emoción. Falta poco tiempo para
                  celebrar el amor que nos une
                </p>
              </div>
            </div>

            <div className="imageMask">
              <img
                id="countDownImage"
                className="countDownImage"
                src={finalImage}
              />
              <Countdown targetDate="2025-06-21T16:00:00" />
            </div>
          </div>
          {/* SECOND */}

          {/* THIRD */}
          <div id="thirdSection" className="thirdSection">
            <div className="imageMask">
              <FontAwesomeIcon id="locationIcon" icon={faLocationDot} />
            </div>
            <div className="textMask">
              <p id="thirdSectionParagraph" className="location">
                Te esperamos en la{" "}
                <span id="locationSpan">Iglesia de Palermo</span>, en el corazón
                del barrio Palermo en Manizales, un lugar lleno de historia y fe
                que será testigo del inicio de nuestra nueva vida juntos
              </p>
            </div>
            <div className="textMask">
              <p id="thirdSectionTime" className="time">
                4:00 p.m.
              </p>
            </div>
          </div>
          {/* THIRD */}

          {/* DRESS CODE */}
          <div id="dressCodeSection" className="dressCode">
            <DressCodeGrid />
            <div className="dressCodeText">
              <div className="textMask">
                <h2 id="dressCodeTitle">Vestuario</h2>
              </div>
              <div className="textMask">
                <p id="dressCodeText">
                  Para este día tan especial, te invitamos a unirte a nosotros
                  vistiendo un atuendo elegante en tonos tierra , una elección
                  que resaltará la calidez, la armonía y la esencia única de
                  nuestra celebración
                </p>
              </div>
            </div>
          </div>
          {/* DRESS CODE */}

          {/* OUTRO */}
          <div id="outroSection" className="outro">
            <div className="imageMask">
              <img id="outroImage" src={martina} alt="" />
            </div>
            <div className="textMask">
              <p id="outroText">
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
