
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "Pesan dari " + name;
    var body = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;

    var mailtoLink = `mailto:mohanggaalipradana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        let target = document.querySelector(this.getAttribute('href'));
        let offset = 80; // Sesuaikan dengan tinggi navbar
        let elementPosition = target.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

