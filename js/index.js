import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let scrollEl = document.querySelector("[data-scroll-container]");

const scroll = new LocomotiveScroll({
  el: scrollEl,
  smooth: true,
});
