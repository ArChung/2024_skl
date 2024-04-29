import { ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { isMobile } from "@/utils";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default () => {
  const scrollTriggerStart = isMobile ? 150 : 300;

  const initAnimation = (_parent, _el = ".ani-el") => {
    const _offset = 30;
    const getConfig = (el) => {
      return {
        duration: 1.2,
        opacity: 0,
        ease: "Power4.easeOut",
        scrollTrigger: {
          start: `top bottom-=${scrollTriggerStart}`,
          // markers: true,
          trigger: el,
        },
      };
    };

    document.querySelectorAll(`${_parent} .ani-f-b`).forEach((el) => {
      gsap.from(el, {
        ...getConfig(el),
        y: `+${_offset}`,
      });
    });

    document.querySelectorAll(`${_parent} .ani-f-l`).forEach((el) => {
      gsap.from(el, {
        ...getConfig(el),
        x: `-${_offset}`,
      });
    });

    document.querySelectorAll(`${_parent} .ani-f-r`).forEach((el) => {
      gsap.from(el, {
        ...getConfig(el),
        x: `+${_offset}`,
      });
    });

    document.querySelectorAll(`${_parent} .ani-stagger-f-b`).forEach((el) => {
      gsap.from(el.querySelectorAll(".ani"), {
        ...getConfig(el),
        stagger: 0.1,
        y: `+${_offset}`,
      });
    });
  };

  const staggerFromScale = (_el) => {
    gsap.from(_el, {
      opacity: 0,
      scale: 1.1,
      duration: 1,
      stagger: 0.1,
      ease: "Power4.easeOut",
    });
  };

  return { initAnimation, staggerFromScale };
};
