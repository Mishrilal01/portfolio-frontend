import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade in animation
export const fadeIn = (element, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: delay,
    ease: 'power3.out'
  });
};

// Slide in from left
export const slideInLeft = (element, delay = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: delay,
    ease: 'power3.out'
  });
};

// Slide in from right
export const slideInRight = (element, delay = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: delay,
    ease: 'power3.out'
  });
};

// Scale animation
export const scaleIn = (element, delay = 0) => {
  return gsap.from(element, {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: delay,
    ease: 'back.out(1.7)'
  });
};

// Stagger animation for lists
export const staggerIn = (elements, delay = 0) => {
  return gsap.from(elements, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: delay,
    ease: 'power3.out'
  });
};

// Scroll trigger animation
export const scrollTriggerAnimation = (element, animation) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    },
    ...animation
  });
};

// AOS (Animate On Scroll) configuration
export const aosConfig = {
  duration: 1000,
  offset: 100,
  easing: 'ease-in-out',
  delay: 100,
  once: false,
  mirror: true
};
