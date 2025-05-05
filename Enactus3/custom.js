
//Initialize AOS 
AOS.init({
    duration: 1000,
    once: true
})

//counter animation
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

const startCounters = () => {
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target
            };
        };
        updateCounter();
    });
};

window.addEventListener('scroll', () => {
    const counterSection = document.querySelector('.counter-section');
    const sectionTop = counterSection.offsetTop;

    if (!counterStarted && window.screenY + window.innerHeight >= sectionTop) {
        startCounters();
        counterStarted = true;
    }
})

//***Side bar Initialization */
function showSidebar() {
    const sidebar = document.querySelector('.navig')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.navig')
    sidebar.style.display = 'none'

}