'use script';
const DARK_MODE_ENABLED_KEY = 'dark-mode-activated';

restorePreviousState();

const darkModeToggle = document.querySelector('.dark-mode__toggle');
darkModeToggle.addEventListener('change', (ev) => {
    if (darkModeToggle.checked) darkMode();
    else lightMode();
    
});


function darkMode() {
    console.log('dark mode ENABLED');
    document.documentElement.dataset.theme = 'dark';

    // save state in local storage
    localStorage.setItem(DARK_MODE_ENABLED_KEY, 'true');
}

function lightMode() {
    console.log('dark mode DISABLED');
    document.documentElement.dataset.theme = '';
    document.documentElement.removeAttribute('data-theme');

    // save state in local storage
    localStorage.setItem(DARK_MODE_ENABLED_KEY, 'false');
}

function restorePreviousState() {
    const darkModeEnabled = 
        localStorage.getItem(DARK_MODE_ENABLED_KEY) === 'true' ? true : false;
    if (darkModeEnabled) darkMode();
    else lightMode();
}