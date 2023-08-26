// ==UserScript==
// @author      iruzo
// @homepage    https://github.com/iruzo/userscripts
// @name        Twitch points claimer
// @description Automatically claim channel points
// @version     1.0.0
// @license     MIT
// @match       https://www.twitch.tv/*
// @match       https://dashboard.twitch.tv/*
// @grant       none
// ==/UserScript==

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let claiming = false;
if (MutationObserver) console.log('Auto claimer is enabled.');
let observer = new MutationObserver(e => {
    let bonus = document.querySelector('.claimable-bonus__icon');
    if (bonus && !claiming) {
        bonus.click();
        let date = new Date();
        claiming = true;
        setTimeout(() => {
            console.log('Claimed at '+date);
            claiming = false;
        }, Math.random() * 1000 + 2000);
    }
});
observer.observe(document.body, {childList: true, subtree: true});
