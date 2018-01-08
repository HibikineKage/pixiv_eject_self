// ==UserScript==
// @name        自分の作品を消す
// @namespace   hibikine
// @description pixivの検索欄から自分の作品を消します
// @include     www.pixiv.net/search.php*
// @version     1.2
// @grant       none
// ==/UserScript==

'use strict';(function(){var e=document.getElementsByClassName('image-item'),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var g,f=e[Symbol.iterator]();!(_iteratorNormalCompletion=(g=f.next()).done);_iteratorNormalCompletion=!0){var h=g.value,i=h.getElementsByClassName('_thumbnail')[0],j=i.getAttribute('data-user-id');j===pixiv.user.id&&(h.style.display='none')}}catch(k){_didIteratorError=!0,_iteratorError=k}finally{try{!_iteratorNormalCompletion&&f.return&&f.return()}finally{if(_didIteratorError)throw _iteratorError}}})();