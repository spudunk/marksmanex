<script>
  import "../app.css";
  import "@fontsource/noto-sans";
  import "@fontsource/noto-serif";
  import "@fontsource/bebas-neue";
  import Footer from "$lib/Footer.svelte";
  import { site } from "$lib";
</script>

<svelte:head>
  <!--  Favicon & WebManifest -->

  <link rel="icon" href={`${site.url}favicon.ico`} />
  <!-- <link
    rel="apple-touch-icon"
    sizes="180x180"
    href={`${site.url}favicon/apple-touch-icon.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href={`${site.url}favicon/favicon-32x32.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href={`${site.url}favicon/favicon-16x16.png`}
  /> -->
  <link rel="manifest" href={`${site.url}site.webmanifest`} />
</svelte:head>

<slot />
<Footer />

<style lang="postcss">
  :global(body) {
    @apply font-notoSans;
  }
</style>
