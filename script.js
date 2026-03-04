document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');

            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !expanded);
        });
    }



    // About Section Slider Automatic Rotation
    const aboutSlides = document.querySelectorAll('.about-slider .about-slide');
    if (aboutSlides.length === 3) {
        const classes = ['slide-prev', 'slide-center', 'slide-next'];
        let currentAboutIndex = 0;

        const rotateAboutSlider = () => {
            currentAboutIndex = (currentAboutIndex + 1) % classes.length;
            aboutSlides.forEach((slide, index) => {
                slide.classList.remove(...classes);
                const classIndex = (index + classes.length - currentAboutIndex) % classes.length;
                slide.classList.add(classes[classIndex]);
            });
        };

        setInterval(rotateAboutSlider, 4500); // Slightly different timing for variety
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Reference Expand/Collapse
    const refToggles = document.querySelectorAll('.ref-toggle');
    refToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const card = toggle.closest('.reference-card');
            const span = toggle.querySelector('span');
            card.classList.toggle('active');

            const isExpanded = card.classList.contains('active');
            toggle.setAttribute('aria-label', isExpanded ? 'Zobrazit méně' : 'Zobrazit více');
            if (span) {
                span.textContent = isExpanded ? 'Zobrazit méně' : 'Číst více';
            }
        });
    });

    // Cookie Banner
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');

    if (cookieBanner && cookieAccept) {
        // Show banner if not accepted
        if (!localStorage.getItem('cookieAccepted')) {
            setTimeout(() => {
                cookieBanner.classList.remove('hide');
            }, 2000);
        }

        cookieAccept.addEventListener('click', () => {
            cookieBanner.classList.add('hide');
            localStorage.setItem('cookieAccepted', 'true');
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > .container').forEach(el => {
        observer.observe(el);
    });

    // Peony Scroll Effect - Optimized to stop before pricing
    const peony = document.getElementById('peony-scroll');
    const aboutSection = document.getElementById('about-section');
    const pricingSection = document.getElementById('cenik');

    if (peony && aboutSection && pricingSection) {
        const handleScroll = () => {
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            const sectionRect = aboutSection.getBoundingClientRect();
            const sectionTopDoc = sectionRect.top + scrollPos;
            const pricingRect = pricingSection.getBoundingClientRect();
            const pricingTopDoc = pricingRect.top + scrollPos;

            // Start moving when the section is approaching the viewport
            const triggerPoint = sectionTopDoc - window.innerHeight;

            if (scrollPos > triggerPoint) {
                // Movement factor
                let yOffset = (scrollPos - sectionTopDoc + 300) * 0.7;

                // Limit the offset precisely before it hits the Pricing section
                const peonyHeight = peony.offsetHeight;
                // Stop significantly before it hits the Pricing section
                const maxOffset = pricingTopDoc - sectionTopDoc - peonyHeight - 300;

                if (yOffset < 0) yOffset = 0;
                if (yOffset > maxOffset) yOffset = maxOffset;

                peony.style.transform = `translateY(${yOffset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Active Navigation Link Highlighting
    const currentPath = window.location.pathname;
    const page = currentPath.split("/").pop();

    document.querySelectorAll('.nav-list a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === page || (page === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});
