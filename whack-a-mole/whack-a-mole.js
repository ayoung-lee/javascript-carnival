// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// all the cells are shaing the same tag name 'td'
let cells = document.getElementsByTagName('TD')

// generate random integers and pass them in the cells.length
let randomIndex = Math.floor(Math.random() * cells.length)

// put randomIndex inside the cell so the outcome will be displayed as cells instead of numbers
let randomCell = cells[randomIndex]

// make new image
let mole = document.createElement('img')
// assign a source
mole.src = './mole.PNG'
// assign id in css to adjust the size of the img
mole.id = 'mole'
// append the mole img in the randomCell wich has the random index
randomCell.appendChild(mole)
// the whackedMole function plays on click
mole.onclick = whackedMole

function whackedMole() {
  // reassigneing the randomIndex as the previous one's already been in use
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)
  // insert audio
  let audio = new Audio('./whack-audio.wav')
  audio.play()
}
