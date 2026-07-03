document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Telefonnummer wird erst zur Laufzeit zusammengesetzt, damit sie nicht
  // im statischen HTML-Quelltext für Scraper auslesbar ist.
  var phoneParts = ["0176", "21017322"];
  var phoneDisplay = phoneParts.join(" ");
  var phoneHref = "tel:+49" + phoneParts.join("").slice(1);

  var phoneSlots = document.querySelectorAll(".js-phone");
  for (var i = 0; i < phoneSlots.length; i++) {
    var phoneLink = document.createElement("a");
    phoneLink.href = phoneHref;
    phoneLink.textContent = phoneDisplay;
    phoneSlots[i].appendChild(phoneLink);
  }

  // Gleiches Prinzip für die E-Mail-Adresse: Sie steht nirgends als
  // zusammenhängender Text im HTML, sondern wird erst hier zusammengesetzt.
  var emailParts = ["info", "wutwandler.de"];
  var emailDisplay = emailParts.join("@");
  var emailHref = "mailto:" + emailDisplay + "?subject=Anfrage%20Wutwandler";

  var emailSlots = document.querySelectorAll(".js-email");
  for (var j = 0; j < emailSlots.length; j++) {
    var emailLink = document.createElement("a");
    emailLink.href = emailHref;
    emailLink.textContent = emailDisplay;
    emailSlots[j].appendChild(emailLink);
  }
});
