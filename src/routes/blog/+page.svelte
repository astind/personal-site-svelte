<script lang="ts">
  import Header from "$lib/components/header.svelte";
  
  let { data } = $props();
  
  const title = "Blog";
  const description = "No Blog posts yet! Check back later";
</script>

<div class="min-h-dvh">
  <Header {title} {description}></Header>

  <div></div>
</div>