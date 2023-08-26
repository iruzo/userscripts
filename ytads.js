// ==UserScript==
// @author      iruzo
// @homepage    https://github.com/iruzo/userscripts
// @name        YouTube adblocker
// @description Speed up and skip YouTube ads automatically
// @version     1.0.0
// @license     MIT
// @match       *://*.youtube.com/*
// @exclude     *://*.youtube.com/subscribe_embed?*
// @grant       none
// ==/UserScript==

setInterval(() => {
    const btn = document.querySelector('.videoAdUiSkipButton,.ytp-ad-skip-button')
    if (btn) {
        btn.click()
    }
    const ad = [...document.querySelectorAll('.ad-showing')][0];
    if (ad) {
        document.querySelector('video').playbackRate = 10;
    }
}, 50)
