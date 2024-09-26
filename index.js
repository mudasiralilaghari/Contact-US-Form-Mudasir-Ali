var form = document.getElementById('contactForm');
var feedback = document.getElementById('formFeedback');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    if (name === "" || email === "" || message === "") {
        feedback.textContent = 'All fields are required';
    }
    else if (!validateEmail(email)) {
        feedback.textContent = 'please enter a email address';
    }
    else {
        feedback.textContent = "";
        alert('Form submitted successfully!');
        form.reset();
    }
});
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
