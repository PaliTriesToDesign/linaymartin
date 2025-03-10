import React, { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Countdown from "./Countdown";
import posterImage from "./assets/images/main.webp";
import martina from "./assets/images/final2.webp";
import midImage from "./assets/images/mid.webp";
import finalImage from "./assets/images/final.webp";
import DressCodeGrid from "./DressCodeGrid";
import videoFile from "./assets/videos/video.mp4";

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
                  {/* <img
                    id="mainSectionImage"
                    className="mainSectionImage"
                    src={mainImage}
                  /> */}

                  <video
                    id="mainSectionImage"
                    className="mainSectionImage"
                    loop
                    muted
                    controls
                    poster={posterImage}
                  >
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

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
                    <p>
                      Ceremonia: Parroquia Nuestra Señora
                      <br /> Del Sagrado Corazón
                    </p>
                  </div>
                  <div id="introCity">
                    <p>Palermo, Manizales</p>
                  </div>
                  <div id="introDate">
                    <p>21 de junio, 2025</p>
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
                  <h2 id="guestsName" className="guestName">
                    {!guestName && "Invitado"}
                    {guestName}
                  </h2>
                </div>
              </div>

              <div className="textMask">
                <p id="dearSectionParagraph" className="firstSectionParagraph">
                  {guestType === "individual" &&
                    gender === "masculino" &&
                    "Nos llena de alegría compartir nuestro amor contigo. Te invitamos a celebrar juntos el día más especial de nuestras vidas. Tu presencia será muy importante para nuesto más lindo recuerdo"}
                  {guestType === "individual" &&
                    gender === "femenino" &&
                    "Nos llena de alegría compartir nuestro amor contigo. Te invitamos a celebrar juntos el día más especial de nuestras vidas. Tu presencia será muy importante para nuesto más lindo recuerdo"}
                  {guestType === "pareja" &&
                    "Nos llena de alegría compartr nuestro amor con ustedes. Los invitamos a celebrar juntos el día más especial de nuestras vidas. Su presencia será muy importante para nuestro más lindo recuerdo."}
                </p>
              </div>
            </div>
          </div>
          {/* DEAR GUEST */}

          {/* FIRST */}
          <div id="firstSection" className="firstSection">
            <div className="sectionText">
              <div className="textMask">
                <h3 id="firstSectionTitle">Salvo mi corazón, todo está bien</h3>
              </div>
              <div className="textMask">
                <p id="firstSectionParagraph" className="firstSectionParagraph">
                  "Pero me entiende también si le digo que yo no soy dualista,
                  que el cuerpo y la mente son la misma cosa, y que quien ama
                  solo con la mente se queda a mitad de camino, igual que quien
                  ama solo con el cuerpo está condenado a que su amor no dure en
                  la vejez." <br></br> - Héctor Abad Faciolince
                </p>
              </div>
            </div>
          </div>
          {/* FIRST */}

          {/* SECOND */}
          <div id="secondSection" className="secondSection">
            <div className="sectionText">
              <div className="textMask">
                <h3 id="secondSectionTitle">El Reloj Sigue Avanzando</h3>
              </div>
              <div className="textMask">
                <p id="secondSectionParagraph">
                  Y con él crece nuestra emoción. Falta poco tiempo para
                  celebrar el amor que nos une{" "}
                  {guestType === "individual" ? "contigo" : "junto a ustedes"}.
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
            <div className="topMap">
              <div className="textMask">
                <p id="thirdSectionParagraph" className="location">
                  Ceremonia: Parroquia Nuestra Señora Del Sagrado Corazón <br />
                  <strong>Palermo, Manizales</strong> <br />
                  <strong> Junio 21, 4:00 p.m.</strong>
                </p>
              </div>
              <div className="imageMask">
                <iframe
                  id="mapOne"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.32170603175!2d-75.49011922398472!3d5.051497594925216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47657a1a63606f%3A0x768c9269748fa488!2sParroquia%20Nuestra%20Se%C3%B1ora%20del%20Sagrado%20Coraz%C3%B3n!5e0!3m2!1ses!2sca!4v1741573660043!5m2!1ses!2sca"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="bottomMap">
              <div className="textMask">
                <p id="receptionLocation" className="receptionLocation">
                  Recepción: Hacienda Lindaraja
                  <br />
                  <strong>Manizales</strong> <br />
                  <strong> Después de la eucaristía</strong>
                </p>
              </div>
              <div className="imageMask">
                <iframe
                  id="mapTwo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31793.412111998125!2d-75.52553789036335!3d5.075122269636957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476f95c6364fd9%3A0x58bea6b6a41af331!2sHacienda%20Lindaraja!5e0!3m2!1ses!2sca!4v1741572930510!5m2!1ses!2sca"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          {/* THIRD */}

          {/* DRESS CODE */}
          <div id="dressCodeSection" className="dressCode">
            <DressCodeGrid />
            <div className="dressCodeText">
              <div className="textMask">
                <h3 id="dressCodeTitle">Código de vestuario</h3>
              </div>
              <div className="textMask">
                <p id="dressCodeText">
                  Formal &mdash; Colores Tierra. <br /> &#40;Se reserva el color
                  blanco para la novia&#41;
                </p>
              </div>
              <div className="textMask">
                <div id="button" className="dressCodeButtonContainer">
                  <p>Algunas ideas aquí: </p>
                  <div className="dressCodeButton">
                    <a
                      href="https://co.pinterest.com/Linapaolamramirez/dress-code/"
                      target="_blank"
                    >
                      Pinterest
                    </a>
                  </div>
                </div>
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
                {guestType === "individual" ? "¡Prepárate!" : "¡Prepárense!"}{" "}
                <br />
                Nuestra boda será inolvidable. <br />
              </p>
            </div>
          </div>
          {/* OUTRO */}

          {/* CONTACT INFO */}
          <div className="contactSection">
            <h3>Confirmación</h3>
            <p>
              Es muy importante contar con{" "}
              {guestType === "individual" ? "tu" : "su"} presencia, para ello
              dispondremos de un número WhatsApp al cual{" "}
              {guestType === "individual" ? "deberás" : "deberán"}
              <strong> confirmar asistencia</strong>: <br /> +57 313 716 6717,
              Alejandra García Acevedo, Wedding Planner.
            </p>
            <p>
              {guestType === "individual" ? "Recuerda" : "Recuerden"}: Nos
              reservamos el ingreso de niños y niñas al evento.
            </p>
            <p>Habrá lluvia de sobres.</p>
          </div>
          {/* CONTACT INFO */}
        </div>
        {/* End of Letter Container */}
      </div>
    </>
  );
}

export default Letter;
