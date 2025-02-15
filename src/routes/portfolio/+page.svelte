<script>
  import Header from "$lib/components/header.svelte";
  import website from "$lib/assets/img/website.webp";
  import breakout from "$lib/assets/img/breakout.webp"

  const title = "Portfolio";
  const description = `
    Check out a list of my personal and professional work.
  `

</script>

<div class="min-h-dvh">
  <Header {title} {description}></Header>

  <div class="divider my-8"></div>

  <div class="flex flex-col space-y-20 mx-20">
    <div class="card sm:card-side bg-base-200 shadow-xl">
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

    <div class="card sm:card-side bg-base-200 shadow-xl">
      <figure>
        <img src={breakout} alt="screenshot of breakout game"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">Breakout Clone</h2>
        <p>
          I made a breakout clone as a Valentines Day gift for my wife.
        </p>
        <p>It's built using Phaser 3</p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" href="https://v-day-game.vercel.app">Visit Site</a>
        </div>
      </div>
    </div>

  </div>
</div>



