import loadPage from "./loadPage";
import loadHomePage from "./homePage";
import loadMenuPage from "./menuPage";
import loadContactPage from "./contactPage";

(function () {
    loadPage();
    loadHomePage();

    const homeBtn = document.querySelector(".home-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const contactBtn = document.querySelector(".contact-btn");
    const content = document.querySelector("#content");

    const removeMainContent = function () {
        const len = content.childNodes.length;

        if (len > 2) {
            const child = content.childNodes[1];
            content.removeChild(child);
        }
    };

    const switchContent = function () {
        removeMainContent();

        if (this.textContent === "Home") {
            loadHomePage();
        } else if (this.textContent === "Menu") {
            loadMenuPage();
        } else {
            loadContactPage();
        }
    };

    // EVENT LISTENERS
    homeBtn.addEventListener("click", switchContent);
    menuBtn.addEventListener("click", switchContent);
    contactBtn.addEventListener("click", switchContent);
})();
