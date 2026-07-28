const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* Mobile Menu */
const menu = document.querySelector(".menu-toggle");
const mobile = document.querySelector(".mobile-menu");

menu.addEventListener("click", () => {
    mobile.classList.toggle("open");
    menu.classList.toggle("active");
});

// Close mobile menu when a navigation link is clicked
const mobileLinks = document.querySelectorAll(".mobile-menu a");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobile.classList.remove("open");
        menu.classList.remove("active");
    });
});

/* Newsletter */
const newsletterForm = document.querySelector(".newsletter-form");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

if(newsletterForm){
    newsletterForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        popup.classList.add("show");
        newsletterForm.reset();
    });
}

if(closePopup){
    closePopup.addEventListener("click",()=>{
        popup.classList.remove("show");
    });
}

if(popup){
    popup.addEventListener("click",(e)=>{
        if(e.target===popup){
            popup.classList.remove("show");
        }
    });
}

// Detect sections and navigation links
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        // Offset by 150px to trigger the change slightly before the section hits the top
        const sectionTop = current.offsetTop - 150; 
        const sectionId = current.getAttribute("id");

        // Check if the scroll position is currently within the section bounds
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                // Remove the active class from all links
                link.classList.remove("active");
                
                // Add the active class if the link matches the section ID
                // (Includes a fallback to keep 'Home' active when scrolling at the very top)
                if (link.getAttribute("href") === "#" + sectionId || (sectionId === "home" && link.getAttribute("href") === "index.html")) {
                    link.classList.add("active");
                }
            });
        }
    });
});

/* Legal Popups */
const privacyLink = document.getElementById("privacyLink");
const termsLink = document.getElementById("termsLink");
const privacyPopup = document.getElementById("privacyPopup");
const termsPopup = document.getElementById("termsPopup");
const closeLegalBtns = document.querySelectorAll(".close-legal-btn");
const legalPopups = document.querySelectorAll(".legal-popup");

// Open Privacy Popup
if (privacyLink) {
    privacyLink.addEventListener("click", (e) => {
        e.preventDefault();
        privacyPopup.classList.add("show");
    });
}

// Open Terms Popup
if (termsLink) {
    termsLink.addEventListener("click", (e) => {
        e.preventDefault();
        termsPopup.classList.add("show");
    });
}

// Close Popups via Button
closeLegalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        privacyPopup.classList.remove("show");
        termsPopup.classList.remove("show");
    });
});

// Close Popups by clicking outside the box
legalPopups.forEach(popup => {
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });
});

