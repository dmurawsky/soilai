"use strict";var t="soil-ai-form-container",o="soil-ai-toggle-container",e="soil-ai-form-background";function n(t,o,e){void 0===e&&(e={});var n=document.createElement(t);return Object.assign(n.style,o),Object.assign(n,e),n}var i="http://localhost:".concat(4444,"/");var r='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110 110" width="28px" height="28px">\n  <path d="m92.918 56.398c5.2773-2.6367 5.2773-10.16 0-12.797l-79.418-39.699c-5.6602-2.8281-11.934 2.5312-10.027 8.5586l10.902 34.414h35.625c1.7266 0 3.125 1.3984 3.125 3.125s-1.3984 3.125-3.125 3.125h-35.625l-10.902 34.414c-1.9062 6.0273 4.3672 11.387 10.027 8.5586z" />\n</svg>';function c(t,o){void 0===o&&(o=!1);var e=n("div",{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",backgroundColor:o?"#ff3333":"#333",color:"#fff",padding:"10px 20px",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",opacity:"0",transition:"opacity 0.5s, bottom 0.5s",width:"fit-content",maxWidth:"100%",zIndex:"999"},{textContent:t});document.body.appendChild(e),setTimeout((function(){e.style.opacity="1",e.style.bottom="30px"}),10),setTimeout((function(){e.style.opacity="0",e.style.bottom="20px",setTimeout((function(){e.remove()}),500)}),3e3)}function d(o,d,a,l){var s,p,u=function(t){var o={border:t.style.border};return t.style.border="2px dashed #aaa",function(){t.style.border=o.border}}(o),x=n("input",{color:"#333",boxSizing:"content-box",padding:"7px",border:"1px solid #ccc",borderRadius:"3px",marginRight:"3px",height:"19px",flex:"1"},{type:"text",autofocus:!0,placeholder:"Describe your change..."}),f=n("button",{boxSizing:"content-box",padding:"2px 0px 4px 0px"},{type:"submit",innerHTML:r}),h=o.getBoundingClientRect(),b=document.body.getBoundingClientRect(),m=h.top-b.top,g=b.bottom-h.bottom,v=h.left-b.left,w=b.right-h.right;g>30?(s="".concat(h.bottom+window.scrollY,"px"),p="".concat(h.left+window.scrollX,"px")):m>30?(s="".concat(h.top-30+window.scrollY,"px"),p="".concat(h.left+window.scrollX,"px")):w>150?(s="".concat(h.top+window.scrollY,"px"),p="".concat(h.right+10+window.scrollX,"px")):v>150?(s="".concat(h.top+window.scrollY,"px"),p="".concat(h.left-150+window.scrollX,"px")):(s="".concat(h.bottom+window.scrollY,"px"),p="".concat(h.left+window.scrollX,"px"));var y=n("div",{position:"absolute",zIndex:"999",backgroundColor:"#fff",padding:"5px",borderRadius:"5px",margin:"5px",border:"1px solid #ccc",boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.4)",width:"300px",maxWidth:"100%",top:s,left:p},{id:t}),C=n("div",{position:"absolute",zIndex:"998",top:"0px",right:"0px",bottom:"0px",left:"0px"},{id:e});function k(){u(),y.remove(),C.remove()}C.onclick=k;var E=n("form",{display:"flex"},{onsubmit:function(t){var o;t.preventDefault(),(o={soilId:d,message:x.value,env:a},fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(t){if(!t.ok)throw Error("Server responded with status ".concat(t.status));return t.json()})).catch((function(t){return console.error("Error posting to server:",t),null}))).then((function(){return c("Harvest time!")})).catch((function(t){return c(t.message)})),setTimeout((function(){k(),c("Planting in rich soil...")}),500)}});return E.appendChild(x),E.appendChild(f),y.appendChild(E),document.body.appendChild(C),document.body.appendChild(y),setTimeout((function(){return x.focus()})),k}var a={enabled:!0};function l(e){function r(o){if(!document.getElementById(t)&&a.enabled){var n=o.target.closest("[data-soil-id]");if(n){var i=n.getAttribute("data-soil-id");i&&(a.removeAll=d(n,i,e))}}}return fetch(i,{method:"GET"}).then((function(t){if(!t.ok)throw new Error("Server responded with status ".concat(t.status));return!0})).catch((function(t){return console.error("Error posting to server:",t),!1})).then((function(t){if(!t)return c("Soil AI server is not running",!0);!function(t){var e=n("div",{position:"fixed",bottom:"15px",right:"15px"},{id:o}),i=n("input",{},{type:"checkbox",id:"soilAiCheckbox",alt:"Soil AI",checked:t.enabled});i.addEventListener("change",(function(){var o;t.enabled=i.checked,i.checked||null===(o=t.removeAll)||void 0===o||o.call(t)}));var r=n("label",{marginRight:"5px"},{htmlFor:"soilAiCheckbox",textContent:"Soil AI"});e.appendChild(r),e.appendChild(i),document.body.appendChild(e)}(a),document.addEventListener("click",r)})),function(){document.removeEventListener("click",r)}}document.addEventListener("DOMContentLoaded",(function(){return l("js")}));
//# sourceMappingURL=bundle.js.map
