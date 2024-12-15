document.addEventListener('DOMContentLoaded', function () {
    // Portfolio Data
    const portfolioItems = [
        {
            image: "1.jpg",
            customer: "Rahul & Priya",
            location: "HSR Layout, Bangalore",
            testimonial: "Pranava Furnitek completely transformed our kitchen into a modern masterpiece. Their attention to detail and innovative design truly exceeded our expectations."
        },
        {
            image: "2.jpg",
            customer: "Amit & Sneha",
            location: "Indiranagar, Bangalore",
            testimonial: "We were amazed by the professional approach and exceptional craftsmanship of Pranava Furnitek. Our bedroom now feels like a luxurious retreat."
        },
        {
            image: "3.jpg",
            customer: "Karthik & Deepa",
            location: "Whitefield, Bangalore",
            testimonial: "The team's creativity and precision in designing our living room were outstanding. Every element was perfectly curated to match our vision."
        },
        {
            image: "4.jpg",
            customer: "Suresh & Meena",
            location: "JP Nagar, Bangalore",
            testimonial: "From concept to execution, Pranava Furnitek delivered a comprehensive interior solution that transformed our entire home. Their professionalism is unmatched."
        }
    ];

    // Render Portfolio Items
    function renderPortfolioItems() {
        const portfolioTrack = document.querySelector('.portfolio-track');
        portfolioTrack.innerHTML = ''; // Clear existing items

        portfolioItems.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('portfolio-card');
            card.innerHTML = `
                <img src="${item.image}" alt="Portfolio Image">
                <div class="portfolio-card-content">
                    <p class="location">${item.location}</p>
                    <div class="customer-testimonial">
                        <span class="customer-name">${item.customer}</span>
                        <p class="testimonial">"${item.testimonial}"</p>
                    </div>
                </div>
            `;
            portfolioTrack.appendChild(card);
        });

        // Setup slider navigation and auto-scroll
        setupSliderNavigation();
        setupSmoothAutoScroll();
    }

    // Slider Navigation
    function setupSliderNavigation() {
        const track = document.querySelector('.portfolio-track');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        nextBtn.addEventListener('click', () => {
            const scrollAmount = track.clientWidth;
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const scrollAmount = track.clientWidth;
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // Smooth Auto Scroll Function
    function setupSmoothAutoScroll() {
        const track = document.querySelector('.portfolio-track');
        const cards = track.querySelectorAll('.portfolio-card');

        // Ensure multiple cards exist for scrolling
        if (cards.length <= 1) return;

        let currentIndex = 0;
        let scrollInterval;

        function smoothScroll() {
            // Calculate the target scroll position
            const cardWidth = cards[0].offsetWidth;
            const gap = parseInt(window.getComputedStyle(track).gap) || 24;
            const scrollAmount = cardWidth + gap;

            // Move to next card
            currentIndex = (currentIndex + 1) % cards.length;

            // Smooth scroll to the next card
            track.scrollTo({
                left: currentIndex * scrollAmount,
                behavior: 'smooth'
            });
        }

        // Start auto-scroll
        function startAutoScroll() {
            // Scroll every 7 seconds to allow more time to view each card
            scrollInterval = setInterval(smoothScroll, 7000);
        }

        // Stop auto-scroll
        function stopAutoScroll() {
            clearInterval(scrollInterval);
        }

        // Initial start of auto-scroll
        startAutoScroll();

        // Pause on hover
        track.addEventListener('mouseenter', stopAutoScroll);

        // Resume on mouse leave
        track.addEventListener('mouseleave', startAutoScroll);
    }

    // Add phone number beside the call button on hover
    function setupCallHoverEffect() {
        const callBtn = document.querySelector('.call-btn');

        // Ensure the call button exists
        if (!callBtn) {
            console.error("Call button with class 'call-btn' not found.");
            return;
        }

        // Create text element for phone number
        const phoneText = document.createElement('span');
        phoneText.textContent = '+91 9620159757'; // Your phone number
        phoneText.classList.add('phone-text'); // Add a class for styling
        phoneText.style.display = 'none'; // Initially hidden
        callBtn.appendChild(phoneText); // Append the text to the call button

        // Show the phone number text on hover
        callBtn.addEventListener('mouseenter', () => {
            phoneText.style.display = 'inline'; // Show the text
        });

        // Hide the phone number text when the mouse leaves
        callBtn.addEventListener('mouseleave', () => {
            phoneText.style.display = 'none'; // Hide the text
        });
    }

    // Smooth scroll to the "Our Recent Work" section
    function setupExploreWorkScroll() {
        const exploreWorkBtn = document.getElementById('explore-work-btn');
        const portfolioSection = document.getElementById('portfolio');

        if (!exploreWorkBtn || !portfolioSection) {
            console.error("Explore Work button or Portfolio section not found.");
            return;
        }

        exploreWorkBtn.addEventListener('click', function () {
            portfolioSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling effect
                block: 'start' // Align to the top of the section
            });
        });
    }

    // Initialize all functions
    renderPortfolioItems();
    setupSliderNavigation();
    setupSmoothAutoScroll();
    setupCallHoverEffect();
    setupExploreWorkScroll(); // Add smooth scroll for "Explore Our Work"
});
