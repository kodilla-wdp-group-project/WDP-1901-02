// Ocena w Gwiazdkach

// Referencje do html-u

const allStars = document.querySelectorAll('.stars');

// Nasłuchiwacze

allStars.forEach(function (item) {
  const stars = item.querySelectorAll('.star');
  stars.forEach(function (el) {
    el.addEventListener('click', rating);
    el.addEventListener('mouseover', hoverEffect);
    el.addEventListener('mouseout', hoverEffect);
  });

  // Funkcja zmiany gwiazdki na kliknięcie

  function rating(event) {
    const choice = event.target;
    let active = false;
    stars.forEach(function (star) {
      if (active) {
        star.classList.remove('active');
        star.classList.remove('full');
      } else if (!active) {
        star.classList.add('active');
      }
      if (star === choice) {
        active = true;
      }
    });
  }

  // Funkcja zmiany gwiazdki na Hover

  function hoverEffect(event) {
    const choice = event.target;
    let active = false;
    stars.forEach(function (star) {
      if (!active) {
        star.classList.toggle('hoverEffect');
      }
      if (star === choice) {
        active = !active;
      }
    });
  }
});
