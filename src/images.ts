// Centralized image URLs organized by page and section
// Update these URLs to change imagery site-wide

export const IMAGES = {
  banners: {
    aiBanner: "https://server-assets.b-cdn.net/web/ghogha/AI%20Banner.jpg",
    registrationBackground: "https://server-assets.b-cdn.net/web/ghogha/Registration%20Background.jpg",
    registerNowBanner: "https://server-assets.b-cdn.net/web/ghogha/Register%20Now%20Banner.png",
  },
  home: {
    hero: {
      slider: {
        slide1: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Top%20View.png",
        slide2: "https://server-assets.b-cdn.net/web/ghogha/Registration%20Background.jpg",
        slide3: "https://server-assets.b-cdn.net/web/ghogha/Ghogha%20Tirth%202.jpg",
      },
    },
    about: {
      temple: "https://server-assets.b-cdn.net/web/ghogha/Ghogha%20Tirth%202.jpg",
    },
    benefits: {
      spiritual: "https://server-assets.b-cdn.net/web/ghogha/Bhagwan%201.png",
    },
    whyYatra: {
      palitana: "https://server-assets.b-cdn.net/web/ghogha/Girnar%20Top%20View.jpg",
    },
  },
  bhagwan: {
    bhagwan1: "https://server-assets.b-cdn.net/web/ghogha/Bhagwan%201.png",
    bhagwan2NoBG: "https://server-assets.b-cdn.net/web/ghogha/Bhagwan%202%20NoBG.png",
    bhagwan2: "https://server-assets.b-cdn.net/web/ghogha/Bhagwan%202.jpg",
    bhagywan1BG: "https://server-assets.b-cdn.net/web/ghogha/Bhagywan%201%20BG.jpg",
  },
  deraser: {
    frontViewJpeg: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Front%20View.jpeg",
    frontView: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Front%20View.jpg",
    hiResTopView: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Hi%20Res%20Top%20View.jpg",
    navkhandaInside: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Navkhanda%20Inside.png",
    navkhandaWithText: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Navkhanda%20with%20Text.jpg",
    topView1: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Top%20View%201.jpg",
    topViewWithBhagwan: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Top%20View%20with%20Bhagwan.png",
    topView: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Top%20View.jpg",
    topViewPng: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Top%20View.png",
    ultraTopView: "https://server-assets.b-cdn.net/web/ghogha/Deraser%20Ultra%20Top%20View.jpeg",
  },
  tirth: {
    ghoghaTirth2: "https://server-assets.b-cdn.net/web/ghogha/Ghogha%20Tirth%202.jpg",
    girnarTopView: "https://server-assets.b-cdn.net/web/ghogha/Girnar%20Top%20View.jpg",
  },
  gurus: {
    guru1: "https://server-assets.b-cdn.net/web/ghogha/Guru%201.jpg",
    guru2: "https://server-assets.b-cdn.net/web/ghogha/Guru%202.jpg",
    guru3: "https://server-assets.b-cdn.net/web/ghogha/Guru%203.jpg",
    guru4: "https://server-assets.b-cdn.net/web/ghogha/Guru%204.jpg",
    guru5: "https://server-assets.b-cdn.net/web/ghogha/Guru%205.jpg",
    guru6: "https://server-assets.b-cdn.net/web/ghogha/Guru%206.jpg",
  },
  logo: {
    parivar: "https://server-assets.b-cdn.net/web/ghogha/Parivar%20Logo.png",
  },
} as const;

export type Images = typeof IMAGES;

