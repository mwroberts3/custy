(this.webpackJsonpcusty=this.webpackJsonpcusty||[]).push([[0],{10:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r),d=o(4),c=o.n(d),i=o(2),s=(o(10),o.p+"static/media/custy-logo.96d22885.jpg"),a=o(0),u=function(e){var t=e.todo,o=e.setTodoUrgent,r=e.setTodoWaiting,n=e.closeTodo,d=e.initiateEdit;return Object(a.jsxs)("div",{className:t.urgent?"customer-service-card urgent":t.waitingForResponse?"customer-service-card waiting":"customer-service-card",children:[Object(a.jsxs)("nav",{className:"csc-options",children:[Object(a.jsx)("span",{onClick:function(){return o(t.orderNumber)},children:"URGENT"}),Object(a.jsx)("span",{onClick:function(){return r(t.orderNumber)},children:"WAITING"}),Object(a.jsx)("span",{onClick:function(){return n(t.orderNumber)},children:"CLOSE"})]}),Object(a.jsx)("hr",{style:{width:"100%"}}),Object(a.jsx)("h3",{className:"customer-service-card-order-number",children:t.orderNumber}),Object(a.jsx)("h5",{className:"customer-service-card-order-date",children:t.date}),Object(a.jsx)("p",{onClick:function(){d(t.orderNumber,t.todo)},children:t.todo})]})},l=function(e){var t=e.initiateEdit,o=e.todos,r=e.setTodoUrgent,n=e.setTodoWaiting,d=e.closeTodo;return window.onfocus=function(){window.location.reload()},Object(a.jsx)("div",{id:"customer-service-todo",children:o&&o.map((function(e){return Object(a.jsx)(u,{todo:e,setTodoUrgent:r,setTodoWaiting:n,closeTodo:d,initiateEdit:t},e.orderNumber)}))})},j=function(e){var t=e.showAddTodoForm,o=e.showEditTodoForm,r=e.addTodo,n=e.editCheck;return r||n?r&&!n?Object(a.jsx)("button",{id:"addTodoBtn",onClick:function(){return t()},children:"Close"}):Object(a.jsx)("button",{id:"addTodoBtn",onClick:function(){return o()},children:"Close"}):Object(a.jsx)("button",{id:"addTodoBtn",onClick:function(){return t()},children:"Add Todo"})},b=function(e){var t=e.addNewTodo;return Object(a.jsxs)("form",{id:"add-todo-form",children:[Object(a.jsx)("label",{children:"Reference Number:"}),Object(a.jsx)("input",{id:"newTodoOrderNumber",type:"text",autoFocus:!0}),Object(a.jsx)("label",{children:"Todo:"}),Object(a.jsx)("textarea",{id:"newTodoDescription"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),t(document.getElementById("newTodoOrderNumber").value,document.getElementById("newTodoDescription").value)},children:"Submit"})]})},m=function(e){var t=e.submitEdit,o=e.orderNumber,r=e.todo;return Object(a.jsxs)("form",{id:"edit-todo-form",children:[Object(a.jsx)("label",{children:"Order Number:"}),Object(a.jsx)("p",{children:o}),Object(a.jsx)("label",{children:"Todo:"}),Object(a.jsx)("textarea",{id:"editedTodoDescription",defaultValue:r,autoFocus:!0}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),t(document.getElementById("editedTodoDescription").value)},children:"Submit"})]})},O=o(5),g=function(){return Object(a.jsx)("div",{id:"github-link",children:Object(a.jsx)("a",{href:"https://github.com/mwroberts3/custy",target:"none",children:Object(a.jsx)(O.a,{size:24})})})};var f=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("todos"))),t=Object(i.a)(e,2),o=t[0],n=t[1],d=Object(r.useState)(!1),c=Object(i.a)(d,2),u=c[0],O=c[1],f=Object(r.useState)(!1),h=Object(i.a)(f,2),x=h[0],N=h[1],p=Object(r.useState)({}),T=Object(i.a)(p,2),S=T[0],v=T[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(g,{}),Object(a.jsx)("header",{id:"app-header",children:Object(a.jsx)("img",{id:"custy-logo",src:s,alt:"Logo"})}),Object(a.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:Object(a.jsx)(j,{showAddTodoForm:function(){O(!u)},showEditTodoForm:function(){N(!x)},addTodo:u,editCheck:x})}),Object(a.jsx)(l,{initiateEdit:function(e,t){v({orderNumber:e,todo:t}),N(!x),u&&O(!u)},todos:o,setTodoUrgent:function(e){o.forEach((function(t){t.orderNumber===e&&(t.urgent=!t.urgent)})),localStorage.setItem("todos",JSON.stringify(o)),n(JSON.parse(localStorage.getItem("todos")))},setTodoWaiting:function(e){o.forEach((function(t){t.orderNumber===e&&(t.waitingForResponse=!t.waitingForResponse)})),localStorage.setItem("todos",JSON.stringify(o)),n(JSON.parse(localStorage.getItem("todos")))},closeTodo:function(e){var t;t=o.filter((function(t){return t.orderNumber!==e})),localStorage.setItem("todos",JSON.stringify(t)),n(JSON.parse(localStorage.getItem("todos")))}}),u&&Object(a.jsx)(b,{addNewTodo:function(e,t){var o=[];localStorage.getItem("todos")&&(o=JSON.parse(localStorage.getItem("todos"))),o.push({orderNumber:e,todo:t,date:(new Date).toString().substring(0,15),urgent:!1,waitingForResponse:!1}),localStorage.setItem("todos",JSON.stringify(o)),n(o),O(!u)}}),x&&Object(a.jsx)(m,{submitEdit:function(e){var t=JSON.parse(localStorage.getItem("todos"));t.forEach((function(t){t.orderNumber===S.orderNumber&&(t.todo=e)})),localStorage.setItem("todos",JSON.stringify(t)),n(t),N(!x)},orderNumber:S.orderNumber,todo:S.todo})]})};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8985fabe.chunk.js.map