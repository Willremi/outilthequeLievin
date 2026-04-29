const btn = document.getElementById("categoryBtn");
const menu = document.getElementById("categoryMenu");
const links = menu.querySelectorAll("a");
const cards = document.querySelectorAll(".card");

// Ouvrir / fermer le menu
btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Surbrillance sur la carte
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.stopPropagation();

        // Retirer la surbrillance de toutes les cartes
        cards.forEach(c => c.classList.remove("active"));

        // Trouver la carte liée au lien
        const targetId = link.getAttribute("href").replace("#", "");
        const card = document.getElementById(targetId);

        if (card) {
            card.classList.add("active");
        }

        // Fermer le menu
        menu.style.display = "none";
    });
});

// 👉 Enlever la surbrillance en cliquant ailleurs sur la page
document.addEventListener("click", (e) => {
    // Si on clique ni sur le menu, ni sur le bouton, ni sur une carte
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        cards.forEach(c => c.classList.remove("active"));
        menu.style.display = "none";
    }
});