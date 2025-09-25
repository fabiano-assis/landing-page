
        const modal = document.getElementById("modalTratamentos");
        const btnTratamentos = document.querySelector(".links a.btn"); // primeiro botão
        const spanClose = document.querySelector(".close");

        btnTratamentos.addEventListener("click", function(e) {
            e.preventDefault(); // evita abrir link
            modal.style.display = "block";
        });

        spanClose.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(e) {
            if (e.target === modal) {
            modal.style.display = "none";
            }
        });

