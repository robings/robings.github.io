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