<script lang="ts">
  import { page } from "$app/stores";
  import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar />
<main>
  <div class="py-20 container">
    <h1 class="text-2xl">{$page.status}: {$page.error?.message}</h1>
  </div>
</main>
