const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')
const toggleBtn = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('show-menu')
    toggleBtn.classList.toggle('show-icon')
})

const dropdownItems = document.querySelectorAll('.dropdown-item')

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown-button')

    dropdownButton.addEventListener('click', () => {

        const showDropdown = document.querySelector('.show-dropdown')

        toggleItem(item)

        if(showDropdown && showDropdown!= item) {
            toggleItem(showDropdown)
        }

    })
})

const toggleItem = item => {
    const dropdownContainer = item.querySelector('.dropdown-container')

    if(item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
            item.classList.remove('show-dropdown')
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
            item.classList.add('show-dropdown')
    }  
}