var components=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){(null!=e||t.value)&&(t.value=e)}function d(t,e,n){t.classList[n?"add":"remove"](e)}let p;function m(t){p=t}function g(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],y=[],_=[],b=[],x=Promise.resolve();let k=!1;function w(t){_.push(t)}let v=!1;const E=new Set;function M(){if(!v){v=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];m(e),S(e.$$)}for($.length=0;y.length;)y.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];E.has(e)||(E.add(e),e())}_.length=0}while($.length);for(;b.length;)b.pop()();k=!1,v=!1,E.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const A=new Set;function L(t,e){t&&t.i&&(A.delete(t),t.i(e))}function j(t,e){t.d(1),e.delete(t.key)}function C(t,e){-1===t.$$.dirty[0]&&($.push(t),k||(k=!0,x.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(c,l,i,s,u,f,h=[-1]){const d=p;m(c);const g=l.props||{},$=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:h};let y=!1;if($.ctx=i?i(c,g,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),y&&C(c,t)),e}):[],$.update(),y=!0,o($.before_update),$.fragment=!!s&&s($.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();l.intro&&L(c.$$.fragment),function(t,n,c){const{fragment:l,on_mount:i,on_destroy:a,after_update:s}=t.$$;l&&l.m(n,c),w(()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(w)}(c,l.target,l.anchor),M()}m(d)}function O(t,e,n){const o=t.slice();return o[8]=e[n],o}function q(t,e){let n,o,r,c,h=e[8].title+"";return{key:t,first:null,c(){n=s("li"),o=s("a"),r=u(h),f(o,"href",c=e[8].permalink),f(n,"class","results__result"),this.first=n},m(t,e){i(t,n,e),l(n,o),l(o,r)},p(t,e){8&e&&h!==(h=t[8].title+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(r,h),8&e&&c!==(c=t[8].permalink)&&f(o,"href",c)},d(t){t&&a(n)}}}function z(e){let n,o,r,c,p,m=[],g=new Map,$=e[3];const y=t=>t[8].permalink;for(let t=0;t<$.length;t+=1){let n=O(e,$,t),o=y(n);g.set(o,m[t]=q(o,n))}return{c(){n=s("div"),o=s("input"),r=u(" "),c=s("ul");for(let t=0;t<m.length;t+=1)m[t].c();f(o,"class","search__input"),f(o,"type","search"),f(o,"placeholder",e[0]),f(o,"maxlength","50"),f(c,"class","search__results box"),d(c,"search__results_hidden",!e[2]),f(n,"class","search")},m(t,a,s){i(t,n,a),l(n,o),h(o,e[1]),l(n,r),l(n,c);for(let t=0;t<m.length;t+=1)m[t].m(c,null);var u,f,d,g;s&&p(),u=o,f="input",d=e[7],u.addEventListener(f,d,g),p=()=>u.removeEventListener(f,d,g)},p(t,[e]){if(1&e&&f(o,"placeholder",t[0]),2&e&&h(o,t[1]),8&e){const n=t[3];m=function(t,e,n,o,r,c,l,i,a,s,u,f){let h=t.length,d=c.length,p=h;const m={};for(;p--;)m[t[p].key]=p;const g=[],$=new Map,y=new Map;for(p=d;p--;){const t=f(r,c,p),i=n(t);let a=l.get(i);a?o&&a.p(t,e):(a=s(i,t),a.c()),$.set(i,g[p]=a),i in m&&y.set(i,Math.abs(p-m[i]))}const _=new Set,b=new Set;function x(t){L(t,1),t.m(i,u,l.has(t.key)),l.set(t.key,t),u=t.first,d--}for(;h&&d;){const e=g[d-1],n=t[h-1],o=e.key,r=n.key;e===n?(u=e.first,h--,d--):$.has(r)?!l.has(o)||_.has(o)?x(e):b.has(r)?h--:y.get(o)>y.get(r)?(b.add(o),x(e)):(_.add(r),h--):(a(n,l),h--)}for(;h--;){const e=t[h];$.has(e.key)||a(e,l)}for(;d;)x(g[d-1]);return g}(m,e,y,1,t,n,g,c,j,q,null,O)}4&e&&d(c,"search__results_hidden",!t[2])},i:t,o:t,d(t){t&&a(n);for(let t=0;t<m.length;t+=1)m[t].d();p()}}}function B(t,e,n){let{path:o=""}=e,{placeholder:r=""}=e,{limit:c=10}=e,l="",i=!1,a=[],s=[];return g(async()=>{const t=await fetch(o);n(6,s=await t.json())}),t.$set=t=>{"path"in t&&n(4,o=t.path),"placeholder"in t&&n(0,r=t.placeholder),"limit"in t&&n(5,c=t.limit)},t.$$.update=()=>{if(106&t.$$.dirty){n(3,a=[]);let t,e,o=l.split(" "),r=[];o.forEach((function(t){t&&r.push(t)})),r.forEach((function(o){t=s.filter(t=>-1!==t.content.indexOf(o.toLowerCase())),0!==a.length?(e=[],a.forEach((function(n){t.forEach((function(t){n.url===t.url&&e.push(n)}))})),n(3,a=e.slice())):n(3,a=t.slice())})),n(3,a=a.slice(0,c)),n(2,i=a.length>0)}},[r,l,i,a,o,c,s,function(){l=this.value,n(1,l)}]}return{Search:class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),N(this,t,B,z,c,{path:4,placeholder:0,limit:5})}}}}();
new components.Search({ target: document.querySelector('.js-search'), props: { path: '/index.json', placeholder: '{{ i18n "search" }}', limit: 10 } });
