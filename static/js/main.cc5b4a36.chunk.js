(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),i=n(4),s=n(5),r=n(7),o=n(6),b=n(1),d=n.n(b),l=(n(12),n(13),n(0)),u=function(t){var e,n=t.selectedTabId,a=t.onTabSelected,c=t.tabs;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Selected tab is ".concat(n)}),Object(l.jsx)("div",{className:"nav nav-tabs",children:c.map((function(t){return Object(l.jsx)("button",{type:"button",onClick:function(){return a(t)},className:"nav-link ".concat(t.id===n?"active":""),children:t.title},t.id)}))}),Object(l.jsx)("p",{className:"nav__content",children:null===(e=c.find((function(t){return t.id===n})))||void 0===e?void 0:e.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],v=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:j[0]},t.onTabSelected=function(e){t.setState({selectedTab:e||j[0]})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{selectedTabId:t.id,onTabSelected:this.onTabSelected,tabs:j})})}}]),n}(d.a.Component),h=v;c.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cc5b4a36.chunk.js.map