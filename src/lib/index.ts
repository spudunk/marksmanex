// place files you want to import through the `$lib` alias in this folder.
import type { Thing, WithContext, Organization, WebSite } from "schema-dts";

export const site = {
  url: "https://marksmanexteriors.com/",
  title: "Marksman Exteriors - Woodburn Windows & Doors Contractor",
  heading: "",
  subheading: "",
  about: [
    "At Marksman Exteriors, we understand the importance of windows and doors as essential components of any building's aesthetic appeal, functionality, and energy efficiency. That's why we take pride in our ability to transform spaces through high-quality installations and meticulous attention to detail. Our team of skilled professionals is dedicated to delivering the finest workmanship, ensuring that your windows and doors not only enhance the appearance of your home but also provide durability and security.",
    "We prioritize customer satisfaction above all else. We take the time to listen to your specific requirements, working closely with you to develop a customized solution that aligns perfectly with your vision. Our dedication to open communication, transparency, and reliable timelines ensures a stress-free experience throughout the entire renovation process.",
    "When you choose Marksman Exteriors as your trusted contractor, you can rest assured that your project will be handled with the utmost care and expertise. Contact us today to schedule a consultation and let us elevate the beauty, comfort, and value of your home through our exceptional windows and doors services.",
  ],
  company: {
    name: "Marksman Exteriors",
    legalName: "Marksman Exteriors LLC",
    email: "george@marksmanexteriors.com",
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

  description: "Marksman Exteriors LLC", // xxx words
  social: {
    facebook: "",
    yelp: "https://www.yelp.com/biz/marksman-exteriors-silverton",
    google:
      "https://www.google.com/search?q=marksman+exteriors+llc+woodburn+or",
    googleMaps: "",
  },
};

export const locations: Locations = {
  portland: {
    heading: "Portland Windows & Doors Contractor",
  },
  lakeoswego: {
    heading: "Lake Oswego Windows & Doors Contractor",
  },
  beaverton: {
    heading: "Beaverton Windows & Doors Contractor",
  },
  wilsonville: {
    heading: "Wilsonville Windows & Doors Contractor",
  },
  woodburn: {
    heading: "Woodburn Windows & Doors Contractor",
  },
  salem: {
    heading: "Salem Windows & Doors Contractor",
  },
  albany: {
    heading: "Albany Windows & Doors Contractor",
  },
  corvallis: {
    heading: "Corvallis Windows & Doors Contractor",
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
export type Image = { id: string; path: string | URL; alt: string };

type Location = { heading: string };
type Locations = { [key: string]: Location };
