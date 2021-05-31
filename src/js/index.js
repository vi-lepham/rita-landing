import { preloadImages, preloadFonts } from './utils';
import LocomotiveScroll from 'locomotive-scroll';

const backtopEl = document.querySelector('.backtop');
const headerEl = document.querySelector('.s-header');

// Preload  images and fonts
Promise.all([preloadImages('.tiles__line-img'), preloadFonts('ftf6jal')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('is-loading');

    // Initialize the Locomotive scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
});