if("ondevicelight" in window){
    window.addEventListener("devicelight", function(event) {
        if (event.value < 100) {
            document.body.style.backgroundColor = "#141829";
            document.getElementById('particles-light').style.display = 'none';
            particlesJS.load('particles-dark', 'vendors/particles/config-dark.json');
        } else {
            document.body.style.backgroundColor = "#bec3ff";
            document.getElementById('particles-dark').style.display = 'none';
            particlesJS.load('particles-light', 'vendors/particles/config-light.json');
        }
    });
} else {
    alert("ondevicelight not supported");
}
