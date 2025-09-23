function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector(".toggle-icon");

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        icon.textContent = "-";
    } else {
        answer.style.display = "none";
        icon.textContent = "+";
    }
}
const testimonials = [
    {
        img: "Clients/client-01.jpg",
        text: "Doccure exceeded my expectations in healthcare. The seamless booking process, coupled with the expertise of the doctors, made my experience exceptional. Their commitment to quality care and convenience truly sets them apart. I highly recommend Doccure for anyone seeking reliable and accessible healthcare services.",
        name: "John Doe",
        location: "New York"
    },
    {
        img: "Clients/client-02.jpg",
        text: "The doctors at Doccure are truly professionals. Booking was quick and simple, and the consultation was excellent. I felt well taken care of every step of the way.",
        name: "Sarah Lee",
        location: "California"
    },
    {
        img: "Clients/client-03.jpg",
        text: "I’ve never had such an easy time scheduling medical appointments. Doccure makes it seamless, and the quality of care is outstanding.",
        name: "Michael Smith",
        location: "Texas"
    }
];

let currentIndex = 0;

function updateTestimonial() {
    document.getElementById("client-img").src = testimonials[currentIndex].img;
    document.getElementById("testimonial-text").textContent = testimonials[currentIndex].text;
    document.getElementById("client-name").textContent = testimonials[currentIndex].name;
    document.getElementById("client-location").textContent = testimonials[currentIndex].location;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}