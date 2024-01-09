<script lang="ts">
  import Google from "$lib/icons/google.svg";
  import Yelp from "$lib/icons/yelp_burst.svg";
  import MetaTags from "$lib/SEO/MetaTags.svelte";
  import LdTag from "$lib/SEO/LDTag.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import Contact from "$lib/Contact.svelte";
  import { site, organizationSchema, websiteSchema, galleryImages } from "$lib";
  import Navbar from "$lib/Navbar.svelte";
</script>

<MetaTags />
<LdTag schema={organizationSchema} />
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
        {site.subheading}
      </p>
      <h1 class="text-xl sm:text-2xl md:text-3xl text-neutral-200">
        {site.heading}
      </h1>
    </div>
  </section>

  <section id="services" class="">
    <div class="container w-full">
      <h2 class="text-3xl my-4 font-display">Benefits</h2>
      <p>
        {@html site.servicesCopy}
      </p>
    </div>
  </section>

  <section id="about" class="mt-8 mb-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">About</h2>
      <p class="my-4 text-lg">
        {@html site.about.shift()}
      </p>
      {#each site.about as p}
        <p class="my-4">
          {@html p}
        </p>
      {/each}

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
      <!-- <Carousel debug images={galleryImages} /> -->
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
