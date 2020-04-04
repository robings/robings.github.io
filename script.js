let msieFlag = 0
let msEdgeFlag = 0
let msEdge18Flag = 0

function detectMS() {
    let browser= window.navigator.userAgent

    if (browser.indexOf('MSIE ') > 0) {
        msieFlag = 1
    } else if (browser.indexOf('Trident/') > 0) {
        msieFlag = 1
    } else {
        msieFlag = 0
    }

    if (browser.indexOf('Edge/') > 0) {
        msEdgeFlag = 1;
    } else {
        msEdgeFlag = 0;
    }

    if (browser.indexOf('Edge/18') > 0) {
        msEdge18Flag = 1;
    } else {
        msEdge18Flag = 0;
    }
}

detectMS()

// for quick test of MSIE specific stuff uncomment the next line
// msieFlag = 1
// for quick test of Edge specific stuff uncomment the next line
// msEdgeFlag = 1
//uncomment both Edge flags to test for Edge18 specific stuff
// msEdge18Flag = 1

if (msieFlag) {
    swapClockProjectBackground()
    addBrowserSupportMessages('Sorry, Internet Explorer is not supported')
}

if (msEdgeFlag && !msEdge18Flag) {
    swapClockProjectBackground()
    let msClock = document.createElement('li')
    msClock.textContent='Sorry older Edge Browsers are not supported'
    msClock.style.color='#FF0000'
    document.querySelector('.projectBox.clock ul').appendChild(msClock)
}

function swapClockProjectBackground() {
    document.getElementById('clockContainer').style.display = 'none'
    document.querySelector('.projectBox.clock').style.backgroundImage = 'url(\'images/clockScreenshot.png\')'
    document.querySelector('.projectBox.clock').style.backgroundSize = 'contain'
    document.querySelector('.projectBox.clock').style.backgroundRepeat = 'no-repeat'
}

function addBrowserSupportMessages(msMessage) {
    let msClock = document.createElement('li')
    msClock.textContent=msMessage
    msClock.style.color='#FF0000'
    let msPairsGame = document.createElement('li')
    msPairsGame.textContent=msMessage
    msPairsGame.style.color='#FF0000'
    let msAcademyPortal = document.createElement('li')
    msAcademyPortal.textContent=msMessage
    msAcademyPortal.style.color='#FF0000'
    let msAptitudeTest = document.createElement('li')
    msAptitudeTest.textContent=msMessage
    msAptitudeTest.style.color='#FF0000'
    let msMakeAMealOfIt = document.createElement('li')
    msMakeAMealOfIt.textContent=msMessage
    msMakeAMealOfIt.style.color='#FF0000'
    let msFinanceCalculator = document.createElement('li')
    msFinanceCalculator.textContent=msMessage
    msFinanceCalculator.style.color='#FF0000'
    let msTimeboxer = document.createElement('li')
    msTimeboxer.textContent=msMessage
    msTimeboxer.style.color='#FF0000'
    let msFastTimesTables = document.createElement('li')
    msFastTimesTables.textContent=msMessage
    msFastTimesTables.style.color='#FF0000'
    document.querySelector('.projectBox.clock ul').appendChild(msClock)
    document.querySelector('.projectBox.pairsGame ul').appendChild(msPairsGame)
    document.querySelector('.projectBox.academyPortal ul').appendChild(msAcademyPortal)
    document.querySelector('.projectBox.aptitudeTest ul').appendChild(msAptitudeTest)
    document.querySelector('.projectBox.makeAMealOfIt ul').appendChild(msMakeAMealOfIt)
    document.querySelector('.projectBox.financeCalculator ul').appendChild(msFinanceCalculator)
    document.querySelector('.projectBox.timeboxer ul').appendChild(msTimeboxer)
    document.querySelector('.projectBox.fastTimesTables ul').appendChild(msFastTimesTables)
}