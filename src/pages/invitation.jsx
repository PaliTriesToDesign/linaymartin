import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Letter from "../Letter";
import DummyLetter from "../DummyLetter";

gsap.registerPlugin(ScrollTrigger);

function Invitation() {
  const envelopeRef = useRef(null);
  const envelopeFlapRef = useRef(null);
  const envelopeFrontRef = useRef(null);
  const envelopeBgRef = useRef(null);
  const [display, setDisplay] = useState("none");

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
      setDisplay("block");

      const tl = gsap.timeline({
        defaults: { duration: 0.75, ease: "Power3.easeInOut" },
      });

      tl.to(envelopeFlapEl, {
        rotationX: 180,
        backgroundColor: "#ffe999",
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
            start: "top 70%",
            end: "bottom 20%",
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

        dearGuestTl.to(
          [dear, guestsName, dearGuestDivider, dearSectionParagraph],
          {
            width: "100%",
          }
        );

        const firstSectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#firstSection",
            start: "top 70%",
            end: "bottom 20%",
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
            start: "top 70%",
            end: "bottom 20%",
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
        secondSectionTl.to([days, hours, minutes, seconds], {
          opacity: 1,
          scale: 1,
        });

        const thirdSectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#thirdSection",
            start: "top 70%",
            end: "bottom 20%",
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
          [locationIcon, thirdSectionParagraph, thirdSectionTime],
          {}
        );
        thirdSectionTl.to(locationSpan, {
          fontWeight: 700,
        });

        timelines = [dearGuestTl, firstSectionTl, secondSectionTl];
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
        <div className="envelope" ref={envelopeRef}></div>
        <div className="envelopeFront" ref={envelopeFrontRef}></div>
        <div className="envelopeBg" ref={envelopeBgRef}></div>
      </div>
      <DummyLetter />
      <Letter style={{ display }} />
    </div>
  );
}

export default Invitation;
