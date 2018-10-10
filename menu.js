

let menuList = document.getElementById('menuList')
let dessertsList = document.getElementById('desserts')
let entreesList = document.getElementById('entrees')
let startersList = document.getElementById('starters')
let menuButton = document.getElementById('menuButton')



function renderList(e) {
  var courseType ="all"

  // if button was cliocked use that course type
  if(e){
    e.preventDefault()
    courseType = e.target.getAttribute("course")
  }

  menuList.innerHTML = "<div></div>"
  for(let i = 0; i < dishes.length; i++) {

    let menu = dishes[i];
    if(menu.course == courseType) {

      let menuItem = `
      <li>
        <label>${menu.title}</label>
        <p>${menu.description}</p>
        <h5> $ ${menu.price}</h5>
        <img src="${menu.imageURL}" />
      </li>
      `
      menuList.insertAdjacentHTML('beforeend', menuItem)
    }

    if(courseType == 'all'){
      let menuItem = `
      <li>
        <label>${menu.title}</label>
        <p>${menu.description}</p>
        <h5> $ ${menu.price}</h5>
        <img src="${menu.imageURL}" />
      </li>
      `
      menuList.insertAdjacentHTML('beforeend', menuItem)
    }
  }
}

renderList()


menuButton.addEventListener('click', renderList)
dessertsList.addEventListener('click', renderList)
entreesList.addEventListener('click', renderList)
startersList.addEventListener('click', renderList)
