// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

for (let u = 0; u < unicorns.length; u++) {
  unicorns[u].onclick = unicornClicked
}

function unicornClicked(e) {
  let unicorns = e.target

  if (unicorns.src.match('images/unicorn-0.png')) {
    unicorns.src = 'images/unicorn-1.png'
  } else if (unicorns.src.match('images/unicorn-1.png')) {
    unicorns.src = 'images/unicorn-2.png'
  } else if (unicorns.src.match('images/unicorn-2.png')) {
    unicorns.src = 'images/unicorn-3.png'
  } else if (unicorns.src.match('images/unicorn-3.png')) {
    alert('Unicorn Says Thank You !')
  }
}
