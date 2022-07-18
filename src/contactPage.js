export default loadContactPage;

function loadContactPage() {
    const content = document.querySelector("#content");
    const footer = document.querySelector(".footer");
    const contactPage = document.createElement("div");
    const h2 = document.createElement("h2");
    const phone = document.createElement("div");
    const form = document.createElement("form");
    const textArea = document.createElement("textarea");
    const submitBtn = document.createElement("button");
    const input = document.createElement("input");
    const formDiv = document.createElement("div");
    const location = document.createElement("div");

    h2.textContent = "Contact Information";

    // PHONE SECTION
    phone.innerHTML =
        '<svg class="phone-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <p>123-456-789</p>';
    phone.classList.add("phone-section");

    // LOCATION SECTION
    location.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> <p>372 Fairview Drive Fort Lauderdale, FL 33309</p>';
    location.classList.add("location-section");
    // FORM SECTION
    form.method = "post";
    textArea.cols = "30";
    textArea.row = "8";

    submitBtn.textContent = "Submit";
    submitBtn.type = "button";
    submitBtn.classList.add("submit-btn");
    input.type = "email";
    input.id = "user_email";
    input.name = "email";
    input.placeholder = "example@domain.com";

    formDiv.classList.add("form-inputs");
    formDiv.append(input, textArea);
    form.append(formDiv, submitBtn);

    // CREATING CONTACT PAGE
    contactPage.append(h2, phone, location, form);
    contactPage.classList.add("contact-page");

    // APPENDING CONTACT PAGE
    content.insertBefore(contactPage, footer);
}
