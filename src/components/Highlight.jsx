import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.anim-text', {
      duration: 2,
      delay: 0.3,
      opacity: 0,
      y:30,
      scale: 0.8,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.anim-text',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    });
  }, { scope: container });

  return (
    <section ref={container}>
      <div className="h-screen w-full relative">
        <div
          style={{
            background:
              'radial-gradient(225.46% 169.6% at 50% 90%, #ffd27b 0, #df3a93 33.33%, #5c1663 66.67%, rgba(32, 31, 66, 0) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          className="anim-text w-full h-full flex flex-col justify-center items-start px-48 gap-7"
        >
          <div>
            <h1 className="text-[5rem] font-extrabold">Vice City, USA.</h1>
          </div>
          <div>
            <h2 className="text-[2.3rem] leading-12 overflow-hidden font-extrabold">
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
