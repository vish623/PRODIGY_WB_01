// Get the navbar element
const navbar = document.getElementById("navbar");

// Function to add/remove 'sticky' class based on scroll position
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Event listener for scroll event
window.addEventListener("scroll", handleScroll);

// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust for fixed navbar height
      behavior: "smooth",
    });
  });
});
