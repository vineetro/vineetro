console.log 
("Vineet RO Website Loaded")

<script>
document.getElementById("contactForm").addEventListener("submit", function(e) 
{
    e.preventDefault();

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var whatsappNumber = "919752047345"; // 👉 yahan apna number daalo

    var fullMessage = "New Service Request:%0A%0A"
        + "Name: " + name + "%0A"
        + "Phone: " + phone + "%0A"
        + "Message: " + message;

    var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + fullMessage;

    window.open(whatsappURL, "_blank");
}
);

document.getElementById("bookServiceForm").addEventListener("submit", function(e) 
{
    e.preventDefault();

    var name = document.querySelector("input[placeholder='Enter your name']").value;
    var phone = document.querySelector("input[placeholder='Enter your phone number']").value;
    var address = document.querySelector("textarea[placeholder='Enter your address']").value;
    var service = document.querySelector("select").value;
    var message = document.querySelector("textarea[placeholder='Any special issue?']").value;

    var whatsappNumber = "919752047345"; // 👈 YAHAN APNA NUMBER DALNA HAI

    var fullMessage = "New RO Service Booking:%0A%0A"
        + "Name: " + name + "%0A"
        + "Phone: " + phone + "%0A"
        + "Address: " + address + "%0A"
        + "Service Type: " + service + "%0A"
        + "Issue: " + message;

    var url = "https://wa.me/" + whatsappNumber + "?text=" + fullMessage;

    window.open(url, "_blank");
}
);
