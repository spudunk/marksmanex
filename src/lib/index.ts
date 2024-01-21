// place files you want to import through the `$lib` alias in this folder.
import type { Locations, SiteData, ImageGallery } from "$lib/types";
// import googleIcon from "$lib/icons/google.svg";
// import googleMapsIcon from "$lib/icons/google-maps.svg";
import yelpIcon from "$lib/icons/yelp_burst.svg";
import facebookIcon from "$lib/icons/facebook.svg";

export const site: SiteData = {
  url: "https://marksmanexteriors.com",
  title: "Windows and Doors Contractor for NW Oregon - Marksman Exteriors",
  description:
    "Marksman Exteriors LLC - Windows and Doors Contractor serving Woodburn and surrounding areas.", // xxx words
  heading: "Exceptional Windows and Doors Contractor",
  subheading: "Unlock Your Dream Home",
  about: [
    "Marksman Exteriors specializes in two things: <em> Top notch quality and superior customer satisfaction. </em>",
    "As a small team, we depend on our reputation to keep us in business. We can't afford to do low quality work or leave a job unfinished. We treat every install as a priority because, to us, it is. We appreciate our high standards because we're passionate about what we do. We take pride in our ability to transform spaces and aim to impress with our attention to detail. You will be happy with our work.",
    "At Marksman Exteriors, we understand the importance of windows and doors.  They're essential components of any building's aesthetic appeal, functionality, and energy efficiency. We take pride in our ability to transform spaces. Our team of skilled professionals commits to delivering the finest workmanship every time. We'll ensure that your windows and doors enhance the appearance of your home, add durability, and provide security. Every detail will be right, from the seal to the latch.",
    "We prioritize customer satisfaction above all else. We'll take the time to listen to your specific needs and work with you to develop a solution that aligns with your vision. We're dedicated to open communication, transparency, and reliable timelines. Our goal is to ensure a stress-free experience throughout the entire renovation process.",
    "With our team, your not limited to a standard 32x80 door. We have experience with sliding glass doors, screen doors, and storm doors. Often we can replace a door with a window, or replace a window with a door. We can install egress windows to increase the safety of your home.",
    "We'll handle your project with care and expertise, and provide greater value than big name companies. Contact us today to schedule an estimate. Let us elevate the beauty, comfort, and value of your home with our exceptional services.",
  ],
  services: [
    "Windows and doors not only provide aesthetics but also serve as critical points of insulation and protection against external elements. Improper installation can lead to air and water leakages, causing energy inefficiency, increased utility bills, and damage to the interior. A professional installation guarantees a tight, secure fit, maximizing energy efficiency and preventing moisture infiltration.",
  ],
  productLines: [
    {
      name: "Milgard",
      description: "(((About milgard and their product offering)))",
      catalogs: [
        {
          title: "Milgard Windows Catalog",
          link: "https://www.milgard.com/windows",
        },
        {
          title: "Milgard Patio Doors Catalog",
          link: "https://www.milgard.com/patio-doors",
        },
      ],
    },
    {
      name: "Jeld-wen",
      description: "(((about jeldwen)))",
      catalogs: [
        {
          title: "Jeld-wen Windows Catalog",
          link: "https://www.jeld-wen.com/en-us/products/windows",
        },
        {
          title: "Jeld-wen Exterior Doors Catalog",
          link: "https://www.jeld-wen.com/en-us/products/exterior-doors",
        },
        {
          title: "Jeld-wen Interior Doors Catalog",
          link: "https://www.jeld-wen.com/en-us/products/interior-doors",
        },
        {
          title: "Jeld-wen Patio Doors Catalog",
          link: "https://www.jeld-wen.com/en-us/products/patio-doors",
        },
      ],
    },
    {
      name: "Simonton",
      description: "(((about Simonton)))",
      catalogs: [
        {
          title: "Simonton Windows Catalog",
          link: "https://www.simonton.com/windows/",
        },
        {
          title: "Simonton Patio Doors Catalog",
          link: "https://www.simonton.com/doors/",
        },
      ],
    },
    {
      name: "Andersen",
      description: "(((about Andersen)))",
      catalogs: [
        {
          title: "Andersen Windows & Doors Catalog",
          link: "https://www.andersenwindows.com/windows-and-doors/",
        },
      ],
    },
  ],
  company: {
    name: "Marksman Exteriors",
    legalName: "Marksman Exteriors LLC",
    email: "georgeb@marksmanexteriors.com",
    areaServed: "Portland, OR",
    telephone: "+12182009998",
    telephoneText: "(218) 200-9998",
    address: "Woodburn, OR",
    priceRange: "$$",
    sosLink:
      "https://egov.sos.state.or.us/br/pkg_web_name_srch_inq.show_detl?p_be_rsn=2273679&p_srce=BR_INQ&p_print=FALSE",
    foundingDate: "2000-05-01T00:00:00.000Z",
  },
  license: {
    text: "OR LIC No. 238815",
    url: "https://search.ccb.state.or.us/search/search_result.aspx?id=238815",
  },
  socials: [
    {
      id: "facebook",
      name: "Facebook",
      icon: facebookIcon,
      iconAlt: "Facebook Icon",
      link: "https://www.facebook.com/MarksmanExteriors",
      iconLabel: "Facebook Business Profile",
      reviewLink: "https://www.facebook.com/MarksmanExteriors",
      reviewText: "Facebook",
      
    },
    {
      id: "yelp",
      name: "Yelp",
      icon: yelpIcon,
      iconAlt: "Yelp Icon",
      link: "https://www.yelp.com/biz/marksman-exteriors-silverton",
      iconLabel: "Yelp Business Profile",
      reviewLink: "https://www.yelp.com/biz/marksman-exteriors-silverton#reviews",
      reviewText: "Yelp Reviews",
    },
  ],
};

