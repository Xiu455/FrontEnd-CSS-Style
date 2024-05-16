let root = document.documentElement;
let buts = document.querySelectorAll('#but input[type="radio"]');

buts.forEach((but, index) => {
    but.addEventListener('change', () => {
        root.style.setProperty('--x', `${index * -100}%`);
    });
})