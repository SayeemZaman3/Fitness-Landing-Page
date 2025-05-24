// Navigation
const navLinks = [
    { name: 'Home', url: 'index.html' },
    { name: 'About', url: 'about.html' },
    { name: 'Pricing', url: 'pricing.html' },
    { name: 'Contact', url: 'contact.html' }
];

navLinks.forEach( link => {
    let btn = document.createElement('button');
    let nav = document.querySelector('nav');
    
    btn.textContent = link.name;
    btn.onclick = () => {
        window.location.href = link.url;
    }
    nav.appendChild(btn);
    
    if(window.location.pathname.includes(link.url)) {
        btn.classList.add('active');
    };
})

// Viewport Height
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);