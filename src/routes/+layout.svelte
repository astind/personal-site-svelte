<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { darkMode, toggleDarkMode } from '$lib/utilities/darkmode.svelte';

	function onchange() {
		toggleDarkMode();
	}

	let { children } = $props();
</script>

<div class="flex flex-col w-full max-w-screen-xl mx-auto bg-base-100">
	<div class="mt-4 mx-auto w-full max-w-screen-md">
		<Navbar></Navbar>
	</div>
	<div class="flex justify-end mt-2 mx-4 lg:mx-16">
		<label class="flex cursor-pointer gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round">
				<circle cx="12" cy="12" r="5" />
				<path
					d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
			</svg>
			<input type="checkbox" bind:checked={darkMode.on} class="toggle theme-controller" {onchange}/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
		</label>
	</div>
	<div class="mt-16 mx-6 lg:mx-24">
		{@render children()}
	</div>
	<div class="mt-8">
		<Footer></Footer>
	</div>
</div>
