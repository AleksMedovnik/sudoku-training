(this["webpackJsonpsudoku-training"]=this["webpackJsonpsudoku-training"]||[]).push([[0],{29:function(t,e,r){},30:function(t,e,r){},37:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(14),c=r.n(a),i=(r(29),r(2)),s=(r(30),r(8)),o=r(1),u=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Game Over"}),Object(o.jsx)(s.b,{to:"/main",className:"link-start",children:"Play Again"})]})},l=r(16),j=r(23),d=r(13),b="SET-VALUE",x="START-GAME",m={chooseMatrix:function(){return Math.floor(Math.random()*this.dataMatrix.length)},dataMatrix:[[[[1,2,3,5,4,6],[6,5,4,3,1,2],[2,6,1,4,5,3],[4,3,5,6,2,1],[3,4,2,1,6,5],[5,1,6,2,3,4]],[[0,2,3,0,4,6],[0,5,4,3,1,2],[2,6,1,0,0,0],[0,3,0,0,0,0],[0,0,2,0,0,0],[5,0,0,0,0,4]]],[[[4,6,3,1,2,5],[1,2,5,3,4,6],[5,1,6,4,3,2],[2,3,4,5,6,1],[6,4,1,2,5,3],[3,5,2,6,1,4]],[[0,0,0,1,2,0],[1,2,5,0,4,0],[0,0,0,4,3,2],[0,0,4,0,0,0],[0,4,1,2,5,3],[3,0,0,0,0,0]]],[[[2,1,5,3,4,6],[6,4,3,1,2,5],[1,3,2,5,6,4],[5,6,4,2,1,3],[4,5,1,6,3,2],[3,2,6,4,5,1]],[[2,0,5,3,4,0],[0,4,3,0,0,0],[0,3,0,0,6,0],[5,6,0,2,0,0],[4,5,1,0,0,0],[0,2,0,0,0,1]]]]},O=function(t){var e=t.chooseMatrix();return{matrix:{start:JSON.parse(JSON.stringify(t.dataMatrix[e][1])),end:JSON.parse(JSON.stringify(t.dataMatrix[e][0]))},values:[1,2,3,4,5,6],errors:0}},h=r(24),f=r(22),v=Object(i.e)((function(t){Object(n.useEffect)((function(){t.errors>=3&&(t.startGame(),t.history.push("/gameOver")),function(){var e,r=Object(f.a)(t.matrix);try{for(r.s();!(e=r.n()).done;)if(e.value.includes(0))return}catch(n){r.e(n)}finally{r.f()}t.startGame(),t.history.push("/win")}(),window.onpopstate=function(){return t.startGame()}}),[t.matrix,t.errors]);var e=function(e){t.setValueActionCreator(e.target.dataset.value,c)},r=Object(n.useState)([0,0]),a=Object(h.a)(r,2),c=a[0],i=a[1],s=t.matrix.map((function(t,e){return Object(o.jsx)("tr",{children:t.map((function(t,r){return Object(o.jsx)("td",{onClick:function(){i([e,r])},className:e===c[0]&&r===c[1]?"td active-cell":"td",children:t||""},"_".concat(e,"_").concat(r))}))},"_".concat(e))})),u=t.valuesData.map((function(t){return Object(o.jsx)("li",{"data-value":t,onClick:e,children:t},t)}));return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("table",{className:"table",children:Object(o.jsx)("tbody",{children:s})}),Object(o.jsx)("ul",{className:"values",children:u}),Object(o.jsxs)("div",{className:"errors",children:["Errors: ",t.errors," / 3"]})]})})),p=Object(l.b)((function(t){return{matrix:t.main.matrix.start,valuesData:t.main.values,errors:t.main.errors}}),{setValueActionCreator:function(t,e){return{type:b,value:t,indexArr:e}},startGame:function(){return{type:x}}})(v),g=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Sudoku"}),Object(o.jsx)(s.b,{to:"/main",className:"link-start",children:"Start Game"})]})},N=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"You Win!!!"}),Object(o.jsx)(s.b,{to:"/main",className:"link-start",children:"Play Again"})]})};var y=function(t){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(i.a,{exact:!0,path:["/","/menu"],render:function(){return Object(o.jsx)(g,{})}}),Object(o.jsx)(i.a,{path:"/main",render:function(){return Object(o.jsx)(p,{})}}),Object(o.jsx)(i.a,{path:"/win",render:function(){return Object(o.jsx)(N,{})}}),Object(o.jsx)(i.a,{path:"/gameOver",render:function(){return Object(o.jsx)(u,{})}})]})},A=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,38)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),c(t),i(t)}))},k=r(20),S=Object(k.a)({main:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O(m),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:var r=Object(d.a)(Object(d.a)({},t),{},{matrix:Object(d.a)(Object(d.a)({},t.matrix),{},{start:Object(j.a)(t.matrix.start)})}),n=+e.value;return t.matrix.end[e.indexArr[0]][e.indexArr[1]]===n?r.matrix.start[e.indexArr[0]][e.indexArr[1]]=n:r.errors++,r;case x:return O(m)}return t}}),w=Object(k.b)(S);window.store=w;var M=w;c.a.render(Object(o.jsx)(s.a,{basename:"/sudoku-training",children:Object(o.jsx)(l.a,{store:M,children:Object(o.jsx)(y,{})})}),document.getElementById("root")),A()}},[[37,1,2]]]);
//# sourceMappingURL=main.e18485e2.chunk.js.map