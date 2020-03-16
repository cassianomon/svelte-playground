<script>
  import { fontSize } from "../store";
</script>

<label>Font size: {$fontSize}px</label>
<input type="range" min="8" max="32" bind:value={$fontSize} />
