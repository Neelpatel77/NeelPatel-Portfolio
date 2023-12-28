document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const submitButton = contactForm.querySelector("button[type='submit']");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Disable the submit button while processing
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        const formData = new FormData(contactForm);

        fetch("/sendEmail", { // Make sure the URL matches your server's route
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((result) => {
                if (result === "success") {
                    alert("Thank you! Your message has been sent.");
                    contactForm.reset();
                } else {
                    alert("Oops! Something went wrong. Please try again later.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Oops! Something went wrong. Please try again later.");
            })
            .finally(() => {
                // Re-enable the submit button
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            });
    });
});
