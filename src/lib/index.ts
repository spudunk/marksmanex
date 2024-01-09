// place files you want to import through the `$lib` alias in this folder.
import type { Thing, WithContext, Organization, WebSite } from "schema-dts";
import googleIcon from "$lib/icons/google.svg";
import yelpIcon from "$lib/icons/yelp_burst.svg";
import facebookIcon from "$lib/icons/facebook.svg";
import googleMapsIcon from "$lib/icons/google-maps.svg";

export const site = {
  url: "https://marksmanexteriors.com/",
  title: "Marksman Exteriors - Woodburn Windows & Doors Contractor",
  description:
    "Marksman Exteriors LLC - Windows and Doors Contractor serving Woodland and surrounding areas.", // xxx words
  heading: "Unparalleled Windows and Doors Contractor",
  subheading: "Quality that Shines",
  about: [
    "Marksman Exteriors specializes in two things: <em> Top notch quality and superior customer satisfaction. </em>",
    "At Marksman Exteriors, we understand the importance of windows and doors as essential components of any building's aesthetic appeal, functionality, and energy efficiency. That's why we take pride in our ability to transform spaces through high-quality installations and our attention to detail. Our team of skilled professionals is dedicated to delivering the finest workmanship, ensuring that your windows and doors not only enhance the appearance of your home but also provide durability and security.",
    "We prioritize customer satisfaction above all else. We take the time to listen to your specific needs, working closely with you to develop a solution that aligns perfectly with your vision. Our dedication to open communication, transparency, and reliable timelines ensures a stress-free experience throughout the entire renovation process.",
    "When you choose Marksman Exteriors as your trusted contractor, you can rest assured that your project will be handled with the utmost care and expertise, while saving thousands compared to the big name companies. Contact us today to schedule an estimate and let us elevate the beauty, comfort, and value of your home through our exceptional windows and doors services.",
  ],
  servicesCopy:
    "Windows and doors not only provide aesthetics but also serve as critical points of insulation and protection against external elements. Improper installation can lead to air and water leakages, causing energy inefficiency, increased utility bills, and damage to the interior. A professional installation guarantees a tight, secure fit, maximizing energy efficiency and preventing moisture infiltration.",
  company: {
    name: "Marksman Exteriors",
    legalName: "Marksman Exteriors LLC",
    email: "georgeb@marksmanexteriors.com",
    areaServed: "Portland, OR",
    telephone: "+12182009998",
    telephoneText: "(218) 200-9998",
    address: "Woodburn, OR",
    sosLink:
      "https://egov.sos.state.or.us/br/pkg_web_name_srch_inq.show_detl?p_be_rsn=2273679&p_srce=BR_INQ&p_print=FALSE",
    foundingDate: "2000-05-01T00:00:00.000Z",
  },
  license: {
    text: "OR LIC No. 238815",
    url: "https://search.ccb.state.or.us/search/search_result.aspx?id=238815",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61555537824223",
    yelp: "https://www.yelp.com/biz/marksman-exteriors-silverton/",
    google: "",
    googleMaps: "",
  },
};

export const socialLinks = [
  {
    name: "Facebook",
    icon: facebookIcon,
    iconAlt: "Facebook Icon",
    href: site.social.facebook,
  },
  {
    name: "Yelp",
    icon: yelpIcon,
    iconAlt: "Yelp Icon",
    href: site.social.yelp,
  },
  {
    name: "Google",
    icon: googleIcon,
    iconAlt: "Google Icon",
    href: site.social.google,
  },
  {
    name: "Google Maps",
    icon: googleMapsIcon,
    iconAlt: "Google Maps Icon",
    href: site.social.googleMaps,
  },
];

