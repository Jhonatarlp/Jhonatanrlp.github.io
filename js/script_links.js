document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const input = document.getElementById("user-input");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const link = input.value.trim();

        if (!link) {
            alert("Por favor, insira um link.");
            return;
        }


        const url = new URL("verificador_links2.html", window.location.origin);
        url.searchParams.set("url", link);
        window.location.href = url.toString();
    });
});