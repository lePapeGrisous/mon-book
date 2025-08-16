document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll('.navbar button');
    const sections = document.querySelectorAll('.section');
    let index = 0;
    let btnVisite = document.getElementById("btnVisite");
    let TitreSiteElement = document.getElementById("TitreSite");
    // gestion du texte de présentations des différents sites en fonctions de l'image affichée
    let txtPresentationSite = [
        "voici un site web réalisé en partenariat avec une équipe d'étudiants en journalisme.Ce site a été développé en PHP avec Twig pour l'affichage.Il est fourni avec un back office permettant aux journalistes d’intégrer leurs articles comme ils le souhaitent. Le code est disponible sur mon GitHub",
        "Ce site a été  réalisé en partenariat avec la maison science alsace. Il a était développé avec symphonie pour la base de donnée, twig pour l'affichage et javascript pour les interractions. Il s'agit d'un jeu pour apprendre au plus jeune le cycle de l'eau. Je vous conseille d'aller tester le jeu par vous même pour vous rendre mieux compte du travailler réalisé ici. Ce jeu est aussi fournis avec un back office afin de permettre à la maisosn science alsace de modifier le contenu du jeu. Le code est disponible sur mon GitHub",
        "Ce site à était réalisé pour une entreprise de location d'appartement saisionnier. J'ai réalisé l'entierté des pages sur wordpress, majoritairement à l'aide d'élementor. Le site est responsive et s'adapte à tous les écrans. Il est aussi optimisé pour le référencement naturel. Le site est en ligne et vous pouvez le visiter pour voir le résultat final. Le code n'est pas disponible car il s'agit d'un site client.",
        "Ce site a été réaliser pour un centre de formation. Il a était réaliser sur wordpress, majoritairement à l'aide d'élementor. Le site est responsive et s'adapte à tous les écrans. Il est aussi optimisé pour le référencement naturel. Le site est en ligne et vous pouvez le visiter pour voir le résultat final. Le code n'est pas disponible car il s'agit d'un site client."
    ];
    // liens pour les différents sites
    let LienSiteWeb = [
        "https://cuej.info/mini-sites/europe2024/visitor.php?page=theme",
        "https://decrypteau.maurerc.etu.mmi-unistra.fr/",
        "https://edaee-immo.fr/",
        "https://cafes-formations.re/"

    ];
    let TitreSite = [
        "Site web CUEJ",
        "Site web Décrypteau",
        "Site web EdaeeImmo",
        "Site web Cafés Formations"
    ];

    document.getElementById("btnNext").addEventListener("click", function () {
        index++;
        if (index > LienSiteWeb.length-1) index = 0; // Reset index if it exceeds
        document.getElementById("textSlide").innerText = txtPresentationSite[index];
        TitreSiteElement.innerText = TitreSite[index];
        btnVisite.href = LienSiteWeb[index];
    });

    document.getElementById("btnPrev").addEventListener("click", function () {
        index--;
        if (index < 0) index = (LienSiteWeb.lenthg-1); // Reset index if it goes below 0
        document.getElementById("textSlide").innerText = txtPresentationSite[index];
        TitreSiteElement.innerText = TitreSite[index];
        btnVisite.href = LienSiteWeb[index];
    });

    // carousel
    function initCarousel(carouselId) {
        const carousel = document.querySelector(`#${carouselId}`);
        const items = carousel.querySelectorAll(".carousel-item");
        const prevBtn = document.querySelector(`.prev[data-carousel="${carouselId}"]`);
        const nextBtn = document.querySelector(`.next[data-carousel="${carouselId}"]`);
        const dotsContainer = document.querySelector(`.dots-container[data-carousel="${carouselId}"]`);

        let currentIndex = 0;
        const totalItems = items.length;

        // Créer les indicateurs dynamiquement
        dotsContainer.innerHTML = ""; // On vide au cas où
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.dataset.index = i;
            dotsContainer.appendChild(dot);
        }

        const dots = dotsContainer.querySelectorAll(".dot");

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            // Mettre à jour les indicateurs
            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentIndex].classList.add("active");
        }

        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        dots.forEach(dot => {
            dot.addEventListener("click", function () {
                currentIndex = parseInt(this.dataset.index);
                updateCarousel();
            });
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                    // pour forcer l'animation la prochaine fois
                    section.style.display = 'none'; // évite qu'elle reste affichée
                    void section.offsetWidth; // trigger reflow
                    section.style.display = '';
                }
            });
        });
    });

    // Initialisation des deux carousels
    initCarousel("carousel1");
    initCarousel("carousel2");

});