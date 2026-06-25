/*
==========================================================
KeyIntel
Global JavaScript
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================================
    Scroll Reveal Animation
    ==========================================================
    */

    const animatedElements = document.querySelectorAll(
        ".card, .metric, .section-title, .cta, .dashboard-placeholder"
    );

    animatedElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.7s ease";

    });

    const revealOnScroll = () => {

        animatedElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            }

        });

    };

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /*
    ==========================================================
    Sticky Header Enhancement
    ==========================================================
    */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background = "rgba(1,1,63,0.92)";
            header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(1,1,63,0.72)";
            header.style.boxShadow = "none";

        }

    });

    /*
    ==========================================================
    Smooth Anchor Links
    ==========================================================
    */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /*
    ==========================================================
    Footer Copyright Year
    ==========================================================
    */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.innerHTML =
            `© ${new Date().getFullYear()} KeyIntel. All rights reserved.`;

    }

});