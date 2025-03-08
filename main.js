window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const navLabels = document.querySelectorAll('.navLabel');
    const threshold = window.innerHeight * 0.8; // 80vh equivalent

    console.log(scrollPosition, threshold, navLabels)

    navLabels.forEach(navLabel => {
        if (scrollPosition > threshold) {
            navLabel.classList.add('scrolled');
        } else {
            navLabel.classList.remove('scrolled');
        }
    });
});

function initialize() {
    setTimeout(()=>{

        let title = document.getElementById('primaryTitle')
        let navbar = document.getElementById('navbar')

        title.style.opacity = 1
        navbar.style.opacity = 1

    }, 2000)

}

function setTooltip(event) {
    let tooltip = document.getElementById('tooltip')
    let x = `${event.pageX}px`
    let y = `${event.pageY}px`
    tooltip.style.left = x
    tooltip.style.top = y
    tooltip.innerHTML = event.target.dataset.tip
    tooltip.style.opacity = '1'
    console.log([x, y], event.target.dataset.tip)
}

function unsetTooltip() {
    let tooltip = document.getElementById('tooltip')
    tooltip.style.opacity = '0'
}