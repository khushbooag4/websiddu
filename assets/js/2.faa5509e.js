(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return g}));n(26),n(105),n(181),n(112),n(179),n(70),n(32),n(308),n(71),n(180),n(107);var i=/#.*$/,a=/\.(md|html)$/,r=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function l(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",a=o(t);return r.test(a)?t:a+".html"+n}function h(t,e){var n=t.hash,a=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!a||n===a)&&o(t.path)===o(e)}function f(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=o(e),a=0;a<t.length;a++)if(o(t[a].regularPath)===i)return Object.assign({},t[a],{type:"page",path:p(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var a=n.pages,r=n.themeConfig,s=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return function(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var r=e.children||[];return 0===r.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map((function(e){return t(e,n,i,a+1)})),collapsable:!1!==e.collapsable}}(t,a,c)})):[]}return[]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},308:function(t,e,n){"use strict";var i=n(101),a=n(7),r=n(12),s=n(22),o=n(109),l=n(102);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=a(t),c=String(this);if(!s.global)return l(s,c);var u=s.unicode;s.lastIndex=0;for(var p,h=[],f=0;null!==(p=l(s,c));){var d=String(p[0]);h[f]=d,""===d&&(s.lastIndex=o(c,r(s.lastIndex),u)),f++}return 0===f?null:h}]}))},309:function(t,e,n){var i=n(8),a=n(5),r=n(103),s=n(312),o=n(10).f,l=n(72).f,c=n(106),u=n(108),p=n(177),h=n(13),f=n(3),d=n(33).set,v=n(176),g=n(4)("match"),m=a.RegExp,b=m.prototype,_=/a/g,k=/a/g,C=new m(_)!==_,$=p.UNSUPPORTED_Y;if(i&&r("RegExp",!C||$||f((function(){return k[g]=!1,m(_)!=_||m(k)==k||"/a/i"!=m(_,"i")})))){for(var x=function(t,e){var n,i=this instanceof x,a=c(t),r=void 0===e;if(!i&&a&&t.constructor===x&&r)return t;C?a&&!r&&(t=t.source):t instanceof x&&(r&&(e=u.call(t)),t=t.source),$&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=s(C?new m(t,e):m(t,e),i?this:b,x);return $&&n&&d(o,{sticky:n}),o},y=function(t){t in x||o(x,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},w=l(m),L=0;w.length>L;)y(w[L++]);b.constructor=x,x.prototype=b,h(a,"RegExp",x)}v("RegExp")},310:function(t,e,n){},311:function(t,e,n){"use strict";var i=n(2),a=n(23),r=n(14),s=n(3),o=n(34),l=[],c=l.sort,u=s((function(){l.sort(void 0)})),p=s((function(){l.sort(null)})),h=o("sort");i({target:"Array",proto:!0,forced:u||!p||!h},{sort:function(t){return void 0===t?c.call(r(this)):c.call(r(this),a(t))}})},312:function(t,e,n){var i=n(6),a=n(104);t.exports=function(t,e,n){var r,s;return a&&"function"==typeof(r=e.constructor)&&r!==n&&i(s=r.prototype)&&s!==n.prototype&&a(t,s),t}},313:function(t,e,n){"use strict";var i=n(310);n.n(i).a},314:function(t,e,n){},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},321:function(t,e,n){},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){},344:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},345:function(t,e){t.exports=function(t){return null==t}},346:function(t,e,n){"use strict";n.r(e);n(100),n(26),n(311),n(73),n(309),n(32),n(99),n(308);var i=["January","February","March","April","May","June","July","August","September","October","November","December"],a={props:["page","size"],name:"Posts",methods:{prettyDate:function(t){var e=new Date(t);return"".concat(i[e.getMonth()]," ").concat(e.getUTCDate(),", ").concat(e.getUTCFullYear())}},computed:{posts:function(){var t=this.page?this.page:this.$page.path,e=this.$site.pages.filter((function(e){return e.path.match(new RegExp("(".concat(t,")(?=.*html)")))&&"draft"!=e.frontmatter.state})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return e}}},r=(n(313),n(47)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.posts.length?n("div",{staticClass:"posts",class:[t.page,t.size]},["blog"==t.page?t._l(t.posts,(function(e){return n("section",{staticClass:"post",class:e.frontmatter.lang},[n("time",{staticClass:"muted"},[t._v(t._s(t.prettyDate(e.frontmatter.date)))]),t._v(" "),n("h3",{staticClass:"post-title"},[n("router-link",{attrs:{to:e.path}},[t._v("\n          "+t._s(e.frontmatter.title)+"\n        ")])],1),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.frontmatter.description))])])})):t._e(),t._v(" "),"photos"==t.page?t._l(t.posts,(function(e){return n("router-link",{staticClass:"photo",attrs:{to:e.path}},[n("img",{attrs:{src:e.frontmatter.cover,alt:e.frontmatter.subtitle}}),t._v(" "),n("div",{staticClass:"photo-info"},[n("div",{staticClass:"photo-title"},[t._v(t._s(e.frontmatter.title))]),t._v(" "),n("div",{staticClass:"photo-subtitle"},[t._v(t._s(e.frontmatter.subtitle))])]),t._v(" "),n("div",{staticClass:"subtitle"})])})):t._e()],2):t._e()}),[],!1,null,"6c61afce",null);e.default=s.exports},347:function(t,e,n){"use strict";var i=n(307),a={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(348).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(390).default},methods:{isActive:i.e}},r=(n(368),n(47)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.a=s.exports},348:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(358),n(47)),r=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},349:function(t,e,n){"use strict";n(366),n(70),n(175);var i=n(307);function a(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function r(t,e,n,s,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c),r(t,e.children,n,s,o,l+1)])})))}var s={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,s=n.$page,o=(n.$site,n.$route),l=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,f=Object(i.e)(o,p.path),d="auto"===p.type?f||p.children.some((function(t){return Object(i.e)(o,p.basePath+"#"+t.slug)})):f,v="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):a(t,p.path,p.title||p.path,d),g=[s.frontmatter.sidebarDepth,h,c.sidebarDepth,l.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||l.displayAllHeaders;return"auto"===p.type?[v,r(t,p.children,p.basePath,o,g)]:(d||m)&&p.headers&&!i.d.test(p.path)?[v,r(t,Object(i.c)(p.headers),p.path,o,g)]:v}},o=(n(367),n(47)),l=Object(o.a)(s,void 0,void 0,!1,null,null,null);e.a=l.exports},350:function(t,e,n){"use strict";var i=n(2),a=n(351);i({target:"String",proto:!0,forced:n(352)("link")},{link:function(t){return a(this,"a","href",t)}})},351:function(t,e,n){var i=n(22),a=/"/g;t.exports=function(t,e,n,r){var s=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),o+">"+s+"</"+e+">"}},352:function(t,e,n){var i=n(3);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},353:function(t,e,n){"use strict";var i=n(314);n.n(i).a},354:function(t,e,n){var i=n(2),a=n(355);i({global:!0,forced:parseInt!=a},{parseInt:a})},355:function(t,e,n){var i=n(5),a=n(356).trim,r=n(344),s=i.parseInt,o=/^[+-]?0[Xx]/,l=8!==s(r+"08")||22!==s(r+"0x16");t.exports=l?function(t,e){var n=a(String(t));return s(n,e>>>0||(o.test(n)?16:10))}:s},356:function(t,e,n){var i=n(22),a="["+n(344)+"]",r=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},357:function(t,e,n){"use strict";var i=n(315);n.n(i).a},358:function(t,e,n){"use strict";var i=n(316);n.n(i).a},359:function(t,e,n){"use strict";var i=n(317);n.n(i).a},360:function(t,e,n){"use strict";var i=n(318);n.n(i).a},361:function(t,e,n){"use strict";var i=n(319);n.n(i).a},362:function(t,e,n){"use strict";var i=n(320);n.n(i).a},363:function(t,e,n){var i=n(36),a=n(16),r=n(27);t.exports=function(t){return"string"==typeof t||!a(t)&&r(t)&&"[object String]"==i(t)}},364:function(t,e,n){"use strict";var i=n(321);n.n(i).a},365:function(t,e,n){"use strict";var i=n(322);n.n(i).a},366:function(t,e,n){"use strict";var i=n(2),a=n(35).find,r=n(111),s=n(19),o=!0,l=s("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!l},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},367:function(t,e,n){"use strict";var i=n(323);n.n(i).a},368:function(t,e,n){"use strict";var i=n(324);n.n(i).a},369:function(t,e,n){"use strict";var i=n(325);n.n(i).a},370:function(t,e,n){"use strict";var i=n(326);n.n(i).a},390:function(t,e,n){"use strict";n.r(e);n(175);var i=n(347),a=n(349),r=n(307);function s(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?s(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var o={name:"SidebarLinks",components:{SidebarGroup:i.a,SidebarLink:a.a},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(s(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},l=n(47),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=c.exports},392:function(t,e,n){"use strict";n.r(e);n(175),n(110),n(350);var i=n(307),a={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},r=n(47),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,o={components:{NavLink:s,Posts:n(346).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(353),Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[n("a",{staticClass:"is-brand",attrs:{href:"/"}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()])]),t._v(" "),n("div",{staticClass:"content-body"},[t._m(0),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),n("div",{staticClass:"navigation"},[n("nav",{staticClass:"nav-links"},[n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/blog"}},[t._v("Articles")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/photos"}},[t._v("Photos")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/projects.html"}},[t._v("Projects")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about.html"}},[t._v("About")])],1)])])],1)]),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"blurb"},[this._v("\n        Hey there\n        "),e("span",{staticClass:"wave"},[this._v("👋")]),this._v(", my name is Siddhartha. I'm a designer at\n        Google living in the Bay Area. I love making things.\n      ")])}],!1,null,"70a8719c",null).exports),c=(n(354),n(357),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),u=(n(100),n(70),n(309),n(32),n(99),n(308),n(71),n(45)),p={components:{NavLink:s,DropdownTransition:n(348).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{closeDD:function(){},toggle:function(){this.open=!this.open}}},h=(n(359),{components:{NavLink:s,DropdownLink:Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(r){var s,o=e[r],l=a[r]&&a[r].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===s}))||(s=r)),{text:l,link:s}}))};return[].concat(Object(u.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),f=(n(360),Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function d(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var v={components:{SidebarButton:c,NavLinks:f},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(d(this.$el,"paddingLeft"))+parseInt(d(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},g=(n(361),Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),m=(n(11),n(345)),b=n.n(m),_={name:"PageEdit",data:function(){return{discuss:!1,CommentsComponent:null}},props:["isBlog"],mounted:function(){var t=this;Promise.all([n.e(0),n.e(5)]).then(n.bind(null,409)).then((function(e){return t.CommentsComponent=e.default}))},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=b()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,r=e.docsBranch,s=void 0===r?"master":r,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,a,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,a,r){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+r}}},k=(n(362),Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-edit"},[t.isBlog?n("div",{staticClass:"page-share"},[n("svg",{staticClass:"Icon",attrs:{viewBox:"0 0 39 32"}},[n("g",{attrs:{id:"icon-twitter-bird"}},[n("path",{attrs:{fill:"#55acee",d:"M34.7 5c1.7-1 2.8-2.5 3.4-4.4-1.6 0.9-3.3 1.6-5 2-1.6-1.7-3.6-2.6-5.8-2.6-2.2 0-4.2 0.7-5.7 2.3-1.6 1.6-2.3 3.4-2.3 5.8 0 0.6 0.1 1.2 0.2 1.8-6.9-0.4-12.6-3.2-16.9-8.5-0.7 1.2-1.1 2.7-1.1 4.1 0 3 1.2 5.2 3.6 6.8-1.2 0-2.5-0.4-3.6-1v0.1c0 2 0.6 3.7 1.8 5.2 1.2 1.5 2.7 2.5 4.6 2.8-0.6 0.1-1.2 0.2-2.1 0.2-0.4 0-0.9 0-1.5-0.1 0.5 1.5 1.4 2.8 2.8 3.8 1.4 1 3 1.5 4.7 1.6-3.1 2.5-6.4 3.7-10 3.7-0.5 0-1.1 0-2-0.1 3.7 2.2 7.8 3.4 12.4 3.4 3.6 0 6.8-0.7 9.8-2.1 3-1.4 5.4-3.2 7.3-5.4 1.8-2.2 3.3-4.7 4.3-7.4s1.6-5.4 1.6-8.1v-1c1.4-1 2.7-2.5 3.9-4.2-1.6 0.6-3.2 1.1-4.7 1.2z"}})])]),t._v(" "),n("div",[t._v("\n        If you liked this article and think others should read it, please\n        "),n("a",{attrs:{href:"http://twitter.com/share?text="+t.$page.frontmatter.title+"&url=https://websiddu.com/"+t.$page.frontmatter.permalink+"&via=websiddu",target:"_blank"}},[t._v("\n          share it on Twitter\n        ")])])]):t._e(),t._v(" "),t.lastUpdated&&t.isBlog?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.isBlog?n("div",{staticClass:"page-comments"},[t.CommentsComponent?n(t.CommentsComponent,{tag:"component",attrs:{title:t.$page.title,pathname:t.$page.title,repo:"websiddu/comments",label:"comment",theme:"github-light",description:"This issue contains the comments of the page:"}}):t._e(),t._v(" "),n("br")],1):t._e()])}),[],!1,null,null,null).exports),C=n(363),$=n.n(C),x={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return w(y.NEXT,this)},next:function(){return w(y.PREV,this)}}};var y={NEXT:{resolveLink:function(t,e){return L(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return L(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function w(t,e){var n=e.$themeConfig,a=e.$page,r=e.$route,s=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,p=c(n),h=u(a),f=b()(h)?p:h;return!1===f?void 0:$()(f)?Object(i.k)(s.pages,f,r.path):l(a,o)}function L(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var r=i[a];if("page"===r.type&&r.path===decodeURIComponent(t.path))return i[a+n]}}var S=x,O=(n(364),{components:{PageEdit:k,PageNav:Object(r.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems","type"],data:function(){return{discuss:!1}},computed:{isBlog:function(){return this.$page.path.match(new RegExp("(".concat("blog",")(?=.*html)")))},isPhoto:function(){return this.$page.path.match(new RegExp("(".concat("photos",")(?=.*html)")))}}}),E=(n(365),Object(r.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("header",{staticClass:"theme-default-content header",class:t.type},[t.isBlog?n("h1",[t._v(t._s(t.$page.frontmatter.title))]):t._e(),t._v(" "),t.isBlog?n("div",{staticClass:"post-meta"},[t._v("\n      "+t._s(t.$page.frontmatter.date)+" — "+t._s(t.$page.readingTime.text)+"\n    ")]):t._e(),t._v(" "),t.isPhoto?n("h1",{staticClass:"photos-page-title"},[t._v("\n      "+t._s(t.$page.frontmatter.title)+"\n    ")]):t._e(),t._v(" "),t.isPhoto?n("h2",{staticClass:"photos-page-subtitle"},[t._v("\n      "+t._s(t.$page.frontmatter.subtitle)+"\n    ")]):t._e()]),t._v(" "),n("Content",{staticClass:"theme-default-content",class:t.type}),t._v(" "),n("PageEdit",{attrs:{"is-blog":t.isBlog}}),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),j=n(347),I=n(349);var T={components:{SidebarGroup:j.a,SidebarLink:I.a,NavLinks:f},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var a=e[n];if("group"===a.type&&a.children.some((function(e){return Object(i.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.path)}}},P=(n(369),Object(r.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),D={},N=(n(370),{name:"Layout",components:{Home:l,Page:E,Sidebar:P,Navbar:g,SiteFooter:Object(r.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer-content"},[n("nav",{staticClass:"nav-links"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"nav-spacer"}),t._v(" "),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/blog"}},[t._v("Articles")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/photos"}},[t._v("Photos")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/projects.html"}},[t._v("Projects")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about.html"}},[t._v("About")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://twitter.com/websiddu",target:"_blank"}},[this._v("Twitter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/websiddu",target:"_blank"}},[this._v("Github")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/websiddu/websiddu",target:"_blank"}},[this._v("Source")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://websiddu.com/feed.atom",target:"_blank"}},[this._v("Feed")])])}],!1,null,"2531d917",null).exports},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),A=Object(r.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems,type:t.$page.frontmatter.type},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?t._e():n("SiteFooter")],1)}),[],!1,null,null,null);e.default=A.exports}}]);