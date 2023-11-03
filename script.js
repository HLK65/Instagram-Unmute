// ==UserScript==
// @name         InstagramUnmute
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  automatically unmute instagram stories
// @author       hlk
// @match      https://www.instagram.com/*
// @match      https://instagram.com/*
// @grant        none
// ==/UserScript==

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function find() {
    if (window.location.pathname.contains("stories/") && document.querySelector('[aria-label="Audo is muted."]') !== null) {
      console.log('Found Audio is muted icon');
      await sleep(100);
      document.querySelector('[aria-label="Audo is muted."]').parentElement.click();
      delInterval();
      //await sleep(5*60*1000);
    }
    else {
      //console.log('InstagramUnmute: 404 keep looking.');
    }
}

async function delInterval() {
  clearInterval(intervalId);
}

var intervalId = window.setInterval(find, 1000);
