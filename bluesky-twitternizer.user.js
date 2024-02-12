// ==UserScript==
// @name         Bluesky Twitter-nizer
// @namespace    https://github.com/yanorei32/bluesky-twitternizer
// @version      0.1.0
// @description  ショートカットをTwitter風にするやつ。(最低限)
// @author       yanorei32
// @match        https://bsky.app/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bsky.app
// @updateURL    https://github.com/yanorei32/bluesky-twitternizer/raw/master/bluesky-twitternizer.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
            // on 'n' key (create a post)
            case 78:
                document.querySelector('button.r-wzwllv').click();
                break;

            // on '.' key (reload timeline)
            case 190:
                document.querySelector('a.css-175oi2r:nth-child(2)').click();
                break;
        }
    });
})();
