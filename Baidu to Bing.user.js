// ==UserScript==
// @name         Baidu to Bing
// @version      0.1
// @description  一个百度搜索自动重定向到bing搜索的油猴插件（好吧，暴力猴似乎也能用，但是没测试），只为抵制百度搜索
// @author       lidongxun967
// @match        https://www.baidu.com/s
// ==/UserScript==

(function() {
    'use strict';
    window.location.replace("https://www.bing.com/search?q=" + encodeURIComponent(document.getElementById('kw').value));
})();
