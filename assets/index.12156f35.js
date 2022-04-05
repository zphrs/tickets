var ut=Object.defineProperty;var at=(n,e,t)=>e in n?ut(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>(at(n,typeof e!="symbol"?e+"":e,t),t);const ft=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};ft();function S(){}const We=n=>n;function dt(n,e){for(const t in e)n[t]=e[t];return n}function Ke(n){return n()}function Ne(){return Object.create(null)}function W(n){n.forEach(Ke)}function Ie(n){return typeof n=="function"}function F(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function ht(n){return Object.keys(n).length===0}function Qe(n,...e){if(n==null)return S;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function pt(n,e,t){n.$$.on_destroy.push(Qe(e,t))}function mt(n,e,t,r){if(n){const s=Xe(n,e,t,r);return n[0](s)}}function Xe(n,e,t,r){return n[1]&&r?dt(t.ctx.slice(),n[1](r(e))):t.ctx}function _t(n,e,t,r){if(n[2]&&r){const s=n[2](r(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],l=Math.max(e.dirty.length,s.length);for(let c=0;c<l;c+=1)i[c]=e.dirty[c]|s[c];return i}return e.dirty|s}return e.dirty}function gt(n,e,t,r,s,i){if(s){const l=Xe(e,t,r,i);n.p(l,s)}}function vt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}const Ze=typeof window!="undefined";let bt=Ze?()=>window.performance.now():()=>Date.now(),Se=Ze?n=>requestAnimationFrame(n):S;const ee=new Set;function xe(n){ee.forEach(e=>{e.c(n)||(ee.delete(e),e.f())}),ee.size!==0&&Se(xe)}function yt(n){let e;return ee.size===0&&Se(xe),{promise:new Promise(t=>{ee.add(e={c:n,f:t})}),abort(){ee.delete(e)}}}function v(n,e){n.appendChild(e)}function et(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function kt(n){const e=b("style");return wt(et(n),e),e.sheet}function wt(n,e){v(n.head||n,e)}function I(n,e,t){n.insertBefore(e,t||null)}function E(n){n.parentNode.removeChild(n)}function tt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function Y(n){return document.createTextNode(n)}function P(){return Y(" ")}function nt(){return Y("")}function H(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function g(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ye(n){return n===""?null:+n}function Tt(n){return Array.from(n.childNodes)}function ve(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Z(n,e){n.value=e==null?"":e}function Oe(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function Et(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function te(n,e,t){n.classList[t?"add":"remove"](e)}function rt(n,e,t=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,t,!1,e),r}const _e=new Map;let ge=0;function It(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function St(n,e){const t={stylesheet:kt(e),rules:{}};return _e.set(n,t),t}function Lt(n,e,t,r,s,i,l,c=0){const d=16.666/r;let o=`{
`;for(let p=0;p<=1;p+=d){const y=e+(t-e)*i(p);o+=p*100+`%{${l(y,1-y)}}
`}const h=o+`100% {${l(t,1-t)}}
}`,u=`__svelte_${It(h)}_${c}`,a=et(n),{stylesheet:m,rules:f}=_e.get(a)||St(a,n);f[u]||(f[u]=!0,m.insertRule(`@keyframes ${u} ${h}`,m.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${u} ${r}ms linear ${s}ms 1 both`,ge+=1,u}function Pe(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=t.length-r.length;s&&(n.style.animation=r.join(", "),ge-=s,ge||Ct())}function Ct(){Se(()=>{ge||(_e.forEach(n=>{const{stylesheet:e}=n;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);n.rules={}}),_e.clear())})}let ae;function ue(n){ae=n}function st(){if(!ae)throw new Error("Function called outside component initialization");return ae}function it(n){st().$$.on_mount.push(n)}function lt(){const n=st();return(e,t)=>{const r=n.$$.callbacks[e];if(r){const s=rt(e,t);r.slice().forEach(i=>{i.call(n,s)})}}}function fe(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const ce=[],j=[],pe=[],$e=[],zt=Promise.resolve();let we=!1;function Nt(){we||(we=!0,zt.then(ot))}function J(n){pe.push(n)}const ke=new Set;let de=0;function ot(){const n=ae;do{for(;de<ce.length;){const e=ce[de];de++,ue(e),Ot(e.$$)}for(ue(null),ce.length=0,de=0;j.length;)j.pop()();for(let e=0;e<pe.length;e+=1){const t=pe[e];ke.has(t)||(ke.add(t),t())}pe.length=0}while(ce.length);for(;$e.length;)$e.pop()();we=!1,ke.clear(),ue(n)}function Ot(n){if(n.fragment!==null){n.update(),W(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(J)}}let le;function Pt(){return le||(le=Promise.resolve(),le.then(()=>{le=null})),le}function Ae(n,e,t){n.dispatchEvent(rt(`${e?"intro":"outro"}${t}`))}const me=new Set;let Q;function ne(){Q={r:0,c:[],p:Q}}function re(){Q.r||W(Q.c),Q=Q.p}function w(n,e){n&&n.i&&(me.delete(n),n.i(e))}function z(n,e,t,r){if(n&&n.o){if(me.has(n))return;me.add(n),Q.c.push(()=>{me.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}}const $t={duration:0};function X(n,e,t){let r=e(n,t),s=!1,i,l,c=0;function d(){i&&Pe(n,i)}function o(){const{delay:u=0,duration:a=300,easing:m=We,tick:f=S,css:_}=r||$t;_&&(i=Lt(n,0,1,a,u,m,_,c++)),f(0,1);const p=bt()+u,y=p+a;l&&l.abort(),s=!0,J(()=>Ae(n,!0,"start")),l=yt(O=>{if(s){if(O>=y)return f(1,0),Ae(n,!0,"end"),d(),s=!1;if(O>=p){const k=m((O-p)/a);f(k,1-k)}}return s})}let h=!1;return{start(){h||(h=!0,Pe(n),Ie(r)?(r=r(),Pt().then(o)):o())},invalidate(){h=!1},end(){s&&(d(),s=!1)}}}function B(n){n&&n.c()}function U(n,e,t,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=n.$$;s&&s.m(e,t),r||J(()=>{const d=i.map(Ke).filter(Ie);l?l.push(...d):W(d),n.$$.on_mount=[]}),c.forEach(J)}function M(n,e){const t=n.$$;t.fragment!==null&&(W(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function At(n,e){n.$$.dirty[0]===-1&&(ce.push(n),Nt(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function V(n,e,t,r,s,i,l,c=[-1]){const d=ae;ue(n);const o=n.$$={fragment:null,ctx:null,props:i,update:S,not_equal:s,bound:Ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Ne(),dirty:c,skip_bound:!1,root:e.target||d.$$.root};l&&l(o.root);let h=!1;if(o.ctx=t?t(n,e.props||{},(u,a,...m)=>{const f=m.length?m[0]:a;return o.ctx&&s(o.ctx[u],o.ctx[u]=f)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](f),h&&At(n,u)),a}):[],o.update(),h=!0,W(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const u=Tt(e.target);o.fragment&&o.fragment.l(u),u.forEach(E)}else o.fragment&&o.fragment.c();e.intro&&w(n.$$.fragment),U(n,e.target,e.anchor,e.customElement),ot()}ue(d)}class G{$destroy(){M(this,1),this.$destroy=S}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ze=class{constructor(e,t,r){A(this,"_clientName");A(this,"_serviceDescription");A(this,"_completionNote");A(this,"_priority");A(this,"_timeAdded");this._clientName=e,this._serviceDescription=t,this._priority=r,this._timeAdded=Date.now()}static fromJSON(e){const t=new ze(e._clientName,e._serviceDescription,e._priority);return t._timeAdded=e._timeAdded,t._completionNote=e._completionNote,t}equals(e){return this._timeAdded===e._timeAdded}compareTo(e){const t=this._priority-e._priority;return t===0?this._timeAdded-e._timeAdded:t}get client(){return this._clientName}get description(){return this._serviceDescription}get completed(){return this._completionNote!==void 0}complete(e){if(this.completed)throw new Error("Task already completed");this._completionNote=e}get completionNote(){return this._completionNote}get priority(){return this._priority}};let q=ze;A(q,"HIGH_PRIORITY",1),A(q,"MEDIUM_PRIORITY",2),A(q,"LOW_PRIORITY",3);function Rt(n){let e,t,r,s,i;const l=n[5].default,c=mt(l,n,n[4],null);return{c(){e=b("button"),c&&c.c(),g(e,"tabindex","0"),e.disabled=t=!n[0],g(e,"class","svelte-exf1u0"),te(e,"active",!n[0])},m(d,o){I(d,e,o),c&&c.m(e,null),n[7](e),r=!0,s||(i=[H(e,"click",n[6]),H(e,"click",n[8])],s=!0)},p(d,[o]){c&&c.p&&(!r||o&16)&&gt(c,l,d,d[4],r?_t(l,d[4],o,null):vt(d[4]),null),(!r||o&1&&t!==(t=!d[0]))&&(e.disabled=t),o&1&&te(e,"active",!d[0])},i(d){r||(w(c,d),r=!0)},o(d){z(c,d),r=!1},d(d){d&&E(e),c&&c.d(d),n[7](null),s=!1,W(i)}}}function Dt(n,e,t){let{$$slots:r={},$$scope:s}=e,{active:i=!0}=e,{error:l=""}=e,c=null;const d=a=>{const m=a.target,f=Number.parseFloat(getComputedStyle(m).transitionDuration.replace("s",""))*1e3;m.style.animationDuration=`${f*2}ms`,m.style.setProperty("--transition-delay",`${f*2}ms`)};function o(a){fe.call(this,n,a)}function h(a){j[a?"unshift":"push"](()=>{c=a,t(1,c)})}const u=a=>d(a);return n.$$set=a=>{"active"in a&&t(0,i=a.active),"error"in a&&t(3,l=a.error),"$$scope"in a&&t(4,s=a.$$scope)},n.$$.update=()=>{var a;n.$$.dirty&10&&((a=c==null?void 0:c.style)==null||a.setProperty("--error",`"${l}"`)),n.$$.dirty&8&&t(0,i=!l)},[i,c,d,l,s,r,o,h,u]}class Le extends G{constructor(e){super();V(this,e,Dt,Rt,F,{active:0,error:3})}}function qt(n){let e;return{c(){e=Y("Submit")},m(t,r){I(t,e,r)},d(t){t&&E(e)}}}function Ht(n){let e,t,r,s,i,l,c,d,o,h,u,a,m,f,_,p,y,O;return _=new Le({props:{active:Ut,error:n[0],$$slots:{default:[qt]},$$scope:{ctx:n}}}),_.$on("click",n[8]),_.$on("click",n[4]),{c(){e=b("div"),t=b("h1"),r=Y("For "),s=b("input"),i=P(),l=b("p"),c=b("textarea"),d=P(),o=b("select"),h=b("option"),h.textContent="select priority",u=b("option"),u.textContent="!",a=b("option"),a.textContent="!!",m=b("option"),m.textContent="!!!",f=P(),B(_.$$.fragment),g(s,"placeholder","client name"),g(s,"class","svelte-vam8h3"),g(t,"class","svelte-vam8h3"),g(c,"placeholder","task description"),h.disabled=!0,h.__value="-1",h.value=h.__value,h.selected=!0,u.__value="3",u.value=u.__value,a.__value="2",a.value=a.__value,m.__value="1",m.value=m.__value,g(o,"data-value","-1")},m(k,T){I(k,e,T),v(e,t),v(t,r),v(t,s),n[5](s),v(e,i),v(e,l),v(l,c),n[6](c),v(e,d),v(e,o),v(o,h),v(o,u),v(o,a),v(o,m),n[7](o),v(e,f),U(_,e,null),p=!0,y||(O=H(o,"change",Mt),y=!0)},p(k,[T]){const C={};T&1&&(C.error=k[0]),T&2048&&(C.$$scope={dirty:T,ctx:k}),_.$set(C)},i(k){p||(w(_.$$.fragment,k),p=!0)},o(k){z(_.$$.fragment,k),p=!1},d(k){k&&E(e),n[5](null),n[6](null),n[7](null),M(_),y=!1,O()}}}let Ut=!0;function Mt(n){n.target,n.target.setAttribute("data-value",n.target.value)}function Yt(n,e,t){let r="",s,i,l;const c=lt();function d(){t(0,r=""),s.removeEventListener("input",d),i.removeEventListener("input",d),l.removeEventListener("input",d)}function o(){s.value?i.value?l.value==="-1"?(l.focus(),t(0,r="Please select a priority"),l.addEventListener("input",d)):(c("submit",{task:new q(s.value,i.value,parseInt(l.value))}),s.removeEventListener("input",d),i.removeEventListener("input",d),l.removeEventListener("input",d),t(1,s.value="",s),t(2,i.value="",i),t(3,l.value="-1",l)):(i.focus(),t(0,r="Please enter a description"),i.addEventListener("input",d)):(s.focus(),t(0,r="Please enter a client name"),s.addEventListener("input",d))}function h(f){j[f?"unshift":"push"](()=>{s=f,t(1,s)})}function u(f){j[f?"unshift":"push"](()=>{i=f,t(2,i)})}function a(f){j[f?"unshift":"push"](()=>{l=f,t(3,l)})}function m(f){fe.call(this,n,f)}return[r,s,i,l,o,h,u,a,m]}class Jt extends G{constructor(e){super();V(this,e,Yt,Ht,F,{})}}function oe(n){return-n*(n-2)}function be(n,{delay:e=0,duration:t=400,easing:r=We}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:i=>`opacity: ${i*s}`}}function Bt(n){let e,t,r,s;return t=new Jt({}),t.$on("submit",n[0]),{c(){e=b("div"),B(t.$$.fragment),g(e,"class","noborder svelte-1k1b3t4")},m(i,l){I(i,e,l),U(t,e,null),s=!0},p:S,i(i){s||(w(t.$$.fragment,i),r||J(()=>{r=X(e,be,{}),r.start()}),s=!0)},o(i){z(t.$$.fragment,i),s=!1},d(i){i&&E(e),M(t)}}}function Ft(n){window.document.title="Tickets | Client";function e(t){fe.call(this,n,t)}return[e]}class jt extends G{constructor(e){super();V(this,e,Ft,Bt,F,{})}}function Re(n){let e,t="!".repeat(4-n[0].priority)+"",r;return{c(){e=b("span"),r=Y(t),g(e,"class","priority svelte-vwg6qf")},m(s,i){I(s,e,i),v(e,r)},p(s,i){i&1&&t!==(t="!".repeat(4-s[0].priority)+"")&&ve(r,t)},d(s){s&&E(e)}}}function Vt(n){let e;return{c(){e=b("span"),g(e,"class","input-height svelte-vwg6qf")},m(t,r){I(t,e,r)},p:S,d(t){t&&E(e)}}}function Gt(n){let e,t,r;return{c(){e=b("input"),g(e,"placeholder","completion message")},m(s,i){I(s,e,i),t||(r=H(e,"input",n[8]),t=!0)},p:S,d(s){s&&E(e),t=!1,r()}}}function Wt(n){let e;return{c(){e=Y("Complete")},m(t,r){I(t,e,r)},d(t){t&&E(e)}}}function De(n){let e,t;return{c(){e=b("div"),g(e,"class","alt svelte-vwg6qf")},m(r,s){I(r,e,s)},i(r){t||J(()=>{t=X(e,be,{}),t.start()})},o:S,d(r){r&&E(e)}}}function Kt(n){let e,t,r,s,i,l=n[0].client+"",c,d,o,h,u=n[0].description+"",a,m,f,_,p,y,O,k=!n[0].completed&&Re(n);function T(L,D){if(!L[0].completed)return Gt;if(!L[1])return Vt}let C=T(n),N=C&&C(n);f=new Le({props:{active:Qt,error:n[3]||n[0].completionNote,$$slots:{default:[Wt]},$$scope:{ctx:n}}}),f.$on("click",n[9]),f.$on("click",n[4]);let R=!n[1]&&!n[2]&&De();return{c(){e=b("div"),t=b("div"),r=b("div"),s=b("h1"),i=Y("For "),c=Y(l),d=P(),k&&k.c(),o=P(),h=b("p"),a=P(),N&&N.c(),m=P(),B(f.$$.fragment),y=P(),R&&R.c(),g(r,"class","noborder"),te(r,"tippytop",!n[1]),g(t,"class","top svelte-vwg6qf"),g(e,"class","parent noborder svelte-vwg6qf")},m(L,D){I(L,e,D),v(e,t),v(t,r),v(r,s),v(s,i),v(s,c),v(s,d),k&&k.m(s,null),v(r,o),v(r,h),h.innerHTML=u,v(r,a),N&&N.m(r,null),v(r,m),U(f,r,null),v(e,y),R&&R.m(e,null),O=!0},p(L,[D]){(!O||D&1)&&l!==(l=L[0].client+"")&&ve(c,l),L[0].completed?k&&(k.d(1),k=null):k?k.p(L,D):(k=Re(L),k.c(),k.m(s,null)),(!O||D&1)&&u!==(u=L[0].description+"")&&(h.innerHTML=u),C===(C=T(L))&&N?N.p(L,D):(N&&N.d(1),N=C&&C(L),N&&(N.c(),N.m(r,m)));const ie={};D&9&&(ie.error=L[3]||L[0].completionNote),D&2048&&(ie.$$scope={dirty:D,ctx:L}),f.$set(ie),D&2&&te(r,"tippytop",!L[1]),!L[1]&&!L[2]?R?D&6&&w(R,1):(R=De(),R.c(),w(R,1),R.m(e,null)):R&&(R.d(1),R=null)},i(L){O||(w(f.$$.fragment,L),_||J(()=>{_=X(r,n[6],{}),_.start()}),p||J(()=>{p=X(t,n[5],{}),p.start()}),w(R),O=!0)},o(L){z(f.$$.fragment,L),O=!1},d(L){L&&E(e),k&&k.d(),N&&N.d(),M(f),R&&R.d()}}}let Qt=!0;function Xt(n,e,t){let{task:r}=e,{inCompletedList:s=!1}=e,{firstInCompletedList:i=!1}=e,{lastUncompletedTask:l=!1}=e;const c=lt();let d="";function o(f){const p=f.target.parentElement.querySelector("input");if(p.value){r.complete(p.value),p.value="",t(3,d=p.value);const y=r;window.setTimeout(()=>{c("taskcomplete",{task:y})},300),t(0,r)}else t(3,d="Please enter a completion message"),p.focus()}function h(f,{delay:_=0,duration:p=500}){if(s&&!i)return{delay:_,duration:p,easing:oe,css:y=>`transform: translateY(${(1-y)*-100}%)`};if(i){const y=document.querySelector(".tippytop");if(!y)return{delay:0,duration:p,easing:oe,css:N=>`transform: translateY(${(1-N)*-100}%)`};const O=f.parentElement,k=y.getBoundingClientRect(),T=O.getBoundingClientRect(),C=k.y-T.y;return console.log(k,T,C),{delay:0,duration:500,css:N=>`transform: translateY(${(1-N)*C}px)`,easing:oe}}return{delay:0,duration:500,css:y=>`
        transform: rotate(${(1-y)*5}deg);
        background-color: rgba(var(--accent), ${.1+y*.2});
        opacity: ${y};
      `,easing:oe}}function u(f,{delay:_=0,duration:p=500}){return s?{delay:0,duration:0}:{delay:0,duration:1e3,css:y=>`
        opacity: ${y};
      `,easing:oe}}const a=()=>{t(3,d="")};function m(f){fe.call(this,n,f)}return n.$$set=f=>{"task"in f&&t(0,r=f.task),"inCompletedList"in f&&t(1,s=f.inCompletedList),"firstInCompletedList"in f&&t(7,i=f.firstInCompletedList),"lastUncompletedTask"in f&&t(2,l=f.lastUncompletedTask)},[r,s,l,d,o,h,u,i,a,m]}class Ce extends G{constructor(e){super();V(this,e,Xt,Kt,F,{task:0,inCompletedList:1,firstInCompletedList:7,lastUncompletedTask:2})}}class Zt{constructor(e){A(this,"_current");A(this,"_last");this._current=e.getItem(0),this._last=e.getItem(e.size)}next(){if(this._current.next===null)return{done:!0,value:null};const e=this._current.value;return this._current=this._current.next,e===null?{done:!0,value:null}:{done:!1,value:e}}}class he{constructor(e){A(this,"_value");A(this,"_prev");A(this,"_next");this._value=e,this._prev=null,this._next=null}get value(){return this._value}set value(e){this._value=e}get prev(){return this._prev}set prev(e){this._prev=e}set next(e){this._next=e}get next(){return this._next}equals(e){return this._value===e.value}}class se{constructor(e=[]){A(this,"_head");A(this,"_tail");A(this,"_size");this._head=new he(null),this._tail=new he(null),this._head.next=this._tail,this._tail.prev=this._head,this._size=0;for(const t of e)this.add(t)}[Symbol.iterator](){return new Zt(this)}get size(){return this._size}add(e){const t=new he(e),r=this._tail.prev;if(r===null)throw new Error("Head is unexpectedly missing");t.prev=r,t.next=this._tail,r.next=t,this._tail.prev=t,this._size++}getItem(e){if(e<0||e>this._size)throw new Error("Index out of bounds");if(e<this._size/2){let r=this._head;for(let s=-1;s<e;s++){if(r.next===null)throw new Error("Index out of bounds");r=r.next}return r}let t=this._tail;for(let r=this._size;r>e;r--){if(t.prev===null)throw new Error("Index out of bounds");t=t.prev}return t}get(e){switch(typeof e){case"number":return this.getItem(e).value;case"object":let t=this._head.next;if(t===null)throw new Error("Item not in list");for(let r=0;r<this._size;r++){if(t===null||t.value===null)throw new Error("Unexpected missing value at index "+r);if(t.value.equals(e))return t.value;t=t.next}throw new Error("Item not in list");default:throw new Error("Invalid type")}}getAll(e){const t=new se;for(const r of this)r.equals(e)&&t.add(r);return t}indexOf(e,t=0){let r=this._head.next;if(r===null)return-1;for(let s=t;s<this._size;s++){if(r===null||r.value===null)return-1;if(r.value.equals(e))return s;r=r.next}return-1}remove(e){const t=this.getItem(e),r=t.prev,s=t.next;if(r===null)throw new Error("Head is unexpectedly missing");if(s===null)throw new Error("Tail is unexpectedly missing");r.next=s,s.prev=r,this._size--}removeValue(e){const t=this.indexOf(e);if(t===-1)throw new Error("Value not found");this.remove(t)}removeAll(e){let t=this.indexOf(e);for(;t!==-1;)this.remove(t),t=this.indexOf(e,t)}insert(e,t){const r=new he(t),s=this.getItem(e),i=s.prev;if(i===null)throw new Error("Head is unexpectedly missing");if(s===null)throw new Error("Tail is unexpectedly missing");r.prev=i,r.next=s,i.next=r,s.prev=r,this._size++}toString(){let e="",t=this._head.next;if(t===null)return e;for(let r=0;r<this._size;r++){if(e+=t.value.toString()+", ",t.next===null)throw new Error("Unexpected missing next at index "+r);t=t.next}return e.substring(0,e.length-2)}clone(){const e=new se;for(const t of this)e.add(t);return e}contains(e){return this.indexOf(e)!==-1}clear(){this._head.next=this._tail,this._tail.prev=this._head,this._size=0}}function qe(n,e,t){const r=n.slice();return r[6]=e[t],r}function xt(n){let e,t;return{c(){e=b("div"),e.innerHTML=`<h2>You&#39;re all caught up!</h2> 
      <p class="svelte-1bkg15o">Tickets will display here once added. You can add some more tickets by
        going to <a href="#/client">the client page</a>.</p>`},m(r,s){I(r,e,s)},p:S,i(r){t||J(()=>{t=X(e,nn,{}),t.start()})},o:S,d(r){r&&E(e)}}}function en(n){let e=n[1],t,r,s=He(n);return{c(){s.c(),t=nt()},m(i,l){s.m(i,l),I(i,t,l),r=!0},p(i,l){l&2&&F(e,e=i[1])?(ne(),z(s,1,1,S),re(),s=He(i),s.c(),w(s),s.m(t.parentNode,t)):s.p(i,l)},i(i){r||(w(s),r=!0)},o(i){z(s),r=!1},d(i){i&&E(t),s.d(i)}}}function He(n){let e,t;return e=new Ce({props:{task:n[1],lastUncompletedTask:n[2]}}),e.$on("taskcomplete",n[4]),e.$on("taskcomplete",n[5]),{c(){B(e.$$.fragment)},m(r,s){U(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.task=r[1]),s&4&&(i.lastUncompletedTask=r[2]),e.$set(i)},i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Ue(n){let e,t,r,s,i,l,c,d,o,h,u=n[3],a=[];for(let f=0;f<u.length;f+=1)a[f]=Ye(qe(n,u,f));const m=f=>z(a[f],1,1,()=>{a[f]=null});return{c(){e=b("br"),t=P(),r=b("details"),s=b("br"),i=P(),l=b("summary"),l.textContent="Completed",c=P(),d=b("br"),o=P();for(let f=0;f<a.length;f+=1)a[f].c();g(l,"class","svelte-1bkg15o"),r.open=!0},m(f,_){I(f,e,_),I(f,t,_),I(f,r,_),v(r,s),v(r,i),v(r,l),v(r,c),v(r,d),v(r,o);for(let p=0;p<a.length;p+=1)a[p].m(r,null);h=!0},p(f,_){if(_&8){u=f[3];let p;for(p=0;p<u.length;p+=1){const y=qe(f,u,p);a[p]?(a[p].p(y,_),w(a[p],1)):(a[p]=Ye(y),a[p].c(),w(a[p],1),a[p].m(r,null))}for(ne(),p=u.length;p<a.length;p+=1)m(p);re()}},i(f){if(!h){for(let _=0;_<u.length;_+=1)w(a[_]);h=!0}},o(f){a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)z(a[_]);h=!1},d(f){f&&E(e),f&&E(t),f&&E(r),tt(a,f)}}}function Me(n){let e,t;return e=new Ce({props:{task:n[6],inCompletedList:!0,firstInCompletedList:n[3][0]===n[6]}}),{c(){B(e.$$.fragment)},m(r,s){U(e,r,s),t=!0},p(r,s){const i={};s&8&&(i.task=r[6]),s&8&&(i.firstInCompletedList=r[3][0]===r[6]),e.$set(i)},i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Ye(n){let e=n[6],t,r,s,i=Me(n);return{c(){i.c(),t=P(),r=b("br")},m(l,c){i.m(l,c),I(l,t,c),I(l,r,c),s=!0},p(l,c){c&8&&F(e,e=l[6])?(ne(),z(i,1,1,S),re(),i=Me(l),i.c(),w(i),i.m(t.parentNode,t)):i.p(l,c)},i(l){s||(w(i),s=!0)},o(l){z(i),s=!1},d(l){i.d(l),l&&E(t),l&&E(r)}}}function tn(n){let e,t,r,s,i,l;const c=[en,xt],d=[];function o(u,a){return u[1]?0:1}t=o(n),r=d[t]=c[t](n);let h=n[3].length>0&&Ue(n);return{c(){e=b("div"),r.c(),s=P(),h&&h.c(),g(e,"class","noborder")},m(u,a){I(u,e,a),d[t].m(e,null),v(e,s),h&&h.m(e,null),l=!0},p(u,[a]){let m=t;t=o(u),t===m?d[t].p(u,a):(ne(),z(d[m],1,1,()=>{d[m]=null}),re(),r=d[t],r?r.p(u,a):(r=d[t]=c[t](u),r.c()),w(r,1),r.m(e,s)),u[3].length>0?h?(h.p(u,a),a&8&&w(h,1)):(h=Ue(u),h.c(),w(h,1),h.m(e,null)):h&&(ne(),z(h,1,1,()=>{h=null}),re())},i(u){l||(w(r),w(h),i||J(()=>{i=X(e,be,{}),i.start()}),l=!0)},o(u){z(r),z(h),l=!1},d(u){u&&E(e),d[t].d(),h&&h.d()}}}function nn(n,{delay:e=2e3,duration:t=1e3}){return{delay:1e4,duration:t,css:r=>`
        opacity: ${r},
      `}}function rn(n,e,t){document.title="Tickets | Technician";let{completedTasks:r=new se}=e,{topTask:s=null}=e,{lastUncompletedTask:i=!1}=e,l=[];r=r;function c(o){fe.call(this,n,o)}const d=o=>{r.insert(0,o.detail.task),console.log(o.detail.task),t(0,r),t(1,s=null)};return n.$$set=o=>{"completedTasks"in o&&t(0,r=o.completedTasks),"topTask"in o&&t(1,s=o.topTask),"lastUncompletedTask"in o&&t(2,i=o.lastUncompletedTask)},n.$$.update=()=>{n.$$.dirty&1&&t(3,l=[...r])},[r,s,i,l,c,d]}class sn extends G{constructor(e){super();V(this,e,rn,tn,F,{completedTasks:0,topTask:1,lastUncompletedTask:2})}}function Je(n){let e,t;return{c(){e=b("div"),e.innerHTML=`<h1>Heaps Lab</h1> 
    <h2>An in-browser heap-based ticketing system.</h2> 

    <table class="svelte-1i6w7ea"><tr class="svelte-1i6w7ea"><th class="svelte-1i6w7ea"><a href="#/client">client</a> view</th> 
        <th class="svelte-1i6w7ea"><a href="#/tech">technician</a> view</th></tr> 
      <tr class="svelte-1i6w7ea"><td class="svelte-1i6w7ea">For entering new tickets with the name of the client, the description
          of the task, and the priority (low, medium, high).</td> 
        <td class="svelte-1i6w7ea">For viewing the topmost ticket in the queue and marking it as
          completed. You can also view completed tickets including the client
          name, description, and completion note.</td></tr></table>`,g(e,"class","noborder")},m(r,s){I(r,e,s)},i(r){t||J(()=>{t=X(e,be,{}),t.start()})},o:S,d(r){r&&E(e)}}}function ln(n){let e,t=n[0]&&Je();return{c(){t&&t.c(),e=nt()},m(r,s){t&&t.m(r,s),I(r,e,s)},p(r,[s]){r[0]?t?s&1&&w(t,1):(t=Je(),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(r){w(t)},o:S,d(r){t&&t.d(r),r&&E(e)}}}function on(n,e,t){window.document.title="Tickets | Home";let r=!1;return it(()=>{t(0,r=!0)}),[r]}class cn extends G{constructor(e){super();V(this,e,on,ln,F,{})}}const x=[];function un(n,e){return{subscribe:Te(n,e).subscribe}}function Te(n,e=S){let t;const r=new Set;function s(c){if(F(n,c)&&(n=c,t)){const d=!x.length;for(const o of r)o[1](),x.push(o,n);if(d){for(let o=0;o<x.length;o+=2)x[o][0](x[o+1]);x.length=0}}}function i(c){s(c(n))}function l(c,d=S){const o=[c,d];return r.add(o),r.size===1&&(t=e(s)||S),c(n),()=>{r.delete(o),r.size===0&&(t(),t=null)}}return{set:s,update:i,subscribe:l}}function an(n,e,t){const r=!Array.isArray(n),s=r?[n]:n,i=e.length<2;return un(t,l=>{let c=!1;const d=[];let o=0,h=S;const u=()=>{if(o)return;h();const m=e(r?d[0]:d,l);i?l(m):h=Ie(m)?m:S},a=s.map((m,f)=>Qe(m,_=>{d[f]=_,o&=~(1<<f),c&&u()},()=>{o|=1<<f}));return c=!0,u(),function(){W(a),h()}})}function fn(n){if(typeof window=="undefined"){const{subscribe:i}=Te(n);return{subscribe:i}}const e=Te(window.location.href),t=history.pushState,r=history.replaceState,s=()=>e.set(window.location.href);return history.pushState=function(){t.apply(this,arguments),s()},history.replaceState=function(){r.apply(this,arguments),s()},window.addEventListener("popstate",s),window.addEventListener("hashchange",s),{subscribe:an(e,i=>new URL(i)).subscribe}}var dn=fn("/");function Be(n,e,t){const r=n.slice();return r[6]=e[t],r[8]=t,r}function Fe(n){let e,t=n[6].title+"",r,s,i,l,c,d;return{c(){e=b("a"),r=Y(t),s=P(),g(e,"href",i=je(n[6])),g(e,"data-index",l=n[8]),g(e,"class","clear-btn svelte-1gay1m4"),te(e,"active",n[6].active)},m(o,h){I(o,e,h),v(e,r),v(e,s),c||(d=H(e,"click",n[2]),c=!0)},p(o,h){h&1&&t!==(t=o[6].title+"")&&ve(r,t),h&1&&i!==(i=je(o[6]))&&g(e,"href",i),h&1&&te(e,"active",o[6].active)},d(o){o&&E(e),c=!1,d()}}}function hn(n){let e,t=n[0],r=[];for(let s=0;s<t.length;s+=1)r[s]=Fe(Be(n,t,s));return{c(){e=b("nav");for(let s=0;s<r.length;s+=1)r[s].c();g(e,"class","choose-dash svelte-1gay1m4")},m(s,i){I(s,e,i);for(let l=0;l<r.length;l+=1)r[l].m(e,null);n[3](e)},p(s,[i]){if(i&5){t=s[0];let l;for(l=0;l<t.length;l+=1){const c=Be(s,t,l);r[l]?r[l].p(c,i):(r[l]=Fe(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=t.length}},i:S,o:S,d(s){s&&E(e),tt(r,s),n[3](null)}}}function je(n){var e;return(e=n.href)!=null?e:"#/"+n.title.replace(/\s/g,"-").toLowerCase()}function pn(n,e,t){let r,s,i;function l(o){const h=o.target;i=s,s=h;const u=Number.parseInt(h.getAttribute("data-index")),a=Number.parseInt(i.getAttribute("data-index")),m=r.style,f=r.children;history.replaceState({},null,h.href),a<u?(m.setProperty("--underline-start",a/f.length+""),m.setProperty("--underline-width",(u-a+1)/f.length+"")):(m.setProperty("--underline-start",u/f.length+""),m.setProperty("--underline-width",(a-u+1)/f.length+""));const _=window.getComputedStyle(r,":after").getPropertyValue("transition-duration");console.log(_),setTimeout(()=>{m.setProperty("--underline-start",u/f.length+""),m.setProperty("--underline-width",1/f.length+"")},Number.parseFloat(_)*1e3)}let{tabs:c}=e;it(()=>{for(let o=0;o<c.length;o++)if(c[o].active){s=r.children[o],i=r.children[0];const h=r.children,u=r.style,a=o;u.setProperty("--underline-start",a/h.length+""),u.setProperty("--underline-width",1/h.length+"");break}window.addEventListener("hashchange",()=>{for(let o=0;o<c.length;o++)if(c[o].active){if(!i){s=r.children[o],i=r.children[0];const h=r.children,u=r.style,a=o;u.setProperty("--underline-start",a/h.length+""),u.setProperty("--underline-width",1/h.length+"");break}l({target:r.children[o]});break}})});function d(o){j[o?"unshift":"push"](()=>{r=o,t(1,r)})}return n.$$set=o=>{"tabs"in o&&t(0,c=o.tabs)},[c,r,l,d]}class mn extends G{constructor(e){super();V(this,e,pn,hn,F,{tabs:0})}}class Ve{constructor(e){A(this,"heap",[]);A(this,"_size",0);!e||(this.heap=e,this._size=e.length)}add(e){this.heap.push(e),this._size++,this.swapUp(this._size-1)}swapUp(e){if(e===0)return;const t=Math.floor((e-1)/2);let r=this.heap[t],s=this.heap[e];r.compareTo(s)>0&&(this.heap[t]=s,this.heap[e]=r,this.swapUp(t))}swapDown(e){const t=e*2+1,r=e*2+2;if(t>=this._size)return;let s=this.heap[t];if(r>=this._size){if(s.compareTo(this.heap[e])<0){let l=this.heap[e];this.heap[e]=s,this.heap[t]=l,this.swapDown(t)}return}let i=this.heap[r];if(s.compareTo(i)<0){if(s.compareTo(this.heap[e])<0){let l=this.heap[e];this.heap[e]=s,this.heap[t]=l,this.swapDown(t)}}else if(i.compareTo(this.heap[e])<0){let l=this.heap[e];this.heap[e]=i,this.heap[r]=l,this.swapDown(r)}}remove(e){for(let t=0;t<this._size;t++)if(this.heap[t]===e){let r=this.heap[t];return this.heap[t]=this.heap[this._size-1],this.heap.pop(),this._size--,this.swapDown(t),r}}peek(){return this.heap[0]}isEmpty(){return this._size===0}size(){return this._size}clear(){this.heap=[],this._size=0}poll(){if(this._size===0)return;let e=this.heap[0];return this.heap[0]=this.heap[this._size-1],this.heap.pop(),this._size--,this.swapDown(0),e}toString(){let e=0,t="";for(let r=0;r<this._size;r++)r===e&&(t+=`
`,e=e*2+1),t+=this.heap[r]+" ";return t}toArray(){return this.heap}}const _n={accent:"116,170,136",h:142,l:56,s:24},gn={accent:"199,149,0",h:45,l:39,s:100},vn={accent:"87,91,203",h:238,l:57,s:53},bn="device";var Ee={light:_n,dark:gn,device:vn,selected:bn};function yn(n){let e,t,r;return{c(){e=Y("Reset "),t=Y(n[7]),r=Y(" mode accent color")},m(s,i){I(s,e,i),I(s,t,i),I(s,r,i)},p(s,i){i&128&&ve(t,s[7])},d(s){s&&E(e),s&&E(t),s&&E(r)}}}function kn(n){let e,t,r,s,i,l,c,d,o,h,u,a,m,f,_,p,y,O,k;return r=new Ce({props:{task:n[9],inCompletedList:!0}}),p=new Le({props:{error:n[8],$$slots:{default:[yn]},$$scope:{ctx:n}}}),p.$on("click",n[11]),{c(){e=b("div"),t=b("div"),B(r.$$.fragment),s=P(),i=b("input"),l=P(),c=b("input"),d=P(),o=b("input"),h=P(),u=b("select"),a=b("option"),a.textContent="Device",m=b("option"),m.textContent="Light",f=b("option"),f.textContent="Dark",_=P(),B(p.$$.fragment),g(i,"class","rainbow color-picker svelte-du74uk"),g(i,"start","0"),g(i,"max","360"),g(i,"type","range"),g(i,"name","hue"),g(i,"id","0"),g(c,"class","saturation color-picker svelte-du74uk"),g(c,"start","0"),g(c,"max","100"),g(c,"type","range"),g(c,"name","sat"),g(c,"id","1"),g(o,"class","lightness color-picker svelte-du74uk"),g(o,"start","0"),g(o,"max","100"),g(o,"type","range"),g(o,"name","lig"),g(o,"id","2"),a.__value="device",a.value=a.__value,g(a,"default",""),g(a,"class","svelte-du74uk"),m.__value="light",m.value=m.__value,g(m,"class","svelte-du74uk"),f.__value="dark",f.value=f.__value,g(f,"class","svelte-du74uk"),g(u,"class","svelte-du74uk"),n[7]===void 0&&J(()=>n[20].call(u)),g(t,"class","svelte-du74uk"),g(e,"class","noborder svelte-du74uk")},m(T,C){I(T,e,C),v(e,t),U(r,t,null),v(t,s),v(t,i),Z(i,n[0]),n[15](i),v(t,l),v(t,c),Z(c,n[1]),n[17](c),v(t,d),v(t,o),Z(o,n[2]),n[19](o),v(t,h),v(t,u),v(u,a),v(u,m),v(u,f),Oe(u,n[7]),v(t,_),U(p,t,null),n[21](e),y=!0,O||(k=[H(i,"change",n[14]),H(i,"input",n[14]),H(c,"change",n[16]),H(c,"input",n[16]),H(o,"change",n[18]),H(o,"input",n[18]),H(u,"change",n[20]),H(u,"input",n[10])],O=!0)},p(T,[C]){C&1&&Z(i,T[0]),C&2&&Z(c,T[1]),C&4&&Z(o,T[2]),C&128&&Oe(u,T[7]);const N={};C&256&&(N.error=T[8]),C&16777344&&(N.$$scope={dirty:C,ctx:T}),p.$set(N)},i(T){y||(w(r.$$.fragment,T),w(p.$$.fragment,T),y=!0)},o(T){z(r.$$.fragment,T),z(p.$$.fragment,T),y=!1},d(T){T&&E(e),M(r),n[15](null),n[17](null),n[19](null),M(p),n[21](null),O=!1,W(k)}}}function Ge(n){const e=n[0]/360,t=n[1]/100,r=n[2]/100;let s,i,l;if(t===0)s=i=l=r;else{const c=(h,u,a)=>(a<0&&(a+=1),a>1&&(a-=1),a<.16666666666666666?h+(u-h)*6*a:a<.5?u:a<.6666666666666666?h+(u-h)*(.6666666666666666-a)*6:h),d=r<.5?r*(1+t):r+t-r*t,o=2*r-d;s=c(o,d,e+1/3),i=c(o,d,e),l=c(o,d,e-1/3)}return[Math.round(s*255),Math.round(i*255),Math.round(l*255)]}function ct(n,e){function t(i){return i!=null&&typeof i=="object"}const r=Object.keys(n),s=Object.keys(e);if(r.length!==s.length)return!1;for(const i of r){const l=n[i],c=e[i],d=t(l)&&t(c);if(d&&!ct(l,c)||!d&&l!==c)return!1}return!0}function wn(n,e,t){let r=new q("Yourself","You can set a custom accent color using the sliders below.You can set a custom accent color for light mode, dark mode, and device mode. Device mode will use your device's dark mode toggle while light or dark will override your device's toggle.",3),s,i="",l=JSON.parse(localStorage.getItem("colors"));r.complete("boring completion message"),document.title="Tickets | Settings";let c,d,o,h;c=l[l.selected],d=c.h,o=c.s,h=c.l;function u($){const K=$.target;t(0,d=l[K.value].h),t(1,o=l[K.value].s),t(2,h=l[K.value].l),t(12,l.selected=K.value,l),a(l)}function a($){const K=ct($[$.selected],Ee[$.selected])?`The ${$.selected} mode accent color is the default.`:"";i!==K&&t(8,i=K)}a(l);let m=null,f,_,p,y;function O(){t(12,l[l.selected]=JSON.parse(JSON.stringify(Ee))[l.selected],l),t(0,d=l[l.selected].h),t(1,o=l[l.selected].s),t(2,h=l[l.selected].l),a(l)}function k(){d=ye(this.value),t(0,d)}function T($){j[$?"unshift":"push"](()=>{f=$,t(3,f)})}function C(){o=ye(this.value),t(1,o)}function N($){j[$?"unshift":"push"](()=>{_=$,t(4,_)})}function R(){h=ye(this.value),t(2,h)}function L($){j[$?"unshift":"push"](()=>{p=$,t(5,p)})}function D(){s=Et(this),t(7,s),t(12,l),t(0,d),t(1,o),t(2,h)}function ie($){j[$?"unshift":"push"](()=>{y=$,t(6,y)})}return n.$$.update=()=>{if(n.$$.dirty&4103&&t(12,l[l.selected]={accent:Ge([d,o,h]).join(","),h:d,s:o,l:h},l),n.$$.dirty&4096&&t(7,s=l.selected),n.$$.dirty&4096)switch(l.selected){case"light":document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark");break;case"dark":document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light");break;case"device":document.documentElement.classList.remove("light"),document.documentElement.classList.remove("dark");break}n.$$.dirty&12288&&(m&&clearTimeout(m),t(13,m=setTimeout(()=>a(l),300)),localStorage.setItem("colors",JSON.stringify(l))),n.$$.dirty&4159&&(f&&(f.style.setProperty("--thumb-color",`hsla(${d}deg, ${o}%, ${h}%)`),_.style.setProperty("--thumb-color",`hsla(${d}deg, ${o}%, ${h}%)`),p.style.setProperty("--thumb-color",`hsla(${d}deg, ${o}%, ${h}%)`),document.documentElement.style.setProperty("--accent",l[l.selected].accent)),document.querySelector("meta[name=theme-color]").setAttribute("content",`rgb(${Ge([d,o,h]).join(",")})`)),n.$$.dirty&73&&f&&y.style.setProperty("--hue",`${d}deg`),n.$$.dirty&82&&_&&y.style.setProperty("--sat",`${o}%`),n.$$.dirty&100&&p&&y.style.setProperty("--lig",`${h}%`)},[d,o,h,f,_,p,y,s,i,r,u,O,l,m,k,T,C,N,R,L,D,ie]}class Tn extends G{constructor(e){super();V(this,e,wn,kn,F,{})}}function En(n){let e;return{c(){e=b("h1"),e.textContent="404 - try one of the links above"},m(t,r){I(t,e,r)},p:S,i:S,o:S,d(t){t&&E(e)}}}function In(n){let e,t;return e=new Tn({}),{c(){B(e.$$.fragment)},m(r,s){U(e,r,s),t=!0},p:S,i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Sn(n){let e,t;return e=new sn({props:{topTask:n[1].peek(),lastUncompletedTask:n[1].size()<2,completedTasks:n[2]}}),e.$on("taskcomplete",n[3]),{c(){B(e.$$.fragment)},m(r,s){U(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.topTask=r[1].peek()),s&2&&(i.lastUncompletedTask=r[1].size()<2),s&4&&(i.completedTasks=r[2]),e.$set(i)},i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Ln(n){let e,t;return e=new jt({}),e.$on("submit",n[5]),{c(){B(e.$$.fragment)},m(r,s){U(e,r,s),t=!0},p:S,i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Cn(n){let e,t;return e=new cn({}),{c(){B(e.$$.fragment)},m(r,s){U(e,r,s),t=!0},p:S,i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function zn(n){let e,t,r,s,i,l,c;e=new mn({props:{tabs:[{href:"#/",active:n[0]==="#/",title:"home"},{href:"#/client",active:n[0]==="#/client",title:"client"},{href:"#/tech",active:n[0]==="#/tech",title:"technician"},{href:"#/settings",active:n[0]==="#/settings",title:"settings"}]}});const d=[Cn,Ln,Sn,In,En],o=[];function h(u,a){return u[0]===""||u[0]==="#/"?0:u[0]==="#/client"?1:u[0]==="#/tech"?2:u[0]==="#/settings"?3:4}return i=h(n),l=o[i]=d[i](n),{c(){B(e.$$.fragment),t=P(),r=b("main"),s=b("span"),l.c(),g(s,"class","glass svelte-zf8v3c"),g(r,"class","svelte-zf8v3c")},m(u,a){U(e,u,a),I(u,t,a),I(u,r,a),v(r,s),o[i].m(s,null),c=!0},p(u,[a]){const m={};a&1&&(m.tabs=[{href:"#/",active:u[0]==="#/",title:"home"},{href:"#/client",active:u[0]==="#/client",title:"client"},{href:"#/tech",active:u[0]==="#/tech",title:"technician"},{href:"#/settings",active:u[0]==="#/settings",title:"settings"}]),e.$set(m);let f=i;i=h(u),i===f?o[i].p(u,a):(ne(),z(o[f],1,1,()=>{o[f]=null}),re(),l=o[i],l?l.p(u,a):(l=o[i]=d[i](u),l.c()),w(l,1),l.m(s,null))},i(u){c||(w(e.$$.fragment,u),w(l),c=!0)},o(u){z(e.$$.fragment,u),z(l),c=!1},d(u){M(e,u),u&&E(t),u&&E(r),o[i].d()}}}function Nn(n,e,t){let r;pt(n,dn,a=>t(4,r=a));let s,i,l;localStorage.getItem("colors")||localStorage.setItem("colors",JSON.stringify(Ee));const c=JSON.parse(localStorage.getItem("colors")),d=c[c.selected].accent;document.documentElement.style.setProperty("--accent",d),document.querySelector("meta[name=theme-color]").setAttribute("content","rgb(111, 117, 255)");function h(){i.poll(),t(1,i),t(2,l)}const u=a=>{i.add(a.detail.task),t(1,i)};switch(n.$$.update=()=>{if(n.$$.dirty&17&&(t(0,s=new URL(r).hash),window.location.hash=s||"#/"),n.$$.dirty&2){let f=function(){if(localStorage.getItem("tickets")){const _=JSON.parse(localStorage.getItem("tickets")||"[]");t(1,i=new Ve(_.map(p=>q.fromJSON(p))))}else t(1,i=new Ve),i.add(new q("Computer Science","The Heaps lab (aka this website) including the client page, technician page, and home page",q.LOW_PRIORITY)),i.add(new q("Yourself","Try other <a href='#/settings'>colors</a>!",q.HIGH_PRIORITY)),i.add(new q("Yourself","Try resizing the window!",q.HIGH_PRIORITY))};var a=f;i===void 0&&f(),console.log(i),localStorage.setItem("tickets",JSON.stringify(i.toArray()))}if(n.$$.dirty&4){let f=function(){if(localStorage.getItem("completed")){const _=JSON.parse(localStorage.getItem("completed")||"[]");t(2,l=new se(_.map(p=>q.fromJSON(p))))}else t(2,l=new se)};var m=f;l===void 0&&f(),localStorage.setItem("completed",JSON.stringify([...l]))}},c.selected){case"light":document.documentElement.classList.add("light");break;case"dark":document.documentElement.classList.add("dark");break}return[s,i,l,h,r,u]}class On extends G{constructor(e){super();V(this,e,Nn,zn,F,{})}}new On({target:document.getElementById("app")});
