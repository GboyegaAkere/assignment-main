import a from "../images/a.png"
import b from "../images/b.jpeg"
import c from "../images/c.webp"
import dkoko from "../images/dkoko.png"
import dkok2 from "../images/dkoko2.png"
import d from "../images/d.jpg"
import gboye from "../images/gboye.png"

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
   description: "Immerse yourself in the cutting-edge of real estate design with this sleek and modern website template. Crafted to elevate any real estate agency's online presence, it offers an intuitive, user-friendly platform to showcase properties in style. Whether you're dealing with residential homes, commercial spaces, or luxury estates, this template combines visually striking layouts with effortless navigation. Highlight unique property features and engage clients with sophistication, positioning your agency as a standout leader in the competitive real estate market.",
    image: gboye,
    
    // gallery: [g1, g2] // use the imports
     liveUrl: "https://gboye.netlify.app/"
  },
  {
    slug: "project-three",
    title: "Printing Solutions",
    subtitle: "Modern 3D layout",
    description: "Immerse yourself in the cutting-edge of real estate design with this sleek and modern website template. Crafted to elevate any real estate agency's online presence, it offers an intuitive, user-friendly platform to showcase properties in style. Whether you're dealing with residential homes, commercial spaces, or luxury estates, this template combines visually striking layouts with effortless navigation. Highlight unique property features and engage clients with sophistication, positioning your agency as a standout leader in the competitive real estate market.",
    image: d,
    // gallery: [g1, g2]
  },
  {
    slug: "project-four",
    title: "Framer Xplore",
    subtitle: "Free Framer Components",
    description: "Immerse yourself in the cutting-edge of real estate design with this sleek and modern website template. Crafted to elevate any real estate agency's online presence, it offers an intuitive, user-friendly platform to showcase properties in style. Whether you're dealing with residential homes, commercial spaces, or luxury estates, this template combines visually striking layouts with effortless navigation. Highlight unique property features and engage clients with sophistication, positioning your agency as a standout leader in the competitive real estate market.",
    image: b,
    // gallery: [g1, g2]
  }
];

export default featuredProjects