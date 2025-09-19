gsap.to("h1", {
    y:90,
    text: "FRONT-END DEVELOPER",
    duration:6,
    repeat:1
})
gsap.from("h2", {x:50, opacity:0, duration:5})



const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener("mousemove" , () => {
    removeFocus();
    item.classList.add('selected');
    })

removeFocus = () => {
    items.forEach(item => {
        item.classList.remove('selected');
    })
}
})



