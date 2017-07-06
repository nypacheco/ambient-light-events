var elmFace = 0;
var interval;

document.getElementById('container-light').style.display = 'none';
document.getElementById('container-dark').style.display = 'none';
document.getElementById('container-not-supported').style.display = 'none';

if("ondevicelight" in window){
    window.addEventListener("devicelight", function(event) {
        if (event.value < 100) {
            document.getElementById('container-dark').style.display = 'flex';
            document.getElementById('container-light').style.display = 'none';
            $("#container-light").find("span").remove();
            clearInterval(interval);
        } else {
            document.getElementById('container-light').style.display = 'flex';
            document.getElementById('container-dark').style.display = 'none';
            elmFace = $(".bat-sleeping").offset();
            interval = setInterval(snore, 1000);
            snore();
        }
    });
} else {
    document.getElementById('container-not-supported').style.display = 'flex';
}

function snore() {
    var elm = document.createElement("span");
    elm.innerText = "Z";
    elm.setAttribute("class", "z");

    posTop = elmFace.top + 400;
    posLeft = elmFace.left + ($(".bat-sleeping").width()/2);
    aniTop = posTop + 100;
    aniLeft = (posLeft + 50) + Math.round(Math.random()*80);

    $(elm).css({
        "top": posTop,
        "left": posLeft
    });

    $("#container-light").append(elm);
    $(elm).animate({
            "top": aniTop,
            "left": aniLeft,
            "font-size": "100px",
            "opacity": 0
        },
        5000,
        function() {
            $(this).remove();
        });
}