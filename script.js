// JavaScript for Portfolio Animations and Interactions

document.addEventListener("DOMContentLoaded", function() {
    // Handle "See More" buttons in portfolio cards
    const seeMoreButtons = document.querySelectorAll(".portfolio-card .overlay button");

    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const projectTitle = event.target.closest('.portfolio-card').querySelector('.overlay h3').innerText;
            alert(`You clicked "See More" for: ${projectTitle}`);

            // Navigate to project details page
            // window.location.href = `project-details.html?title=${encodeURIComponent(projectTitle)}`;
        });
    });

    // Load more projects dynamically when "View More" button is clicked
    const viewMoreButton = document.querySelector(".portfolio > button");

    if (viewMoreButton) {
        viewMoreButton.addEventListener("click", function() {
            const portfolioCards = document.querySelector(".portfolio-cards");

            const newCard = document.createElement("div");
            newCard.classList.add("portfolio-card");
            newCard.innerHTML = `
                <img src="asset/images/new-project-image.jpg" alt="">
                <div class="overlay">
                    <h3>New Project Title</h3>
                    <p>New project description goes here. This is dynamically added content.</p>
                    <button>See More -></button>
                </div>
            `;

            //portfolioCards.appendChild(newCard);

            // Add event listener for the new "See More" button
            //newCard.querySelector("button").addEventListener("click", function() {
            //    alert('You clicked "See More" for: New Project Title');
            // window.location.href = `project-details.html?title=New Project Title`;
            //});
        });
    }

    // Smooth Scroll Animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // Skill Card Hover Animation
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.2)";
        });

        card.addEventListener('mouseout', function() {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Fade-in Animation on Scroll for Sections
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
