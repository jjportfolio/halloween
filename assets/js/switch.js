/*===== SWITCH STYLE =====*/
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('style-toggle');
    const themes = ['black-theme', 'green-theme', 'red-theme'];
    let currentThemeIndex = 0;

    document.documentElement.classList.add('black-theme');

    toggleButton.addEventListener('click', () => {
        document.documentElement.classList.remove(themes[currentThemeIndex]);

        currentThemeIndex = (currentThemeIndex + 1) % themes.length;

        document.documentElement.classList.add(themes[currentThemeIndex]);
    });
});
