<script>
  import { fontSize } from "../store";

  export let previewText;
  export let color;
</script>

<style>
  label {
    margin: 0.5 rem 0;
  }
  textarea {
    width: 15rem;
    height: 15rem;
    font-family: "Courier New", Courier, monospace;
  }
</style>

<label for="preview">Preview:</label>
<textarea
  name="preview"
  id="preview"
  style="font-size: {$fontSize}px; color: {color}"
  bind:value={previewText} />
