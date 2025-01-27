<script>
  let { 
    title, 
    description = "" 
  } = $props()
</script>

<div class="prose">
  <h1>{title}</h1>
  <p>{description}</p>
</div>