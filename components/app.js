// ---------------------------------------------------------------------------------------------------------------
// Тут зібрані підключення усіх джаваскрипт компонентів, які можуть знадобитись в роботі. 
// Приклад використання зазвичай знаходиться в самому скрипті компоненту.
// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

// Підключення відстеження елементів для анімації. Інструкція знаходиться тут --> ./js_components/elementWatcher.js
// import { initializeElementWatcher } from './js_components/elementWatcher.js';
// Ініціалізація відстеження елементів для анімації.
// initializeElementWatcher();

// ---------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------
// Підключення функціоналу адаптивного переміщення елементів верстки. 
// Інструкція знаходиться тут --> ./js_components/moveTo.js
// ---------------------------------------------------------------------------------------------------------------
// import moveElements from './js_components/moveTo.js';
// Викликаємо функцію moveElements
// moveElements();

// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------
// Підключення функціоналу бургер меню, по замовчуванню додає клас .active .header__burger i .header__nav
// Інструкція знаходиться тут --> ./js_components/initBurgerMenu.js
// ---------------------------------------------------------------------------------------------------------------

// import { initBurgerMenu } from './js_components/initBurgerMenu.js';
// Викликаємо функцію initBurgerMenu
// initBurgerMenu();

// ---------------------------------------------------------------------------------------------------------------


import { initAccordion } from './js_components/accordion.js';

initAccordion();