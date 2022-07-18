export default loadHomePage;

function loadHomePage() {
    const content = document.querySelector("#content");
    const homePage = document.createElement("div");
    const footer = document.querySelector("footer");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const hours = document.createElement("div");
    const p1Day = document.createElement("p");
    const p2Day = document.createElement("p");
    const p3Day = document.createElement("p");
    const p4Day = document.createElement("p");
    const p5Day = document.createElement("p");
    const p6Day = document.createElement("p");
    const p7Day = document.createElement("p");
    const p1Hour = document.createElement("p");
    const p2Hour = document.createElement("p");
    const p3Hour = document.createElement("p");
    const p4Hour = document.createElement("p");
    const p5Hour = document.createElement("p");
    const p6Hour = document.createElement("p");
    const p7Hour = document.createElement("p");

    p1Day.textContent = "Monday:";
    p2Day.textContent = "Tuesday:";
    p3Day.textContent = "Wednesday:";
    p4Day.textContent = "Thursday:";
    p5Day.textContent = "Friday:";
    p6Day.textContent = "Saturday:";
    p7Day.textContent = "Sunday:";

    p1Hour.textContent = "10am - 10pm";
    p2Hour.textContent = "10am - 10pm";
    p3Hour.textContent = "10am - 10pm";
    p4Hour.textContent = "10am - 10pm";
    p5Hour.textContent = "10am - 10pm";
    p6Hour.textContent = "10am - 10pm";
    p7Hour.textContent = "10am - 12pm";

    hours.classList.add("hour-list");
    homePage.classList.add("home-page");
    p.textContent =
        "If you are also a fan of having delicious dinner with amazing view near sea like thousand of others, we welcome you to our   ";
    span.textContent = "Paradise";

    p.appendChild(span);
    homePage.appendChild(p);
    hours.append(
        p1Day,
        p1Hour,
        p2Day,
        p2Hour,
        p3Day,
        p3Hour,
        p4Day,
        p4Hour,
        p5Day,
        p5Hour,
        p6Day,
        p6Hour,
        p7Day,
        p7Hour
    );
    homePage.appendChild(hours);
    content.insertBefore(homePage, footer);
}