export const galleryImages: Image[] = [
  { id: "1", path: "/images/gallery/20220510_155930.jpg", alt: "" },
  { id: "2", path: "/images/gallery/20220511_155429.jpg", alt: "" },
  { id: "3", path: "/images/gallery/20220511_155436.jpg", alt: "" },
  { id: "4", path: "/images/gallery/20220614_121523.jpg", alt: "" },
  { id: "5", path: "/images/gallery/20220621_144733.jpg", alt: "" },
  { id: "6", path: "/images/gallery/20220809_140939.jpg", alt: "" },
  { id: "7", path: "/images/gallery/20220812_133111.jpg", alt: "" },
  { id: "8", path: "/images/gallery/20221115_170243.jpg", alt: "" },
  { id: "9", path: "/images/gallery/20230227_124116.jpg", alt: "" },
  { id: "10", path: "/images/gallery/20230301_160546.jpg", alt: "" },
  // { id: "11", path: "/images/gallery/20230306_094930.jpg", alt: "" },
  { id: "12", path: "/images/gallery/20230306_144155.jpg", alt: "" },
  { id: "13", path: "/images/gallery/20230404_140542.jpg", alt: "" },
  { id: "14", path: "/images/gallery/20230412_164505.jpg", alt: "" },
  { id: "15", path: "/images/gallery/20230425_135058.jpg", alt: "" },
  { id: "16", path: "/images/gallery/20230425_135103.jpg", alt: "" },
  { id: "17", path: "/images/gallery/20230425_135110.jpg", alt: "" },
  { id: "18", path: "/images/gallery/20230425_135143.jpg", alt: "" },
  { id: "19", path: "/images/gallery/20230425_135151.jpg", alt: "" },
  { id: "20", path: "/images/gallery/20231106_155205.jpg", alt: "" },
  { id: "21", path: "/images/gallery/20231106_155215.jpg", alt: "" },
  {
    id: "22",
    path: "/images/gallery/Screenshot_20230627_203955_Messages.jpg",
    alt: "",
  },
];

export const locations: Locations = {
  portland: {
    name: "Portland",
    heading: `Portland's Superior Windows & Doors Contractor`,
    title: "Marksman Exteriors - Portland Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Portland and surrounding areas.",
    areaServed: "Portland, OR",
  },
  lakeoswego: {
    name: "Lake Oswego",
    heading: "Lake Oswego's Trusted Windows & Doors Contractor",
    title: "Marksman Exteriors - Lake Oswego Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Lake Oswego, OR.",
    areaServed: "Lake Oswego, OR",
  },
  beaverton: {
    name: "Beaverton",
    heading: "Beaverton's Superior Windows & Doors Contractor",
    title: "Marksman Exteriors - Beaverton Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Beaverton, OR.",
    areaServed: "Beaverton, OR",
  },
  wilsonville: {
    name: "Wilsonville",
    heading: "Wilsonville's Best Windows & Doors Contractor",
    title: "Marksman Exteriors - Wilsonville Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Wilsonville, OR.",
    areaServed: "Wilsonville, OR",
  },
  woodburn: {
    name: "Woodburn",
    heading: "Woodburn's Superior Windows & Doors Contractor",
    title: "Marksman Exteriors - Woodburn Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Woodburn, OR.",
    areaServed: "Woodburn, OR",
  },
  salem: {
    name: "Salem",
    heading: "Salem's Best Windows & Doors Contractor",
    title: "Marksman Exteriors - Salem Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Salem and surrounding areas.",
    areaServed: "Salem, OR",
  },
  albany: {
    name: "Albany",
    heading: "Albany's Best Windows & Doors Contractor",
    title: "Marksman Exteriors - Albany Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Albany, OR.",
    areaServed: "Albany, OR",
  },
  corvallis: {
    name: "Corvallis",
    heading: "Corvallis' Superior Windows & Doors Contractor",
    title: "Marksman Exteriors - Corvallis Windows & Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Corvallis, OR.",
    areaServed: "Corvallis, OR",
  },
};

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}#organization`,
  url: site.url,
  name: site.company.name,
  description: site.description,
  areaServed: site.company.areaServed,
  address: site.company.address,
  email: site.company.email,
  telephone: site.company.telephone,
  sameAs: [site.social.facebook, site.social.yelp, site.social.google],
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/logo.svg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "0",
  },
  foundingDate: site.company.foundingDate,
};

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.company.name,
  url: site.url,
};

export function serializeSchema(thing: Schema) {
  return `<script type="application/ld+json">${JSON.stringify(
    thing,
    null,
    2
  )}</script>`;
}

export type Schema = Thing | WithContext<Thing>;
export type Image = { id: string; path: string; alt: string };

type Location = {
  name: string;
  heading: string;
  title: string;
  description: string;
  areaServed: string;
};
type Locations = { [key: string]: Location };
