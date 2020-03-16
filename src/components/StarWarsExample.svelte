<script>
  import { fade } from "svelte/transition";
  import { planets } from "../store";

  import ListExample from "./ListExample.svelte";

  let visible = true;

  async function getPlanet() {
    const id = Math.floor(Math.random() * 60) + 1;
    const response = await fetch(`https://swapi.co/api/planets/${id}`);
    const data = await response.json();

    planets.update(planets => [...planets, data]);
    return data;
  }

  let planetPromise = getPlanet();
</script>

{#if visible}
  <p transition:fade={{ duration: 300 }}>
    {#await planetPromise}
      Loading planet...
    {:then planet}
      Your next planet is: {planet.name}
    {:catch someError}
      System error: {someError.message}.
    {/await}
  </p>
{/if}

<button on:click={() => (planetPromise = getPlanet())}>
  Explore the next planet
</button>

<ListExample list={$planets} />
