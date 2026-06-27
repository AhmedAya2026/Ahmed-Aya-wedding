document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".open-btn");

    button.addEventListener("click", function () {

        // تأثير بسيط عند الضغط
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);

        // انتقال ناعم لأسفل (هنجهز له القسم اللي جاي)
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    });

});
