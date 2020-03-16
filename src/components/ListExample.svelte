<script>
  export let list;
</script>

{#if list}
  <ul>
    {#each list as item, i}
      <li>{i} - {item.name ? item.name : item}</li>
    {/each}
  </ul>
{:else}
  <p>No list at all!</p>
{/if}
