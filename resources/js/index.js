if("ondevicelight" in window){
    window.addEventListener("devicelight", function(event) {
        if (event.value < 100) {
            alert('Hey, you! It\'s dark!');
        } else {
            alert('Hey, you! It\'s light!');
        }
    });
} else {
    alert("ondevicelight not supported");
}