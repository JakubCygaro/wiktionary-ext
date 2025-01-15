chrome.contextMenus.onClicked.addListener(genericOnClick);
function genericOnClick(info, tab) {
    console.log(info.selectionText);
    if (info.selectionText === null) return;
    chrome.tabs.create({ 
        url: 'https://en.wiktionary.org/wiki/' + info.selectionText, 
        active: true
    });
}
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: 'Lookup wiktionary',
        contexts: ['selection'],
        id: 'hanzi-wiktionary',
    });
});