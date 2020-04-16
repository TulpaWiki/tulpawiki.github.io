var components=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){(null!=n||t.value)&&(t.value=n)}function d(t,n,e){t.classList[e?"add":"remove"](n)}let p;function m(t){p=t}function g(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],_=[],y=[],x=[],b=Promise.resolve();let v=!1;function E(t){y.push(t)}let w=!1;const k=new Set;function A(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];m(n),L(n.$$)}for($.length=0;_.length;)_.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];k.has(n)||(k.add(n),n())}y.length=0}while($.length);for(;x.length;)x.pop()();v=!1,w=!1,k.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const j=new Set;function C(t,n){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,b.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(c,l,i,a,f,s,h=[-1]){const d=p;m(c);const g=l.props||{},$=c.$$={fragment:null,ctx:null,props:s,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:h};let _=!1;if($.ctx=i?i(c,g,(t,n,...e)=>{const r=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=r)&&($.bound[t]&&$.bound[t](r),_&&C(c,t)),n}):[],$.update(),_=!0,r($.before_update),$.fragment=!!a&&a($.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);$.fragment&&$.fragment.l(t),t.forEach(u)}else $.fragment&&$.fragment.c();l.intro&&((y=c.$$.fragment)&&y.i&&(j.delete(y),y.i(x))),function(t,e,c){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,c),E(()=>{const e=i.map(n).filter(o);u?u.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(E)}(c,l.target,l.anchor),A()}var y,x;m(d)}function O(t,n,e){const r=t.slice();return r[8]=n[e],r}function S(t){let n,e,r,o,c=t[8].title+"";return{c(){n=a("li"),e=a("a"),r=f(c),s(e,"href",o=t[8].permalink),s(n,"class","results__result")},m(t,o){i(t,n,o),l(n,e),l(e,r)},p(t,n){8&n&&c!==(c=t[8].title+"")&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(r,c),8&n&&o!==(o=t[8].permalink)&&s(e,"href",o)},d(t){t&&u(n)}}}function q(n){let e,r,o,c,p,m=n[3],g=[];for(let t=0;t<m.length;t+=1)g[t]=S(O(n,m,t));return{c(){e=a("div"),r=a("input"),o=f(" "),c=a("ul");for(let t=0;t<g.length;t+=1)g[t].c();s(r,"class","search__input"),s(r,"type","search"),s(r,"placeholder",n[0]),s(r,"maxlength","50"),s(c,"class","search__results box"),d(c,"search__results_hidden",!n[2]),s(e,"class","search")},m(t,u,a){i(t,e,u),l(e,r),h(r,n[1]),l(e,o),l(e,c);for(let t=0;t<g.length;t+=1)g[t].m(c,null);var f,s,d,m;a&&p(),f=r,s="input",d=n[7],f.addEventListener(s,d,m),p=()=>f.removeEventListener(s,d,m)},p(t,[n]){if(1&n&&s(r,"placeholder",t[0]),2&n&&h(r,t[1]),8&n){let e;for(m=t[3],e=0;e<m.length;e+=1){const r=O(t,m,e);g[e]?g[e].p(r,n):(g[e]=S(r),g[e].c(),g[e].m(c,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=m.length}4&n&&d(c,"search__results_hidden",!t[2])},i:t,o:t,d(t){t&&u(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(g,t),p()}}}function z(t,n,e){let{path:r=""}=n,{placeholder:o=""}=n,{limit:c=10}=n,l="",i=!1,u=[],a=[];return g(async()=>{const t=await fetch(r);e(6,a=await t.json())}),t.$set=t=>{"path"in t&&e(4,r=t.path),"placeholder"in t&&e(0,o=t.placeholder),"limit"in t&&e(5,c=t.limit)},t.$$.update=()=>{if(106&t.$$.dirty){e(3,u=[]);let t,n,r=l.split(" "),o=[];r.forEach((function(t){t&&o.push(t)})),o.forEach((function(r){t=a.filter(t=>-1!==t.content.indexOf(r.toLowerCase())),0!==u.length?(n=[],u.forEach((function(e){t.forEach((function(t){e.url===t.url&&n.push(e)}))})),e(3,u=n.slice())):e(3,u=t.slice())})),e(3,u=u.slice(0,c)),e(2,i=u.length>0)}},[o,l,i,u,r,c,a,function(){l=this.value,e(1,l)}]}return{Search:class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),N(this,t,z,q,c,{path:4,placeholder:0,limit:5})}}}}();
new components.Search({ target: document.querySelector('.js-search'), props: { path: '/index.json', placeholder: '{{ i18n "search" }}', limit: 10 } });
