import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Letter from "../Letter";
import DummyLetter from "../DummyLetter";
import clickSound from "../assets/audioFxs/clickSound.mp3"; // Import your sound file
import backgroundMusic from "../assets/audioFxs/bgSong.mp3";

gsap.registerPlugin(ScrollTrigger);

function Invitation() {
  const envelopeRef = useRef(null);
  const envelopeFlapRef = useRef(null);
  const envelopeFrontRef = useRef(null);
  const envelopeBgRef = useRef(null);
  const [display, setDisplay] = useState("none");
  const hasPlayedSound = useRef(false); // Track if sound has played
  const audio = new Audio(clickSound);
  const hasPlayedMusic = useRef(false); // Track if music has started
  const musicAudio = useRef(new Audio(backgroundMusic));
  audio.volume = 0.5;

  useEffect(() => {
    gsap.to(envelopeRef.current, {
      y: 0,
      duration: 3,
      ease: "elastic.out(1, 0.5)",
      opacity: 1,
      scale: 1,
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    const envelopeEl = envelopeRef.current;
    const envelopeFlapEl = envelopeFlapRef.current;

    let timelines = [];

    const handleClick = () => {
      // Play sound only on first click
      if (!hasPlayedSound.current) {
        audio.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
        hasPlayedSound.current = true; // Mark sound as played
      }

      // Play looping music with fade-in on first click
      if (!hasPlayedMusic.current) {
        musicAudio.current.volume = 0; // Start at 0 volume
        musicAudio.current.loop = true;
        musicAudio.current
          .play()
          .then(() => {
            // Fade in volume using GSAP
            gsap.to(musicAudio.current, {
              volume: 0.25, // Target volume (0 to 1)
              duration: 2, // Fade-in duration
              ease: "power2.in",
            });
          })
          .catch((error) => {
            console.error("Error playing music:", error);
          });
        hasPlayedMusic.current = true; // Mark music as started
      }

      setDisplay("block");

      const tl = gsap.timeline({
        defaults: { duration: 0.75, ease: "Power3.easeInOut" },
      });

      tl.to(envelopeFlapEl, {
        rotationX: 180,
        backgroundColor: "#4f4b30",
      })
        .to([staggerOne, staggerTwo, staggerThree, staggerFour], {
          duration: 1.2,
          stagger: 0.2,
          y: 0,
        })
        .to("#dummyLetter", {
          duration: 0,
          display: "none",
          opacity: 0,
        })
        .to(
          "#fullLetter",
          {
            display: "block",
            opacity: 1,
            duration: 0,
          },
          "<"
        );

      const startTl = gsap.timeline({
        defaults: {
          duration: 2.5,
          ease: "power4.out",
          y: 0,
          opacity: 1,
          stagger: 0.1,
        },
      });

      tl.add(startTl, ">");
      startTl
        .to([linaYMartin, fullDateTop, mainSectionImage, mainImageDate], {
          delay: 0.5,
        })
        .to([mainTitle, introDate, introLocation, introCity], {})
        .to(introDate, {
          backgroundColor: "#565449",
          color: "#f7d9bc",
        });

      tl.then(() => {
        // Enable scroll after startTl completes
        document.body.style.overflow = "auto";

        const dearGuestTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#dearGuest",
            start: "top 50%", // Trigger when top is 50% from top of viewport
            end: "bottom 10%", // End when bottom is 10% from top of viewport
            toggleActions: "play none none reverse",
            markers: false,
          },
          defaults: {
            duration: 1,
            ease: "power4.out",
            y: 0,
            opacity: 1,
            stagger: 0.1,
          },
        });

        dearGuestTl.to([dear, guestsName, dearSectionParagraph], {
          width: "100%",
        });

        const firstSectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#firstSection",
            start: "top 50%", // Adjusted to delay trigger
            end: "bottom 10%", // Adjusted to end later
            toggleActions: "play none none reverse",
            markers: false,
          },
          defaults: {
            duration: 2,
            ease: "power4.out",
            y: 0,
            opacity: 1,
            stagger: 0.25,
          },
        });

        firstSectionTl.to([firstSectionTitle, firstSectionParagraph], {});

        const secondSectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#secondSection",
            start: "top 50%", // Adjusted to delay trigger
            end: "bottom 10%", // Adjusted to end later
            toggleActions: "play none none reverse",
            markers: false,
          },
          defaults: {
            duration: 2,
            ease: "power4.out",
            y: 0,
            opacity: 1,
            stagger: 0.25,
          },
        });

        secondSectionTl.to(
          [
            secondSectionTitle,
            secondSectionParagraph,
            countDownImage,
            countDown,
          ],
          {}
        );
        secondSectionTl.to(
          [days, hours, minutes, seconds],
          {
            stagger: 0.25,
            opacity: 1,
            scale: 1,
          },
          "<"
        );

        const thirdSectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#thirdSection",
            start: "top 50%", // Adjusted to delay trigger
            end: "bottom 10%", // Adjusted to end later
            toggleActions: "play none none reverse",
            markers: false,
          },
          defaults: {
            duration: 2,
            ease: "power4.out",
            y: 0,
            opacity: 1,
            stagger: 0.25,
          },
        });

        thirdSectionTl.to(
          [
            locationIcon,
            thirdSectionParagraph,
            mapOne,
            receptionLocation,
            mapTwo,
          ],
          {}
        );

        const dressCodeTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#dressCodeSection",
            start: "top 50%", // Adjusted to delay trigger
            end: "bottom 10%", // Adjusted to end later
            toggleActions: "play none none reverse",
            markers: false,
          },
          defaults: {
            duration: 2,
            ease: "power4.out",
            y: 0,
            opacity: 1,
            stagger: 0.15,
          },
        });

        dressCodeTl.to(
          [
            dressCodeCell0,
            dressCodeCell1,
            dressCodeCell2,
            dressCodeCell3,
            dressCodeCell4,
            dressCodeCell5,
            dressCodeCell6,
            dressCodeCell7,
            dressCodeCell8,
            dressCodeTitle,
            dressCodeText,
            button,
          ],
          {}
        );

        const outroTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#outroSection",
            start: "top% 50%", // Adjusted to delay trigger
            end: "bottom 50%", // Adjusted to end later
            toggleActions: "play none none reverse",
            markers: false,
          },
          defaults: {
            duration: 2,
            ease: "power4.out",
            y: 0,
            opacity: 1,
            stagger: 0.25,
          },
        });

        outroTl.to([outroImage, outroText], {});

        timelines = [
          dearGuestTl,
          firstSectionTl,
          secondSectionTl,
          thirdSectionTl,
          dressCodeTl,
          outroTl,
        ];

        ScrollTrigger.refresh();
      });
    };

    envelopeEl.addEventListener("click", handleClick);

    return () => {
      envelopeEl.removeEventListener("click", handleClick);
      timelines.forEach((tl) => tl.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Removed enableScroll from onClick
  return (
    <div id="mainContainer" className="mainContainer" ref={envelopeRef}>
      <div id="envelopeContainer" className="envelopeContainer">
        <div className="envelopeFlap" ref={envelopeFlapRef}></div>
        <div className="envelope" ref={envelopeRef}>
          <h1>L yM</h1>
        </div>
        <div className="envelopeFront" ref={envelopeFrontRef}></div>
        <div className="envelopeBg" ref={envelopeBgRef}></div>
        <div className="volumeUp">
          <p>Sube el volumen y abre el sobre...</p>
        </div>
      </div>
      <DummyLetter />
      <Letter style={{ display }} />
    </div>
  );
}

export default Invitation;
