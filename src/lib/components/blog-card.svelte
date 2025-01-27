<script>

  let { date, title, text } = $props()
</script>

<div class="card bg-base-100 w-96 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{text}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Read Blog</button>
    </div>
  </div>
</div>