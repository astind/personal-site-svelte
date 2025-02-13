
export const darkMode = $state({
  on: false
})

export function toggleDarkMode() {
  if (darkMode.on) {
    document.body.classList.add('dark');
    document.querySelector('html')?.setAttribute('data-theme', 'dim');
  } else {
    document.body.classList.remove('dark');
    document.querySelector('html')?.setAttribute('data-theme', 'retro');
  }
}