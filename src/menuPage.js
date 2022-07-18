export default loadMenuPage;

function loadMenuPage() {
    const content = document.querySelector("#content");
    const footer = document.querySelector(".footer");
    const menuPage = document.createElement("div");

    menuPage.classList.add("menu-page");
    menuPage.append(
        createMenu("Food", "burger", "steak", "pizza", "chicken"),
        createMenu(
            "Beverages",
            "frappuccino",
            "lemonade",
            "cocktail",
            "mojito"
        ),
        createMenu("Desserts", "sufle", "torte", "cheesecake", "donut")
    );
    content.insertBefore(menuPage, footer);
}

// CREATES MENUS FOR FOOD, BEVERAGES AND DESSERTS
function createMenu(str, imgName1, imgName2, imgName3, imgName4) {
    const strLower = str.toLowerCase();
    const food = document.createElement("div");
    const h2 = document.createElement("h2");
    const food1 = document.createElement("p");
    const food2 = document.createElement("p");
    const food3 = document.createElement("p");
    const food4 = document.createElement("p");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img4 = document.createElement("img");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");

    div1.classList.add(`${strLower}-menu`, `${strLower}-menu-1`);
    div2.classList.add(`${strLower}-menu`, `${strLower}-menu-2`);
    div3.classList.add(`${strLower}-menu`, `${strLower}-menu-3`);
    div4.classList.add(`${strLower}-menu`, `${strLower}-menu-4`);

    img1.classList.add("img1", "img");
    img2.classList.add("img2", "img");
    img3.classList.add("img3", "img");
    img4.classList.add("img4", "img");

    img1.src = "img/" + imgName1 + ".jpg";
    img2.src = "img/" + imgName2 + ".jpg";
    img3.src = "img/" + imgName3 + ".jpg";
    img4.src = "img/" + imgName4 + ".jpg";

    food1.textContent = `Paradise ${imgName1
        .slice(0, 1)
        .toUpperCase()}${imgName1.slice(1)} `;
    food2.textContent = `Paradise ${imgName2
        .slice(0, 1)
        .toUpperCase()}${imgName2.slice(1)} `;
    food3.textContent = `Paradise ${imgName3
        .slice(0, 1)
        .toUpperCase()}${imgName3.slice(1)} `;
    food4.textContent = `Paradise ${imgName4
        .slice(0, 1)
        .toUpperCase()}${imgName4.slice(1)} `;

    div1.append(img1, food1);
    div2.append(food2, img2);
    div3.append(img3, food3);
    div4.append(food4, img4);

    h2.textContent = str;
    food.classList.add(str.toLowerCase());
    food.append(h2, div1, div2, div3, div4);

    return food;
}
