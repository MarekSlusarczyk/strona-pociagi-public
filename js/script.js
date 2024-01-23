const header = document.querySelector('header')
const navbar = document.querySelector("nav");
const main = document.querySelector('main');
const h2 = document.querySelector('h2');
        
window.addEventListener("scroll", function () {
    if (window.scrollY > header.offsetHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        const navbarHeight = parseInt(window.getComputedStyle(navbar).getPropertyValue('height'));
        const h2MarginTop = parseInt(window.getComputedStyle(h2).getPropertyValue('margin-top'));
        main.style.marginTop = navbarHeight + h2MarginTop + 'px';
        console.log(main.style.marginTop)
    } else {
        navbar.style.position = 'relative';
        main.style.marginTop = '0px';
    }
});

const linksBoxes = document.querySelectorAll('.linkBox')
linksBoxes.forEach(element => {
    element.addEventListener('click', function() {
        window.open(element.dataset.link, '_blank');
    })
})


const elementsToShow = document.querySelectorAll('.show');
const articles = document.querySelectorAll('div.main_bottom article');

function checkVisibility() {
    elementsToShow.forEach(element => {
        let bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight - 50) {
            element.classList.add('show_up');
        }
    });

    articles.forEach(element => {
        let bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight - 50) {
            element.classList.add('showFromSide');
        }
    })
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

function drawPicture() {
    const pictures = [
      './multimedia/train-7839192_1920.jpg',
      './multimedia/locomotive-1751654_1920.jpg',
      './multimedia/train-5478817_1920.jpg'
    ];

    const pictureIndex = Math.floor(Math.random() * pictures.length);

    header.style.backgroundImage = `url('${pictures[pictureIndex]}')`;
}
drawPicture();