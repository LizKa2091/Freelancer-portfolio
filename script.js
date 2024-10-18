const navList = document.getElementById('mobile-nav__list');
const navButton = document.getElementById("mobile-nav__button");
const logoButton = document.getElementById('header__logo');
const mainHeader = document.getElementById('header-menu');
const mobileNav = document.getElementById('mobile-nav');

const mobileNavisVisible = () => {
    navButton.style.width == '33px' ? openMobileNav() : closeMobileNav();
};

const openMobileNav = () => {
    navButton.style.backgroundImage = "url('images/mobile-nav-close.svg')";
    navButton.style.width = '22.32px';
    navButton.style.height = '22.39px';
    logoButton.style.display = 'none';
    navList.style.display = 'block';
    mobileNav.style.alignItems = 'baseline';
    mainHeader.style.display = 'flex';
};

const closeMobileNav = () => {
    navButton.style.backgroundImage = "url('images/mobile-nav-open.svg')";
    navButton.style.width = '33px';
    navButton.style.height = '20px';
    logoButton.style.display = 'block';
    navList.style.display = 'none';
    mainHeader.style.display = 'space-around';
};
