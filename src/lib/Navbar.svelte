<script lang="ts">
  // import Logo from "$lib/Logo.svelte";
  import { page } from "$app/stores";
  import { site } from "$lib";
  import Logo from "$lib/Logo.svelte";
  export let hero = false;
  let y = 0;
  $: atTop = y < 25;
  $: expand = atTop && hero && $page.status == 200;
</script>

<svelte:window bind:scrollY={y} />

<header
  class={`${$$props.class || ""} ${
    expand ? "bg-opacity-0" : "bg-opacity-80 backdrop-blur-sm"
  } z-50 fixed top-0 left-0 w-full bg-neutral-800 transition-all duration-300`}
>
  <div
    class="container w-full grid grid-cols-nav justify-between items-center py-2 min-h-12"
  >
    <a href="/" class="flex gap-2 items-center">
      <Logo class={`${expand? "h-10 sm:h-20": "h-10"} transition-all`} color="white" />
    </a>
    <!-- <div></div> -->

    <div class="flex flex-row-reverse">
      <a
        href="#contact"
        class="hidden sm:inline-block text-end text-xl text-stone-800 px-4 py-1 rounded bg-neutral-200 hover:bg-neutral-100 hover:scale-105 transition-all"
        >Contact Us</a
      >
      <a
        href={`tel:${site.company.telephone}`}
        class="inline-block sm:hidden text-end text-xl text-stone-800 px-4 py-1 rounded bg-neutral-200"
        >Call Now</a
      >
    </div>
  </div>
</header>

<style>
  .grid-cols-nav {
    grid-template-columns: auto 1fr auto;
  }
</style>
