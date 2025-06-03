
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const link = params.get("url");

    if (link) {
        const linkBox = document.querySelector(".link_box");
        linkBox.textContent = link;

        const isSeguro = link.includes(".com");
        const statusBox = document.querySelector(".site_seguro");
        const paragrafos = document.querySelectorAll(".infobox2 p");

        if (isSeguro) {
            statusBox.textContent = "Site Seguro ✅";
            statusBox.style.backgroundColor = "#4CAF50";
            paragrafos.forEach(p => {
                if (p.innerHTML.includes("Empresa:")) {
                    p.innerHTML = `<strong>Empresa:</strong> ${link}`;
                }
            });

        } else {
            statusBox.textContent = "Site Suspeito ⚠️";
            statusBox.style.backgroundColor = "#f39c12";

            paragrafos.forEach(p => {
                if (p.innerHTML.includes("Empresa:")) {
                    p.innerHTML = "<strong>Empresa:</strong> Desconhecido";
                }
                if (p.innerHTML.includes("Reclame Aqui:")) {
                    p.innerHTML = "<strong>Reclame Aqui:</strong> 0.0";
                }
            });
        }
    }
});