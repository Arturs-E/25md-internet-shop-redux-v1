(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(13),r=c.n(i),s=(c(25),c(11)),o=c(8),u=(c(31),c(2)),d=(c(32),c(5)),l=Object(d.b)({name:"language",initialState:{value:"en"},reducers:{changeLanguage:function(e){return"en"===e.value?{value:"lv"}:{value:"en"}}}}),p=l.actions.changeLanguage,m=l.reducer,j=function(){return Object(s.b)()},g=s.c,b=(c(33),c(14)),h=c(15),O=c(1),N=function(){var e=g((function(e){return e.shoppingCartIconProductCount.count}));return Object(O.jsxs)("div",{className:"header__shopping-cart-icon-wrapper",children:[Object(O.jsx)(b.a,{className:"header__shopping-cart-icon",icon:h.a}),0===e?"":Object(O.jsx)("span",{className:"header__shopping-cart-icon-quantity",children:e})]})},x=function(){var e=j();return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("nav",{children:Object(O.jsx)(o.c,{to:"/",children:Object(O.jsx)("img",{src:"./assets/logo/Leica_Geosystems_Logo.svg",alt:"Leica Geosystems logo",className:"logo"})})}),Object(O.jsxs)("select",{name:"language",onChange:function(){return e(p())},children:[Object(O.jsx)("option",{value:"en",children:"EN"}),Object(O.jsx)("option",{value:"lv",children:"LV"})]}),Object(O.jsx)("nav",{children:Object(O.jsx)(o.c,{to:"/cart",children:Object(O.jsx)(N,{})})})]})},f=(c(38),c(7)),v=(c(39),c(20)),L=c(6),y=Object(d.b)({name:"shoppingCartItems",initialState:[],reducers:{addToCart:function(e,t){return e.some((function(e){return e.productName===t.payload.productName}))?e.map((function(e){return e.productName===t.payload.productName?Object(L.a)(Object(L.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[t.payload])},decreaseQuantity:function(e,t){return e.map((function(e){return e.productName===t.payload&&e.quantity>0?Object(L.a)(Object(L.a)({},e),{},{quantity:e.quantity-1}):e}))},increaseQuantity:function(e,t){return e.map((function(e){return e.productName===t.payload?Object(L.a)(Object(L.a)({},e),{},{quantity:e.quantity+1}):e}))},removeItem:function(e,t){return e.filter((function(e){return e.productName!==t.payload}))}}}),_=y.actions,U=_.addToCart,C=_.decreaseQuantity,q=_.increaseQuantity,P=_.removeItem,D=y.reducer,k=(c(40),function(e){var t=e.decreaseQuantity,c=e.quantity,a=e.increaseQuantity;return Object(O.jsxs)("div",{className:"change-quantity-buttons",children:[Object(O.jsx)("button",{className:"change-quantity-buttons__button",onClick:t,children:"-"}),Object(O.jsx)("span",{children:c}),Object(O.jsx)("button",{className:"change-quantity-buttons__button",onClick:a,children:"+"})]})}),w=(c(41),function(e){var t=e.title,c=e.clickHandler,a=e.additionalClasses;return Object(O.jsx)("button",{className:"button ".concat(a),onClick:c,children:t})}),I=Object(d.b)({name:"shoppingCartIconProductCount",initialState:{count:0},reducers:{increaseCartProductCount:function(e,t){return{count:t.payload+1}},decreaseCartProductCount:function(e,t){return{count:t.payload-1}}}}),Q=I.actions,S=Q.increaseCartProductCount,E=Q.decreaseCartProductCount,F=I.reducer,R=function(e){var t=e.imgUrl,c=e.productName,n=e.price,i=Object(a.useState)(1),r=Object(f.a)(i,2),s=r[0],o=r[1],u=j(),d=g((function(e){return e.language.value})),l=g((function(e){return e.shoppingCartItems}));return Object(O.jsxs)("div",{className:"products__product-card",children:[Object(O.jsx)("div",{className:"products__product-card-image-wrapper",children:Object(O.jsx)("img",{src:t,alt:c,className:"products__product-card-image"})}),Object(O.jsxs)("div",{className:"products__product-card-info-wrapper",children:[Object(O.jsxs)("div",{className:"products__product-card-name-price-wrapper",children:[Object(O.jsx)("h4",{className:"heading4",children:c}),Object(O.jsx)("span",{className:"products__product-card-price",children:"en"===d?"Price: ".concat(n.toFixed(2)," EUR"):"Cena: ".concat(n.toFixed(2)," EUR")})]}),Object(O.jsxs)("div",{className:"products__product-card-add-to-cart-wrapper",children:[Object(O.jsx)(k,{decreaseQuantity:function(){s>1&&o(s-1)},quantity:s,increaseQuantity:function(){o(s+1)}}),Object(O.jsx)(w,{title:"en"===d?"Add":"Pievienot",clickHandler:function(){u(U({productName:c,quantity:s,pricePerUnit:n,imgUrl:t})),l.some((function(e){return e.productName===c}))||u(S(l.length))},additionalClasses:"button--add-to-cart"})]})]})]})},T=[{productName:"Leica Disto D1",price:70,imgUrl:"./assets/images/disto/disto d1.jpg"},{productName:"Leica Disto D110",price:160,imgUrl:"./assets/images/disto/disto d110.jpg"},{productName:"Leica Disto D2",price:200,imgUrl:"./assets/images/disto/disto d2.jpg"},{productName:"Leica Disto X3",price:310,imgUrl:"./assets/images/disto/disto x3.jpg"},{productName:"Leica Disto X4",price:430,imgUrl:"./assets/images/disto/disto x4.jpg"},{productName:"Leica Disto D510",price:500,imgUrl:"./assets/images/disto/disto d510.jpg"},{productName:"Leica Disto D810",price:720,imgUrl:"./assets/images/disto/disto d810.jpg"},{productName:"Leica Disto S910",price:1530,imgUrl:"./assets/images/disto/disto s910.jpg"},{productName:"Leica Disto DST360",price:590,imgUrl:"./assets/images/disto/dst360.png"},{productName:"Leica Lino L2",price:240,imgUrl:"./assets/images/lino/lino l2.jpg"},{productName:"Leica Lino L2G",price:400,imgUrl:"./assets/images/lino/lino l2g.jpg"},{productName:"Leica Lino L2P5",price:390,imgUrl:"./assets/images/lino/lino l2p5.png"},{productName:"Leica Lino L2P5G",price:600,imgUrl:"./assets/images/lino/lino l2p5g.jpg"},{productName:"Leica Lino L6R",price:495,imgUrl:"./assets/images/lino/lino l6r.jpg"},{productName:"Leica Lino L6G",price:570,imgUrl:"./assets/images/lino/lino l6g.jpg"},{productName:"Leica Lino L4P1",price:600,imgUrl:"./assets/images/lino/lino l4p1.jpg"},{productName:"Leica Lino ML180",price:1350,imgUrl:"./assets/images/lino/lino ml180.jpg"},{productName:"Leica Disto 3D",price:5600,imgUrl:"./assets/images/disto/disto 3d.jpg"},{productName:"Leica BLK3D",price:4900,imgUrl:"./assets/images/blk/blk3d.png"},{productName:"Leica BLK360",price:15900,imgUrl:"./assets/images/blk/blk360.jpg"},{productName:"Leica BLK2GO",price:35e3,imgUrl:"./assets/images/blk/blk2go.jpg"}],G=T.length,B=Object(d.b)({name:"products",initialState:T.slice(0,9),reducers:{loadMore:function(e){return T.slice(0,e.length+3)}}}),K=B.actions.loadMore,H=B.reducer,M=function(){var e=g((function(e){return e.products})),t=g((function(e){return e.language.value})),c=j();return Object(O.jsxs)("section",{className:"products",children:[Object(O.jsx)("div",{className:"products__product-card-wrapper",children:e.map((function(e){var t=e.imgUrl,c=e.productName,a=e.price;return Object(O.jsx)(R,{imgUrl:t,productName:c,price:a},c)}))}),e.length<G&&Object(O.jsx)(w,{title:"en"===t?"Load more":"Iel\u0101d\u0113t v\u0113l",clickHandler:function(){c(K())},additionalClasses:"button--load-more"})]})},J=function(){var e=g((function(e){return e.language.value}));return Object(O.jsxs)("section",{className:"home",children:[Object(O.jsxs)("h1",{className:"heading1",children:["en"===e&&"Home","lv"===e&&"Produkti"]}),Object(O.jsx)(M,{})]})},X=(c(42),function(e){var t=e.productName,c=e.quantity,a=e.price,n=e.imgUrl,i=g((function(e){return e.language.value})),r=g((function(e){return e.shoppingCartItems})),s=j(),o=a.toFixed(2),u=(c*a).toFixed(2);return Object(O.jsxs)("div",{className:"shopping-cart__item-wrapper",children:[Object(O.jsx)("img",{src:n,alt:t,className:"shopping-cart__item-image"}),Object(O.jsx)("h4",{className:"heading4",children:t}),Object(O.jsxs)("div",{className:"shopping-cart__price-quantity-wrapper",children:[Object(O.jsx)("span",{children:"en"===i?"Price per unit: ".concat(o," EUR"):"Cena/gab.: ".concat(o," EUR")}),Object(O.jsxs)("span",{className:"shopping-cart__quantity-wrapper",children:["en"===i?"Quantity: ":"Skaits: ",Object(O.jsx)(k,{decreaseQuantity:function(){s(C(t))},quantity:c,increaseQuantity:function(){s(q(t))}})]}),Object(O.jsx)("span",{children:"en"===i?"Total: ".concat(u," EUR"):"Kop\u0101: ".concat(u," EUR")})]}),Object(O.jsx)(b.a,{icon:h.b,className:"shopping-cart__remove-item",onClick:function(){s(P(t)),s(E(r.length))}})]})}),z=function(){var e=g((function(e){return e.language.value})),t=g((function(e){return e.shoppingCartItems})),c=t.reduce((function(e,t){return e+t.quantity*t.pricePerUnit}),0).toFixed(2);return Object(O.jsxs)("section",{className:"shopping-cart",children:[Object(O.jsx)("h1",{className:"heading1",children:"en"===e?"Shopping Cart":"Pirkumu grozs"}),Object(O.jsx)("div",{className:"shopping-cart__list-wrapper",children:t.map((function(e){var t=e.productName,c=e.quantity,a=e.pricePerUnit,n=e.imgUrl;return Object(O.jsx)(X,{productName:t,quantity:c,price:a,imgUrl:n},t)}))}),Object(O.jsx)("span",{className:"shopping-cart__total-sum",children:"en"===e?"Total: ".concat(c," EUR"):"Kop\u0101: ".concat(c," EUR")})]})},A=function(){return Object(O.jsx)(o.a,{children:Object(O.jsx)("div",{className:"internet-shop",children:Object(O.jsxs)("div",{className:"internet-shop-wrapper",children:[Object(O.jsx)(x,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",element:Object(O.jsx)(J,{})}),Object(O.jsx)(u.a,{path:"/cart",element:Object(O.jsx)(z,{})})]})]})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))},W=Object(d.a)({reducer:{language:m,products:H,shoppingCartItems:D,shoppingCartIconProductCount:F}});r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(s.a,{store:W,children:Object(O.jsx)(o.b,{children:Object(O.jsx)(A,{})})})}),document.getElementById("root")),V()}},[[43,1,2]]]);
//# sourceMappingURL=main.226938fc.chunk.js.map