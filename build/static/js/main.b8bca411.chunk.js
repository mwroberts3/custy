(this.webpackJsonpcusty=this.webpackJsonpcusty||[]).push([[0],{10:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r),d=o(5),c=o.n(d),s=o(2),a=(o(10),o.p+"static/media/custy-logo.96d22885.jpg"),i=o(0),l=function(e){var t=e.todo,o=e.setTodoUrgent,r=e.setTodoWaiting,n=e.closeTodo,d=e.initiateEdit;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:t.urgent?"customer-service-card urgent":t.waitingForResponse?"customer-service-card waiting":"customer-service-card",children:[Object(i.jsxs)("nav",{className:"csc-options",children:[Object(i.jsx)("span",{onClick:function(){return o(t.orderNumber)},children:"URGENT"}),Object(i.jsx)("span",{onClick:function(){return r(t.orderNumber)},children:"WAITING"}),Object(i.jsx)("span",{onClick:function(e){return n(e,t)},children:"CLOSE"})]}),Object(i.jsx)("hr",{style:{width:"100%"}}),Object(i.jsx)("h3",{className:"customer-service-card-order-number",children:t.orderNumber}),Object(i.jsx)("h5",{className:"customer-service-card-order-date",children:t.date}),Object(i.jsx)("p",{onClick:function(){d(t.orderNumber,t.todo)},children:t.todo})]})})},u=function(e){var t=e.initiateEdit,o=e.todos,r=e.setTodoUrgent,n=e.setTodoWaiting,d=e.closeTodo,c=e.freshDeleted,s=e.setFreshDeleted;return window.onfocus=function(){window.location.reload()},Object(i.jsx)("div",{id:"customer-service-todo",children:o&&o.map((function(e){return Object(i.jsx)(l,{todo:e,setTodoUrgent:r,setTodoWaiting:n,closeTodo:d,initiateEdit:t,freshDeleted:c,setFreshDeleted:s},e.orderNumber)}))})},b=function(e){var t=e.addTodo,o=e.editCheck,r=e.addNewBBoardItem,n=e.setAddTodo,d=e.setEditCheck;return t||o?t&&!o?Object(i.jsx)("button",{id:"addTodoBtn",onClick:function(){return n(!t)},children:"Close"}):Object(i.jsx)("button",{id:"addTodoBtn",onClick:function(){return d(!o)},children:"Close"}):Object(i.jsx)("button",{id:"addTodoBtn",onClick:function(){r||n(!t)},children:"Add Todo"})},m=function(e){var t=e.setAddNewBBoardItem,o=e.addNewBBoardItem,r=e.addTodo,n=e.editCheck;return o?Object(i.jsx)("button",{id:"addBBoardItemBtn",onClick:function(){return t(!1)},children:"Close"}):Object(i.jsx)("button",{id:"addBBoardItemBtn",onClick:function(){r||n||t(!0)},children:"Add Board Item"})},j=function(e){var t=e.addNewTodo;return Object(i.jsxs)("form",{id:"add-todo-form",children:[Object(i.jsx)("label",{children:"Reference Number:"}),Object(i.jsx)("input",{id:"newTodoOrderNumber",type:"text",autoFocus:!0}),Object(i.jsx)("label",{children:"Todo:"}),Object(i.jsx)("textarea",{id:"newTodoDescription"}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),t(document.getElementById("newTodoOrderNumber").value,document.getElementById("newTodoDescription").value)},children:"Submit"})]})},O=function(e){var t=e.submitEdit,o=e.orderNumber,r=e.todo;return Object(i.jsxs)("form",{id:"edit-todo-form",children:[Object(i.jsx)("label",{children:"Order Number:"}),Object(i.jsx)("p",{children:o}),Object(i.jsx)("label",{children:"Todo:"}),Object(i.jsx)("textarea",{id:"editedTodoDescription",defaultValue:r,autoFocus:!0}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),t(document.getElementById("editedTodoDescription").value)},children:"Submit"})]})},g=o(3),f=function(){return Object(i.jsx)("div",{id:"github-link",children:Object(i.jsx)("a",{href:"https://github.com/mwroberts3/custy",target:"none",children:Object(i.jsx)(g.a,{size:24})})})},h=function(e){var t=e.restoreTodo;return localStorage.getItem("deleted-todos")&&JSON.parse(localStorage.getItem("deleted-todos")).length>0?Object(i.jsx)("div",{id:"restore-last-todo",className:"restore-enabled",children:Object(i.jsx)(g.b,{onClick:function(){t()}})}):Object(i.jsx)("div",{id:"restore-last-todo",children:Object(i.jsx)(g.b,{onClick:function(){t()}})})},N=function(e){var t=e.name,o=e.desc,r=e.setSelectedBBoardItemContents;return Object(i.jsx)("div",{className:"bulletin-board-item",onClick:function(){!function(e,t){document.querySelector(".bboard-item-contents-container").classList.remove("hidden"),document.querySelector(".bboard-item-contents-container").addEventListener("click",(function(){document.querySelector(".bboard-item-contents-container").classList.add("hidden")})),r({name:t,desc:e})}(o,t)},children:t})},x=function(){return Object(i.jsx)("div",{className:"bulletin-board-spacer",children:"\xa0"})},S=function(e){var t=e.bboardItemArray,o=(e.setBboardItemArray,e.setSelectedBBoardItemContents);return t.sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:e.name.toUpperCase()>t.name.toUpperCase()?1:0})),Object(i.jsx)("div",{id:"bulletin-board",children:t.map((function(e,r){return Object(i.jsxs)("div",{className:"bboard-item-container",children:[Object(i.jsx)(N,{name:e.name,desc:e.desc,setSelectedBBoardItemContents:o}),r<t.length-1&&Object(i.jsx)(x,{})]},r)}))})},I=function(e){var t=e.bboardItemArray,o=e.setBboardItemArray;return Object(i.jsx)("button",{onClick:function(e){!function(e){var r=e.target.parentNode.childNodes[0].textContent;t=t.filter((function(e){return e.name!==r})),localStorage.setItem("bulletinBoard",JSON.stringify(t)),o(t)}(e)},children:"Delete"})},p=function(e){var t=e.contents,o=e.bboardItemArray,r=e.setBboardItemArray;return Object(i.jsxs)("div",{className:"bboard-item-contents-container hidden",children:[Object(i.jsx)("h2",{children:t.name}),Object(i.jsx)("div",{className:"bboard-item-contents",dangerouslySetInnerHTML:{__html:t.desc}}),Object(i.jsx)("div",{style:{marginTop:"20px"},children:Object(i.jsx)("small",{children:Object(i.jsx)("em",{children:"click inside this popup to close"})})}),Object(i.jsx)(I,{bboardItemArray:o,setBboardItemArray:r})]})},v=function(e){var t=e.bboardItemArray,o=e.setAddNewBBoardItem;return Object(i.jsxs)("form",{id:"add-bbitem-form",children:[Object(i.jsx)("label",{children:"Header:"}),Object(i.jsx)("input",{id:"bbItemHeader",type:"text",autoFocus:!0}),Object(i.jsx)("label",{children:"Content (html):"}),Object(i.jsx)("textarea",{id:"newBBItemContent"}),Object(i.jsx)("button",{onClick:function(e){!function(e){e.preventDefault();var r=t,n={name:document.querySelector("#bbItemHeader").value,desc:document.querySelector("#newBBItemContent").value};""!==n.name&&""!==n.desc&&(r.push(n),localStorage.setItem("bulletinBoard",JSON.stringify(r))),o(!1),document.querySelector("#add-bbitem-form").classList.add("hidden")}(e)},children:"Submit"})]})};var B=function(){localStorage.getItem("bulletinBoard")||localStorage.setItem("bulletinBoard",JSON.stringify([]));var e=Object(r.useState)(JSON.parse(localStorage.getItem("todos"))),t=Object(s.a)(e,2),o=t[0],n=t[1],d=Object(r.useState)(!1),c=Object(s.a)(d,2),l=c[0],g=c[1],N=Object(r.useState)(!1),x=Object(s.a)(N,2),I=x[0],B=x[1],y=Object(r.useState)(!1),T=Object(s.a)(y,2),C=T[0],w=T[1],k=Object(r.useState)("testing"),A=Object(s.a)(k,2),J=A[0],E=A[1],D=Object(r.useState)(!1),L=Object(s.a)(D,2),q=L[0],F=L[1],U=Object(r.useState)({}),H=Object(s.a)(U,2),R=H[0],M=H[1],W=Object(r.useState)(JSON.parse(localStorage.getItem("bulletinBoard"))),G=Object(s.a)(W,2),_=G[0],z=G[1],V=o;return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{id:"icons-container",children:[Object(i.jsx)(f,{}),Object(i.jsx)(h,{restoreTodo:function(){var e=[];if(localStorage.getItem("todos")&&(e=JSON.parse(localStorage.getItem("todos")),document.querySelector("#restore-last-todo").classList.add("restore-enabled")),localStorage.getItem("deleted-todos"))if(JSON.parse(localStorage.getItem("deleted-todos")).length>0){var t,o=(t=(t=JSON.parse(localStorage.getItem("deleted-todos"))).reverse())[0];t=t.filter((function(e){return e!==o})),localStorage.setItem("deleted-todos",JSON.stringify(t)),e.push(o),localStorage.setItem("todos",JSON.stringify(e)),n(e)}else alert("all todos restored")}})]}),Object(i.jsx)("header",{id:"app-header",children:Object(i.jsx)("img",{id:"custy-logo",src:a,alt:"Logo"})}),Object(i.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[Object(i.jsx)(b,{addTodo:l,editCheck:q,addNewBBoardItem:C,setAddTodo:g,setEditCheck:F}),Object(i.jsx)(m,{setAddNewBBoardItem:w,addNewBBoardItem:C,addTodo:l,editCheck:q})]}),Object(i.jsx)(S,{bboardItemArray:_,setBboardItemArray:z,setSelectedBBoardItemContents:E}),Object(i.jsx)(u,{initiateEdit:function(e,t){M({orderNumber:e,todo:t}),F(!q),l&&g(!l)},todos:o,setTodoUrgent:function(e){o.forEach((function(t){t.orderNumber===e&&(t.urgent=!t.urgent)})),localStorage.setItem("todos",JSON.stringify(o)),n(JSON.parse(localStorage.getItem("todos")))},setTodoWaiting:function(e){o.forEach((function(t){t.orderNumber===e&&(t.waitingForResponse=!t.waitingForResponse)})),localStorage.setItem("todos",JSON.stringify(o)),n(JSON.parse(localStorage.getItem("todos")))},closeTodo:function(e,t){var r=setInterval((function(){V=V.filter((function(e){return e.orderNumber!==t.orderNumber})),localStorage.setItem("todos",JSON.stringify(V));var e=o.filter((function(e){return e.orderNumber===t.orderNumber})),d=[];localStorage.getItem("deleted-todos")?((d=JSON.parse(localStorage.getItem("deleted-todos"))).push(e[0]),localStorage.setItem("deleted-todos",JSON.stringify(d))):localStorage.setItem("deleted-todos",JSON.stringify(e)),document.getElementById("testDelete-".concat(t.orderNumber)).classList.remove("todoToBeClosed"),console.log(document.querySelectorAll(".todoToBeClosed").length),clearInterval(r),n(V)}),2e3),d=e.target.parentNode.parentNode.parentNode.innerHTML;e.target.parentNode.parentNode.parentNode.innerHTML='\n  <div id="testDelete-'.concat(t.orderNumber,'" class="urgent-undo todoToBeClosed">\n  <button class="undo-btn">Undo</button>\n  </div>\n  '),document.getElementById("testDelete-".concat(t.orderNumber)).addEventListener("click",(function(){console.log("urgent undo test"),document.getElementById("testDelete-".concat(t.orderNumber)).classList.remove("urgent-undo"),document.getElementById("testDelete-".concat(t.orderNumber)).classList.remove("todoToBeClosed"),document.getElementById("testDelete-".concat(t.orderNumber)).innerHTML=d,clearInterval(r),console.log(document.querySelectorAll(".todoToBeClosed").length),document.querySelectorAll(".todoToBeClosed").length<1&&(n([]),n(V))}))},freshDeleted:I,setFreshDeleted:B}),l&&Object(i.jsx)(j,{addNewTodo:function(e,t){var o=[];localStorage.getItem("todos")&&(o=JSON.parse(localStorage.getItem("todos"))),o.push({orderNumber:e,todo:t,date:(new Date).toString().substring(0,15),urgent:!1,waitingForResponse:!1}),localStorage.setItem("todos",JSON.stringify(o)),n(o),g(!l)}}),q&&Object(i.jsx)(O,{submitEdit:function(e){var t=JSON.parse(localStorage.getItem("todos"));t.forEach((function(t){t.orderNumber===R.orderNumber&&(t.todo=e)})),localStorage.setItem("todos",JSON.stringify(t)),n(t),F(!q)},orderNumber:R.orderNumber,todo:R.todo}),C&&Object(i.jsx)(v,{bboardItemArray:_,setAddNewBBoardItem:w}),Object(i.jsx)(p,{contents:J,bboardItemArray:_,setBboardItemArray:z})]})};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.b8bca411.chunk.js.map