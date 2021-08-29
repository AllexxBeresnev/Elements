document.addEventListener("DOMContentLoaded", () => {

    let whyItems = document.querySelectorAll(".why__item")
    let whyList =  document.querySelector(".why__list")

    whyItems.forEach(function (item, idx) {
        item.addEventListener('mouseover', function () {
            let ind = idx + 1
            whyList.classList.remove('why__list_hover_1')
            whyList.classList.remove('why__list_hover_2')
            whyList.classList.remove('why__list_hover_3')
            whyList.classList.remove('why__list_hover_4')
            whyList.classList.remove('why__list_hover_5')
            whyList.classList.remove('why__list_hover_6')

            whyList.classList.add('why__list_hover_' + ind);
            console.log(ind, item)            
        });   
    })
    console.log(whyItems, whyList)
})