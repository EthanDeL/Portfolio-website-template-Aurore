// FUNCTION FOR SWITCH ICON
function toggleDarkMode() {
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        darkModeIcon.classList.remove('ri-sun-line');
        darkModeIcon.classList.add('ri-moon-line');
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.remove('ri-moon-line');
        darkModeIcon.classList.add('ri-sun-line');
        localStorage.setItem('darkMode', 'true');
    }
}

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    darkModeIcon.classList.remove('ri-moon-line');
    darkModeIcon.classList.add('ri-sun-line');
}