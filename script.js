var msieFlag = 0

function detectMSIE() {
    var browser= window.navigator.userAgent
    console.log (browser)
    if (browser.indexOf('MSIE ') > 0) {
        msieFlag = 1
    } else if (browser.indexOf('Trident/') > 0) {
        msieFlag = 1
    } else {
        msieFlag = 0
    }
}

detectMSIE()

if (msieFlag == 1) {
   document.getElementById('clockContainer').style.display = 'none'
   document.querySelector('.projectBox.clock').style.backgroundImage = 'url(\'images/clockScreenshot.png\')'
   document.querySelector('.projectBox.clock').style.backgroundSize = 'contain'
   document.querySelector('.projectBox.clock').style.backgroundRepeat = 'no-repeat'
}