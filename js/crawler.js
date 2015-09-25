/**
 * Created by vanuwa on 9/25/15.
 */
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Request from background page received. Method is ", request.method, request, sender);

    console.log("Answering back...");
    sendResponse({ data: "request successfully received. Thanks." });
});