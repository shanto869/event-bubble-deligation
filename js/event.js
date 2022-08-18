// way 2
function makeIndigo() {
    document.body.style.background = 'indigo'
}

// way 3
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.background = 'green'
}

 // way 4
 const makePurpleButton = document.getElementById('make-purple');
 makePurpleButton.onclick = function makePurple() {
     document.body.style.background = 'purple'
 }
