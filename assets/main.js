
$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

// Active Menu Item Selected
const activeMenu = () => {
    const menuItems = $$('.menu__item-hover')

    menuItems.forEach(currentItem => {
        currentItem.onclick = () => {
            const activatedItem = $('.active')

            if(activatedItem) {
                activatedItem.classList.remove('active')
            }
            currentItem.classList.add('active')
        }
    })
    
}
activeMenu()

// 