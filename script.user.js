// ==UserScript==
// @name         Stack Comment Icons
// @namespace    http://*.stackexchange.com
// @include      http*//*.stackoverflow.com
// @version      0.1
// @description  adds icons next to comments.
// @author       Shadow Wizard, uploaded to GitHub by IAP-Reloaded
// @match        http://*/*
// @grant        none
// ==/UserScript==

var Position = {"Left": 1, "Right": 2};
var _size = 16;
var _pos = Position.Left;
$(".comment").each(function() {
    var commentObj = $(this);
    var commentUser = commentObj.find(".comment-user");
    var userLink = commentUser.attr("href");
    if (userLink && userLink.length > 0) {
        var avatar = $("<span></span>");
        if (_pos == Position.Left)
            avatar.insertBefore(commentUser);
        else
            avatar.insertAfter(commentUser);
        avatar.load(userLink + " .avatar img", function() {
            avatar.find("img").css({"width": _size + "px", "height": _size + "px"});
        });
    }
});
