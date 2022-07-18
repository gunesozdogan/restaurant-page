export default loadPage;

function loadPage() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const btnContainer = document.createElement("div");
    const mainHeader = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");
    const footer = document.createElement("footer");
    const linkGithub = document.createElement("p");

    header.classList.add("header");
    mainHeader.classList.add("main-header");
    btnContainer.classList.add("btn-container");
    home.classList.add("home-btn", "btn");
    home.textContent = "Home";
    menu.classList.add("menu-btn", "btn");
    menu.textContent = "Menu";
    contact.classList.add("contact-btn", "btn");
    contact.textContent = "Contact";
    footer.classList.add("footer");

    h1.textContent = "Paradise";
    h2.textContent = "Serves Your Needs Since 1972";

    linkGithub.innerHTML =
        'Copyright  &#169; 2022 <a href ="https://github.com/gunesozdogan" class="link-github">gunesozdogan</a> <img src="img/githublogo.png" alt="github logo" class="logo">';

    mainHeader.appendChild(h1);
    mainHeader.appendChild(h2);

    btnContainer.appendChild(home);
    btnContainer.appendChild(menu);
    btnContainer.appendChild(contact);

    header.appendChild(mainHeader);
    header.appendChild(btnContainer);

    content.appendChild(header);
    footer.appendChild(linkGithub);
    content.appendChild(footer);
}
