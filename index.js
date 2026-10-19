const services = [
    { id: "haircut-and-beard", name: "Haircut and Beard - $50" },
    { id: "haircut", name: "Haircut - $40" },
    { id: "beard-trim", name: "Beard Trim - $20" },
    { id: "kids-haircut", name: "Kids Haircut - $25" },
    { id: "retwist", name: "Retwist - $80" }
];
const bookingForm = document.getElementById("booking-form");
const bookNowButton = document.getElementById("book-now");
const createAccountButton = document.getElementById("createAccountBtn");
const loginButton = document.getElementById("loginBtn");

if (bookNowButton) {
    bookNowButton.addEventListener("click", () => {
        window.location.href = "booking.html";
    });
}

if (createAccountButton) {
    createAccountButton.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
}

if (loginButton) {
    loginButton.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
}