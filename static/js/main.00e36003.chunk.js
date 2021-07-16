(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__1zL1s",overlayVisible:"Drawer_overlayVisible__s4KXg",drawer:"Drawer_drawer__2zUig",items:"Drawer_items__2aJde"}},20:function(e,t,c){e.exports={card:"Card_card__ZxsqD",plus:"Card_plus__TcRW8",favorite:"Card_favorite__3rwzD"}},41:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(14),s=c(33),i=c.n(s),o=(c(41),c(42),c(11)),d=c(12),l=c(7),j=c.n(l),u=c(13),b=c(4),x=c(5),m=c.n(x),h=a.a.createContext({}),f=function(){var e=a.a.useContext(h),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},p=c(1);var O=function(e){var t=f().totalPrice;return Object(p.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(p.jsx)(n.b,{to:"react-sneakers",children:Object(p.jsxs)("div",{className:"d-flex align-center",children:[Object(p.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(p.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(p.jsxs)("ul",{className:"d-flex",children:[Object(p.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(p.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"cart"}),Object(p.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{to:"favorites",children:Object(p.jsx)("img",{className:"mr-30 cu-p",width:18,height:18,src:"img/heart.svg",alt:"heart"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{to:"orders",children:Object(p.jsx)("img",{className:"mr-30 cu-p",width:18,height:18,src:"img/user.svg",alt:"user"})})})]})]})},v=c(19),g=c.n(v),N=function(e){var t=e.title,c=e.img,r=e.descrition,n=a.a.useContext(h).setCartOpened;return Object(p.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column",children:[Object(p.jsx)("img",{className:"mb-20",width:120,src:c,alt:"empty"}),Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{className:"opacity-6",children:r}),Object(p.jsxs)("button",{onClick:function(){n(!1)},className:"greenButton",children:[Object(p.jsx)("img",{src:"img/arrow.svg",alt:"arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},k=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var w=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=f(),o=i.cartItems,d=i.setCartItems,l=i.totalPrice,x=a.a.useState(null),h=Object(b.a)(x,2),O=h[0],v=h[1],w=a.a.useState(!1),y=Object(b.a)(w,2),C=y[0],I=y[1],_=a.a.useState(!1),S=Object(b.a)(_,2),A=S[0],T=S[1],F=l/100*5,P=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,m.a.post("https://60df337cabbdd9001722d2f8.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,v(c.id),I(!0),d([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,m.a.delete("https://60df337cabbdd9001722d2f8.mockapi.io/cart/"+a.id);case 14:return e.next=16,k(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(");case 24:T(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(g.a.overlay," ").concat(s?g.a.overlayVisible:""),children:Object(p.jsxs)("div",{className:g.a.drawer,children:[Object(p.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(p.jsx)("img",{onClick:t,className:"removeBtn cu-p",src:"img/btn-remove.svg",alt:"Remove"})]}),n.length>0?Object(p.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(p.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"cartItemImg"}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(p.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(p.jsxs)("div",{className:"cartTotalBlock",children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[l," \u0440\u0443\u0431."]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[F," \u0440\u0443\u0431."]})]})]}),Object(p.jsxs)("button",{disabled:A,onClick:P,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(p.jsx)("img",{src:"img/arrow.svg",alt:"arrow"})]})]})]}):Object(p.jsx)(N,{title:C?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",descrition:C?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(O," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437",img:C?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},y=c(2),C=c(35),I=c(20),_=c.n(I);var S=function(e){var t=e.id,c=e.title,r=e.imgUrl,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,d=void 0!==o&&o,l=e.loading,j=void 0!==l&&l,u=a.a.useContext(h).isItemAdded,x=a.a.useState(d),m=Object(b.a)(x,2),f=m[0],O=m[1],v={id:t,parentId:t,title:c,imgUrl:r,price:n};return Object(p.jsx)("div",{className:_.a.card,children:j?Object(p.jsxs)(C.a,{speed:2,width:210,height:260,viewBox:"0 0 210 260",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"10",y:"20",rx:"10",ry:"10",width:"160",height:"90"}),Object(p.jsx)("rect",{x:"10",y:"123",rx:"3",ry:"3",width:"160",height:"15"}),Object(p.jsx)("rect",{x:"10",y:"142",rx:"3",ry:"3",width:"100",height:"15"}),Object(p.jsx)("rect",{x:"10",y:"199",rx:"3",ry:"3",width:"80",height:"25"}),Object(p.jsx)("rect",{x:"111",y:"191",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[s&&Object(p.jsx)("div",{className:_.a.favorite,onClick:function(){s(v),O(!f)},children:Object(p.jsx)("img",{src:f?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(p.jsx)("img",{width:133,height:122,src:r,alt:"1"}),Object(p.jsx)("h5",{children:c}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(p.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(p.jsx)("img",{className:_.a.plus,onClick:function(){i(v)},src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"plus"})]})]})})};var A=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(p.jsx)("h1",{children:c?'\u041f\u043e\u0441\u0438\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(p.jsxs)("div",{className:"search-block d-flex",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(p.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Remove"}),Object(p.jsx)("input",{onChange:a,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(d.a)(Array(12)):e).map((function(e,t){return Object(p.jsx)(S,Object(o.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})},T=c(36);var F=function(e){Object(T.a)(e);var t=a.a.useContext(h),c=t.favorites,r=t.onAddToFavorite;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:c.map((function(e,t){return Object(p.jsx)(S,Object(o.a)({favorited:!0,onFavorite:r},e),t)}))})]})};var P=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(b.a)(n,2),i=s[0],l=s[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://60df337cabbdd9001722d2f8.mockapi.io/orders");case 3:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.items))}),[])),l(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(d.a)(Array(12)):c).map((function(e,t){return Object(p.jsx)(S,Object(o.a)({loading:i},e),t)}))})]})};var B=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],l=s[1],x=a.a.useState([]),f=Object(b.a)(x,2),v=f[0],g=f[1],N=a.a.useState(""),k=Object(b.a)(N,2),C=k[0],I=k[1],_=a.a.useState(!1),S=Object(b.a)(_,2),T=S[0],B=S[1],R=a.a.useState(!0),V=Object(b.a)(R,2),D=V[0],L=V[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,m.a.get("https://60df337cabbdd9001722d2f8.mockapi.io/cart");case 4:return e.t1=e.sent,e.next=7,m.a.get("https://60df337cabbdd9001722d2f8.mockapi.io/favorites");case 7:return e.t2=e.sent,e.next=10,m.a.get("https://60df337cabbdd9001722d2f8.mockapi.io/items");case 10:return e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.next=14,e.t0.all.call(e.t0,e.t4);case 14:t=e.sent,c=Object(b.a)(t,3),a=c[0],n=c[1],s=c[2],L(!1),l(a.data),g(n.data),r(s.data),e.next=29;break;case 25:e.prev=25,e.t5=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 :( "),console.error(e.t5);case 29:case"end":return e.stop()}}),e,null,[[0,25]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return l((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,m.a.delete("https://60df337cabbdd9001722d2f8.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return l((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,m.a.post("https://60df337cabbdd9001722d2f8.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,l((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u0430\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}m.a.delete("https://60df337cabbdd9001722d2f8.mockapi.io/favorites/".concat(t.id)),g((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://60df337cabbdd9001722d2f8.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,g((function(e){return[].concat(Object(d.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(h.Provider,{value:{items:c,cartItems:i,favorites:v,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:E,onAddToCart:U,setCartOpened:B,setCartItems:l},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(w,{items:i,onClose:function(){return B(!1)},onRemove:function(e){try{m.a.delete("https://60df337cabbdd9001722d2f8.mockapi.io/cart/".concat(e)),l((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:T}),Object(p.jsx)(O,{onClickCart:function(){return B(!0)}}),Object(p.jsx)(y.a,{path:"/",exact:!0,children:Object(p.jsx)(A,{items:c,cartItems:i,searchValue:C,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToFavorite:E,onAddToCart:U,isLoading:D})}),Object(p.jsx)(y.a,{path:"/favorites",exact:!0,children:Object(p.jsx)(F,{})}),Object(p.jsx)(y.a,{path:"/orders",exact:!0,children:Object(p.jsx)(P,{})})]})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(n.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.00e36003.chunk.js.map