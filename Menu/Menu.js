/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuButton = document.querySelector('.menu-button');

menuItems.forEach(data => {
  menuButton.appendChild(createMenu(data.students, data.faculty, data.whatsNew, data.techTrends, data.music, data.logOut))
})

function createMenu (students, faculty, whatsNew, techTrends, music, logOut) {
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');
  const itemOne = document.createElement('li');
  const itemTwo = document.createElement('li');
  const itemThree = document.createElement('li');
  const itemFour = document.createElement('li');
  const itemFive = document.createElement('li');
  const itemSix = document.createElement('li');

//  menu.append(itemOne);
//  menu.append(itemTwo);
//  menu.append(itemThree);
//  menu.append(itemFour);
//  menu.append(itemFive);
//  menu.append(itemSix);
  

  menu.classList.add('menu', 'menu-open');
  // menuList.classList.add('menu-open')
  

  itemOne.textContent = students;
  itemTwo.textContent = faculty;
  itemThree.textContent = whatsNew;
  itemFour.textContent = techTrends;
  itemFive.textContent = music;
  itemSix.textContent = logOut;

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
  })


return menu;
}

