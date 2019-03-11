const redInput = document.getElementById('red-input')
const greenInput = document.getElementById('green-input')
const blueInput = document.getElementById('blue-input')
const convertBtn = document.getElementById('convert-btn')
const hexColor = document.querySelector('.hex-color')
const hexName = document.getElementById('hex-name')



convertBtn.addEventListener('click', event => {
  let redNumber = parseInt(redInput.value, 10)
  let greenNumber = parseInt(greenInput.value, 10)
  let blueNumber = parseInt(blueInput.value, 10)

  if (redNumber >= 0 && redNumber <= 250 & greenNumber >= 0 && greenNumber <= 250 && blueNumber >= 0 && blueNumber <= 250) {
    let hexRed = redNumber.toString(16)
    let hexGreen = greenNumber.toString(16)
    let hexBlue = blueNumber.toString(16)
    let hexNumber = '#'

    if (hexRed.length < 2) {
      hexNumber += '0' + hexRed
    } else {
      hexNumber += hexRed
    }
    if (hexGreen.length < 2) {
      hexNumber += '0' + hexGreen
    } else {
      hexNumber += hexGreen
    }
    if (hexBlue.length < 2) {
      hexNumber += '0' + hexBlue
    } else {
      hexNumber += hexBlue
    }
    console.log(hexNumber)

    hexName.textContent = hexNumber
    hexColor.style.backgroundColor = hexNumber
  } else {
    window.alert("Please enter right number or don't blank!")
  }

})
