(this.webpackJsonpcusty=this.webpackJsonpcusty||[]).push([[0],{10:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r),d=o(5),c=o.n(d),s=o(2),a=(o(10),o.p+"static/media/custy-logo.89dfcd73.png"),i=o(0),l=function(e){var t=e.todo,o=e.setTodoUrgent,r=e.setTodoWaiting,n=e.closeTodo,d=e.initiateEdit;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:t.urgent?"customer-service-card urgent":t.waitingForResponse?"customer-service-card waiting":"customer-service-card",children:[Object(i.jsxs)("nav",{className:"csc-options",children:[Object(i.jsx)("span",{onClick:function(){return o(t.orderNumber)},children:"URGENT"}),Object(i.jsx)("span",{onClick:function(){return r(t.orderNumber)},children:"WAITING"}),Object(i.jsx)("span",{onClick:function(e){return n(e,t)},children:"CLOSE"})]}),Object(i.jsx)("hr",{style:{width:"100%"}}),Object(i.jsx)("h3",{className:"customer-service-card-order-number",children:t.orderNumber}),Object(i.jsx)("h5",{className:"customer-service-card-order-date",children:t.date}),Object(i.jsx)("p",{onClick:function(){d(t.orderNumber,t.todo)},children:t.todo})]})})},u=function(e){var t=e.initiateEdit,o=e.todos,n=e.setTodoUrgent,d=e.setTodoWaiting,c=e.closeTodo,s=e.freshDeleted,a=e.setFreshDeleted;return Object(r.useEffect)((function(){var e=o.filter((function(e){return!e.urgent}));o.length!==e.length?document.querySelector("link").href="https://raw.githubusercontent.com/mwroberts3/custy/master/src/favicon2.ico":document.querySelector("link").href="https://raw.githubusercontent.com/mwroberts3/custy/master/public/favicon.ico"})),Object(i.jsx)("div",{id:"customer-service-todo",children:o&&o.map((function(e){return Object(i.jsx)(l,{todo:e,setTodoUrgent:n,setTodoWaiting:d,closeTodo:c,initiateEdit:t,freshDeleted:s,setFreshDeleted:a},e.orderNumber)}))})},m=function(e){var t=e.addTodo,o=e.editCheck,r=e.addNewBBoardItem,n=e.setAddTodo,d=e.setEditCheck;return t||o?t&&!o?Object(i.jsx)("button",{id:"addTodoBtn",onClick:function(){return n(!t)},children:"Close"}):Object(i.jsx)("button",{id:"addTodoBtn",onClick:function(){return d(!o)},children:"Close"}):Object(i.jsx)("button",{id:"addTodoBtn",onClick:function(){r||n(!t)},children:"Add Todo"})},b=function(e){var t=e.setAddNewBBoardItem,o=e.addNewBBoardItem,r=e.addTodo,n=e.editCheck,d=e.bbEditCheck;return o?Object(i.jsx)("button",{id:"addBBoardItemBtn",onClick:function(){return t(!1)},children:"Close"}):Object(i.jsx)("button",{id:"addBBoardItemBtn",onClick:function(){r||n||(d.current=!1,t(!0))},children:"Add Board Item"})},j=function(e){var t=e.addNewTodo;return Object(i.jsxs)("form",{id:"add-todo-form",children:[Object(i.jsx)("label",{children:"Reference Number:"}),Object(i.jsx)("input",{id:"newTodoOrderNumber",type:"text",autoFocus:!0}),Object(i.jsx)("label",{children:"Todo:"}),Object(i.jsx)("textarea",{id:"newTodoDescription"}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),t(document.getElementById("newTodoOrderNumber").value,document.getElementById("newTodoDescription").value)},children:"Submit"})]})},g=function(e){var t=e.submitEdit,o=e.orderNumber,r=e.todo;return Object(i.jsxs)("form",{id:"edit-todo-form",children:[Object(i.jsx)("label",{children:"Order Number:"}),Object(i.jsx)("p",{children:o}),Object(i.jsx)("label",{children:"Todo:"}),Object(i.jsx)("textarea",{id:"editedTodoDescription",defaultValue:r,autoFocus:!0}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),t(document.getElementById("editedTodoDescription").value)},children:"Submit"})]})},O=o(3),h=function(){return Object(i.jsx)("div",{id:"github-link",children:Object(i.jsx)("a",{href:"https://github.com/mwroberts3/custy",target:"none",children:Object(i.jsx)(O.a,{size:24})})})},f=function(e){var t=e.restoreTodo;return localStorage.getItem("deleted-todos")&&JSON.parse(localStorage.getItem("deleted-todos")).length>0?Object(i.jsx)("div",{id:"restore-last-todo",className:"restore-enabled",children:Object(i.jsx)(O.d,{onClick:function(){t()}})}):Object(i.jsx)("div",{id:"restore-last-todo",children:Object(i.jsx)(O.d,{onClick:function(){t()}})})},N=function(e){var t=e.lightTheme,o=e.setLightTheme;return Object(r.useEffect)((function(){t?(localStorage.setItem("light-theme",!0),document.getElementsByTagName("BODY")[0].style.background="white",document.getElementById("custy-logo")&&(document.getElementById("custy-logo").style.filter="invert(0%)")):(localStorage.setItem("light-theme",!1),document.getElementsByTagName("BODY")[0].style.background="black",document.getElementById("custy-logo")&&(document.getElementById("custy-logo").style.filter="invert(100%)"))})),Object(i.jsx)("div",{id:"color-theme-icon",children:t?Object(i.jsx)(O.b,{size:20,onClick:function(){o(!1)}}):Object(i.jsx)(O.c,{size:20,onClick:function(){o(!0)}})})},I=function(e){var t=e.name,o=e.desc,r=e.setSelectedBBoardItemContents;return Object(i.jsx)("div",{className:"bulletin-board-item",onClick:function(){!function(e,t){document.querySelector(".bboard-item-contents-container").classList.remove("hidden"),document.querySelector(".bboard-item-contents-container").addEventListener("click",(function(){document.querySelector(".bboard-item-contents-container").classList.add("hidden")})),r({name:t,desc:e})}(o,t)},children:t})},B=function(){return Object(i.jsx)("div",{className:"bulletin-board-spacer",children:"\xa0"})},x=function(e){var t=e.bboardItemArray,o=e.setSelectedBBoardItemContents;return t.sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:e.name.toUpperCase()>t.name.toUpperCase()?1:0})),Object(i.jsx)("div",{id:"bulletin-board",children:t.map((function(e,r){return Object(i.jsxs)("div",{className:"bboard-item-container",children:[Object(i.jsx)(I,{name:e.name,desc:e.desc,setSelectedBBoardItemContents:o}),r<t.length-1&&Object(i.jsx)(B,{})]},r)}))})},S=function(e){var t=e.deleteBBoardItemFromArray;return Object(i.jsx)("button",{onClick:function(e){t(e.target.parentNode.parentNode.childNodes[0].textContent)},children:"Delete"})},p=function(e){var t=e.editBBItemFunc;return Object(i.jsx)("button",{onClick:function(e){t(e)},children:"Edit"})},v=function(e){var t=e.contents,o=e.setAddNewBBoardItem,r=e.deleteBBoardItemFromArray,n=e.bbEditCheck;e.setBBItemToBeDeleted,e.bbItemToBeDeleted;return Object(i.jsxs)("div",{className:"bboard-item-contents-container hidden",children:[Object(i.jsx)("h2",{children:t.name}),Object(i.jsx)("div",{className:"bboard-item-contents",dangerouslySetInnerHTML:{__html:t.desc}}),Object(i.jsx)("div",{style:{marginTop:"20px"},children:Object(i.jsx)("small",{children:Object(i.jsx)("em",{children:"click inside this popup to close"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(S,{deleteBBoardItemFromArray:r}),Object(i.jsx)(p,{editBBItemFunc:function(e){o(!0),n.current=!0,setTimeout((function(){document.getElementById("bbItemHeader").value=e.target.parentNode.parentNode.children[0].textContent,document.getElementById("newBBItemContent").value=e.target.parentNode.parentNode.children[1].textContent}),50)}})]})]})},y=function(e){var t=e.bboardItemArray,o=e.setAddNewBBoardItem,r=e.setBboardItemArray,n=e.bbEditCheck;return Object(i.jsxs)("form",{id:"add-bbitem-form",children:[Object(i.jsx)("label",{children:"Header:"}),Object(i.jsx)("input",{id:"bbItemHeader",type:"text",autoFocus:!0}),Object(i.jsx)("label",{children:"Content (html):"}),Object(i.jsx)("textarea",{id:"newBBItemContent"}),Object(i.jsx)("button",{onClick:function(e){!function(e){e.preventDefault();var d=t;console.log(n);var c={name:document.querySelector("#bbItemHeader").value,desc:document.querySelector("#newBBItemContent").value};d.filter((function(e){return e.name===c.name})).length>=1&&!n.current?alert("bulletin board item with that name already exists, please choose a different name"):(d=d.filter((function(e){return e.name!==c.name})),console.log(d),""!==c.name&&""!==c.desc&&(d.push(c),console.log(d),localStorage.setItem("bulletinBoard",JSON.stringify(d))),r(d),o(!1))}(e)},children:"Submit"})]})};var C=function(){localStorage.getItem("bulletinBoard")||localStorage.setItem("bulletinBoard",JSON.stringify([]));var e=Object(r.useState)(JSON.parse(localStorage.getItem("light-theme"))),t=Object(s.a)(e,2),o=t[0],n=t[1],d=Object(r.useState)(JSON.parse(localStorage.getItem("todos"))),c=Object(s.a)(d,2),l=c[0],O=c[1],I=Object(r.useState)(!1),B=Object(s.a)(I,2),S=B[0],p=B[1],C=Object(r.useState)(!1),T=Object(s.a)(C,2),k=T[0],E=T[1],w=Object(r.useState)(!1),J=Object(s.a)(w,2),A=J[0],D=J[1],F=Object(r.useState)("testing"),L=Object(s.a)(F,2),U=L[0],q=L[1],H=Object(r.useState)(),R=Object(s.a)(H,2),M=(R[0],R[1],Object(r.useRef)(!1)),W=Object(r.useState)(!1),z=Object(s.a)(W,2),G=z[0],Y=z[1],_=Object(r.useState)({}),V=Object(s.a)(_,2),K=V[0],P=V[1],Q=Object(r.useState)(JSON.parse(localStorage.getItem("bulletinBoard"))),X=Object(s.a)(Q,2),Z=X[0],$=X[1];window.onfocus=function(){n(JSON.parse(localStorage.getItem("light-theme"))),O(JSON.parse(localStorage.getItem("todos"))),$(JSON.parse(localStorage.getItem("bulletinBoard")))};var ee=l;return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{id:"icons-container",children:[Object(i.jsx)(N,{lightTheme:o,setLightTheme:n}),Object(i.jsx)(f,{restoreTodo:function(){var e=[];if(localStorage.getItem("todos")&&(e=JSON.parse(localStorage.getItem("todos")),document.querySelector("#restore-last-todo").classList.add("restore-enabled")),localStorage.getItem("deleted-todos"))if(JSON.parse(localStorage.getItem("deleted-todos")).length>0){var t,o=(t=(t=JSON.parse(localStorage.getItem("deleted-todos"))).reverse())[0];t=t.filter((function(e){return e!==o})),localStorage.setItem("deleted-todos",JSON.stringify(t)),e.push(o),localStorage.setItem("todos",JSON.stringify(e)),O(e)}else alert("all todos restored")}})]}),Object(i.jsx)("div",{id:"icons-container-2",children:Object(i.jsx)(h,{})}),Object(i.jsx)("header",{id:"app-header",children:Object(i.jsx)("img",{id:"custy-logo",src:a,alt:"Logo"})}),Object(i.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[Object(i.jsx)(m,{addTodo:S,editCheck:G,addNewBBoardItem:A,setAddTodo:p,setEditCheck:Y}),Object(i.jsx)(b,{setAddNewBBoardItem:D,addNewBBoardItem:A,addTodo:S,editCheck:G,bbEditCheck:M})]}),Object(i.jsx)(x,{bboardItemArray:Z,setBboardItemArray:$,setSelectedBBoardItemContents:q,setAddNewBBoardItem:D}),Object(i.jsx)(u,{initiateEdit:function(e,t){P({orderNumber:e,todo:t}),Y(!G),S&&p(!S)},todos:l,setTodoUrgent:function(e){l.forEach((function(t){t.orderNumber===e&&(t.urgent=!t.urgent)})),localStorage.setItem("todos",JSON.stringify(l)),O(JSON.parse(localStorage.getItem("todos")))},setTodoWaiting:function(e){l.forEach((function(t){t.orderNumber===e&&(t.waitingForResponse=!t.waitingForResponse)})),localStorage.setItem("todos",JSON.stringify(l)),O(JSON.parse(localStorage.getItem("todos")))},closeTodo:function(e,t){var o=setInterval((function(){ee=ee.filter((function(e){return e.orderNumber!==t.orderNumber})),localStorage.setItem("todos",JSON.stringify(ee));var e=l.filter((function(e){return e.orderNumber===t.orderNumber})),r=[];localStorage.getItem("deleted-todos")?((r=JSON.parse(localStorage.getItem("deleted-todos"))).push(e[0]),localStorage.setItem("deleted-todos",JSON.stringify(r))):localStorage.setItem("deleted-todos",JSON.stringify(e)),document.getElementById("testDelete-".concat(t.orderNumber)).classList.remove("todoToBeClosed"),clearInterval(o),O(ee)}),2e3),r=e.target.parentNode.parentNode.parentNode.innerHTML;e.target.parentNode.parentNode.parentNode.innerHTML='\n  <div id="testDelete-'.concat(t.orderNumber,'" class="urgent-undo todoToBeClosed">\n  <button class="undo-btn">Undo</button>\n  </div>\n  '),document.getElementById("testDelete-".concat(t.orderNumber)).addEventListener("click",(function(){document.getElementById("testDelete-".concat(t.orderNumber)).classList.remove("urgent-undo"),document.getElementById("testDelete-".concat(t.orderNumber)).classList.remove("todoToBeClosed"),document.getElementById("testDelete-".concat(t.orderNumber)).innerHTML=r,clearInterval(o),document.querySelectorAll(".todoToBeClosed").length<1&&(O([]),O(ee))}))},freshDeleted:k,setFreshDeleted:E}),S&&Object(i.jsx)(j,{addNewTodo:function(e,t){var o=[];localStorage.getItem("todos")&&(o=JSON.parse(localStorage.getItem("todos")));var r=1;if(o.find((function(t){return t.orderNumber===e}))){for(var n=0;n<o.length;n++)o[n].orderNumber.substring(0,e.length+2)==="".concat(e," -")&&r++;e="".concat(e," - ").concat(r)}o.push({orderNumber:e,todo:t,date:(new Date).toString().substring(0,15),urgent:!1,waitingForResponse:!1}),localStorage.setItem("todos",JSON.stringify(o)),O(o),p(!S)}}),G&&Object(i.jsx)(g,{submitEdit:function(e){var t=JSON.parse(localStorage.getItem("todos"));t.forEach((function(t){t.orderNumber===K.orderNumber&&(t.todo=e)})),localStorage.setItem("todos",JSON.stringify(t)),O(t),Y(!G)},orderNumber:K.orderNumber,todo:K.todo}),A&&Object(i.jsx)(y,{bboardItemArray:Z,setAddNewBBoardItem:D,setBboardItemArray:$,bbEditCheck:M}),Object(i.jsx)(v,{contents:U,bboardItemArray:Z,setBboardItemArray:$,setAddNewBBoardItem:D,bbEditCheck:M,deleteBBoardItemFromArray:function(e){var t=Z.filter((function(t){return t.name!==e}));localStorage.setItem("bulletinBoard",JSON.stringify(t)),$(t)}})]})};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2ce06c7d.chunk.js.map