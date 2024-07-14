const selectArrow = document.querySelector("#arrow-icon");

const showSelect = () => {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  })

  selectItem.forEach(item => {
    item.addEventListener('click', selectItemValue);
  })

  function selectToggle() {
    this.parentElement.classList.toggle("active");
    
  }

  function selectItemValue() {
    let value = this.innerText;
    let select = this.closest('.select');
    let currentSelect = select.querySelector('.select__current');
    currentSelect.innerText = value;
    select.classList.remove("active");
  }
}

showSelect();

// Смена темы
const changeThemeBtn = document.querySelector("#theme");
const header = document.querySelector(".header")

changeThemeBtn.addEventListener("click", () => {
  const app = document.querySelector('.app');
  app.classList.toggle("light");
  header.classList.toggle("light");
  app.classList.toggle('dark')
  header.classList.toggle('dark')
})

// Меню бургер

const burgerBtn = document.querySelector("#burger");

burgerBtn.addEventListener("click", () => {
  const burgerMenu = document.querySelector("#menu");
  burgerMenu.classList.toggle("active");
  burgerMenu.classList.toggle("hidden");
  burgerBtn.classList.toggle("active");
})