<script>
  import { words } from "./store";

  import Controls from "./components/Controls.svelte";
  import PreviewBox from "./components/PreviewBox.svelte";
  import ListExample from "./components/ListExample.svelte";
  import StarWarsExample from "./components/StarWarsExample.svelte";
  export let name;
</script>

<Controls />
<PreviewBox previewText={name} color="tomato" />
<ListExample list={$words} />
<StarWarsExample />
