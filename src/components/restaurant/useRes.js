import { computed, ref } from "vue";
import resListJson from "@/assets/json/res.json";
import _ from "lodash";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useWindowSize } from "@vueuse/core";
const { height } = useWindowSize();
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default () => {
  let resList = _.groupBy(resListJson.rows, "area");
  console.log("resList: ", resList);

  // const resList = Object.assign(
  //   { n: _.groupBy(resListJson.n, "name") },
  //   { m: _.groupBy(resListJson.m, "name") },
  //   { s: _.groupBy(resListJson.s, "name") }
  // );
  const activeIndex = ref("n");
  // const displayResList = computed(() => {
  //   return resList[activeIndex.value];
  // });

  const locationMenu = ref([
    {
      id: "n",
      en: "N",
      zh: "北部",
    },
    {
      id: "m",
      en: "M",
      zh: "中部",
    },
    {
      id: "s",
      en: "S",
      zh: "南部",
    },
  ]);

  const switchLocation = (location, resName = "") => {
    // console.log('location, resName=', location, resName);
    activeIndex.value = location;
    setTimeout(() => {
      ScrollTrigger.refresh();
      let nav = document.querySelector("nav");
      gsap.to(window, {
        duration: 0.8,
        scrollTo: {
          y: `#${resName.replace(/\s+/g, "")}`,
          offsetY: nav.offsetHeight,
        },
      });
    }, 100);
  };

  const initController = () => {
    const el = document.getElementById("control");
    let nav = document.querySelector("nav");
    gsap.to(el, {
      scrollTrigger: {
        trigger: ".res-container",
        scrub: true,
        // markers: true,
        end: () => "bottom bottom-=" + height.value * 0.1,
        start: `top top+=${nav.offsetHeight}`,
        onEnter() {
          el.classList.add("fixed-menu");
        },
        onLeave() {
          el.classList.add("bottom-menu");
          el.classList.remove("fixed-menu");
        },
        onEnterBack() {
          el.classList.remove("bottom-menu");
          el.classList.add("fixed-menu");
        },
        onLeaveBack() {
          el.classList.remove("bottom-menu", "fixed-menu");
        },
      },
    });

    setInterval(() => {
      ScrollTrigger.refresh();
    }, 500);
  };

  return {
    activeIndex,
    locationMenu,
    initController,
    resList,
    switchLocation,
  };
};
