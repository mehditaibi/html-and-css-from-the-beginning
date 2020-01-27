function initMap() {
  const location = { lat: 42.361145, lng: -71.057083 };

  const map = new google.maps.Map(document.querySelector(".map"), {
    center: location,
    zoom: 12
  });

  const marker = new google.maps.Marker({ position: location, map: map });
}

// Sticky menu background
window.addEventListener("scroll", function() {
  if (this.window.scrollY > 150) {
    this.document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    this.document.querySelector("#navbar").style.oppacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function(event) {
  let navBarHeight = window.innerWidth > 500 ? 65 : 110;
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - navBarHeight
      },
      800
    );
  }
});
