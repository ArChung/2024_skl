import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default () => {
  const log = true;

  const initGABtn = () => {
    document.querySelectorAll(`.gBtn`).forEach((el) => {
      el.addEventListener("click", (e) => {
        clickGa(e.currentTarget.getAttribute("data-g"));
      });
    });

    document.querySelectorAll(`.gaPage`).forEach((el, index) => {
      const totalLength = document.querySelectorAll(`.gaPage`).length;

      let start = index === 0 ? "top top" : "top center";
      let end = index === totalLength - 1 ? "bottom bottom" : "bottom center";

      ScrollTrigger.create({
        trigger: el,
        start: start,
        end: end,
        // markers: true,
        onEnter: (self) => {
          pageGa(self.trigger.dataset.ga);
        },
        onEnterBack: (self) => {
          pageGa(self.trigger.dataset.ga);
        },
      });
    });
  };

  const clickMainBtnGa = (url) => {
    const callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };

    gtag('event', 'conversion', {
      'send_to': 'AW-10877049519/FnGICKn1jLUZEK-1ysIo',
      'event_callback': callback
    });

    console.log("click-event: MainBtn"  );
  };

  
  const clickGa = (event) => {
    event = event.replace(/\s/g, "");
    gtag("event", "click", {
      event_category: "click event",
      event_label: event,
    });

    if (!log) return;
    console.log("click-event:" + event);
  };

  const pageGa = (event) => {
    event = event.replace(/\s/g, "");

    gtag("event", "pageview", {
      event_category: "pageview event",
      event_label: event,
    });

    if (!log) return;
    console.log("pageview: " + event);
  };

  return { initGABtn, clickGa, pageGa , clickMainBtnGa};
};
