const selectArrow = document.querySelector("#arrow-icon")

const showSelect = () => {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  })

  selectItem.forEach(item => {
    item.addEventListener('click', selectItemValue)
  })

  function selectToggle() {
    this.parentElement.classList.toggle("active");
    
  }

  function selectItemValue() {
    let value = this.innerText;
    let select = this.closest('.select')
    let currentSelect = select.querySelector('.select__current')
    currentSelect.innerText = value;
    select.classList.remove("active");
  }

}

showSelect()