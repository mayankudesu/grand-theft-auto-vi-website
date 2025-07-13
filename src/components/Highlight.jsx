import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    gsap.set(el, {
      y: 20,
      scale: 1.2,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        scrub : 2,
      },
    });

    tl.to(el, {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      delay: 0.3,
      
    });

    return () => {
      tl.kill();
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <section>
      <div className="h-screen w-full relative">
        <div
          ref={textRef}
          style={{
            background:
              "radial-gradient(225.46% 169.6% at 50% 90%, #ffd27b 0, #df3a93 33.33%, #5c1663 66.67%, rgba(32, 31, 66, 0) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="w-full h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 gap-4 sm:gap-6 md:gap-7"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold leading-tight">
              Vice City, USA.
            </h1>
          </div>
          <div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.3rem] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-12 overflow-hidden font-extrabold">
              Jason and Lucia have always known the deck is stacked against
              them. But when an easy score goes wrong, they find themselves on
              the darkest side of the sunniest place in America, in the middle
              of a criminal conspiracy stretching across the state of Leonida —
              forced to rely on each other more than ever if they want to make
              it out alive.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
