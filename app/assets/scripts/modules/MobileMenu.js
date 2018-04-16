import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".menu-icon");
        this.menuContent = $(".menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("visible");
        this.menuIcon.toggleClass("close-x");
    }
}

export default MobileMenu;