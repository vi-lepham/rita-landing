import LocomotiveScroll from "locomotive-scroll"
import imagesLoaded from "imagesloaded"

const select = e => document.querySelector(e);

const backtopButton = document.querySelector(".backtop")
const header = document.querySelector(".s-header")

// Preload images
const preloadImages = (selector = "img") => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    )
  })
}

// Preload images
const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    })
  })
}
// Preload  images and fonts
Promise.all([preloadImages(".tiles-line-img"), preloadFonts("ftf6jal")]).then(
  () => {
    // Remove loader (loading class)
    document.body.classList.remove("is-loading")

    // Initialize the Locomotive scroll
    const scroll = new LocomotiveScroll({
      el: select("[data-scroll-container]"),
      smooth: true,
    })

    backtopButton.addEventListener("click", () => scroll.scrollTo(header))
  }
)
