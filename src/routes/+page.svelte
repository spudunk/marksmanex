<script lang="ts">
  import Card from "$lib/Card.svelte";
  import MdiHouseSiding from "$lib/icons/house_siding_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiCountertops from "$lib/icons/countertops_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiDoorOpen from "$lib/icons/door_open_FILL0_wght400_GRAD0_opsz24.svg";
  import Google from "$lib/icons/google.svg";
  import Yelp from "$lib/icons/yelp_burst.svg";
  import SEO from "$lib/SEO/MetaTags.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import Contact from "$lib/Contact.svelte";
  import { site } from "$lib";
  import type { Image } from "$lib";

  const images: Image[] = [{ id: "", path: "", alt: "" }];
</script>

<SEO />

<main class="relative">
  <section
    id="hero"
    class="-z-10 relative min-h-[90vh] flex flex-col justify-center"
  >
    <div
      class="absolute top-0 left-0 bottom-0 right-0 overflow-x-clip bg-frontDoor bg-cover bg-center"
    ></div>
    <div
      class="mix-blend-multiply backdrop-blur opacity-80 absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-neutral-500 via-neutral-950 to-neutral-500"
    ></div>
    <div
      class="font-display font-light absolute top-0 left-0 bottom-0 right-0 container flex flex-col gap-6 justify-center items-center text-center h-full"
    >
      <p class=" md:hidden text-xl text-neutral-200">
        {site.company.name}
      </p>
      <p class="text-3xl sm:text-4xl md:text-5xl text-neutral-200">
        Quality that Shines
      </p>
      <h1 class="text-xl sm:text-2xl md:text-3xl text-neutral-200">
        Unparalleled Windows and Doors Contractor
      </h1>
    </div>
  </section>
  <section id="services" class="">
    <div class="container w-full">
      <h2 class="text-3xl my-4 font-display">Windows & Doors</h2>
      <p>
        Marksman Exteriors specializes in one thing: exterior access to your
        home.
      </p>
    </div>
  </section>

  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">About</h2>
      <!-- <p class="my-4">George started in construction in 2010?....</p> -->
      <p class="my-4">
        At Marksman Exteriors, we understand the importance of windows and doors
        as essential components of any building's aesthetic appeal,
        functionality, and energy efficiency. That's why we take pride in our
        ability to transform spaces through high-quality installations and
        meticulous attention to detail. Our team of skilled professionals is
        dedicated to delivering the finest workmanship, ensuring that your
        windows and doors not only enhance the appearance of your home but also
        provide durability and security.
      </p>
      <p class="my-4">
        We prioritize customer satisfaction above all else. We take the time to
        listen to your specific requirements, working closely with you to
        develop a customized solution that aligns perfectly with your vision.
        Our dedication to open communication, transparency, and reliable
        timelines ensures a stress-free experience throughout the entire
        renovation process.
      </p>
      <p class="my-4">
        When you choose Marksman Exteriors as your trusted contractor, you can
        rest assured that your project will be handled with the utmost care and
        expertise. Contact us today to schedule a consultation and let us
        elevate the beauty, comfort, and value of your home through our
        exceptional windows and doors services.
      </p>

      <!-- 
      <div
        class="text-lg px-2 py-2 rounded bg-neutral-200 flex flex-col gap-2 font-serif"
      >
        <p class="relative ml-4">
          <span class="text-2xl h-2 inline-block absolute -left-4">&ldquo;</span
          >
          I was tired of seeing customers get screwed by contractors. It’s all about
          the customer for me.
        </p>
        <p class="ml-4">
          I don’t have a single CCB complaint. I acknowledge my mistakes and
          work to make things right. I don’t leave until they’re happy.
        </p>
        <p class="font-bold text-green-900 text-xl ml-4">
          I’d rather lose money than leave an unhappy customer.
        </p>
        <p class="ml-4">
          The damage to my reputation is just not worth it.
          <span class="text-2xl h-2 inline-block"> &rdquo; </span>
        </p>
        <p class="font-bol ml-4">- Mike Shurts</p>
      </div>
       -->
      <!-- 
      <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
        <img class="h-6 inline-block" src={Google} alt="Google logo" />
        <a target="_blank" class="link p-2" href={site.social.google}>
          Google Reviews
        </a>
      </p>
       -->
      <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
        <img class="h-6 inline-block" src={Yelp} alt="Yelp logo" />
        <a
          target="_blank"
          class="link p-2"
          href={`${site.social.yelp}#reviews`}
        >
          Yelp Reviews
        </a>
      </p>
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <!-- <Carousel {images} /> -->
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
