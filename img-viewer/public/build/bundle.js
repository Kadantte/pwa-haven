var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,s;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e,n){t.classList[n?"add":"remove"](e)}function x(t){s=t}function $(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const w=[],v=[],k=[],_=[],q=Promise.resolve();let P=!1;function C(t){k.push(t)}let M=!1;const O=new Set;function E(){if(!M){M=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];x(e),I(e.$$)}for(x(null),w.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];O.has(e)||(O.add(e),e())}k.length=0}while(w.length);for(;_.length;)_.pop()();P=!1,M=!1,O.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const L=new Set;function S(t,e){t&&t.i&&(L.delete(t),t.i(e))}const Y="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function A(t,n,r,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,r),i||C((()=>{const n=c.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(C)}function j(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(w.push(t),P||(P=!0,q.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,l,r,i,c,a,u,d=[-1]){const p=s;x(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:l.context||[]),callbacks:n(),dirty:d,skip_bound:!1,root:l.target||p.$$.root};u&&u(m.root);let h=!1;if(m.ctx=r?r(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=l)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](l),h&&F(e,t)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();l.intro&&S(e.$$.fragment),A(e,l.target,l.anchor,l.customElement),E()}x(p)}class T{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(e){let n,l,r,i,s,c,g;return{c(){n=d("div"),l=d("h4"),l.textContent="Install",r=m(),i=d("button"),i.innerHTML="<span>×</span>",s=p("\r\n    Click here to install the app for more features!"),b(l,"class","alert-heading"),b(i,"class","close"),b(i,"type","button"),b(n,"class","alert alert-success filled-dm show svelte-1qjuqpq")},m(t,o){u(t,n,o),a(n,l),a(n,r),a(n,i),a(n,s),c||(g=[h(i,"click",e[2]),h(n,"click",e[1])],c=!0)},p:t,d(t){t&&f(n),c=!1,o(g)}}}function B(e){let n,o=e[0]&&z(e);return{c(){o&&o.c(),n=p("")},m(t,e){o&&o.m(t,e),u(t,n,e)},p(t,[e]){t[0]?o?o.p(t,e):(o=z(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&f(n)}}}function D(t,e,n){let o;return window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),n(0,o=t)})),[o,async function(){o.prompt();const{outcome:t}=await o.userChoice;"accepted"===t&&n(0,o=null)},function(){n(0,o=null)}]}class R extends T{constructor(t){super(),N(this,t,D,B,r,{})}}const{window:X}=Y;function U(e){let n,l,r,i,s,c;return{c(){n=d("div"),l=d("button"),l.textContent="arrow_back",r=m(),i=d("button"),i.textContent="arrow_forward",b(l,"class","btn btn-lg btn-square material-icons"),b(l,"type","button"),b(i,"class","btn btn-lg btn-square material-icons"),b(i,"type","button"),b(n,"class","btn-group bg-dark-dm bg-light-lm rounded m-5 col-auto")},m(t,o){u(t,n,o),a(n,l),a(n,r),a(n,i),s||(c=[h(l,"click",e[13]),h(i,"click",e[12])],s=!0)},p:t,d(t){t&&f(n),s=!1,o(c)}}}function H(t){let e,n,l,r,i,s,x,$,w,v,k,_,q,P,C,M,O,E,I,Y,F,N,T,z,B,D,H,G,Q,W,K,V,J,Z,tt,et=t[3]?"blur_off":"blur_on";n=new R({});let nt=t[7].length>1&&U(t);return document.title=V=t[4]+" "+(t[6].x&&t[6].y?`(${t[6].x} x ${t[6].y})`:"")+" "+t[9](t[5]),{c(){var o;e=d("div"),(o=n.$$.fragment)&&o.c(),l=m(),r=d("div"),i=d("img"),x=m(),$=d("div"),nt&&nt.c(),w=m(),v=d("div"),k=d("button"),k.textContent="zoom_out_map",_=m(),q=d("button"),q.textContent="remove",P=m(),C=d("input"),O=m(),E=d("button"),E.textContent="add",I=m(),Y=d("div"),F=d("button"),N=p(et),T=m(),z=d("button"),z.textContent="rotate_left",B=m(),D=d("button"),D.textContent="rotate_right",H=m(),G=d("button"),G.innerHTML='<div class="flip svelte-1w5qlh3">flip</div>',Q=m(),W=d("button"),W.textContent="flip",K=m(),b(e,"class","sticky-alerts d-flex flex-column-reverse svelte-1w5qlh3"),c(i.src,s=t[1])||b(i,"src",s),b(i,"alt","view"),b(i,"class","w-full h-full position-absolute svelte-1w5qlh3"),y(i,"transition",t[8]),b(r,"class","w-full h-full overflow-hidden position-relative dragarea svelte-1w5qlh3"),b(k,"class","btn btn-lg btn-square material-icons svelte-1w5qlh3"),b(k,"type","button"),b(q,"class","btn btn-lg btn-square material-icons svelte-1w5qlh3"),b(q,"type","button"),b(C,"type","number"),b(C,"step","0.1"),b(C,"min","0.1"),b(C,"class","form-control form-control-lg text-right svelte-1w5qlh3"),b(C,"placeholder","Scale"),C.readOnly=!0,C.value=M=t[0].toFixed(1),b(E,"class","btn btn-lg btn-square material-icons svelte-1w5qlh3"),b(E,"type","button"),b(v,"class","btn-group input-group bg-dark-dm bg-light-lm rounded m-5 w-200 col-auto svelte-1w5qlh3"),b(F,"class","btn btn-lg btn-square material-icons"),b(F,"type","button"),b(z,"class","btn btn-lg btn-square material-icons"),b(z,"type","button"),b(D,"class","btn btn-lg btn-square material-icons"),b(D,"type","button"),b(G,"class","btn btn-lg btn-square material-icons"),b(G,"type","button"),b(W,"class","btn btn-lg btn-square material-icons"),b(W,"type","button"),b(Y,"class","btn-group bg-dark-dm bg-light-lm rounded m-5 col-auto"),b($,"class","position-absolute buttons row w-full justify-content-center svelte-1w5qlh3")},m(o,s){u(o,e,s),A(n,e,null),u(o,l,s),u(o,r,s),a(r,i),t[35](i),u(o,x,s),u(o,$,s),nt&&nt.m($,null),a($,w),a($,v),a(v,k),a(v,_),a(v,q),a(v,P),a(v,C),a(v,O),a(v,E),a($,I),a($,Y),a(Y,F),a(F,N),a(Y,T),a(Y,z),a(Y,B),a(Y,D),a(Y,H),a(Y,G),a(Y,Q),a(Y,W),u(o,K,s),J=!0,Z||(tt=[h(X,"drop",g(t[17])),h(X,"dragenter",g(t[31])),h(X,"dragover",g(t[32])),h(X,"dragstart",g(t[33])),h(X,"dragleave",g(t[34])),h(X,"paste",g(t[18])),h(i,"load",t[21]),h(r,"pointerdown",t[10]),h(r,"pointerup",t[11]),h(r,"wheel",t[16],{passive:!0}),h(r,"touchend",t[11]),h(r,"touchstart",t[14]),h(r,"touchmove",t[15]),h(k,"click",t[20]),h(q,"click",t[36]),h(E,"click",t[37]),h(F,"click",t[19]),h(z,"click",t[22]),h(D,"click",t[23]),h(G,"click",t[24]),h(W,"click",t[25])],Z=!0)},p(t,e){(!J||2&e[0]&&!c(i.src,s=t[1]))&&b(i,"src",s),256&e[0]&&y(i,"transition",t[8]),t[7].length>1?nt?nt.p(t,e):(nt=U(t),nt.c(),nt.m($,w)):nt&&(nt.d(1),nt=null),(!J||1&e[0]&&M!==(M=t[0].toFixed(1)))&&(C.value=M),(!J||8&e[0])&&et!==(et=t[3]?"blur_off":"blur_on")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(N,et),(!J||624&e[0])&&V!==(V=t[4]+" "+(t[6].x&&t[6].y?`(${t[6].x} x ${t[6].y})`:"")+" "+t[9](t[5]))&&(document.title=V)},i(t){J||(S(n.$$.fragment,t),J=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),(void 0).c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(n.$$.fragment,t),J=!1},d(i){i&&f(e),j(n),i&&f(l),i&&f(r),t[35](null),i&&f(x),i&&f($),nt&&nt.d(),i&&f(K),Z=!1,o(tt)}}}function G(t,e,n){let o=null,l=null,r=0,i=!0,s="Image Viewer",c=null;const a={x:0,y:0},u={x:0,y:0},f={x:0,y:0};let d=a;const p={x:null,y:null},m=(new DOMParser).parseFromString.bind(new DOMParser),h=[" B"," KB"," MB"," GB"];let g=[],b=null;navigator.serviceWorker.register("/sw.js");let y=!0,x=null;function w(t){k||(f.x=u.x+t.clientX-a.x,f.y=u.y+t.clientY-a.y,n(26,d=f))}let k=!1;let _=0,q=0;let P=1;function C({deltaY:t}){const e=-.01*t;e<0?(r<-4||(r-=.5),u.x/=1.5,u.y/=1.5):e>0&&!(r>11)&&(r+=.5,u.x*=1.5,u.y*=1.5),n(0,P=2**r),n(26,d=u)}async function M(t){const e=t.map((t=>{if(0===t?.type.indexOf("image"))return t.getAsFile();if("text/plain"===t?.type)return new Promise((e=>t.getAsString(e)));if("text/html"===t?.type)return new Promise((e=>{t.getAsString((t=>{const n=m(t,"text/html").querySelectorAll("img");n?.length&&e(n.map((t=>t?.src))),e()}))}));if(t&&!t.type){let e=t.webkitGetAsEntry();return e=e.isDirectory&&e,e?new Promise((t=>{e.createReader().readEntries((async e=>{const n=e.filter((t=>t.isFile)).map((t=>new Promise((e=>t.file(e)))));t(await Promise.all(n))}))})):void 0}})),o=(await Promise.all(e)).flat().filter((t=>t));for(const t of o)t.constructor!==String&&(t.url=URL.createObjectURL(t));n(7,g=g.concat(o)),!b&&g?.length&&n(27,b=g[0])}"launchQueue"in window&&launchQueue.setConsumer((async t=>{if(!t.files.length)return;const e=t.files.map((t=>t.getFile()));n(7,g=(await Promise.all(e)).filter(((t,e,n)=>n.findIndex((e=>e.name===t.name&&e.size===t.size&&e.lastModified===t.lastModified))===e)));for(const t of g)t.url=URL.createObjectURL(t);n(27,b=g[0])}));const O=new URLSearchParams(location.search);for(const t of O)g.push(t[1]),b||(b=g[0]);let E=0;let I=!1;let L=!1;return t.$$.update=()=>{134217728&t.$$.dirty[0]&&function(t){if(t)if(t.constructor===String){const e=Math.max(t.lastIndexOf("\\"),t.lastIndexOf("/"))+1;n(4,s=t.substring(e)),n(5,c=null),n(1,o=t)}else{const e=Math.max(t.name.lastIndexOf("\\"),t.name.lastIndexOf("/"))+1;n(4,s=t.name.substring(e)),n(5,c=t.size),n(1,o=t.url)}}(b),1946157057&t.$$.dirty[0]&&function({disPos:t,mirror:e,flip:n,rotation:o,zoom:r}){l?.style.setProperty("transform",`rotate(${o}deg) scaleX(${e?-1:1}) scaleY(${n?-1:1}) scale(${r})`),l?.style.setProperty("--left",t.x+"px"),l?.style.setProperty("--top",t.y+"px")}({disPos:d,mirror:L,flip:I,rotation:E,zoom:P})},[P,o,l,i,s,c,p,g,y,function(t){if(isNaN(t)||null==t)return"";if(t<1)return t+" B";const e=Math.min(Math.floor(Math.log(t)/Math.log(1e3)),h.length-1);return Number((t/Math.pow(1e3,e)).toFixed(2))+h[e]},function(t){n(8,y=!1),a.x=t.clientX,a.y=t.clientY,n(2,l.onpointermove=w,l),x=t.pointerId,t.pointerId&&l.setPointerCapture(t.pointerId)},function(t){l.onpointermove&&(n(8,y=!0),n(2,l.onpointermove=null,l),(t.pointerId||x)&&l.releasePointerCapture(t.pointerId||x),k?(k=!1,_=0):(u.x+=t.clientX-a.x,u.y+=t.clientY-a.y))},function(){n(27,b=g[(g.indexOf(b)+1)%g.length])},function(){const t=g.indexOf(b);n(27,b=g[0===t?g.length-1:t-1])},function({touches:t}){2===t.length&&(k=!0)},function({touches:t}){if(2===t.length&&!0===k){const e=_;_=Math.hypot(t[0].pageX-t[1].pageX,t[0].pageY-t[1].pageY),q+=e-_,(q>20||q<-20)&&(C({deltaY:q>0?100:-100}),q=0)}},C,function({dataTransfer:t}){t.items&&M([...t.items])},function({clipboardData:t}){t.items&&M([...t.items])},function(){n(3,i=!i),l.style.setProperty("--pixel",i?"crisp-edges":"pixelated")},function(){u.x=0,u.y=0,r=0,n(0,P=1),n(26,d=u)},function(){n(6,p.x=l.naturalWidth,p),n(6,p.y=l.naturalHeight,p)},function(){n(28,E-=90)},function(){n(28,E+=90)},function(){n(29,I=!I)},function(){n(30,L=!L)},d,b,E,I,L,function(e){$.call(this,t,e)},function(e){$.call(this,t,e)},function(e){$.call(this,t,e)},function(e){$.call(this,t,e)},function(t){v[t?"unshift":"push"]((()=>{l=t,n(2,l)}))},()=>C({deltaY:100}),()=>C({deltaY:-100})]}return new class extends T{constructor(t){super(),N(this,t,G,H,r,{},null,[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
