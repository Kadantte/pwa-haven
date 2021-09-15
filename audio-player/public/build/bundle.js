var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s;function a(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}let r,c="undefined"!=typeof window?t=>requestAnimationFrame(t):t;function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t){return function(e){return e.preventDefault(),t.call(this,e)}}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return""===t?null:+t}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function b(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function k(t){r=t}function _(){const t=function(){if(!r)throw new Error("Function called outside component initialization");return r}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,i)}))}}}function O(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const E=[],A=[],P=[],S=[],L=Promise.resolve();let R=!1;function z(t){P.push(t)}function N(t){S.push(t)}let U=!1;const j=new Set;function M(){if(!U){U=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];k(e),C(e.$$)}for(k(null),E.length=0;A.length;)A.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];j.has(e)||(j.add(e),e())}P.length=0}while(E.length);for(;S.length;)S.pop()();R=!1,U=!1,j.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const q=new Set;function F(t,e){t&&t.i&&(q.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),undefined.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const T="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function D(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function H(t){t&&t.c()}function Q(t,n,l,s){const{fragment:a,on_mount:r,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,l),s||z((()=>{const n=r.map(e).filter(i);c?c.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(z)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(E.push(t),R||(R=!0,L.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,i,l,s,a,c,u,f=[-1]){const p=r;k(e);const m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:i.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:i.target||p.$$.root};u&&u(m.root);let g=!1;if(m.ctx=l?l(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=i)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](i),g&&G(e,t)),n})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();i.intro&&F(e.$$.fragment),Q(e,i.target,i.anchor,i.customElement),M()}k(p)}class K{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(t,e){if(isNaN(t)||t<0)return e?"00:00":"0:00";const n=Math.floor(t/3600);let o=Math.floor(t/60)-60*n,i=Math.floor(t%60);return e&&o<10&&(o="0"+o),i<10&&(i="0"+i),n>0?n+":"+o+":"+i:o+":"+i}function W(t,e,n){const o=t.slice();return o[5]=e[n],o}function X(e){let n;return{c(){n=p("div"),n.textContent="Drag and drop, paste or click here to select a file/folder to play.",$(n,"class","font-size-24 font-weight-bold center text-center h-full pointer svelte-taw8gq")},m(t,e){f(t,n,e)},p:t,d(t){t&&d(n)}}}function Y(t){let e,n=t[1],o=[];for(let e=0;e<n.length;e+=1)o[e]=Z(W(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=m("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);f(t,e,n)},p(t,i){if(11&i){let l;for(n=t[1],l=0;l<n.length;l+=1){const s=W(t,n,l);o[l]?o[l].p(s,i):(o[l]=Z(s),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t),t&&d(e)}}}function Z(t){let e,n,o,l,s,a,r,c,v,y,w,b,k,_=t[5]===t[0]?"volume_up":"play_arrow",O=t[5].name+"",E=V(t[5].duration)+"";return{c(){e=p("div"),n=p("div"),o=m(_),l=g(),s=p("div"),a=m(O),r=g(),c=p("div"),v=m(E),y=g(),$(n,"class","material-icons font-size-20 center pr-20 svelte-taw8gq"),$(s,"class","text-truncate"),$(c,"class","ml-auto pl-20"),$(e,"class",w="d-flex w-full pointer font-size-20 "+(t[5]===t[0]?"text-primary":"text-muted")+" svelte-taw8gq")},m(d,p){f(d,e,p),u(e,n),u(n,o),u(e,l),u(e,s),u(s,a),u(e,r),u(e,c),u(c,v),u(e,y),b||(k=h(e,"click",(function(){i(t[3](t[5]))&&t[3](t[5]).apply(this,arguments)})),b=!0)},p(n,i){t=n,3&i&&_!==(_=t[5]===t[0]?"volume_up":"play_arrow")&&x(o,_),2&i&&O!==(O=t[5].name+"")&&x(a,O),2&i&&E!==(E=V(t[5].duration)+"")&&x(v,E),3&i&&w!==(w="d-flex w-full pointer font-size-20 "+(t[5]===t[0]?"text-primary":"text-muted")+" svelte-taw8gq")&&$(e,"class",w)},d(t){t&&d(e),b=!1,k()}}}function tt(e){let n,o,i;function l(t,e){return t[1].length?Y:X}let s=l(e),a=s(e);return{c(){n=p("div"),a.c(),$(n,"class","col-md-5 bg-dark overflow-y-scroll h-half h-md-full p-20")},m(t,l){f(t,n,l),a.m(n,null),o||(i=h(n,"click",e[4]),o=!0)},p(t,[e]){s===(s=l(t))&&a?a.p(t,e):(a.d(1),a=s(t),a&&(a.c(),a.m(n,null)))},i:t,o:t,d(t){t&&d(n),a.d(),o=!1,i()}}}function et(t,e,n){let{current:o}=e,{songs:i}=e;const l=_();return t.$$set=t=>{"current"in t&&n(0,o=t.current),"songs"in t&&n(1,i=t.songs)},[o,i,l,function(t){t!==o&&n(0,o=t)},()=>l("popup")]}class nt extends K{constructor(t){super(),J(this,t,et,tt,l,{current:0,songs:1})}}function ot(t){let e,n,i,l,s,r,v,y,k,_,O,E,P,S,L,R,U,j,M,C,q,T,G,J,K,W,X,Y,Z,tt,et,ot,it,lt,st,at,rt,ct,ut,ft,dt,pt,mt,gt,ht,vt,$t,yt,xt=!1,wt=!0,bt=t[9]?"play_arrow":"pause",kt=V(t[13],!0)+"",_t=V(t[3],!0)+"",Ot=t[10]?"volume_off":"volume_up",Et=t[11]?"repeat_one":"repeat",At=t[12]?"shuffle":"sort";function Pt(){cancelAnimationFrame(i),e.paused||(i=c(Pt),xt=!0),t[29].call(e)}function St(e){t[32](e)}let Lt={songs:t[8]};return void 0!==t[2]&&(Lt.current=t[2]),_=new nt({props:Lt}),A.push((()=>D(_,"current",St))),_.$on("popup",t[33]),{c(){e=p("audio"),l=g(),s=p("div"),r=p("div"),v=p("img"),k=g(),H(_.$$.fragment),E=g(),P=p("nav"),S=p("div"),L=p("input"),R=g(),U=p("div"),j=p("div"),M=p("span"),M.textContent="skip_previous",C=g(),q=p("span"),T=m(bt),G=g(),J=p("span"),J.textContent="skip_next",K=g(),W=p("div"),X=m(kt),Y=m(" / "),Z=m(_t),tt=g(),et=p("div"),ot=p("div"),it=m(t[0]),lt=g(),st=p("div"),at=p("input"),rt=g(),ct=p("span"),ut=m(Ot),ft=g(),dt=p("span"),pt=m(Et),mt=g(),gt=p("span"),ht=m(At),a(e.src,n=t[6])||$(e,"src",n),e.autoplay=!0,e.loop=t[11],$(e,"class","svelte-nuis8t"),void 0===t[3]&&z((()=>t[28].call(e))),a(v.src,y=t[5])||$(v,"src",y),$(v,"alt","cover"),$(v,"class","shadow-lg pointer svelte-nuis8t"),$(r,"class","col-md-7 p-20 center h-half h-md-full bg-dark svelte-nuis8t"),$(s,"class","content-wrapper row overflow-hidden svelte-nuis8t"),$(L,"class","w-full top-0 svelte-nuis8t"),$(L,"type","range"),$(L,"min","0"),$(L,"max","1"),$(L,"step","any"),b(L,"--value",100*t[14]+"%"),$(S,"class","d-flex w-full prog svelte-nuis8t"),$(M,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),$(M,"type","button"),$(q,"class","material-icons font-size-24 ctrl pointer svelte-nuis8t"),$(q,"type","button"),$(J,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),$(J,"type","button"),$(W,"class","text-muted center ml-10 text-nowrap svelte-nuis8t"),$(j,"class","d-flex align-items-center svelte-nuis8t"),$(ot,"class","text-truncate text-muted svelte-nuis8t"),$(et,"class","center px-20 mw-0 svelte-nuis8t"),$(at,"class","ml-auto px-5 h-half svelte-nuis8t"),$(at,"type","range"),$(at,"min","0"),$(at,"max","1"),$(at,"step","any"),b(at,"--value",100*t[1]+"%"),$(ct,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),$(ct,"type","button"),$(dt,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),$(dt,"type","button"),$(gt,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),$(gt,"type","button"),$(st,"class","d-flex align-items-center svelte-nuis8t"),$(U,"class","d-flex w-full flex-grow-1 px-20 justify-content-between svelte-nuis8t"),$(P,"class","navbar navbar-fixed-bottom p-0 d-flex flex-column border-0 shadow-lg bg-dark-light svelte-nuis8t")},m(n,o){f(n,e,o),t[26](e),isNaN(t[1])||(e.volume=t[1]),e.muted=t[10],f(n,l,o),f(n,s,o),u(s,r),u(r,v),u(s,k),Q(_,s,null),f(n,E,o),f(n,P,o),u(P,S),u(S,L),w(L,t[14]),u(P,R),u(P,U),u(U,j),u(j,M),u(j,C),u(j,q),u(q,T),u(j,G),u(j,J),u(j,K),u(j,W),u(W,X),u(W,Y),u(W,Z),u(U,tt),u(U,et),u(et,ot),u(ot,it),u(U,lt),u(U,st),u(st,at),w(at,t[1]),u(st,rt),u(st,ct),u(ct,ut),u(st,ft),u(st,dt),u(dt,pt),u(st,mt),u(st,gt),u(gt,ht),vt=!0,$t||(yt=[h(e,"volumechange",t[27]),h(e,"durationchange",t[28]),h(e,"timeupdate",Pt),h(e,"play",t[30]),h(e,"pause",t[30]),h(e,"ended",t[31]),h(v,"click",t[19]),h(L,"change",t[34]),h(L,"input",t[34]),h(L,"mousedown",t[16]),h(L,"mouseup",t[17]),h(L,"input",t[18]),h(M,"click",t[23]),h(q,"click",t[19]),h(J,"click",t[22]),h(at,"change",t[35]),h(at,"input",t[35]),h(ct,"click",t[20]),h(dt,"click",t[21]),h(gt,"click",t[24])],$t=!0)},p(t,o){(!vt||64&o[0]&&!a(e.src,n=t[6]))&&$(e,"src",n),(!vt||2048&o[0])&&(e.loop=t[11]),2&o[0]&&!isNaN(t[1])&&(e.volume=t[1]),1024&o[0]&&(e.muted=t[10]),!xt&&16&o[0]&&!isNaN(t[4])&&(e.currentTime=t[4]),xt=!1,512&o[0]&&wt!==(wt=t[9])&&e[wt?"pause":"play"](),(!vt||32&o[0]&&!a(v.src,y=t[5]))&&$(v,"src",y);const i={};256&o[0]&&(i.songs=t[8]),!O&&4&o[0]&&(O=!0,i.current=t[2],N((()=>O=!1))),_.$set(i),(!vt||16384&o[0])&&b(L,"--value",100*t[14]+"%"),16384&o[0]&&w(L,t[14]),(!vt||512&o[0])&&bt!==(bt=t[9]?"play_arrow":"pause")&&x(T,bt),(!vt||8192&o[0])&&kt!==(kt=V(t[13],!0)+"")&&x(X,kt),(!vt||8&o[0])&&_t!==(_t=V(t[3],!0)+"")&&x(Z,_t),(!vt||1&o[0])&&x(it,t[0]),(!vt||2&o[0])&&b(at,"--value",100*t[1]+"%"),2&o[0]&&w(at,t[1]),(!vt||1024&o[0])&&Ot!==(Ot=t[10]?"volume_off":"volume_up")&&x(ut,Ot),(!vt||2048&o[0])&&Et!==(Et=t[11]?"repeat_one":"repeat")&&x(pt,Et),(!vt||4096&o[0])&&At!==(At=t[12]?"shuffle":"sort")&&x(ht,At)},i(t){vt||(F(_.$$.fragment,t),vt=!0)},o(t){I(_.$$.fragment,t),vt=!1},d(n){n&&d(e),t[26](null),n&&d(l),n&&d(s),B(_),n&&d(E),n&&d(P),$t=!1,o(yt)}}}function it(t,e,n){let o,i;const l=_();let{name:s=""}=e,a=null,r=null,c=localStorage.getItem("volume")||1,{files:u=[]}=e,f=null,d=[],p=.1,m=0,g=!0,h=!1,v=!1,$=!0,x=!1,w="./512.png";async function b(t){if(t.length){k(t.find((t=>0===t.type.indexOf("image"))));const e=t.filter((t=>0===t.type.indexOf("audio")));e&&(n(8,d=[]),n(2,f=null));const o=e.map((t=>new Promise((e=>{let n=document.createElement("audio");n.preload="metadata",n.onloadedmetadata=()=>{e({file:t,duration:n.duration,name:t.name.substring(0,t.name.lastIndexOf("."))||t.name}),URL.revokeObjectURL(n.src),n=null},n.src=t.url||URL.createObjectURL(t)}))));n(8,d=(await Promise.all(o)).sort(((t,e)=>t.file.name>e.file.name?1:e.file.name>t.file.name?-1:0))),n(2,f=d[0])}}function k(t){w&&URL.revokeObjectURL(w),n(5,w=t?t.url||URL.createObjectURL(t):"./512.png")}function O(){n(9,g=!g)}function E(){n(2,f=d[(d.indexOf(f)+1)%d.length])}function P(){const t=d.indexOf(f);n(2,f=d[0===t?d.length-1:t-1])}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",O),navigator.mediaSession.setActionHandler("pause",O),navigator.mediaSession.setActionHandler("nexttrack",E),navigator.mediaSession.setActionHandler("previoustrack",P));return t.$$set=t=>{"name"in t&&n(0,s=t.name),"files"in t&&n(25,u=t.files)},t.$$.update=()=>{var e;2&t.$$.dirty[0]&&localStorage.setItem("volume",c),33554432&t.$$.dirty[0]&&b(u),24&t.$$.dirty[0]&&n(14,o=m/p),16&t.$$.dirty[0]&&n(13,i=m),4&t.$$.dirty[0]&&(e=f,a&&URL.revokeObjectURL(a),e?(n(6,a=e.file.url||URL.createObjectURL(e.file)),n(0,s=e.name)):(n(6,a=null),n(0,s=""))),24&t.$$.dirty[0]&&navigator.mediaSession?.setPositionState({duration:p||0,playbackRate:1,position:m||0})},[s,c,f,p,m,w,a,r,d,g,h,v,x,i,o,l,function({target:t}){$=g,n(9,g=!0),n(13,i=t.value*p)},function(){n(9,g=$),n(4,m=i)},function({target:t}){n(13,i=t.value*p)},O,function(){n(10,h=!h)},function(){n(11,v=!v)},E,P,function(){n(12,x=!x),n(8,d=x?d.sort((()=>.5-Math.random())):d.sort(((t,e)=>t.file.name>e.file.name?1:e.file.name>t.file.name?-1:0)))},u,function(t){A[t?"unshift":"push"]((()=>{r=t,n(7,r)}))},function(){c=this.volume,h=this.muted,n(1,c),n(10,h)},function(){p=this.duration,n(3,p)},function(){m=this.currentTime,n(4,m)},function(){g=this.paused,n(9,g)},()=>!v&&E(),function(t){f=t,n(2,f)},()=>l("popup"),function(){o=y(this.value),n(14,o),n(4,m),n(3,p)},function(){c=y(this.value),n(1,c)}]}class lt extends K{constructor(t){super(),J(this,t,it,ot,l,{name:0,files:25},null,[-1,-1])}}const{document:st,window:at}=T;function rt(t){let e,n,i,l,s,a,r,c,u;function m(e){t[9](e)}function y(e){t[10](e)}let x={};return void 0!==t[0]&&(x.name=t[0]),void 0!==t[1]&&(x.files=t[1]),n=new lt({props:x}),A.push((()=>D(n,"name",m))),A.push((()=>D(n,"files",y))),n.$on("popup",t[4]),st.title=a=t[0]||"Audio Player",{c(){e=p("div"),H(n.$$.fragment),s=g(),$(e,"class","page-wrapper with-navbar-fixed-bottom svelte-9sfuxi")},m(o,i){f(o,e,i),Q(n,e,null),f(o,s,i),r=!0,c||(u=[h(at,"drop",v(t[2])),h(at,"dragenter",v(t[5])),h(at,"dragover",v(t[6])),h(at,"dragstart",v(t[7])),h(at,"dragleave",v(t[8])),h(at,"paste",v(t[3]))],c=!0)},p(t,[e]){const o={};!i&&1&e&&(i=!0,o.name=t[0],N((()=>i=!1))),!l&&2&e&&(l=!0,o.files=t[1],N((()=>l=!1))),n.$set(o),(!r||1&e)&&a!==(a=t[0]||"Audio Player")&&(st.title=a)},i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){t&&d(e),B(n),t&&d(s),c=!1,o(u)}}}const ct=/\.(3gp|3gpp|3g2|aac|adts|ac3|amr|eac3|flac|mp3|m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|oga|ogg|mogg|spx|opus|raw|wav|weba)$/i;function ut(t,e,n){const o=(new DOMParser).parseFromString.bind(new DOMParser);let i,l="";async function s(t){const e=t.map((t=>{if(0===t.type.indexOf("audio")||0===t.type.indexOf("image"))return t.getAsFile();if("text/plain"===t.type)return new Promise((e=>t.getAsString((t=>{if(ct.test(t)){const n=t.substring(Math.max(t.lastIndexOf("\\"),t.lastIndexOf("/"))+1),o=n.substring(0,n.lastIndexOf("."))||n;e({name:o,url:t,type:"audio/"})}e()}))));if("text/html"===t.type)return new Promise((e=>t.getAsString((t=>{const n=o(t,"text/html").querySelectorAll("audio");n.length&&e(n.map((t=>t?.src))),e()}))));if(!t.type){let e=t.webkitGetAsEntry();return e=e.isDirectory&&e,e?new Promise((t=>{e.createReader().readEntries((async e=>{const n=e.filter((t=>t.isFile)).map((t=>new Promise((e=>t.file(e)))));t(await Promise.all(n))}))})):void 0}}));n(1,i=(await Promise.all(e)).flat().filter((t=>t)))}return"launchQueue"in window&&launchQueue.setConsumer((async t=>{if(!t.files.length)return;const e=t.files.map((t=>t.getFile()));n(1,i=(await Promise.all(e)).filter(((t,e,n)=>n.findIndex((e=>e.name===t.name&&e.size===t.size&&e.lastModified===t.lastModified))===e))),console.log(i)})),[l,i,function({dataTransfer:t}){s([...t.items])},function({clipboardData:t}){s([...t.items])},function(){if(!i.length){let t=document.createElement("input");t.type="file",t.multiple="multiple",t.onchange=({target:e})=>{n(1,i=[...e.files]),t=null},t.click()}},function(e){O.call(this,t,e)},function(e){O.call(this,t,e)},function(e){O.call(this,t,e)},function(e){O.call(this,t,e)},function(t){l=t,n(0,l)},function(t){i=t,n(1,i)}]}return new class extends K{constructor(t){super(),J(this,t,ut,rt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map