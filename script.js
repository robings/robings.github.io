var msieFlag = 0

function detectMSIE() {
    var browser= window.navigator.userAgent
    if (browser.indexOf('MSIE ') > 0) {
        msieFlag = 1
    } else if (browser.indexOf('Trident/') > 0) {
        msieFlag = 1
    } else {
        msieFlag = 0
    }
}

detectMSIE()

// for quick test of MSIE specific stuff uncomment the next line
// msieFlag = 1

if (msieFlag == 1) {
   document.getElementById('clockContainer').style.display = 'none'
   document.querySelector('.projectBox.clock').style.backgroundImage = 'url(\'images/clockScreenshot.png\')'
   document.querySelector('.projectBox.clock').style.backgroundSize = 'contain'
   document.querySelector('.projectBox.clock').style.backgroundRepeat = 'no-repeat'
   let msieMessage = 'Sorry, IE is not supported'
   let msieLi = document.createElement('li')
   msieLi.textContent=msieMessage
   msieLi.style.color='#FF0000'
   let msieLi2 = document.createElement('li')
    msieLi2.textContent=msieMessage
    msieLi2.style.color='#FF0000'
   document.querySelector('.projectBox.clock ul').appendChild(msieLi)
   document.querySelector('.projectBox.pairsGame ul').appendChild(msieLi2)
}