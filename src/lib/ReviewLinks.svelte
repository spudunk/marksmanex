<script lang="ts">
  import { site } from "$lib";
</script>

{#each site.socials as social (social.id)}
  <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
    <img class="h-6 inline-block" src={social.icon} alt={social.iconAlt} />
    <a target="_blank" class="link p-2" href={social.link}> Google Reviews </a>
  </p>
{/each}
