<script lang="ts">
  import type { PageData } from "./$types";
  import type { Organization } from "schema-dts";

  export let data: PageData;

  import SEO from "$lib/SEO/MetaTags.svelte";
  import LdTag from "$lib/SEO/LDTag.svelte";
  import Contact from "$lib/Contact.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import ReviewLinks from "$lib/ReviewLinks.svelte";

  import { gallery, site } from "$lib";
  import { organizationSchema, websiteSchema } from "$lib/schemas";

  const orgSchema = {
    ...(organizationSchema as Object),
    areaServed: data.areaServed,
  } as Organization;
  const url = `${site.url}/${data.slug}`;
</script>

<SEO
  description={data.description}
  title={data.title}
  {url}
  canonical={url}
  domain={site.url}
/>
<LdTag schema={orgSchema} />
<LdTag schema={websiteSchema} />

<svelte:head>
  <!-- Preload Hero image for Lighthouse Performance -->
  <link
    rel="preload"
    as="image"
    href="https://marksmanexteriors.com/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw/8d1dfa22-0e73-40e2-2edf-3218fede6400/public"
  />
</svelte:head>

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
      class="mix-blend-multiply backdrop-blur opacity-60 absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-neutral-500 via-neutral-950 to-neutral-500"
    ></div>
    <div
      class="font-display font-light absolute top-0 left-0 bottom-0 right-0 container flex flex-col gap-6 justify-center items-center text-center h-full"
    >
      <!-- <p class=" md:hidden text-xl text-neutral-200">
        {site.company.name}
      </p> -->
      <p class="text-3xl sm:text-4xl md:text-5xl text-neutral-200">
        Quality that Shines
      </p>
      <h1 class="text-xl sm:text-2xl md:text-3xl text-neutral-200">
        {data.heading}
      </h1>
    </div>
  </section>

  <section id="services" class="">
    <div class="container w-full">
      <h2 class="text-3xl mb-4 mt-12 font-display">Benefits</h2>
      <p>{@html site.services[0]}</p>
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

  <section id="products" class="mb-16">
    <div class="container w-full">
      <h2 class="text-3xl mb-4 mt-12 font-display">Product Lines</h2>
      {#each site.products.lines as prod, i (i)}
      <h3 class="text-xl font-bold mb-2 mt-8">{prod.name}</h3>
      <p>{prod.description}</p>
      {#if prod.catalogs}
        <ul class="mt-4 flex flex-col md:flex-row flex-wrap gap-4">
          {#each prod.catalogs as cat}
            <li><a class="link" target="_blank" href={cat.link}>{cat.title}</a></li>
          {/each}
        </ul>
      {/if}
    {/each}
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <Carousel {gallery} />
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
