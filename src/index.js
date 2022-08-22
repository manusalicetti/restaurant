console.log('Probando 1 2 3');
const $contentContainer = document.getElementById('content');
const $fragment = document.createDocumentFragment();
console.log($contentContainer);
/*   <h1 class="logo">RESTO</h1>
      <img src="/dist/assets/images/hero.jpg" alt="Hero Image Resto Kitchen" title="Resto Kitchen Hero Image" class="hero-image" />
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__item"><a href="#" class="menu__link">Home</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Menu</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Contact</a></li>
        </ul>
      </nav> */

const $title = document.createElement('h1');
$title.classList.add('logo');
$title.textContent = 'RESTO';
$fragment.appendChild($title);

const $heroPicture = document.createElement('img');
$heroPicture.classList.add('hero-image');
$heroPicture.setAttribute('src', '/dist/assets/images/hero.jpg');
$fragment.appendChild($heroPicture);

$contentContainer.appendChild($fragment);
