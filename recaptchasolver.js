// ==UserScript==
// @author      iruzo
// @homepage    https://github.com/iruzo/userscripts
// @name        reCAPTCHA solver
// @description Auto solves Google reCAPTCHA and block popups sites
// @version     1.0.0
// @license     MIT
// @match       *://*.filesearch.link/*
// @match       *://*.trangchu.news/*
// @match       *://*.bitcoinly.in/*
// @match       *://*.vshort.link/*
// @match       *://*.linka.click/*
// @match       *://*.linkres.in/*
// @match       *://*.cashurl.in/*
// @match       *://*.linkad.in/*
// @match       *://*.cuturl.in/*
// @match       *://*.mitly.us/*
// @match       *://*.aii.sh/*
// @match       *://*.iir.ai/*
// @match       *://*/recaptcha/*
// @include     /^(https?:\/\/)(.+)?(shortzon|coinadfly|bclikeqt|fc-lc)(\.com)(\/.*)/
// @include     /^(https?:\/\/)(.+)?(downfile|promo-visits)(\.site)(\/.*)/
// @include     /^(https?:\/\/)(.+)?(bcvc|satoshi-win)(\.xyz)(\/.*)/
// @include     /^(https?:\/\/)(1dogecoin|faucet)(\.work)(\/.*)/
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @require     https://greasyfork.org/scripts/444872-7-recaptcha-solver-backup/code/7_Recaptcha%20Solver%20(BackUp).user.js#bypass=true
// @run-at      document-start
// @grant       GM_xmlhttpRequest
// ==/UserScript==

var blockonclick = new Function("console.log('Blocked By BloggerPemula')");

function BlockPopup(e){return 1;}
parent.open=BlockPopup; this.open=BlockPopup; window.open=BlockPopup; onload=BlockPopup;
window.open = function(){ return;};
onload = function(){ return;};
this.open = function(){ return;};
parent.open = function(){ return;};
unsafeWindow.open = function(){};
