// ==UserScript==
// @name         Makecode barrierefrei4kids
// @namespace    http://tampermonkey.net/
// @version      2024-06-05
// @description  Alt-J Focusses to Javascript-Editor
// @author       You
// @match        https://makecode.calliope.cc/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=calliope.cc
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("keydown", function(event) {
        console.log("blafasel %o", event);
        if (event.altKey === true && event.code === "KeyJ") {
        let editors=document.getElementsByClassName("monaco-mouse-cursor-text");
        if (editors.length>0) editors[editors.length-1].focus();
            console.log("FOCUS: %o", editors);
       //     alert("Alt-J");

        }
    });
    console.log("ääää");

 })();

