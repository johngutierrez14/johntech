// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Array of blog entries
    const blogEntries = [
        {
            title: 'A Mountaineering Guide For Beginners',
            author: 'Joefrey',
            time: '5 mins read',
            image: 'images/post_1.jpg',
            link: 'blog-single.html'
        },
        // Add more entries as needed
    ];

    // Function to create a blog entry HTML
    function createBlogEntry(entry) {
        return `
            <div class="col-sm-6 col-md-6 col-lg-4 blog-post-entry" data-aos="fade-up" data-aos-delay="0">
                <a href="${entry.link}" class="grid-item blog-item w-100 h-100">
                    <div class="overlay">
                        <div class="portfolio-item-content">
                            <h3>${entry.title}</h3>
                            <p class="post-meta">By ${entry.author} <span class="small">&bullet;</span> ${entry.time}</p>
                        </div>
                    </div>
                    <img src="${entry.image}" class="lazyload" alt="Image" />
                </a>
            </div>
        `;
    }

    // Function to add blog entries to the container
    function addBlogEntriesToContainer(container, entries) {
        const containerElement = document.getElementById(container);
        entries.forEach(entry => {
            const entryHtml = createBlogEntry(entry);
            containerElement.insertAdjacentHTML('beforeend', entryHtml);
        });
    }

    // Add blog entries to the container
    addBlogEntriesToContainer('blog-container', blogEntries);
});
