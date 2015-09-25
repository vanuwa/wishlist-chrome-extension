/**
 * Created by vanuwa on 9/25/15.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Current tab", tab);
});