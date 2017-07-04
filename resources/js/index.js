var elmFace = 0;

document.getElementById('container-light').style.display = 'none';
document.getElementById('container-dark').style.display = 'none';

if("ondevicelight" in window){
    window.addEventListener("devicelight", function(event) {
        if (event.value < 100) {
            document.getElementById('container-dark').style.display = 'flex';
            document.getElementById('container-light').style.display = 'none';
            $("#container-light").find("span").remove();
        } else {
            document.getElementById('container-light').style.display = 'flex';
            document.getElementById('container-dark').style.display = 'none';
            elmFace = $(".bat-sleeping").offset();
            setInterval(snore, 1000);
            snore();
        }
    });
} else {
    alert("ondevicelight not supported");
}

function snore() {
    var elm = document.createElement("span");
    elm.innerText = "Z";
    elm.setAttribute("class", "z");

    posTop = elmFace.top + 230;
    posLeft = elmFace.left + ($(".bat-sleeping").width()/2);
    aniTop = posTop + 60;
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