// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Array of testimonials
    const testimonials = [
        {
            quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
            author: "Eric Ingram",
            position: "Product Designer @facebook",
            image: "images/person_man_1.jpg"
        },
        {
            quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
            author: "Ryan Mullins",
            position: "Product Designer @Shopify",
            image: "images/person_man_2.jpg"
        },
        // Add more testimonials as needed
    ];

    // Function to create a testimonial HTML
    function createTestimonial(testimonial) {
        return `
            <div>
                <div class="testimonial-v1">
                    <div class="testimonial-inner-bg">
                        <span class="quote">&ldquo;</span>
                        <blockquote>${testimonial.quote}</blockquote>
                    </div>
                    <div class="testimonial-author-info">
                        <img src="${testimonial.image}" alt="Image">
                        <h3>${testimonial.author}</h3>
                        <span class="d-block position">${testimonial.position}</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to add testimonials to the container
    function addTestimonialsToContainer(container, testimonials) {
        const containerElement = document.getElementById(container);
        testimonials.forEach(testimonial => {
            const testimonialHtml = createTestimonial(testimonial);
            containerElement.insertAdjacentHTML('beforeend', testimonialHtml);
        });
    }

    // Add testimonials to the container
    addTestimonialsToContainer('testimonial-container', testimonials);
});
