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
    let msInfo = [
        'Sorry, Internet Explorer is not supported',
        '.projectBox.pairsGame ul',
        '.projectBox.academyPortal ul',
        '.projectBox.aptitudeTest ul',
        '.projectBox.makeAMealOfIt ul',
        '.projectBox.financeCalculator ul',
        '.projectBox.timeboxer ul',
        '.projectBox.fastTimesTables ul'
    ]
    addBrowserSupportMessages(msInfo)
    document.querySelector('#clockContainer').style.display = 'none'
}

if (msEdgeFlag && !msEdge18Flag) {
    document.querySelector('#clockContainer').style.display = 'none'
}

function addBrowserSupportMessages(msInfo) {
    for (var i=1; i<(msInfo.length); i++) {
            var msMessage = document.createElement('li')
            msMessage.textContent = msInfo[0]
            msMessage.style.color = '#FF0000'
            document.querySelector(msInfo[i]).appendChild(msMessage)
    }
}