const services = [
    { id: "haircut-and-beard", name: "Haircut and Beard - $50" },
    { id: "haircut", name: "Haircut - $40" },
    { id: "beard-trim", name: "Beard Trim - $20" },
    { id: "kids-haircut", name: "Kids Haircut - $25" },
    { id: "retwist", name: "Retwist - $80" }
];
let selectedService = null;
if (dateInput) {
    const today = new Date();
    const minDate = today.toISOString().split("T")[0];
}
if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!name || !email || !phone || !service || !date || !time) {
            alert("Please fill in all fields.");
            return;
        }
        alert(`Booking confirmed for ${name} on ${date} at ${time} for ${service}!`);
    });
}