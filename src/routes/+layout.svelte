<script>
  import "../app.css";
  import "@fontsource/noto-sans";
  import "@fontsource/noto-serif";
  import "@fontsource/bebas-neue";
  import Footer from "$lib/Footer.svelte";
</script>

<slot />
<Footer />

<style lang="postcss">
  :global(body) {
    @apply font-notoSans;
  }
</style>
