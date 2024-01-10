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

// https://imagedelivery.net/XvH0UEoGmg1LgCBcC8XRgw/<image_id>/<variant_name>
export const imagePath = "https://imagedelivery.net/XvH0UEoGmg1LgCBcC8XRgw/";

export const galleryImages: Image[] = [
  { id: "e0d6195b-006c-4c77-515d-2669faf70500", alt: "" }, // 2
  { id: "a24250b0-223a-4707-dbca-6e032cba8f00", alt: "" }, // 5
  { id: "d0a75ed9-df19-4ace-cf5a-c95de394b700", alt: "" }, // 1
  { id: "07aa8e7a-30cc-4da8-f2d8-e3c6582c4d00", alt: "" }, // 13
  { id: "13645df5-b7d5-4055-0b10-ce5b6f753700", alt: "" }, // 19
  { id: "b15a9a15-5d99-408c-2a43-e2ea7ae63a00", alt: "" }, // 7
  { id: "5332a5f3-44db-46e3-71aa-bdca66feca00", alt: "" }, // 16
  { id: "47705321-788a-4ebb-7104-7869c32f5200", alt: "" }, // 15
  { id: "fdcb0490-7603-44a3-713b-847f5eb78400", alt: "" }, // 11
  { id: "9075443c-0eaa-4cd0-db1f-5e697d500500", alt: "" }, // 8
  { id: "22217e35-4c49-4fce-54ce-f305cef7a600", alt: "" }, // 20
  { id: "7324ec20-483e-418a-9ac3-bd7125a55c00", alt: "" }, // 12
  { id: "d36ca3e8-f64e-4a8f-9aef-911bcf8aa000", alt: "" }, // 3
  { id: "a754bed3-68dd-4463-879f-896e1f0dc400", alt: "" }, // 9
  { id: "9987a414-78f8-4469-64e0-8590c0b89300", alt: "" }, // 10
  { id: "07c18bf0-a466-4e7e-fcb9-48adbd1e1800", alt: "" }, // 18
  { id: "622bfd28-ac3e-4ec5-f780-cad7f393d800", alt: "" }, // 4
  { id: "586d7ca0-679b-48ac-a753-ce2f2b9a3300", alt: "" }, // 14
  { id: "89b3349b-a9d9-4386-db23-90dac149ed00", alt: "" }, // 21
  { id: "54410a95-3cfc-4e42-dc3f-dffe3dc50900", alt: "" }, // 6
  { id: "0fc1d3ab-15cd-467d-58f5-3495b59dd300", alt: "" }, // 17
  { id: "69c25642-5bd1-4d6e-32df-420506cf8d00", alt: "" }, // 22
  { id: "8d1dfa22-0e73-40e2-2edf-3218fede6400", alt: "" }, // 23
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
export type Image = { id: string; alt: string };

type Location = {
  name: string;
  heading: string;
  title: string;
  description: string;
  areaServed: string;
};
type Locations = { [key: string]: Location };
