var counter = document.querySelector(".percent");

TweenLite.set(counter, {
    xPercent: 5,
    yPercent: 5
});

window.addEventListener("mousemove", moveCounter);

function moveCounter(e) {
    TweenLite.to(counter, 0.5, {
        x: e.clientX,
        y: e.clientY
    });
}


function progress() {
    var windowScrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();

    var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

    var $bgColor = progress > 99 ? "#fff" : "#fff";
    var $textColor = progress > 99 ? "#fff" : "#333";

    $("h1").text(Math.round(progress) + "%").css({ color: $textColor });

    $(".fill").height(progress + "%").css({ backgroundColor: $bgColor });
}

progress();

$(document).on("scroll", progress);














