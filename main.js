!function(){"use strict";var t={9662:function(t,e,r){var a=r(614),n=r(6330),i=TypeError;t.exports=function(t){if(a(t))return t;throw i(n(t)+" is not a function")}},9670:function(t,e,r){var a=r(111),n=String,i=TypeError;t.exports=function(t){if(a(t))return t;throw i(n(t)+" is not an object")}},1318:function(t,e,r){var a=r(5656),n=r(1400),i=r(6244),s=function(t){return function(e,r,s){var o,c=a(e),l=i(c),h=n(s,l);if(t&&r!=r){for(;l>h;)if((o=c[h++])!=o)return!0}else for(;l>h;h++)if((t||h in c)&&c[h]===r)return t||h||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},3658:function(t,e,r){var a=r(9781),n=r(3157),i=TypeError,s=Object.getOwnPropertyDescriptor,o=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=o?function(t,e){if(n(t)&&!s(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,r){var a=r(1702),n=a({}.toString),i=a("".slice);t.exports=function(t){return i(n(t),8,-1)}},9920:function(t,e,r){var a=r(2597),n=r(3887),i=r(1236),s=r(3070);t.exports=function(t,e,r){for(var o=n(e),c=s.f,l=i.f,h=0;h<o.length;h++){var u=o[h];a(t,u)||r&&a(r,u)||c(t,u,l(e,u))}}},8880:function(t,e,r){var a=r(9781),n=r(3070),i=r(9114);t.exports=a?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,r){var a=r(614),n=r(3070),i=r(6339),s=r(3072);t.exports=function(t,e,r,o){o||(o={});var c=o.enumerable,l=void 0!==o.name?o.name:e;if(a(r)&&i(r,l,o),o.global)c?t[e]=r:s(e,r);else{try{o.unsafe?t[e]&&(c=!0):delete t[e]}catch(t){}c?t[e]=r:n.f(t,e,{value:r,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return t}},3072:function(t,e,r){var a=r(7854),n=Object.defineProperty;t.exports=function(t,e){try{n(a,t,{value:e,configurable:!0,writable:!0})}catch(r){a[t]=e}return e}},9781:function(t,e,r){var a=r(7293);t.exports=!a((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,r=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},317:function(t,e,r){var a=r(7854),n=r(111),i=a.document,s=n(i)&&n(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},7207:function(t){var e=TypeError;t.exports=function(t){if(t>9007199254740991)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,r){var a,n,i=r(7854),s=r(8113),o=i.process,c=i.Deno,l=o&&o.versions||c&&c.version,h=l&&l.v8;h&&(n=(a=h.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!n&&s&&(!(a=s.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=s.match(/Chrome\/(\d+)/))&&(n=+a[1]),t.exports=n},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var a=r(7854),n=r(1236).f,i=r(8880),s=r(8052),o=r(3072),c=r(9920),l=r(4705);t.exports=function(t,e){var r,h,u,f,d,m=t.target,p=t.global,g=t.stat;if(r=p?a:g?a[m]||o(m,{}):(a[m]||{}).prototype)for(h in e){if(f=e[h],u=t.dontCallGetSet?(d=n(r,h))&&d.value:r[h],!l(p?h:m+(g?".":"#")+h,t.forced)&&void 0!==u){if(typeof f==typeof u)continue;c(f,u)}(t.sham||u&&u.sham)&&i(f,"sham",!0),s(r,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4374:function(t,e,r){var a=r(7293);t.exports=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,r){var a=r(4374),n=Function.prototype.call;t.exports=a?n.bind(n):function(){return n.apply(n,arguments)}},6530:function(t,e,r){var a=r(9781),n=r(2597),i=Function.prototype,s=a&&Object.getOwnPropertyDescriptor,o=n(i,"name"),c=o&&"something"===function(){}.name,l=o&&(!a||a&&s(i,"name").configurable);t.exports={EXISTS:o,PROPER:c,CONFIGURABLE:l}},1702:function(t,e,r){var a=r(4374),n=Function.prototype,i=n.call,s=a&&n.bind.bind(i,i);t.exports=a?s:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,r){var a=r(7854),n=r(614);t.exports=function(t,e){return arguments.length<2?(r=a[t],n(r)?r:void 0):a[t]&&a[t][e];var r}},8173:function(t,e,r){var a=r(9662),n=r(8554);t.exports=function(t,e){var r=t[e];return n(r)?void 0:a(r)}},7854:function(t,e,r){var a=function(t){return t&&t.Math===Math&&t};t.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof r.g&&r.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,r){var a=r(1702),n=r(7908),i=a({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(n(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,r){var a=r(9781),n=r(7293),i=r(317);t.exports=!a&&!n((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var a=r(1702),n=r(7293),i=r(4326),s=Object,o=a("".split);t.exports=n((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?o(t,""):s(t)}:s},2788:function(t,e,r){var a=r(1702),n=r(614),i=r(5465),s=a(Function.toString);n(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:function(t,e,r){var a,n,i,s=r(4811),o=r(7854),c=r(111),l=r(8880),h=r(2597),u=r(5465),f=r(6200),d=r(3501),m="Object already initialized",p=o.TypeError,g=o.WeakMap;if(s||u.state){var v=u.state||(u.state=new g);v.get=v.get,v.has=v.has,v.set=v.set,a=function(t,e){if(v.has(t))throw p(m);return e.facade=t,v.set(t,e),e},n=function(t){return v.get(t)||{}},i=function(t){return v.has(t)}}else{var b=f("state");d[b]=!0,a=function(t,e){if(h(t,b))throw p(m);return e.facade=t,l(t,b,e),e},n=function(t){return h(t,b)?t[b]:{}},i=function(t){return h(t,b)}}t.exports={set:a,get:n,has:i,enforce:function(t){return i(t)?n(t):a(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=n(e)).type!==t)throw p("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,e,r){var a=r(4326);t.exports=Array.isArray||function(t){return"Array"===a(t)}},614:function(t,e,r){var a=r(4154),n=a.all;t.exports=a.IS_HTMLDDA?function(t){return"function"==typeof t||t===n}:function(t){return"function"==typeof t}},4705:function(t,e,r){var a=r(7293),n=r(614),i=/#|\.prototype\./,s=function(t,e){var r=c[o(t)];return r===h||r!==l&&(n(e)?a(e):!!e)},o=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",h=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null==t}},111:function(t,e,r){var a=r(614),n=r(4154),i=n.all;t.exports=n.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:a(t)||t===i}:function(t){return"object"==typeof t?null!==t:a(t)}},1913:function(t){t.exports=!1},2190:function(t,e,r){var a=r(5005),n=r(614),i=r(7976),s=r(3307),o=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=a("Symbol");return n(e)&&i(e.prototype,o(t))}},6244:function(t,e,r){var a=r(7466);t.exports=function(t){return a(t.length)}},6339:function(t,e,r){var a=r(1702),n=r(7293),i=r(614),s=r(2597),o=r(9781),c=r(6530).CONFIGURABLE,l=r(2788),h=r(9909),u=h.enforce,f=h.get,d=String,m=Object.defineProperty,p=a("".slice),g=a("".replace),v=a([].join),b=o&&!n((function(){return 8!==m((function(){}),"length",{value:8}).length})),y=String(String).split("String"),w=t.exports=function(t,e,r){"Symbol("===p(d(e),0,7)&&(e="["+g(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(o?m(t,"name",{value:e,configurable:!0}):t.name=e),b&&r&&s(r,"arity")&&t.length!==r.arity&&m(t,"length",{value:r.arity});try{r&&s(r,"constructor")&&r.constructor?o&&m(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var a=u(t);return s(a,"source")||(a.source=v(y,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return i(this)&&f(this).source||l(this)}),"toString")},4758:function(t){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var a=+t;return(a>0?r:e)(a)}},3070:function(t,e,r){var a=r(9781),n=r(4664),i=r(3353),s=r(9670),o=r(4948),c=TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u="enumerable",f="configurable",d="writable";e.f=a?i?function(t,e,r){if(s(t),e=o(e),s(r),"function"==typeof t&&"prototype"===e&&"value"in r&&d in r&&!r[d]){var a=h(t,e);a&&a[d]&&(t[e]=r.value,r={configurable:f in r?r[f]:a[f],enumerable:u in r?r[u]:a[u],writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(s(t),e=o(e),s(r),n)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var a=r(9781),n=r(6916),i=r(5296),s=r(9114),o=r(5656),c=r(4948),l=r(2597),h=r(4664),u=Object.getOwnPropertyDescriptor;e.f=a?u:function(t,e){if(t=o(t),e=c(e),h)try{return u(t,e)}catch(t){}if(l(t,e))return s(!n(i.f,t,e),t[e])}},8006:function(t,e,r){var a=r(6324),n=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,r){var a=r(1702);t.exports=a({}.isPrototypeOf)},6324:function(t,e,r){var a=r(1702),n=r(2597),i=r(5656),s=r(1318).indexOf,o=r(3501),c=a([].push);t.exports=function(t,e){var r,a=i(t),l=0,h=[];for(r in a)!n(o,r)&&n(a,r)&&c(h,r);for(;e.length>l;)n(a,r=e[l++])&&(~s(h,r)||c(h,r));return h}},5296:function(t,e){var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,n=a&&!r.call({1:2},1);e.f=n?function(t){var e=a(this,t);return!!e&&e.enumerable}:r},2140:function(t,e,r){var a=r(6916),n=r(614),i=r(111),s=TypeError;t.exports=function(t,e){var r,o;if("string"===e&&n(r=t.toString)&&!i(o=a(r,t)))return o;if(n(r=t.valueOf)&&!i(o=a(r,t)))return o;if("string"!==e&&n(r=t.toString)&&!i(o=a(r,t)))return o;throw s("Can't convert object to primitive value")}},3887:function(t,e,r){var a=r(5005),n=r(1702),i=r(8006),s=r(5181),o=r(9670),c=n([].concat);t.exports=a("Reflect","ownKeys")||function(t){var e=i.f(o(t)),r=s.f;return r?c(e,r(t)):e}},4488:function(t,e,r){var a=r(8554),n=TypeError;t.exports=function(t){if(a(t))throw n("Can't call method on "+t);return t}},6200:function(t,e,r){var a=r(2309),n=r(9711),i=a("keys");t.exports=function(t){return i[t]||(i[t]=n(t))}},5465:function(t,e,r){var a=r(7854),n=r(3072),i="__core-js_shared__",s=a[i]||n(i,{});t.exports=s},2309:function(t,e,r){var a=r(1913),n=r(5465);(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.2",mode:a?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,r){var a=r(7392),n=r(7293),i=r(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!n((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&a&&a<41}))},1400:function(t,e,r){var a=r(9303),n=Math.max,i=Math.min;t.exports=function(t,e){var r=a(t);return r<0?n(r+e,0):i(r,e)}},5656:function(t,e,r){var a=r(8361),n=r(4488);t.exports=function(t){return a(n(t))}},9303:function(t,e,r){var a=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:a(e)}},7466:function(t,e,r){var a=r(9303),n=Math.min;t.exports=function(t){return t>0?n(a(t),9007199254740991):0}},7908:function(t,e,r){var a=r(4488),n=Object;t.exports=function(t){return n(a(t))}},7593:function(t,e,r){var a=r(6916),n=r(111),i=r(2190),s=r(8173),o=r(2140),c=r(5112),l=TypeError,h=c("toPrimitive");t.exports=function(t,e){if(!n(t)||i(t))return t;var r,c=s(t,h);if(c){if(void 0===e&&(e="default"),r=a(c,t,e),!n(r)||i(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},4948:function(t,e,r){var a=r(7593),n=r(2190);t.exports=function(t){var e=a(t,"string");return n(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:function(t,e,r){var a=r(1702),n=0,i=Math.random(),s=a(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++n+i,36)}},3307:function(t,e,r){var a=r(6293);t.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,r){var a=r(9781),n=r(7293);t.exports=a&&n((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,r){var a=r(7854),n=r(614),i=a.WeakMap;t.exports=n(i)&&/native code/.test(String(i))},5112:function(t,e,r){var a=r(7854),n=r(2309),i=r(2597),s=r(9711),o=r(6293),c=r(3307),l=a.Symbol,h=n("wks"),u=c?l.for||l:l&&l.withoutSetter||s;t.exports=function(t){return i(h,t)||(h[t]=o&&i(l,t)?l[t]:u("Symbol."+t)),h[t]}},7658:function(t,e,r){var a=r(2109),n=r(7908),i=r(6244),s=r(3658),o=r(7207);a({target:"Array",proto:!0,arity:1,forced:r(7293)((function(){return 4294967297!==[].push.call({length:4294967296},1)}))||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=n(this),r=i(e),a=arguments.length;o(r+a);for(var c=0;c<a;c++)e[r]=arguments[c],r++;return s(e,r),r}})}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){r(7658);class t{constructor(){this.boardSize=8,this.container=null,this.boardEl=null,this.cells=[],this.cellClickListeners=[],this.cellEnterListeners=[],this.cellLeaveListeners=[],this.newGameListeners=[],this.saveGameListeners=[],this.loadGameListeners=[]}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}drawUi(t){this.checkBinding(),this.container.innerHTML='\n      <div class="controls">\n        <button data-id="action-restart" class="btn">New Game</button>\n        <button data-id="action-save" class="btn">Save Game</button>\n        <button data-id="action-load" class="btn">Load Game</button>\n      </div>\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ',this.newGameEl=this.container.querySelector("[data-id=action-restart]"),this.saveGameEl=this.container.querySelector("[data-id=action-save]"),this.loadGameEl=this.container.querySelector("[data-id=action-load]"),this.newGameEl.addEventListener("click",(t=>this.onNewGameClick(t))),this.saveGameEl.addEventListener("click",(t=>this.onSaveGameClick(t))),this.loadGameEl.addEventListener("click",(t=>this.onLoadGameClick(t))),this.boardEl=this.container.querySelector("[data-id=board]"),this.boardEl.classList.add(t);for(let t=0;t<this.boardSize**2;t+=1){const a=document.createElement("div");a.classList.add("cell","map-tile","map-tile-"+(e=t,r=this.boardSize,0===e?"top-left":e===r-1?"top-right":e===r*(r-1)?"bottom-left":e===r*r-1?"bottom-right":e<r?"top":e%r==0?"left":(e+1)%r==0?"right":e>=r*(r-1)?"bottom":"center")),a.addEventListener("mouseenter",(t=>this.onCellEnter(t))),a.addEventListener("mouseleave",(t=>this.onCellLeave(t))),a.addEventListener("click",(t=>this.onCellClick(t))),this.boardEl.appendChild(a)}var e,r;this.cells=Array.from(this.boardEl.children)}redrawPositions(t){for(const t of this.cells)t.innerHTML="";for(const r of t){const t=this.boardEl.children[r.position],a=document.createElement("div");a.classList.add("character",r.character.type);const n=document.createElement("div");n.classList.add("health-level");const i=document.createElement("div");i.classList.add("health-level-indicator","health-level-indicator-"+((e=r.character.health)<15?"critical":e<50?"normal":"high")),i.style.width=`${r.character.health}%`,n.appendChild(i),a.appendChild(n),t.appendChild(a)}var e}addCellEnterListener(t){this.cellEnterListeners.push(t)}addCellLeaveListener(t){this.cellLeaveListeners.push(t)}addCellClickListener(t){this.cellClickListeners.push(t)}addNewGameListener(t){this.newGameListeners.push(t)}addSaveGameListener(t){this.saveGameListeners.push(t)}addLoadGameListener(t){this.loadGameListeners.push(t)}onCellEnter(t){t.preventDefault();const e=this.cells.indexOf(t.currentTarget);this.cellEnterListeners.forEach((t=>t.call(null,e)))}onCellLeave(t){t.preventDefault();const e=this.cells.indexOf(t.currentTarget);this.cellLeaveListeners.forEach((t=>t.call(null,e)))}onCellClick(t){const e=this.cells.indexOf(t.currentTarget);this.cellClickListeners.forEach((t=>t.call(null,e)))}onNewGameClick(t){t.preventDefault(),this.newGameListeners.forEach((t=>t.call(null)))}onSaveGameClick(t){t.preventDefault(),this.saveGameListeners.forEach((t=>t.call(null)))}onLoadGameClick(t){t.preventDefault(),this.loadGameListeners.forEach((t=>t.call(null)))}static showError(t){alert(t)}static showMessage(t){alert(t)}selectCell(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yellow";this.deselectCell(t),this.cells[t].classList.add("selected",`selected-${e}`)}deselectCell(t){const e=this.cells[t];e.classList.remove(...Array.from(e.classList).filter((t=>t.startsWith("selected"))))}showCellTooltip(t,e){this.cells[e].title=t}hideCellTooltip(t){this.cells[t].title=""}showDamage(t,e){return new Promise((r=>{const a=this.cells[t],n=document.createElement("span");n.textContent=e,n.classList.add("damage"),a.appendChild(n),n.addEventListener("animationend",(()=>{a.removeChild(n),r()}))}))}setCursor(t){this.boardEl.style.cursor=t}checkBinding(){if(null===this.container)throw new Error("GamePlay not bind to DOM")}}class e{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"generic";if(this.level=t,this.attack=0,this.defence=0,this.health=50,this.type=r,new.target===e)throw new Error("You cannot create an instance of the base Character class.")}levelUp(){this.defence=Math.round(Math.max(this.defence,this.defence*(80+this.health))/100),this.attack=Math.round(Math.max(this.attack,this.attack*(80+this.health))/100),this.health=Math.min(this.health+80,100)}canMove(t,e,r){const a=Math.abs(Math.floor(e/r)-Math.floor(t/r)),n=Math.abs(e%r-t%r);if(n<=this.moveRange&&a<=this.moveRange){if(0===n&&a<=this.moveRange)return!0;if(0===a&&n<=this.moveRange)return!0;if(n===a)return!0}return!1}canAttack(t,e,r){const a=Math.abs(Math.floor(e/r)-Math.floor(t/r)),n=Math.abs(e%r-t%r);return a<=this.attackRange&&n<=this.attackRange}}class a{constructor(t,r){if(!(t instanceof e))throw new Error("character must be instance of Character or its children");if("number"!=typeof r)throw new Error("position must be a number");this.character=t,this.position=r}}class n{constructor(){this.characters=new Set}addAll(t){this.characters=new Set([...this.characters,...t])}delete(t){this.characters.delete(t)}*[Symbol.iterator](){for(const t of this.characters)yield t}}function i(t,e,r){const a=[],n=function*(t,e){for(;;){const r=t[Math.floor(Math.random()*t.length)],a=Math.floor(Math.random()*e)+1;yield new r(a)}}(t,e);for(;a.length<r;)a.push(n.next().value);return a}class s{constructor(){this.currentTurn="user",this.level=1,this.positions=[],this.points=0,this.maxPoints=0,this.selected=null}static from(t){return"object"==typeof t?t:null}}class o extends e{constructor(t){if(super(t,"bowman"),this.attack=25,this.defence=25,this.moveRange=2,this.attackRange=2,t>1)for(let e=1;e<t;e++)this.levelUp()}}class c extends e{constructor(t){if(super(t,"swordsman"),this.attack=40,this.defence=10,this.moveRange=4,this.attackRange=1,t>1)for(let e=1;e<t;e++)this.levelUp()}}class l extends e{constructor(t){if(super(t,"magician"),this.attack=10,this.defence=40,this.moveRange=1,this.attackRange=4,t>1)for(let e=1;e<t;e++)this.levelUp()}}class h extends e{constructor(t){if(super(t,"daemon"),this.attack=10,this.defence=10,this.moveRange=1,this.attackRange=4,t>1)for(let e=1;e<t;e++)this.levelUp()}}class u extends e{constructor(t){if(super(t,"undead"),this.attack=40,this.defence=10,this.moveRange=4,this.attackRange=1,t>1)for(let e=1;e<t;e++)this.levelUp()}}class f extends e{constructor(t){if(super(t,"vampire"),this.attack=25,this.defence=25,this.moveRange=2,this.attackRange=2,t>1)for(let e=1;e<t;e++)this.levelUp()}}var d="auto",m="pointer",p="crosshair",g="not-allowed",v={1:"prairie",2:"desert",3:"arctic",4:"mountain"};const b=new t;b.bindToDOM(document.querySelector("#game-container"));const y=new class{constructor(t){this.storage=t}save(t){this.storage.setItem("state",JSON.stringify(t))}load(){try{return JSON.parse(this.storage.getItem("state"))}catch(t){throw new Error("Invalid state")}}}(localStorage),w=new class{constructor(t,e){this.gamePlay=t,this.stateService=e,this.userTeam=new n,this.botTeam=new n,this.userCharacters=[c],this.botCharacters=[h],this.gameState=new s}init(){this.gamePlay.addCellClickListener(this.onCellClick.bind(this)),this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)),this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this)),this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this)),this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this)),this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this)),this.onNewGameClick()}async onCellClick(e){if(5===this.gameState.level||0===this.userTeam.characters.size||"bot"===this.gameState.currentTurn)return;if("not-allowed"===this.gamePlay.boardEl.style.cursor)return void t.showError("Invalid action!");const r=this.getCharacter(e),a=this.getCharacter(this.gameState.selected);r&&this.isUser(r.character)?(this.gamePlay.cells.forEach((t=>t.classList.remove("selected-yellow"))),this.gamePlay.selectCell(e),this.gameState.selected=e):a?a&&(!r&&a.character.canMove(this.gameState.selected,e,this.gamePlay.boardSize)?(this.switchTurn(),this.gamePlay.deselectCell(this.gameState.selected),this.getCharacter(this.gameState.selected).position=e,this.gamePlay.redrawPositions(this.gameState.positions),this.gamePlay.selectCell(e),this.gameState.selected=e,this.getBotResponse()):r&&!this.isUser(r.character)&&a.character.canAttack(this.gameState.selected,e,this.gamePlay.boardSize)&&(this.switchTurn(),await this.attackCharacter(a,r),this.getBotResponse())):t.showError("Select a player character!")}onCellEnter(t){const e=this.getCharacter(t),r=this.getCharacter(this.gameState.selected);if(r&&(!e&&r.character.canMove(this.gameState.selected,t,this.gamePlay.boardSize)?(this.gamePlay.setCursor(m),this.gamePlay.selectCell(t,"green")):e&&!this.isUser(e.character)&&r.character.canAttack(this.gameState.selected,t,this.gamePlay.boardSize)?(this.gamePlay.setCursor(p),this.gamePlay.selectCell(t,"red")):this.gamePlay.setCursor(g)),e){const r=`🎖${e.character.level} ⚔${e.character.attack} 🛡${e.character.defence} ❤${e.character.health}`;this.gamePlay.showCellTooltip(r,t),this.isUser(e.character)&&this.gamePlay.setCursor(m)}}onCellLeave(t){this.gamePlay.cells.forEach((t=>t.classList.remove("selected-red"))),this.gamePlay.cells.forEach((t=>t.classList.remove("selected-green"))),this.gamePlay.hideCellTooltip(t),this.gamePlay.setCursor(d)}onNewGameClick(){const{maxPoints:t}=this.gameState;this.gameState=new s,this.gameState.maxPoints=t,this.gamePlay.drawUi(v[1]),this.userTeam=new n,this.botTeam=new n,this.userTeam.addAll(i(this.userCharacters,1,2)),this.botTeam.addAll(i(this.botCharacters,1,2)),this.positionTeams(this.userTeam,this.getUserPositions()),this.positionTeams(this.botTeam,this.getBotPositions()),this.gamePlay.redrawPositions(this.gameState.positions)}onSaveGameClick(){this.stateService.save(this.gameState)}onLoadGameClick(){const e=this.stateService.load();e||t.showError("Loading error"),this.gameState.currentTurn=e.currentTurn,this.gameState.level=e.level,this.gameState.positions=[],this.gameState.points=e.points,this.gameState.maxPoints=e.maxPoints,this.gameState.selected=null,this.userTeam=new n,this.botTeam=new n,e.positions.forEach((t=>{let e;switch(t.character.type){case"bowman":e=new o(t.character.level),this.userTeam.addAll([e]);break;case"swordsman":e=new c(t.character.level),this.userTeam.addAll([e]);break;case"magician":e=new l(t.character.level),this.userTeam.addAll([e]);break;case"daemon":e=new h(t.character.level),this.botTeam.addAll([e]);break;case"undead":e=new u(t.character.level),this.botTeam.addAll([e]);break;case"vampire":e=new f(t.character.level),this.botTeam.addAll([e])}e.attack=t.character.attack,e.defence=t.character.defence,e.health=t.character.health,this.gameState.positions.push(new a(e,t.position))})),this.gamePlay.drawUi(v[this.gameState.level]),this.gamePlay.redrawPositions(this.gameState.positions),"bot"===this.gameState.currentTurn&&this.getBotResponse()}async getBotResponse(){if("user"===this.gameState.currentTurn)return;const t=this.gameState.positions.filter((t=>!this.isUser(t.character))).sort(((t,e)=>e.character.attack-t.character.attack));for(const e of t){const t=this.findWeakestPlayerInRange(e);if(t)return await this.attackCharacter(e,t),void this.switchTurn()}this.switchTurn()}async attackCharacter(t,e){const r=Math.round(Math.max(t.character.attack-e.character.defence,.1*t.character.attack));await this.gamePlay.showDamage(e.position,r),e.character.health-=r,e.character.health<=0&&(this.gameState.positions.splice(this.gameState.positions.indexOf(e),1),this.isUser(e.character)?this.userTeam.delete(e.character):this.botTeam.delete(e.character),this.gamePlay.deselectCell(e.position)),this.gamePlay.redrawPositions(this.gameState.positions),this.checkGameResult()}findWeakestPlayerInRange(t){const e=this.gameState.positions.filter((t=>this.isUser(t.character))).filter((e=>t.character.canAttack(t.position,e.position,this.gamePlay.boardSize)));return e.length>0?e.reduce(((t,e)=>e.character.health<t.character.health?e:t),e[0]):null}switchTurn(){"bot"===this.gameState.currentTurn?this.gameState.currentTurn="user":this.gameState.currentTurn="bot"}positionTeams(t,e){for(const r of t){const t=e[Math.floor(Math.random()*e.length)];this.gameState.positions.push(new a(r,t)),e.splice(e.indexOf(t),1)}}getUserPositions(){const t=this.gamePlay.boardSize,e=[];for(let r=0,a=1;e.length<2*t;r+=t,a+=t)e.push(r,a);return e}getBotPositions(){const t=this.gamePlay.boardSize,e=[];for(let r=t-2,a=t-1;e.length<2*t;r+=t,a+=t)e.push(r,a);return e}getCharacter(t){return this.gameState.positions.find((e=>e.position===t))}isUser(t){return this.userCharacters.some((e=>t instanceof e))}checkGameResult(){0===this.userTeam.characters.size?this.gameState.maxPoints=Math.max(this.gameState.points,this.gameState.maxPoints):0===this.botTeam.characters.size&&(this.scorePoints(),this.gameState.maxPoints=Math.max(this.gameState.points,this.gameState.maxPoints),this.gameState.level++,this.levelUp())}levelUp(){this.gameState.level<=4&&(this.userTeam.characters.forEach((t=>{t.level++,t.levelUp()})),2===this.gameState.level?(this.userTeam.addAll(i(this.userCharacters,1,3-this.userTeam.characters.size)),this.botTeam.addAll(i(this.botCharacters,2,3))):3===this.gameState.level?(this.userTeam.addAll(i(this.userCharacters,2,5-this.userTeam.characters.size)),this.botTeam.addAll(i(this.botCharacters,3,5))):4===this.gameState.level&&(this.userTeam.addAll(i(this.userCharacters,3,5-this.userTeam.characters.size)),this.botTeam.addAll(i(this.botCharacters,4,5))),this.gameState.positions=[],this.gamePlay.drawUi(v[this.gameState.level]),this.positionTeams(this.userTeam,this.getUserPositions()),this.positionTeams(this.botTeam,this.getBotPositions()),this.gamePlay.redrawPositions(this.gameState.positions)),this.gameState.selected=null}scorePoints(){this.gameState.points+=[...this.userTeam.characters].reduce(((t,e)=>t+e.health),0)}}(b,y);w.init()}()}();