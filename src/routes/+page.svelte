<script lang="ts">
  import MetaTags from "$lib/SEO/MetaTags.svelte";
  import LdTag from "$lib/SEO/LDTag.svelte";
  import Contact from "$lib/Contact.svelte";
  import ReviewLinks from "$lib/ReviewLinks.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import CfImage from "$lib/CfImage.svelte";
  import {
    site,
    organizationSchema,
    websiteSchema,
    galleryImages,
    imagePath,
  } from "$lib";
  // import heroImage from "$lib/hero.jpg";
</script>

<MetaTags />
<LdTag schema={organizationSchema} />
<LdTag schema={websiteSchema} />

<svelte:head>
  <!-- Preload Hero image for Lighthouse Performance -->
  <link
    rel="preload"
    as="image"
    href={`${imagePath}/8d1dfa22-0e73-40e2-2edf-3218fede6400/public`}
  />
</svelte:head>

<Navbar hero />
<main class="relative">
  <section
    id="hero"
    class="-z-10 relative min-h-[90vh] flex flex-col justify-center"
  >
    <div
      class="absolute top-0 left-0 bottom-0 right-0 overflow-clip flex items-center"
    >
      <CfImage
        alt="luxury home with new windows"
        id="8d1dfa22-0e73-40e2-2edf-3218fede6400"
        class="min-w-full min-h-full object-cover"
        widths="[360, 480, 800]"
        srcWidth="1080"
      />
    </div>
    <div
      class="mix-blend-multiply backdrop-blur opacity-60 absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-neutral-500 via-neutral-950 to-neutral-500"
    ></div>
    <div
      class="font-display font-light absolute top-0 left-0 bottom-0 right-0 container flex flex-col gap-6 justify-center items-center text-center h-full"
    >
      <!-- <p class=" md:hidden text-xl text-neutral-200">
        {site.company.name}
      </p> -->
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
      <h2 class="text-3xl mb-4 mt-12 font-display">Benefits</h2>
      <p>
        {@html site.servicesCopy}
      </p>
    </div>
  </section>

  <section id="about" class="mt-8 mb-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">About</h2>
      <p class="my-4 text-lg">
        {@html site.about[0]}
      </p>
      {#each site.about.slice(1) as p}
        <p class="my-4">
          {@html p}
        </p>
      {/each}

      <ReviewLinks />
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <Carousel images={galleryImages} />
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
