// Ocena w Gwiazdkach

// Referencje do html-u

let allStars = document.querySelectorAll('.stars');

// Funkcja zmiany gwiazdki na kliknięcie

function rating (event) {
  let active = false;
  let singleStar = this.querySelectorAll('.star');
  let choice = event.target;
  singleStar.forEach(item => {
    if (active) {
      item.classList.remove('active');
      item.classList.remove('full');
    } else {
      item.classList.add('active');
    }
    if (item === choice) {
      active = !active;
    }
  });
}

// Funkcja zmiany gwiazdki na Hover

function hoverEffect (event) {
  let active = false;
  let singleStar = this.querySelectorAll('.star');
  let choice = event.target;
  singleStar.forEach(item => {
    if (event.type === 'mouseover') {
      if (active) {
        item.classList.remove('full');
        item.style.color = '#2a2a2a';
      } else {
        item.classList.add('full');
        item.style.color = '#d58e32';
      }
      if (item === choice) {
        active = !active;
      }
    } else {
      item.classList.remove('full');
      item.style.color = '#2a2a2a';
    }
  });
}

// Nasłuchiwacze

for (let i = 0; i < allStars.length; i++) {
  allStars[i].addEventListener('click', rating);
  allStars[i].addEventListener('mouseover', hoverEffect);
  allStars[i].addEventListener('mouseout', hoverEffect);
}
