const profile = document.querySelector('.card__social');
const share = document.querySelector('.content__social');
const elements = [profile, share];
const btn = document.querySelectorAll('.btn');

btn.forEach(click);

function click(item) {
  item.addEventListener('click', function () {
    elements.forEach(toggleActive);
  });
}

function toggleActive(item) {
  item.classList.toggle('active');
}
