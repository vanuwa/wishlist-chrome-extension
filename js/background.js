/**
 * Created by vanuwa on 9/21/15.
 */
(function () {
    console.log("Background page executed");

    chrome.browserAction.onClicked.addListener(function (tab) {
        console.log("chrome.browserAction.onClicked (arguments)", tab);

        chrome.tabs.sendMessage(tab.id, { method: 'handshake' }, function (response) {
            console.log("Handshake response from a tab with id %s received", tab.id);
        });
    });
}());