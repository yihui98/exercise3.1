(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{132:function(e,n,t){},447:function(e,n,t){"use strict";t.r(n);var r=t(5),c=t.n(r),o=t(74),a=t.n(o),s=(t(132),t(23)),u=t(22),i=t.n(u),l="/api/persons",d=function(){return i.a.get(l).then((function(e){return e.data}))},j=function(e){return i.a.post(l,e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},f=function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},h=t(1),g=function(e){var n=e.persons,t=e.newSearch,r=e.setPersons,c=e.setErrorMessage,o=""===t?n:n.filter((function(e){return e.name.includes(t)})),a=function(e){var n=e.name,t=e.number,r=e.toggleDelete;return Object(h.jsxs)("li",{children:[n,"  ",t,Object(h.jsx)("button",{onClick:r,children:"Delete"})]})};return Object(h.jsx)("div",{children:o.map((function(e){return Object(h.jsx)(a,{name:e.name,number:e.number,toggleDelete:function(){return function(e){var t=n.find((function(n){return n.id===e}));console.log(t),window.confirm("Delete ".concat(t.name," ?"))&&b(e).then((function(t){r(n.filter((function(n){return n.id!==e})))})).catch((function(o){c("the contact '".concat(t.name,"' was already deleted from server")),r(n.filter((function(n){return n.id!==e-1})))}))}(e.id)}},e.name)}))})},O=t(76),m=(t(151),function(e){var n=e.persons,t=e.setPersons,c=(e.setErrorMessage,Object(r.useState)("")),o=Object(s.a)(c,2),a=o[0],u=o[1],i=Object(r.useState)(""),l=Object(s.a)(i,2),d=l[0],b=l[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("button clicked",e.target);var r=[];if(n.map((function(e){return r.push(e.name)})),r.includes(a)){var c=n.find((function(e){return e.name===a}));if(window.confirm("".concat(c.name," is already added to phonebook,\n       replace the old number with a new one?"))){var o=Object(O.a)(Object(O.a)({},c),{},{number:d});f(c.id,o).then((function(e){t(n.map((function(n){return n.name!==a?n:e}))),u(""),b("")}))}}else j({name:a,number:d}).then((function(e){t(n.concat(e)),u(""),b("")})).catch((function(e){console.log(e.response.data.error)}))},children:[Object(h.jsxs)("div",{children:[" name: ",Object(h.jsx)("input",{value:a,onChange:function(e){console.log(e.target.value),u(e.target.value)}})," "]}),Object(h.jsxs)("div",{children:[" number: ",Object(h.jsx)("input",{value:d,onChange:function(e){console.log(e.target.value),b(e.target.value)}})]}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)("button",{type:"submit",children:"add"})," "]})]})})}),v=function(e){e.persons;var n=e.newSearch,t=e.setSearch;return Object(h.jsxs)("div",{children:[" filter shown with: ",Object(h.jsx)("input",{value:n,onChange:function(e){console.log(e.target.value),t(e.target.value)}})," "]})},p=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),a=Object(s.a)(o,2),u=a[0],i=a[1];Object(r.useEffect)((function(){d().then((function(e){i(e)}))}),[]),console.log("render",u.length,"persons");var l=Object(r.useState)(""),j=Object(s.a)(l,2),b=j[0],f=j[1],O=function(e){var n=e.message;return""===n?null:Object(h.jsx)("div",{style:{colour:"red",background:"lightgrey",fontSize:20,border:"1px solid rgba(1,0,0,0.05)"},children:n})};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(O,{message:t}),Object(h.jsx)(v,{newSearch:b,setSearch:f,persons:u}),Object(h.jsx)("h3",{children:"Add a new "}),Object(h.jsx)(m,{persons:u,setPersons:i,setErrorMessage:c}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(g,{persons:u,newSearch:b,setPersons:i})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,448)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),x()}},[[447,1,2]]]);
//# sourceMappingURL=main.e71e4557.chunk.js.map