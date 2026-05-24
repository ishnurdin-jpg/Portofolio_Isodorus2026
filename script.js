// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ========================================
// TOGGLE GALLERY
// ========================================

const buttons = document.querySelectorAll(".doc-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const gallery = button.nextElementSibling;

        if(!gallery || !gallery.classList.contains("gallery")) return;

        // VALIDASI

        if(!gallery || !gallery.classList.contains("gallery")) return;

        // TOGGLE

        gallery.classList.toggle("active");

        // CEK STATUS

        const isActive = gallery.classList.contains("active");

        // UBAH TEXT

        button.innerText = isActive
        ? "Tutup Dokumentasi"
        : "Melihat Dokumentasi Proyek";

        // SCROLL SAAT OPEN

        if(isActive){

            setTimeout(() => {

                gallery.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }, 200);
        }

    });

});