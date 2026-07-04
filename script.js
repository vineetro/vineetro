console.log("Vineet RO Website Loaded Successfully");

// 1. Handing Contact Form Submissions
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        var whatsappNumber = "919752047345"; 

        var fullMessage = "New Service Request:%0A%0A"
            + "*Name:* " + encodeURIComponent(name) + "%0A"
            + "*Phone:* " + encodeURIComponent(phone) + "%0A"
            + "*Message:* " + encodeURIComponent(message);

        var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + fullMessage;
        window.open(whatsappURL, "_blank");
    });
}

// 2. Handling Booking Form Submissions
const bookServiceForm = document.getElementById("bookServiceForm");
if (bookServiceForm) {
    bookServiceForm.addEventListener("submit", function(e) {
        e.preventDefault();

        var name = document.querySelector("input[placeholder='Enter your name']").value;
        var phone = document.querySelector("input[placeholder='Enter your phone number']").value;
        var address = document.querySelector("textarea[placeholder='Enter your address']").value;
        var service = document.querySelector("select").value;
        var message = document.querySelector("textarea[placeholder='Any special issue?']").value;
        var whatsappNumber = "919752047345"; 

        var fullMessage = "New RO Service Booking:%0A%0A"
            + "*Name:* " + encodeURIComponent(name) + "%0A"
            + "*Phone:* " + encodeURIComponent(phone) + "%0A"
            + "*Address:* " + encodeURIComponent(address) + "%0A"
            + "*Service Type:* " + encodeURIComponent(service) + "%0A"
            + "*Issue:* " + encodeURIComponent(message);

        var url = "https://wa.me/" + whatsappNumber + "?text=" + fullMessage;
        window.open(url, "_blank");
    });
}
