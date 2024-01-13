<script lang="ts">
  import Google from "$lib/icons/google.svg";
  import Facebook from "$lib/icons/facebook.svg";
  import Yelp from "$lib/icons/yelp_burst.svg";
  import { site } from "$lib";
</script>

{#if site.social.google}
  <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
    <img class="h-6 inline-block" src={Google} alt="Google logo" />
    <a target="_blank" class="link p-2" href={site.social.google}>
      Google Reviews
    </a>
  </p>
{/if}

{#if site.social.facebook}
  <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
    <img class="h-6 inline-block" src={Facebook} alt="Facebook logo" />
    <a
      target="_blank"
      class="link p-2"
      href={`${site.social.facebook}`}
    >
      Facebook
    </a>
  </p>
{/if}

{#if site.social.yelp}
  <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
    <img class="h-6 aspect-square inline-block" src={Yelp} alt="Yelp logo" />
    <a target="_blank" class="link p-2" href={`${site.social.yelp}#reviews`}>
      Yelp Reviews
    </a>
  </p>
{/if}
