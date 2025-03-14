document.addEventListener("DOMContentLoaded", () => {
    let poemas = document.getElementById("poemas");
    let masPoemas = document.getElementById("mas-poemas");

    masPoemas?.addEventListener("click", () => {
    
        if (poemas?.classList.contains("h-auto")) {
            poemas.classList.remove("h-auto");
            poemas.classList.add("h-screen");
            poemas.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
            masPoemas.innerText = "Ver más";
        } else {
            poemas.classList.remove("h-screen");
            poemas.classList.add("h-auto");
            poemas.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            masPoemas.innerText = "Ver menos";
        }
    });

    document.getElementById("id-Poemas").addEventListener("click", () => {
   document.getElementById("Poemas").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest"  });
});
});
