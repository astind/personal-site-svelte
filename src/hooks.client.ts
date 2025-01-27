import { darkMode, toggleDarkMode } from "$lib/utilities/darkmode.svelte";
import type { ClientInit } from "@sveltejs/kit";

export const init: ClientInit = async () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode.on = true;
    toggleDarkMode()
  }
}