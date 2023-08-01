var actividad = false;
var clickCount = 0;

document.getElementById("theme").addEventListener("click", night_theme);

function night_theme() {
    const loader = document.getElementById('loader');

    function activated_loader() {
        loader.style.display = "flex";
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }

    clickCount++;

    if (clickCount === 2) {
        location.reload();
    } else {
        activated_loader();

        var elemento_1 = document.querySelectorAll(".header-div .fa-sun");
        elemento_1.forEach(function (elemento_1) {
            if (actividad) {
                elemento_1.style.display = "flex";
            } else {
                elemento_1.style.display = "none";
            }
        });

        var elemento_2 = document.querySelectorAll(".header-div .fa-moon");
        elemento_2.forEach(function (elemento_2) {
            if (actividad) {
                elemento_2.style.display = "none";
            } else {
                elemento_2.style.display = "flex";
            }
        });

        var elemento_3 = document.querySelectorAll(".degradado_1");
        elemento_3.forEach(function (elemento_3) {
            elemento_3.style.background = "#252525";
        });

        var elemento_4 = document.querySelectorAll(".degradado_2");
        elemento_4.forEach(function (elemento_4) {
            elemento_4.style.background = "#303030";
        });

        var elemento_5 = document.querySelectorAll(".degradado_2 div");
        elemento_5.forEach(function (elemento_5) {
            elemento_5.style.background = "linear-gradient(45deg, #005eff -7000px, #3a3a3a 50%, #53136A 5800px)";
        });

        var elemento_6 = document.querySelectorAll(".degradado_1 div");
        elemento_6.forEach(function (elemento_6) {
            elemento_6.style.background = "linear-gradient(45deg, #53136A -7000px, #3a3a3a 50%, #005eff 5800px)";
        });

        var elemento_7 = document.querySelectorAll("*");
        elemento_7.forEach(function (elemento_7) {
            elemento_7.style.color = "#fff";
        });

        var elemento_8 = document.querySelectorAll(".contact-section");
        elemento_8.forEach(function (elemento_8) {
            elemento_8.style.background = "#252525";
        });
        
        var elemento_9 = document.querySelectorAll(".footer-div div");
        elemento_9.forEach(function (elemento_9) {
            elemento_9.style.color = "#838383";
        });

        var elemento_10 = document.querySelectorAll(".contacts-div .contacts-div1 div div");
        elemento_10.forEach(function (elemento_10) {
            elemento_10.style.background = "transparent";
        });

        var elemento_11 = document.querySelectorAll(".home-div div");
        elemento_11.forEach(function (elemento_11) {
            elemento_11.style.background = "transparent";
        });

        var elemento_12 = document.querySelectorAll(".location-div div div div");
        elemento_12.forEach(function (elemento_12) {
            elemento_12.style.background = "#8a4fc0ab";
        });

        var elemento_13 = document.querySelectorAll(".location-div div div div .horas h4 span");
        elemento_13.forEach(function (elemento_13) {
            elemento_13.style.color = "#000";
        });
    }
}

