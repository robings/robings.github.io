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
   let msieClock = document.createElement('li')
   msieClock.textContent=msieMessage
   msieClock.style.color='#FF0000'
   let msiePairsGame = document.createElement('li')
   msiePairsGame.textContent=msieMessage
   msiePairsGame.style.color='#FF0000'
   let msieFinanceCalculator = document.createElement('li')
   msieFinanceCalculator.textContent=msieMessage
   msieFinanceCalculator.style.color='#FF0000'
   let msieTimeboxer = document.createElement('li')
   msieTimeboxer.textContent=msieMessage
   msieTimeboxer.style.color='#FF0000'
   document.querySelector('.projectBox.clock ul').appendChild(msieClock)
   document.querySelector('.projectBox.pairsGame ul').appendChild(msiePairsGame)
   document.querySelector('.projectBox.financeCalculator ul').appendChild(msieFinanceCalculator)
   document.querySelector('.projectBox.timeboxer ul').appendChild(msieTimeboxer)
}