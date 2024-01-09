<script lang="ts">
  import type { PageData } from "./$types";
  import type { Organization } from "schema-dts";

  export let data: PageData;

  import Google from "$lib/icons/google.svg";
  import Yelp from "$lib/icons/yelp_burst.svg";
  import SEO from "$lib/SEO/MetaTags.svelte";
  import LdTag from "$lib/SEO/LDTag.svelte";

  import Contact from "$lib/Contact.svelte";
  import { site, organizationSchema, websiteSchema } from "$lib";
  import type { Image } from "$lib";
  import Navbar from "$lib/Navbar.svelte";

  const images: Image[] = [{ id: "", path: "", alt: "" }];

  const orgSchema = {
    ...(organizationSchema as Object),
    areaServed: data.areaServed,
  } as Organization;
</script>

<SEO description={data.description} title={data.title} />
<LdTag schema={orgSchema} />
<LdTag schema={websiteSchema} />

<Navbar hero />
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
        {data.heading}
      </h1>
    </div>
  </section>
  <!--   
  <section id="services" class="">
    <div class="container w-full">
      <h2 class="text-3xl my-4 font-display">Windows & Doors</h2>
      <p>
        Marksman Exteriors specializes in one thing: exterior access to your
        home.
      </p>
    </div>
  </section>
  -->

  <section id="about" class="mt-8 mb-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">About</h2>
      <!-- <p class="my-4">George started in construction in 2010?....</p> -->
      <p class="my-4 text-lg">
        Marksman Exteriors specializes in one thing:
        <em> exterior access to your home. </em>
      </p>
      {#each site.about as p}
        <p class="my-4">
          {p}
        </p>
      {/each}

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
  <!-- 
  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <Carousel {images} />
    </div>
  </section> -->

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
