(function () {
    var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
    var lightbox = document.getElementById("lightbox");
    var lbImg = lightbox.querySelector(".lightbox-img");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var btnClose = lightbox.querySelector(".lightbox-close");
    var btnPrev = lightbox.querySelector(".lightbox-nav.prev");
    var btnNext = lightbox.querySelector(".lightbox-nav.next");

    var current = 0;

    function show(index) {
        current = (index + items.length) % items.length;
        var fig = items[current];
        var img = fig.querySelector("img");
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCaption.innerHTML = fig.getAttribute("data-caption") || "";
    }

    function open(index) {
        show(index);
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function close() {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    items.forEach(function (fig, i) {
        fig.addEventListener("click", function () { open(i); });
    });

    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", function () { show(current - 1); });
    btnNext.addEventListener("click", function () { show(current + 1); });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") show(current - 1);
        else if (e.key === "ArrowRight") show(current + 1);
    });
})();
