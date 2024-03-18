function pageLoad() {

    document.querySelector('.drop-down').onclick = () => {
        document.querySelector('.drop-down ul').classList.toggle('dropping-menu');
        document.querySelector('.drop-down-arrow').classList.toggle('rotate-arrow');
    }

    if (screen.width <= 1190) {
        console.log('smaller screen');

        let hamburgerDiv = document.createElement('div');
        hamburgerDiv.setAttribute('class', 'hamburger-menu');

        let hamBar1 = document.createElement('p');
        let hamBar2 = document.createElement('p');
        let hamBar3 = document.createElement('p');

        let hamburgerBars = [hamBar1, hamBar2, hamBar3];

        hamburgerBars.map(bar => hamburgerDiv.appendChild(bar));

        let parentNav = document.querySelector('nav');
        parentNav.appendChild(hamburgerDiv);

        document.querySelector('div.hamburger-menu').onclick = () => {
            document.querySelector('div.hamburger-menu').classList.toggle('rotate-menu');
            document.querySelector('div.hamburger-menu p:nth-child(1)').classList.toggle('rotate-down');
            document.querySelector('div.hamburger-menu p:nth-child(2)').classList.toggle('disappear');
            document.querySelector('div.hamburger-menu p:nth-child(3)').classList.toggle('rotate-up');

            document.querySelector('ul.main-nav').classList.toggle('slide-menu');
        }
    }

}