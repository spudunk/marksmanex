<script lang="ts">
  import { site } from "$lib";
  import Google from "$lib/icons/google.svg";
  import Facebook from "$lib/icons/facebook.svg";
  import Yelp from "$lib/icons/yelp_burst.svg";
  site.social.google = "https://google.com";
</script>

<nav
  class={$$props.class
    ? `flex gap-3 items-center rounded h-7  ${$$restProps.class}`
    : "flex gap-3 items-center rounded h-7"}
>
  {#if site.social.google}
    <a target="_blank" class="h-full" href={site.social.google}>
      <img
        class="h-full inline-block"
        src={Google}
        alt="Google logo"
        aria-label="Google Business Profile"
      />
    </a>
  {/if}

  {#if site.social.facebook}
    <a target="_blank" class="h-full" href={site.social.facebook}>
      <img
        class="h-full inline-block bg-white rounded-md"
        src={Facebook}
        alt="Facebook logo"
        aria-label="Facebook Business Profile"
      />
    </a>
  {/if}

  {#if site.social.yelp}
    <a target="_blank" class="h-full" href={site.social.yelp}>
      <img class="h-full inline-block" src={Yelp} alt="Yelp logo" aria-label="Yelp Business Profile" />
    </a>
  {/if}
</nav>
