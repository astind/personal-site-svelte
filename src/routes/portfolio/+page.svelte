<script>
  import Header from "$lib/components/header.svelte";
  import website from "$lib/assets/img/website.png";

  const title = "Portfolio";
  const description = `
    Check out a list of my personal and professional work.
  `

</script>

<div class="min-h-dvh">
  <Header {title} {description}></Header>

  <div class="divider my-8"></div>

  <div class="flex flex-col space-y-6">
    <div class="card lg:card-side bg-base-200 shadow-xl">
      <figure>
        <img src={website} alt="screenshot of my website"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">This Website!</h2>
        <p>I built my website using SvelteKit, to help me learn Svelte.</p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" href="https://github.com/astind/personal-site-svelte">Repo Link</a>
        </div>
      </div>
    </div>
  </div>

</div>



