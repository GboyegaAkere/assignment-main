import a from "../images/a.png"
import b from "../images/b.jpeg"
import c from "../images/c.webp"
import dkoko from "../images/dkoko.png"
import dkok2 from "../images/dkoko2.png"
import d from "../images/d.jpg"
import gboyes from "../images/gboyes.png"
import store from "../images/store.png"
import yachts from "../images/yachts.png"

const featuredProjects = [
  {
    slug: "project-one",
    title: "Ecommerce Website",
    subtitle: "Restuarant Website.",
    description: "One of my recent projects involved designing and developing a modern, visually engaging website for a restaurant client. The goal was to create an online presence that not only reflected the unique character of their brand but also provided a smooth and appetizing user experience. From showcasing signature dishes and chef specials to integrating reservation functionality and location details, the site was built to capture the essence of the dining experience. With a clean layout, rich imagery, and intuitive navigation, the final product helped elevate the restaurant’s online visibility and positioned them as a standout in their local food scene.",
    image: dkoko,
    gallery: [],  // these are already imported above
    liveUrl: "https://dkokogrillz.com/"
  },
  {
    slug: "project-two",
    title: "Restaurant Website",
    subtitle: "Modern dining experience",
   description: "As part of my development practice, I designed and built a modern, visually appealing website for a fictional restaurant. The goal was to challenge myself with real-world UI/UX scenarios while exploring how to present a brand's identity online. I focused on creating a clean and engaging layout that highlights signature dishes, chef specials, and important features like reservations and contact details. The project helped me experiment with responsive design, image-heavy content, and user-friendly navigation all while capturing the warm, inviting feel of a great dining experience.",
    image: gboyes,
    
    // gallery: [g1, g2] // use the imports
     liveUrl: "https://gboye.netlify.app/"
  },
  {
    slug: "project-three",
    title: "Yachts Broker",
    subtitle: "Yachts",
    description: "Equiinox Yachts is a premium, modern website built for a luxury yacht company, designed to reflect sophistication, exclusivity, and seamless digital experience. The goal of the project was to create an elegant online presence that highlights the company’s high-end yacht collections, services, and brand identity through visually captivating layouts and smooth interactions.",
    image: yachts,
    liveUrl: "https://www.equiinoxyachts.com/"
    // gallery: [g1, g2]
  },
  {
    slug: "project-four",
    title: "E-commerce website",
    subtitle: "Clothing website",
    description: "Gboyege's is a stylish and modern e-commerce website developed for a fashion and clothing brand. The website was designed to provide users with a seamless online shopping experience — combining elegant visuals, intuitive navigation, and fast performance. The main goal was to build a platform that reflects the brand’s creativity and showcases products in a visually appealing, easy-to-browse layout.",
    image: store,
    liveUrl: "https://foreverbuy.in/"
    // gallery: [g1, g2]
  }
];

export default featuredProjects