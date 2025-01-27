<script>
	import Header from '$lib/components/header.svelte';
	import dv from '$lib/assets/img/dv.webp';
	import dj1 from '$lib/assets/img/dj1.webp';
	import coco from '$lib/assets/img/coco.webp';
	import pepper from '$lib/assets/img/pepper.webp';
	import dv2 from '$lib/assets/img/dv2.webp';

	const title = 'Husband, Father, and Software Engineer';
	const description = `
  I'm Dillon, a software engineer based out of Dayton Ohio.
  I currently work at GDIT desigining software for the EPA.
  I'm a husband to an amazing wife, and father to a beautiful daughter.
  I enjoy using technology to create connecting experiences.
  `;

	const blogs = [1, 2, 3];
</script>

<Header {title} {description}></Header>

<div class="carousel mt-16 rounded-box">
	<div class="carousel-item">
		<img src={dv} alt="My daughter and I" />
	</div>
	<div class="carousel-item">
		<img src={coco} alt="my chocolate lab" />
	</div>
	<div class="carousel-item">
		<img src={dj1} alt="My wife and I" />
	</div>
	<div class="carousel-item">
		<img src={pepper} alt="My black lab" />
	</div>
	<div class="carousel-item">
		<img src={dv2} alt="My daughter and I" />
	</div>
</div>

<div class="mt-8 flex w-full flex-col lg:flex-row">
	<div class="flex flex-grow flex-col p-6">
		<div class="prose">
			<h2>Recent Blogs</h2>
		</div>

		<div class="space-y-4 mt-4">
			{#if blogs.length}
				{#each blogs as b}
				<a href="/blog" class="card bg-base-200 w-full hover:bg-base-300">
					<div class="card-body">
						<h2 class="card-title">Card title {b}!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</div>
				</a>
				{/each}

			{:else}

			<div class="card bg-base-200 w-full">
				<div class="card-body">
					<h2 class="card-title">No Blogs Yet!</h2>
					<p>Check back in the future for blogs</p>
				</div>
			</div>
				
			{/if}
		</div>
	</div>
	<div class="divider lg:divider-horizontal"></div>
	<div>
		<div class="card rounded-box bg-base-200 p-6">
			<div class="prose">
				<h2 >Work History</h2>
			</div>
			<ul class="timeline timeline-vertical timeline-compact mx-8 mt-4">
				<li>
					<div class="timeline-start">June 2012</div>
					<div class="timeline-middle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
							<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd" />
						</svg>
						
					</div>
					<div class="timeline-end timeline-box">JD Connel Construction</div>
					<hr class="bg-primary"/>
				</li>
				<li>
					<hr class="bg-primary"/>
					<div class="timeline-start">May 2017</div>
					<div class="timeline-middle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
							<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd" />
						</svg>
						
					</div>
					<div class="timeline-end timeline-box">Altamira Technologies</div>
					<hr class="bg-primary"/>
				</li>
				<li>
					<hr class="bg-primary"/>
					<div class="timeline-start">April 2022</div>
					<div class="timeline-middle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
							<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd" />
						</svg>
					</div>
					<div class="timeline-end timeline-box">Sparq</div>
					<hr class="bg-primary"/>
				</li>
				<li>
					<hr class="bg-primary"/>
					<div class="timeline-start">Sept. 2022</div>
					<div class="timeline-middle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
							<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd" />
						</svg>
					</div>
					<div class="timeline-end timeline-box">Zachary Piper</div>
					<hr class="bg-primary"/>
				</li>
				<li>
					<hr class="bg-primary"/>
					<div class="timeline-start">April 2023</div>
					<div class="timeline-middle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
							<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd" />
						</svg>
					</div>
					<div class="timeline-end timeline-box">GDIT</div>
					<hr class="bg-primary"/>
				</li>
				<li>
					<div class="timeline-middle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
							<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59L7.3 9.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75Z" clip-rule="evenodd" />
						</svg>						
					</div>
				</li>
			</ul>
		</div>
		<div class="card rounded-box bg-base-200 p-6 mt-4">
			<a class="btn btn-neutral" href="/work">Resume</a>
		</div>
	</div>
</div>
