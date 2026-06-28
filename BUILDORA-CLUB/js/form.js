/* ==========================
   BUILDORA EMAIL FORM
========================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("form.js loaded");

    // Check if EmailJS library loaded
    if (typeof emailjs === "undefined") {
        console.error("EmailJS library not loaded.");
        alert("EmailJS failed to load.");
        return;
    }

    // Initialize EmailJS
    emailjs.init({
        publicKey: "bL-WGonSd41KOwU8i"
    });

    console.log("EmailJS initialized");

    // Get the form
    const form = document.getElementById("applyForm");

    if (!form) {
        console.error("applyForm not found.");
        return;
    }

    console.log("Form found.");

    form.addEventListener("submit", async function (e) {

    e.preventDefault();

    console.log("===== SUBMIT EVENT FIRED =====");
    alert("Submit event fired");
console.log(document.getElementById("name"));
console.log(document.getElementById("email"));
console.log(document.getElementById("phone"));
console.log(document.getElementById("course"));
console.log(document.getElementById("message"));

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const course = document.getElementById("course").value;
const message = document.getElementById("message").value.trim();

console.log("Values read successfully");

    console.log({
        name,
        email,
        phone,
        course,
        message
    });
try {

    // Send application to admin

    await emailjs.send(
        "service_4cw6nyt",
        "template_admin",
        {
            student_name: name,
            student_email: email,
            student_phone: phone,
            course_name: course,
            student_message: message
        }
    );

    // Send confirmation to applicant

    await emailjs.send(
        "service_4cw6nyt",
        "template_applicant",
        {
            student_name: name,
            student_email: email,
            course_name: course
        }
    );

    alert("Application submitted successfully!");

    form.reset();

} catch (err) {

    console.error(err);
    alert("Failed to send email.");

}
});