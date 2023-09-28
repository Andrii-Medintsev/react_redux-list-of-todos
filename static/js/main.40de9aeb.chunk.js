(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(4),r=c(16),l=c(7),i=c(14),o=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(5),h=function(e){return{type:"filter/ADD_QUERY",payload:e}},O=function(e){return{type:"filter/ADD_STATUS",payload:e}},f={query:"",status:"all"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/ADD_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/ADD_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},x=c(17),p=function(e){return{type:"todos/ADD",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?Object(x.a)(t.payload):e},y=Object(l.combineReducers)({currentTodo:u,filter:m,todos:v}),N=Object(l.createStore)(y,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),g=c(3),T=c(0),D=(c(25),c(26),c(10)),S=c.n(D),k=(s.b,s.c),w=c(1),E=function(){var e=Object(T.useState)(),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(s.b)(),r=k((function(e){return e.filter})),l=k((function(e){return e.todos})),i=k((function(e){return e.currentTodo}));return Object(T.useEffect)((function(){n(l.filter((function(e){var t=e.title.toLowerCase().includes(r.query.toLowerCase());switch(r.status){case"all":default:return t;case"active":return!e.completed&&t;case"completed":return e.completed&&t}})))}),[r]),Object(w.jsx)(w.Fragment,{children:c&&c.length?Object(w.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:" "})]})}),Object(w.jsx)("tbody",{children:c.map((function(e){return Object(w.jsxs)("tr",{"data-cy":"todo",className:S()({"has-background-info-light":(null===i||void 0===i?void 0:i.id)===e.id}),children:[Object(w.jsx)("td",{className:"is-vcentered",children:e.id}),Object(w.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(w.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("td",{className:"is-vcentered is-expanded",children:Object(w.jsx)("p",{className:S()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(w.jsx)("td",{className:"has-text-right is-vcentered",children:Object(w.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){a(d(e))}(e)},children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:S()("far",{"fa-eye":e.id!==(null===i||void 0===i?void 0:i.id),"fa-eye-slash":e.id===(null===i||void 0===i?void 0:i.id)})})})})})]},e.id)}))})]}):Object(w.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},A=function(){var e=Object(s.b)(),t=k((function(e){return e.filter})),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e(h(t))};return Object(w.jsxs)("form",{className:"field has-addons",children:[Object(w.jsx)("p",{className:"control",children:Object(w.jsx)("span",{className:"select",children:Object(w.jsxs)("select",{"data-cy":"statusSelect",defaultValue:t.status,onChange:function(t){e(O(t.target.value))},children:[Object(w.jsx)("option",{value:"all",children:"All"}),Object(w.jsx)("option",{value:"active",children:"Active"}),Object(w.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(w.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(w.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(e){return c(e.target.value)}}),Object(w.jsx)("span",{className:"icon is-left",children:Object(w.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.query&&Object(w.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(w.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c()}})})]})]})},C=(c(28),function(){return Object(w.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(w.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var q=function(){var e=Object(T.useState)(null),t=Object(g.a)(e,2),c=t[0],n=t[1],a=k((function(e){return e.currentTodo})),r=Object(T.useState)(!1),l=Object(g.a)(r,2),i=l[0],o=l[1],d=Object(s.b)();Object(T.useEffect)((function(){var e;a&&(o(!0),(e=a.userId,_("/users/".concat(e))).then((function(e){return n(e)})).finally((function(){return o(!1)})))}),[]);return Object(w.jsx)(w.Fragment,{children:a&&Object(w.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(w.jsx)("div",{className:"modal-background"}),i?Object(w.jsx)(C,{}):c&&Object(w.jsxs)("div",{className:"modal-card",children:[Object(w.jsxs)("header",{className:"modal-card-head",children:[Object(w.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a.id)}),Object(w.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){d(j())}})]}),Object(w.jsxs)("div",{className:"modal-card-body",children:[Object(w.jsx)("p",{className:"block","data-cy":"modal-title",children:a.title}),Object(w.jsxs)("p",{className:"block","data-cy":"modal-user",children:[a.completed?Object(w.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(w.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(w.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]})]})})},R=function(){var e=k((function(e){return e.currentTodo})),t=Object(T.useState)(!1),c=Object(g.a)(t,2),n=c[0],a=c[1],r=Object(s.b)();return Object(T.useEffect)((function(){a(!0),_("/todos").then((function(e){return r(p(e))})).finally((function(){return a(!1)}))}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"section",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("h1",{className:"title",children:"Todos:"}),Object(w.jsx)("div",{className:"block",children:Object(w.jsx)(A,{})}),Object(w.jsx)("div",{className:"block",children:n?Object(w.jsx)(C,{}):Object(w.jsx)(E,{})})]})})}),e&&Object(w.jsx)(q,{})]})},L=function(){return Object(w.jsx)(s.a,{store:N,children:Object(w.jsx)(r.a,{children:Object(w.jsx)(R,{})})})};a.a.render(Object(w.jsx)(L,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.40de9aeb.chunk.js.map