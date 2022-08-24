import { tabs } from './tabs';
tabs();

const $d = document;
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

const $title = $d.createElement('h1');
$title.classList.add('logo');
$title.textContent = 'RESTO';
$fragment.appendChild($title);

const $heroPicture = $d.createElement('img');
$heroPicture.classList.add('hero-image');
$heroPicture.setAttribute('src', '/dist/assets/images/hero.jpg');
$fragment.appendChild($heroPicture);

const $menu = $d.createElement('nav');
$menu.classList.add('menu');
$fragment.appendChild($menu);

const $menuList = $d.createElement('ul');
$menuList.classList.add('menu__list');
$menu.appendChild($menuList);

const menuItems = ['Home', 'Menu', 'Contact'];

menuItems.forEach((item) => {
  const $menuItem = document.createElement('li');
  $menuItem.classList.add('menu__item');
  $menuList.appendChild($menuItem);

  const $menuLink = document.createElement('a');
  $menuLink.classList.add('menu__link');
  $menuLink.textContent = item;
  $menuLink.setAttribute('href', '#');
  /*  $menuItem.textContent = $menuLink; */
  $menuItem.appendChild($menuLink);
});

$contentContainer.appendChild($fragment);
