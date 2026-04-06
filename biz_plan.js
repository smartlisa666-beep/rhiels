document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.slide');
    const navItems = document.querySelectorAll('.nav-links li');
    const sectionNum = document.querySelectorAll('.section-num');

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations
    gsap.from('.hero-content .badge', { opacity: 0, y: 30, duration: 1, delay: 0.5 });
    gsap.from('.hero-content h1', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
    gsap.from('.hero-content .subtitle', { opacity: 0, y: 50, duration: 1, delay: 0.9 });
    gsap.from('.hero-content .meta', { opacity: 0, duration: 1, delay: 1.2 });

    // Click to navigate
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const slideId = item.getAttribute('data-slide');
            const targetSlide = isNaN(slideId) 
                ? document.querySelector(`#slide-${slideId}`)
                : document.querySelectorAll('.slide')[slideId];
            
            targetSlide.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update active nav on scroll
    const observerOptions = {
        root: container,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id.replace('slide-', '');
                
                navItems.forEach(nav => {
                    const navSlideId = nav.getAttribute('data-slide');
                    if (navSlideId === id) {
                        nav.classList.add('active');
                    } else if (!isNaN(navSlideId) && entry.target === document.querySelectorAll('.slide')[navSlideId]) {
                        nav.classList.add('active');
                    } else {
                        nav.classList.remove('active');
                    }
                });

                // Animate section content when it enters
                animateSection(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    function animateSection(section) {
        const h2 = section.querySelector('h2');
        const cards = section.querySelectorAll('.card, .vision-item, .service-item, .roadmap-step');
        
        gsap.to(h2, { opacity: 1, y: 0, duration: 0.8, overwrite: 'auto' });
        gsap.to(cards, { 
            opacity: 1, 
            y: 0, 
            stagger: 0.1, 
            duration: 0.8, 
            ease: "power2.out",
            overwrite: 'auto'
        });
    }

    // Set initial state for animations
    sections.forEach(section => {
        if (section.id !== 'slide-0') {
            const h2 = section.querySelector('h2');
            const cards = section.querySelectorAll('.card, .vision-item, .service-item, .roadmap-step');
            gsap.set(h2, { opacity: 0, y: 30 });
            gsap.set(cards, { opacity: 0, y: 30 });
        }
    });

    // Horizontal scroll mouse wheel handling (optional but better for smooth snap)
    // The container uses CSS scroll snap, which is best for native feel.
});

// Modal Logic
function showModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function hideModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
}

// Iframe Modal Logic
function showIframeModal(url) {
    const modal = document.getElementById('iframeModal');
    const iframe = document.getElementById('introIframe');
    iframe.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideIframeModal() {
    const modal = document.getElementById('iframeModal');
    const iframe = document.getElementById('introIframe');
    iframe.src = ""; // Stop content
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Combined Survey Modal Logic (Multi-Slide)
let currentModalSlide = 1;

function showCombinedModal() {
    const modal = document.getElementById('surveyModal');
    modal.classList.add('active');
    setModalSlide(1); // Always start at slide 1
    document.body.style.overflow = 'hidden';
}

function hideCombinedModal() {
    const modal = document.getElementById('surveyModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function setModalSlide(idx) {
    currentModalSlide = idx;
    const slides = document.querySelectorAll('.modal-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    const targetSlide = document.querySelector(`.modal-slide[data-slide-idx="${idx}"]`);
    if (targetSlide) targetSlide.classList.add('active');
    if (dots[idx - 1]) dots[idx - 1].classList.add('active');
}

function moveModalSlide(dir) {
    let next = currentModalSlide + dir;
    if (next < 1) next = 1;
    if (next > 2) next = 2; // Total 2 slides
    setModalSlide(next);
}

// Market Status Modal Logic (Multi-Slide)
let currentMarketSlide = 1;

function showMarketModal() {
    const modal = document.getElementById('marketModal');
    modal.classList.add('active');
    setMarketSlide(1);
    document.body.style.overflow = 'hidden';
}

function hideMarketModal() {
    const modal = document.getElementById('marketModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function setMarketSlide(idx) {
    currentMarketSlide = idx;
    const modal = document.getElementById('marketModal');
    const slides = modal.querySelectorAll('.modal-slide');
    const dots = modal.querySelectorAll('.m-dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    const targetSlide = modal.querySelector(`.modal-slide[data-market-idx="${idx}"]`);
    if (targetSlide) targetSlide.classList.add('active');
    if (dots[idx - 1]) dots[idx - 1].classList.add('active');
}

function moveMarketSlide(dir) {
    let next = currentMarketSlide + dir;
    if (next < 1) next = 1;
    if (next > 2) next = 2;
    setMarketSlide(next);
}

// Close modals on outside click
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        if (event.target == modal) {
            if (modal.id === 'surveyModal') hideCombinedModal();
            else if (modal.id === 'marketModal') hideMarketModal();
            else if (modal.id === 'iframeModal') hideIframeModal();
            else hideModal();
        }
    });
}

// Close modals on ESC key
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        hideModal();
        hideIframeModal();
        hideCombinedModal();
        hideMarketModal();
    }
}
