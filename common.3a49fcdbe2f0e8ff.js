"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(O,w,c)=>{c.d(w,{c:()=>r});var h=c(4261),l=c(1086),a=c(8607);const r=(o,i)=>{let t,s;const v=(e,f,E)=>{if(typeof document>"u")return;const p=document.elementFromPoint(e,f);p&&i(p)&&!p.disabled?p!==t&&(n(),d(p,E)):n()},d=(e,f)=>{t=e,s||(s=t);const E=t;(0,h.w)(()=>E.classList.add("ion-activated")),f()},n=(e=!1)=>{if(!t)return;const f=t;(0,h.w)(()=>f.classList.remove("ion-activated")),e&&s!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>v(e.currentX,e.currentY,l.a),onMove:e=>v(e.currentX,e.currentY,l.b),onEnd:()=>{n(!0),(0,l.h)(),s=void 0}})}},8438:(O,w,c)=>{c.d(w,{g:()=>l});var h=c(8476);const l=()=>{if(void 0!==h.w)return h.w.Capacitor}},5572:(O,w,c)=>{c.d(w,{c:()=>h,i:()=>l});const h=(a,r,o)=>"function"==typeof o?o(a,r):"string"==typeof o?a[o]===r[o]:Array.isArray(r)?r.includes(a):a===r,l=(a,r,o)=>void 0!==a&&(Array.isArray(a)?a.some(i=>h(i,r,o)):h(a,r,o))},3351:(O,w,c)=>{c.d(w,{g:()=>h});const h=(i,t,s,v,d)=>a(i[1],t[1],s[1],v[1],d).map(n=>l(i[0],t[0],s[0],v[0],n)),l=(i,t,s,v,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*s*d+3*s+v*d))-i*Math.pow(d-1,3),a=(i,t,s,v,d)=>o((v-=d)-3*(s-=d)+3*(t-=d)-(i-=d),3*s-6*t+3*i,3*t-3*i,i).filter(e=>e>=0&&e<=1),o=(i,t,s,v)=>{if(0===i)return((i,t,s)=>{const v=t*t-4*i*s;return v<0?[]:[(-t+Math.sqrt(v))/(2*i),(-t-Math.sqrt(v))/(2*i)]})(t,s,v);const d=(3*(s/=i)-(t/=i)*t)/3,n=(2*t*t*t-9*t*s+27*(v/=i))/27;if(0===d)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-d),-Math.sqrt(-d)];const e=Math.pow(n/2,2)+Math.pow(d/3,3);if(0===e)return[Math.pow(n/2,.5)-t/3];if(e>0)return[Math.pow(-n/2+Math.sqrt(e),1/3)-Math.pow(n/2+Math.sqrt(e),1/3)-t/3];const f=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-n/(2*Math.sqrt(Math.pow(-d/3,3)))),p=2*Math.pow(f,1/3);return[p*Math.cos(E/3)-t/3,p*Math.cos((E+2*Math.PI)/3)-t/3,p*Math.cos((E+4*Math.PI)/3)-t/3]}},5083:(O,w,c)=>{c.d(w,{i:()=>h});const h=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(O,w,c)=>{c.r(w),c.d(w,{startFocusVisible:()=>r});const h="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let i=[],t=!0;const s=o?o.shadowRoot:document,v=o||document.body,d=y=>{i.forEach(u=>u.classList.remove(h)),y.forEach(u=>u.classList.add(h)),i=y},n=()=>{t=!1,d([])},e=y=>{t=a.includes(y.key),t||d([])},f=y=>{if(t&&void 0!==y.composedPath){const u=y.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));d(u)}},E=()=>{s.activeElement===v&&d([])};return s.addEventListener("keydown",e),s.addEventListener("focusin",f),s.addEventListener("focusout",E),s.addEventListener("touchstart",n,{passive:!0}),s.addEventListener("mousedown",n),{destroy:()=>{s.removeEventListener("keydown",e),s.removeEventListener("focusin",f),s.removeEventListener("focusout",E),s.removeEventListener("touchstart",n),s.removeEventListener("mousedown",n)},setFocus:d}}},1086:(O,w,c)=>{c.d(w,{I:()=>l,a:()=>t,b:()=>s,c:()=>i,d:()=>d,h:()=>v});var h=c(8438),l=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(l||{});const r={getEngine(){const n=(0,h.g)();if(null!=n&&n.isPluginAvailable("Haptics"))return n.Plugins.Haptics},available(){if(!this.getEngine())return!1;const e=(0,h.g)();return"web"!==(null==e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(n){const e=this.getEngine();e&&e.impact({style:n.style})},notification(n){const e=this.getEngine();e&&e.notification({type:n.type})},selection(){this.impact({style:l.Light})},selectionStart(){const n=this.getEngine();n&&n.selectionStart()},selectionChanged(){const n=this.getEngine();n&&n.selectionChanged()},selectionEnd(){const n=this.getEngine();n&&n.selectionEnd()}},o=()=>r.available(),i=()=>{o()&&r.selection()},t=()=>{o()&&r.selectionStart()},s=()=>{o()&&r.selectionChanged()},v=()=>{o()&&r.selectionEnd()},d=n=>{o()&&r.impact(n)}},909:(O,w,c)=>{c.d(w,{I:()=>i,a:()=>d,b:()=>o,c:()=>f,d:()=>p,f:()=>n,g:()=>v,i:()=>s,p:()=>E,r:()=>y,s:()=>e});var h=c(467),l=c(4920),a=c(4929);const o="ion-content",i=".ion-content-scroll-host",t=`${o}, ${i}`,s=u=>"ION-CONTENT"===u.tagName,v=function(){var u=(0,h.A)(function*(g){return s(g)?(yield new Promise(m=>(0,l.c)(g,m)),g.getScrollElement()):g});return function(m){return u.apply(this,arguments)}}(),d=u=>u.querySelector(i)||u.querySelector(t),n=u=>u.closest(t),e=(u,g)=>s(u)?u.scrollToTop(g):Promise.resolve(u.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),f=(u,g,m,M)=>s(u)?u.scrollByPoint(g,m,M):Promise.resolve(u.scrollBy({top:m,left:g,behavior:M>0?"smooth":"auto"})),E=u=>(0,a.b)(u,o),p=u=>{if(s(u)){const m=u.scrollY;return u.scrollY=!1,m}return u.style.setProperty("overflow","hidden"),!0},y=(u,g)=>{s(u)?u.scrollY=g:u.style.removeProperty("overflow")}},3992:(O,w,c)=>{c.d(w,{a:()=>h,b:()=>f,c:()=>t,d:()=>E,e:()=>C,f:()=>i,g:()=>p,h:()=>a,i:()=>l,j:()=>_,k:()=>b,l:()=>s,m:()=>n,n:()=>y,o:()=>d,p:()=>o,q:()=>r,r:()=>D,s:()=>x,t:()=>e,u:()=>m,v:()=>M,w:()=>v,x:()=>u,y:()=>g});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(O,w,c)=>{c.d(w,{c:()=>r,g:()=>o});var h=c(8476),l=c(4920),a=c(4929);const r=(t,s,v)=>{let d,n;if(void 0!==h.w&&"MutationObserver"in h.w){const p=Array.isArray(s)?s:[s];d=new MutationObserver(y=>{for(const u of y)for(const g of u.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&p.includes(g.slot))return v(),void(0,l.r)(()=>e(g))}),d.observe(t,{childList:!0,subtree:!0})}const e=p=>{var y;n&&(n.disconnect(),n=void 0),n=new MutationObserver(u=>{v();for(const g of u)for(const m of g.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===s&&E()}),n.observe(null!==(y=p.parentElement)&&void 0!==y?y:p,{subtree:!0,childList:!0})},E=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},o=(t,s,v)=>{const d=null==t?0:t.toString().length,n=i(d,s);if(void 0===v)return n;try{return v(d,s)}catch(e){return(0,a.a)("Exception in provided `counterFormatter`.",e),n}},i=(t,s)=>`${t} / ${s}`},1622:(O,w,c)=>{c.r(w),c.d(w,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>D,keyboardDidClose:()=>u,keyboardDidOpen:()=>p,keyboardDidResize:()=>y,resetKeyboardAssist:()=>d,setKeyboardClose:()=>E,setKeyboardOpen:()=>f,startKeyboardAssist:()=>n,trackViewportChanges:()=>M});var h=c(4379);c(8438),c(8476);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},s={},v=!1;const d=()=>{t={},s={},v=!1},n=_=>{if(h.K.getEngine())e(_);else{if(!_.visualViewport)return;s=D(_.visualViewport),_.visualViewport.onresize=()=>{M(_),p()||y(_)?f(_):u(_)&&E(_)}}},e=_=>{_.addEventListener("keyboardDidShow",b=>f(_,b)),_.addEventListener("keyboardDidHide",()=>E(_))},f=(_,b)=>{g(_,b),v=!0},E=_=>{m(_),v=!1},p=()=>!v&&t.width===s.width&&(t.height-s.height)*s.scale>150,y=_=>v&&!u(_),u=_=>v&&s.height===_.innerHeight,g=(_,b)=>{const C=new CustomEvent(r,{detail:{keyboardHeight:b?b.keyboardHeight:_.innerHeight-s.height}});_.dispatchEvent(C)},m=_=>{const b=new CustomEvent(o);_.dispatchEvent(b)},M=_=>{t=Object.assign({},s),s=D(_.visualViewport)},D=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},4379:(O,w,c)=>{c.d(w,{K:()=>r,a:()=>a});var h=c(8438),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),a=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(a||{});const r={getEngine(){const o=(0,h.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(i=>{if(i.code!==l.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(O,w,c)=>{c.d(w,{c:()=>i});var h=c(467),l=c(8476),a=c(4379);const r=t=>{if(void 0===l.d||t===a.a.None||void 0===t)return null;const s=l.d.querySelector("ion-app");return null!=s?s:l.d.body},o=t=>{const s=r(t);return null===s?0:s.clientHeight},i=function(){var t=(0,h.A)(function*(s){let v,d,n,e;const f=function(){var g=(0,h.A)(function*(){const m=yield a.K.getResizeMode(),M=void 0===m?void 0:m.mode;v=()=>{void 0===e&&(e=o(M)),n=!0,E(n,M)},d=()=>{n=!1,E(n,M)},null==l.w||l.w.addEventListener("keyboardWillShow",v),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return g.apply(this,arguments)}}(),E=(g,m)=>{s&&s(g,p(m))},p=g=>{if(0===e||e===o(g))return;const m=r(g);return null!==m?new Promise(M=>{const _=new ResizeObserver(()=>{m.clientHeight===e&&(_.disconnect(),M())});_.observe(m)}):void 0};return yield f(),{init:f,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",v),null==l.w||l.w.removeEventListener("keyboardWillHide",d),v=d=void 0},isKeyboardVisible:()=>n}});return function(v){return t.apply(this,arguments)}}()},7838:(O,w,c)=>{c.d(w,{c:()=>l});var h=c(467);const l=()=>{let a;return{lock:function(){var o=(0,h.A)(function*(){const i=a;let t;return a=new Promise(s=>t=s),void 0!==i&&(yield i),t});return function(){return o.apply(this,arguments)}}()}}},9001:(O,w,c)=>{c.d(w,{c:()=>a});var h=c(8476),l=c(4920);const a=(r,o,i)=>{let t;const s=()=>!(void 0===o()||void 0!==r.label||null===i()),d=()=>{const e=o();if(void 0===e)return;if(!s())return void e.style.removeProperty("width");const f=i().scrollWidth;if(0===f&&null===e.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const E=t=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(d(),E.disconnect(),t=void 0)},{threshold:.01,root:r});E.observe(e)}else e.style.setProperty("width",.75*f+"px")};return{calculateNotchWidth:()=>{s()&&(0,l.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(O,w,c)=>{c.d(w,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(a,r,o)=>{const i=a*r/o-a+"ms",t=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(a,r,o)=>{const i=r/o,t=a*i-a+"ms",s=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(s)+"%",left:32*Math.cos(s)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":a*r/o-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":a*r/o-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/o-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/o-a+"ms"}})}}},7166:(O,w,c)=>{c.r(w),c.d(w,{createSwipeBackGesture:()=>o});var h=c(4920),l=c(5083),a=c(8607);c(1970);const o=(i,t,s,v,d)=>{const n=i.ownerDocument.defaultView;let e=(0,l.i)(i);const E=m=>e?-m.deltaX:m.deltaX;return(0,a.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(e=(0,l.i)(i),(m=>{const{startX:D}=m;return e?D>=n.innerWidth-50:D<=50})(m)&&t()),onStart:s,onMove:m=>{const D=E(m)/n.innerWidth;v(D)},onEnd:m=>{const M=E(m),D=n.innerWidth,_=M/D,b=(m=>e?-m.velocityX:m.velocityX)(m),C=b>=0&&(b>.2||M>D/2),L=(C?1-_:_)*D;let P=0;if(L>5){const k=L/Math.abs(b);P=Math.min(k,540)}d(C,_<=0?.01:(0,h.j)(0,_,.9999),P)}})}},2935:(O,w,c)=>{c.d(w,{w:()=>h});const h=(r,o,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(s=>{i(l(s,o))});return t.observe(r,{childList:!0,subtree:!0}),t},l=(r,o)=>{let i;return r.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)i=a(t.addedNodes[s],o)||i}),i},a=(r,o)=>{if(1!==r.nodeType)return;const i=r;return(i.tagName===o.toUpperCase()?[i]:Array.from(i.querySelectorAll(o))).find(s=>s.value===i.value)}},4102:(O,w,c)=>{c.d(w,{w:()=>a});var h=c(4412),l=c(3953);let a=(()=>{var r;class o{constructor(){this.lastInput=new h.t("")}}return(r=o).\u0275fac=function(t){return new(t||r)},r.\u0275prov=l.jDH({token:r,factory:r.\u0275fac,providedIn:"root"}),o})()},9079:(O,w,c)=>{c.d(w,{pQ:()=>r});var h=c(3953),l=c(1985),a=c(6977);function r(n){n||((0,h.Af3)(r),n=(0,h.WQX)(h.abz));const e=new l.c(f=>n.onDestroy(f.next.bind(f)));return f=>f.pipe((0,a.Q)(e))}}}]);