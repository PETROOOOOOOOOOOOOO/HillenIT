document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault()


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('msg').value.trim();

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('msgError').innerText = '';

    let valid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        valid = false;
    }
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone must start with +380 and be 13 digits';
        valid = false;
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Email is required';
        valid = false;
    }
    if (valid) {
        console.log({
                name,
                email,
                phone,
                message,
            }
        )
        alert("Message sent successfully!");
        document.getElementById('contact-form').reset();
    }
})