export const gallery: ImageGallery = {
  // https://imagedelivery.net/XvH0UEoGmg1LgCBcC8XRgw/<image_id>/<variant_name>
  // https://[domain.com]/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw/<image_id>/<variant_name>
  basePath:
    "https://marksmanexteriors.com/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw/",
  images: [
    { id: "8d1dfa22-0e73-40e2-2edf-3218fede6400", alt: "work sample" }, // 23
    { id: "69c25642-5bd1-4d6e-32df-420506cf8d00", alt: "work sample" }, // 22
    { id: "e0d6195b-006c-4c77-515d-2669faf70500", alt: "work sample" }, // 2
    { id: "a24250b0-223a-4707-dbca-6e032cba8f00", alt: "work sample" }, // 5
    { id: "d0a75ed9-df19-4ace-cf5a-c95de394b700", alt: "work sample" }, // 1
    { id: "07aa8e7a-30cc-4da8-f2d8-e3c6582c4d00", alt: "work sample" }, // 13
    { id: "13645df5-b7d5-4055-0b10-ce5b6f753700", alt: "work sample" }, // 19
    { id: "b15a9a15-5d99-408c-2a43-e2ea7ae63a00", alt: "work sample" }, // 7
    { id: "5332a5f3-44db-46e3-71aa-bdca66feca00", alt: "work sample" }, // 16
    { id: "47705321-788a-4ebb-7104-7869c32f5200", alt: "work sample" }, // 15
    { id: "fdcb0490-7603-44a3-713b-847f5eb78400", alt: "work sample" }, // 11
    { id: "9075443c-0eaa-4cd0-db1f-5e697d500500", alt: "work sample" }, // 8
    { id: "22217e35-4c49-4fce-54ce-f305cef7a600", alt: "work sample" }, // 20
    { id: "7324ec20-483e-418a-9ac3-bd7125a55c00", alt: "work sample" }, // 12
    { id: "d36ca3e8-f64e-4a8f-9aef-911bcf8aa000", alt: "work sample" }, // 3
    { id: "a754bed3-68dd-4463-879f-896e1f0dc400", alt: "work sample" }, // 9
    { id: "9987a414-78f8-4469-64e0-8590c0b89300", alt: "work sample" }, // 10
    { id: "07c18bf0-a466-4e7e-fcb9-48adbd1e1800", alt: "work sample" }, // 18
    { id: "622bfd28-ac3e-4ec5-f780-cad7f393d800", alt: "work sample" }, // 4
    { id: "586d7ca0-679b-48ac-a753-ce2f2b9a3300", alt: "work sample" }, // 14
    { id: "89b3349b-a9d9-4386-db23-90dac149ed00", alt: "work sample" }, // 21
    { id: "54410a95-3cfc-4e42-dc3f-dffe3dc50900", alt: "work sample" }, // 6
    { id: "0fc1d3ab-15cd-467d-58f5-3495b59dd300", alt: "work sample" }, // 17
  ],
};

export const locations: Locations = {
  portland: {
    name: "Portland",
    heading: `Portland's Superior Windows and Doors Contractor`,
    title: "Marksman Exteriors - Portland Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Portland and surrounding areas.",
    areaServed: "Portland, OR",
  },
  lakeoswego: {
    name: "Lake Oswego",
    heading: "Lake Oswego's Trusted Windows and Doors Contractor",
    title: "Marksman Exteriors - Lake Oswego Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Lake Oswego, OR.",
    areaServed: "Lake Oswego, OR",
  },
  beaverton: {
    name: "Beaverton",
    heading: "Beaverton's Superior Windows and Doors Contractor",
    title: "Marksman Exteriors - Beaverton Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Beaverton, OR.",
    areaServed: "Beaverton, OR",
  },
  wilsonville: {
    name: "Wilsonville",
    heading: "Wilsonville's Best Windows and Doors Contractor",
    title: "Marksman Exteriors - Wilsonville Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Wilsonville, OR.",
    areaServed: "Wilsonville, OR",
  },
  woodburn: {
    name: "Woodburn",
    heading: "Woodburn's Superior Windows and Doors Contractor",
    title: "Marksman Exteriors - Woodburn Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Woodburn, OR.",
    areaServed: "Woodburn, OR",
  },
  salem: {
    name: "Salem",
    heading: "Salem's Best Windows and Doors Contractor",
    title: "Marksman Exteriors - Salem Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Salem and surrounding areas.",
    areaServed: "Salem, OR",
  },
  albany: {
    name: "Albany",
    heading: "Albany's Best Windows and Doors Contractor",
    title: "Marksman Exteriors - Albany Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Albany, OR.",
    areaServed: "Albany, OR",
  },
  corvallis: {
    name: "Corvallis",
    heading: "Corvallis' Superior Windows and Doors Contractor",
    title: "Marksman Exteriors - Corvallis Windows and Doors Contractor",
    description:
      "Marksman Exteriors LLC - Windows and Doors Contractor serving Corvallis, OR.",
    areaServed: "Corvallis, OR",
  },
};
