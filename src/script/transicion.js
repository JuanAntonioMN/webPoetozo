function transicion(){
    document.getElementById("id-Poemario").addEventListener("click", () => {
        document.getElementById("Poemario").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest"  });
     });
}

transicion();
