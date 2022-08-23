console.log('funzt')

let farben = document.getElementById('farbeAuswaehlen')
let button = document.getElementById('button')
let farbName = document.getElementsByTagName('option')

console.log(farben.selectedIndex)

button.addEventListener('click', () =>{
    const colorNmb= farben.selectedIndex
    console.log(farben.selectedIndex)
    console.log(farbName[colorNmb].value)
    let farbe = farbName[colorNmb].value
    farbe = farbe.replace(' ','').toLowerCase()
    console.log(farbe)
    document.body.style.backgroundColor= farbe

})