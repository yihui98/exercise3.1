(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(6),a=t.n(o),s=(t(20),t(4)),u=t(3),i=t.n(u),l="/api/persons",d=function(){return i.a.get(l).then((function(e){return e.data}))},j=function(e){return i.a.post(l,e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},f=function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},h=t(0),g=function(e){var n=e.persons,t=e.newSearch,r=e.setPersons,c=e.setErrorMessage,o=""===t?n:n.filter((function(e){return e.name.includes(t)})),a=function(e){var n=e.name,t=e.number,r=e.toggleDelete;return Object(h.jsxs)("li",{children:[n,"  ",t,Object(h.jsx)("button",{onClick:r,children:"Delete"})]})};return Object(h.jsx)("div",{children:o.map((function(e){return Object(h.jsx)(a,{name:e.name,number:e.number,toggleDelete:function(){return function(e){var t=n.find((function(n){return n.id===e}));console.log(t),window.confirm("Delete ".concat(t.name," ?"))&&b(e).then((function(t){r(n.filter((function(n){return n.id!==e})))})).catch((function(o){c("the contact '".concat(t.name,"' was already deleted from server")),r(n.filter((function(n){return n.id!==e-1})))}))}(e.id)}},e.name)}))})},O=t(7),m=function(e){var n=e.persons,t=e.setPersons,c=e.setErrorMessage,o=Object(r.useState)(""),a=Object(s.a)(o,2),u=a[0],i=a[1],l=Object(r.useState)(""),d=Object(s.a)(l,2),b=d[0],g=d[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("button clicked",e.target);var r=[];if(n.map((function(e){return r.push(e.name)})),r.includes(u)){var o=n.find((function(e){return e.name===u}));if(window.confirm("".concat(o.name," is already added to phonebook, replace the old number with a new one?"))){var a=Object(O.a)(Object(O.a)({},o),{},{number:b});f(o.id,a).then((function(e){t(n.map((function(n){return n.name!==u?n:e}))),i(""),g("")}))}}else j({name:u,number:b}).then((function(e){t(n.concat(e)),i(""),g("")})).catch((function(e){c(e.response.data.message),console.log(e.response.data)}))},children:[Object(h.jsxs)("div",{children:[" name: ",Object(h.jsx)("input",{value:u,onChange:function(e){console.log(e.target.value),i(e.target.value)}})," "]}),Object(h.jsxs)("div",{children:[" number: ",Object(h.jsx)("input",{value:b,onChange:function(e){console.log(e.target.value),g(e.target.value)}})]}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)("button",{type:"submit",children:"add"})," "]})]})})},p=function(e){e.persons;var n=e.newSearch,t=e.setSearch;return Object(h.jsxs)("div",{children:[" filter shown with: ",Object(h.jsx)("input",{value:n,onChange:function(e){console.log(e.target.value),t(e.target.value)}})," "]})},v=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),a=Object(s.a)(o,2),u=a[0],i=a[1];Object(r.useEffect)((function(){d().then((function(e){i(e)}))}),[]),console.log("render",u.length,"persons");var l=Object(r.useState)(""),j=Object(s.a)(l,2),b=j[0],f=j[1],O=function(e){var n=e.message;return""===n?null:Object(h.jsx)("div",{style:{color:"red",background:"lightgrey",fontSize:20,border:"1px solid rgba(0,0,0,0.05)",borderColor:"red"},children:n})};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(O,{message:t}),Object(h.jsx)(p,{newSearch:b,setSearch:f,persons:u}),Object(h.jsx)("h3",{children:"Add a new "}),Object(h.jsx)(m,{persons:u,setPersons:i,setErrorMessage:c}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(g,{persons:u,newSearch:b,setPersons:i})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()}},[[40,1,2]]]);
//# sourceMappingURL=main.d6a2695b.chunk.js.map