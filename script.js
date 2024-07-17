// For playing by clicking through mouse
const collection = document.getElementsByTagName('object');
const drumpad_Array = Array.from(collection);
drumpad_Array.forEach(element => {
    element.addEventListener("click", function(){
        element.setAttribute("class", "drums_hover")
        let dataKey_for_sound = element.getAttribute("data-key")
        
        const audio = document.querySelector(`audio[data-key="${dataKey_for_sound}"]`);
        if (!audio) return;  //stop the function from running all together
        audio.currentTime = 0;
        // console.log(audio)
        audio.play();

        setTimeout(function(){
            element.setAttribute("class", "drums")
        },100)
    })
});

// For playing through keyboard
window.addEventListener("keydown", function (e) {
    const sample = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drumpad = document.querySelector(`object[data-key="${e.keyCode}"]`)
    if(!drumpad) return;
    drumpad.setAttribute("class", "drums_hover");
    setTimeout(function () {
        drumpad.setAttribute("class", "drums")
    }, 100)
    if (!sample) return;  //stop the function from running all together
    sample.currentTime = 0;
    // console.log(sample)
    sample.play();
})