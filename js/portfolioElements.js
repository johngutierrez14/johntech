document.addEventListener("DOMContentLoaded", function () {
    // Datos para los elementos del portafolio
    const portfolioItems = [
        { category: "web branding", title: "LOGIP SAS", imageSrc: "images/work_1_full.jpg", link: "portfolio-single-1.html" },
        { category: "web branding", title: "LOGIP SAS", imageSrc: "images/work_2_full.jpg", link: "portfolio-single-1.html" },
        { category: "web branding", title: "LOGIP SAS", imageSrc: "images/work_3_full.jpg", link: "portfolio-single-1.html" },
        { category: "web branding", title: "LOGIP SAS", imageSrc: "images/work_4_full.jpg", link: "portfolio-single-1.html" },
        { category: "web branding", title: "LOGIP SAS", imageSrc: "images/work_5_full.jpg", link: "portfolio-single-1.html" },
        { category: "dashboard", title: "Reporte RRHH", imageSrc: "images/work_6_full.jpg", link: "portfolio-single-2.html" },
        { category: "dashboard", title: "Reporte Producción", imageSrc: "images/work_7_full.jpg", link: "portfolio-single-2.html" },
        { category: "dashboard", title: "Reporte Producción", imageSrc: "images/work_8_full.jpg", link: "portfolio-single-2.html" },
        { category: "dashboard", title: "Reporte Producción", imageSrc: "images/work_9_full.jpg", link: "portfolio-single-2.html" },
        { category: "dashboard", title: "Reporte Finanzas", imageSrc: "images/work_10_full.jpg", link: "portfolio-single-2.html" },
        { category: "dashboard", title: "Reporte Transporte", imageSrc: "images/work_11_full.jpg", link: "portfolio-single-2.html" },
        // Agrega más elementos según sea necesario
    ];

    // Generar dinámicamente los elementos del portafolio
    const postsContainer = document.getElementById("posts");
    portfolioItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item", ...item.category.split(" "), "col-sm-6", "col-md-6", "col-lg-4", "isotope-mb-2");
        
        const linkElement = document.createElement("a");
        linkElement.href = item.link;
        linkElement.classList.add("portfolio-item", "ajax-load-page", "isotope-item", "gsap-reveal-img");
        linkElement.dataset.id = portfolioItems.indexOf(item) + 1;
        
        const overlayElement = document.createElement("div");
        overlayElement.classList.add("overlay");
        
        const iconElement = document.createElement("span");
        iconElement.classList.add("wrap-icon", "icon-link2");
        
        const contentElement = document.createElement("div");
        contentElement.classList.add("portfolio-item-content");
        
        const titleElement = document.createElement("h3");
        titleElement.textContent = item.title;
        
        const categoryElement = document.createElement("p");
        categoryElement.textContent = item.category.replace(/\s+/g, ', ');

        const imgElement = document.createElement("img");
        imgElement.src = item.imageSrc;
        imgElement.classList.add("lazyload", "img-fluid");
        imgElement.alt = "Images";
        
        // Agregar elementos al DOM
        contentElement.appendChild(titleElement);
        contentElement.appendChild(categoryElement);
        overlayElement.appendChild(iconElement);
        overlayElement.appendChild(contentElement);
        linkElement.appendChild(overlayElement);
        linkElement.appendChild(imgElement);
        itemElement.appendChild(linkElement);
        postsContainer.appendChild(itemElement);
    });
});
