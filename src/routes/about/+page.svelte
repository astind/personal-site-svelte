<script>
  import Header from "$lib/components/header.svelte";
  import me from "$lib/assets/img/me.webp";
  import j from "$lib/assets/img/j.webp";
  import v from "$lib/assets/img/v.webp";
  import cp from "$lib/assets/img/cp.webp"

  const title = "About Me"
</script>

<div>
  <Header {title}></Header>

  <div class="flex flex-col space-y-16 mt-8">

    <div class="hero">
      <div class="hero-content flex-col lg:flex-row">
        <img src={me} alt="me" class="rounded-lg shadow-2xl"/>
        <div class="px-4">
          <h1 class="text-5xl font-bold">Dillon</h1>
          <p class="py-6">
            I'm a software engineer with 8 years of experience. Most of my experience is in building full-stack applications using a MEAN stack.
            But, I am also enjoying building with Jamstack frameworks such as SvelteKit. 
            I love spending my free time with my family. My hobbies include: basketball, board games, and paddle boarding.
          </p>
        </div>
      </div>
    </div>

    <div class="hero">
      <div class="hero-content flex-col lg:flex-row">
        <div class="px-4">
          <h1 class="text-5xl font-bold">Joanna</h1>
          <p class="py-6">
            I have been married to my wife Joanna for 7 years. I'm incredibly lucky that she still puts up with me.
            She is an artist and seamstress.

          </p>
        </div>
        <img src={j} alt="my wife Joanna" class="rounded-lg shadow-2xl"/>
      </div>
    </div>

    <div class="hero">
      <div class="hero-content flex-col lg:flex-row">
        <img src={v} alt="My daughter Virginia" class="rounded-lg shadow-2xl"/>
        <div class="px-4">
          <h1 class="text-5xl font-bold">Virginia</h1>
          <p class="py-6">
            Our toddler who always keeps up on our toes. 
            She loves basketballs, cars, and Bluey. 
          </p>
        </div>
      </div>
    </div>

    <div class="hero">
      <div class="hero-content flex-col lg:flex-row">
        <div class="px-4">
          <h1 class="text-5xl font-bold">Coco & Pepper</h1>
          <p class="py-6">
            Our two puppies. Coco is a chocolate lab, and Pepper is a black lab mix.
            They both love getting scratches.
          </p>
        </div>
        <img src={cp} alt="Coco and Pepper" class="rounded-lg shadow-2xl"/>
      </div>
    </div>

  </div>
</div>
