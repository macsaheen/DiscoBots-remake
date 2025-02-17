function sendEmail() {
    let email = document.querySelector("input[type='email']").value;
    let subject = document.querySelector("input[type='text']").value;
    let message = document.querySelector("textarea").value;
    
    if (!email || !subject || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}