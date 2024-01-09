<script>
  import { site, locations, socialLinks } from "$lib";

  // update footer copyright year automatically
  const date = new Date();
  const currentYear = date.getFullYear();
  const copyrightYear = 2024;
</script>

<footer class="py-8 bg-gradient-to-b from-neutral-200 to-neutral-50">
  <div class="container min-h-12 grid gap-4 md:grid-cols-3 md:gap-2 lg:gap-6">
    <nav class="w-full mb-2">
      <h3 class="font-bold font-display">Social Links</h3>
      <ul class="grid md:grid-cols-2 h-fit font-bold">
        {#each socialLinks as social}
          {#if social.href}
            <li>
              <a
                class="flex items-center gap-1 py-1"
                target="_blank"
                href={social.href}
              >
                {#if social.icon}
                  <img
                    class="h-[1em] inline-block"
                    src={social.icon}
                    alt={social.iconAlt}
                  />
                {/if}
                <span class="link"> {social.name} </span>
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    </nav>
    <nav>
      <h3 class="font-bold font-display">Areas Served</h3>
      <ul class="grid grid-cols-2 font-bold">
        {#each Object.entries(locations) as [slug, value] (slug)}
          <li>
            <a class="link text-xs py-1" href={`/${slug}`}>{value.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
    <div
      class="pt-2 md:pt-6 flex flex-col md:text-center md:col-start-2 md:row-start-1"
    >
      <a class="inline-block" target="_blank" href={site.company.sosLink}>
        <span>
          &copy; {copyrightYear}
          {#if currentYear > copyrightYear}
            &dash; {currentYear}
          {/if}
        </span>
        <span class="whitespace-pre">
          {site.company.legalName.toUpperCase()}
        </span>
      </a>
      <a class="inline-block" target="_blank" href={site.license.url}
        >{site.license.text}</a
      >
      <p>{site.company.address}</p>
    </div>
  </div>
</footer>

