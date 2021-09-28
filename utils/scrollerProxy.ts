import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if ( typeof window !== "undefined" ) {

	document.addEventListener('DOMContentLoaderd', function() {

		var scrollBar = document.querySelector('.rcs-inner-container');

		ScrollTrigger.scrollerProxy(scrollBar, {
			scrollTop(value) {
				if (arguments.length) {
					scrollBar!.scrollTop = value as number;
				}
				return scrollBar!.scrollTop;
			},
			getBoundingClientRect() {
				return { top: 0, left: 0,width: window.innerWidth, height: window.innerHeight}
			}
		});

	});
}

